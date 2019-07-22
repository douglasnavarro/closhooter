(ns closhooter.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]))

;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defn user-input
  [event]
  (let [key event.code]
    (rf/dispatch [:update-ship-speed key])))

(defn run-physics
  []
  (rf/dispatch [:run-physics]))

(defonce game-clock (js/setInterval run-physics 16.7))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(defn- update-object-position
  [ship]
  (let [updated-x (+ (:vx ship) (:x ship))
        updated-y (+ (:vy ship) (:y ship))]
       (-> ship
           (assoc :x updated-x)
           (assoc :y updated-y))))

(defn- accel-ship-fn
  [key]
  (cond
    (= key "ArrowRight") (fn [ship] (update ship :vx #(+ % 0.1)))
    (= key "ArrowLeft")  (fn [ship] (update ship :vx #(- % 0.1)))
    (= key "ArrowDown")  (fn [ship] (update ship :vy #(+ % 0.1)))
    (= key "ArrowUp")    (fn [ship] (update ship :vy #(- % 0.1)))
    :else                (fn [ship] (do (println "Unrecognized key!" key) ship))))

(defn- update-obstacles-position
  [obstacles]
  (map update-object-position obstacles))

(rf/reg-event-db
  :initialize
  (fn [_ _]
    (do
     (js/document.addEventListener "keydown" user-input)
     {:ship {:vx 0 :x 50 :vy 0 :y 50}
      :obstacles [{:id (rand-int 100) :vx 0 :x 10 :vy 0.1 :y 20}
                  {:id (rand-int 100) :vx 0 :x 30 :vy 0.2 :y 20}
                  {:id (rand-int 100) :vx 0 :x 60 :vy 0.3 :y 20}]})))

(rf/reg-event-db
  :run-physics
  (fn [db [_ _]]
    (-> db
        (update :ship      update-object-position)
        (update :obstacles update-obstacles-position))))

(rf/reg-event-db
  :update-ship-speed
  (fn [db [_ key]]
    (let [ship (:ship db)
          move-fn (accel-ship-fn key)]
      (assoc db :ship (move-fn ship)))))

;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
  :ship-state
  (fn [db _]
    (:ship db)))

(rf/reg-sub
  :obstacles-state
  (fn [db _]
    (:obstacles db)))

;; -- Domino 5 - View Functions ----------------------------------------------


(defn render-ship
  "Update HTMl element for ship whenever ship state changes"
  []
  (let [ship @(rf/subscribe [:ship-state])
        left (str (:x ship) "%")
        top  (str (:y ship) "%")]
    [:div.ship {:style {:left left :top top}} "SHIP"]))

(defn render-obstacle
  []
  (fn [obstacle]
    [:div.ship {:style {:left (str (:x obstacle) "%") :top (str (:y obstacle) "%")}} "OBS"]))

(defn render-obstacles
  []
  (let [obstacles @(rf/subscribe [:obstacles-state])]
    [:div.obstacles
     (for [obstacle obstacles]
       ^{:key (:id obstacle)} [render-obstacle obstacle])]))

(defn ui
  []
  [:div.universe
   [render-ship]
   [render-obstacles]])

;; -- Entry Point -------------------------------------------------------------

(defn ^:export run
  []
  (rf/dispatch-sync [:initialize])     ;; puts a value into application state
  (reagent/render [ui]                 ;; mount the application's ui into '<div id="app" />'
                  (js/document.getElementById "app")))

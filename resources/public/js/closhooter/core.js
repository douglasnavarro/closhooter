// Compiled by ClojureScript 1.10.439 {}
goog.provide('closhooter.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
closhooter.core.user_input = (function closhooter$core$user_input(event){
var key = event.code;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-ship-speed","update-ship-speed",615654420),key], null));
});
closhooter.core.run_physics = (function closhooter$core$run_physics(){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run-physics","run-physics",-450804448)], null));
});
if((typeof closhooter !== 'undefined') && (typeof closhooter.core !== 'undefined') && (typeof closhooter.core.game_clock !== 'undefined')){
} else {
closhooter.core.game_clock = setInterval(closhooter.core.run_physics,16.7);
}
closhooter.core.update_ship_position = (function closhooter$core$update_ship_position(ship){
var updated_x = (new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(ship) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship));
var updated_y = (new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(ship) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"x","x",2099068185),updated_x),new cljs.core.Keyword(null,"y","y",-1757859776),updated_y);
});
closhooter.core.accel_ship_fn = (function closhooter$core$accel_ship_fn(key){
if(cljs.core._EQ_.call(null,key,"ArrowRight")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__22358_SHARP_){
return (p1__22358_SHARP_ + 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowLeft")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__22359_SHARP_){
return (p1__22359_SHARP_ - 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowDown")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__22360_SHARP_){
return (p1__22360_SHARP_ + 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowUp")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__22361_SHARP_){
return (p1__22361_SHARP_ - 0.1);
}));
});
} else {
return (function (ship){
cljs.core.println.call(null,"Unrecognized key!",key);

return ship;
});

}
}
}
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
document.addEventListener("keydown",closhooter.core.user_input);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"run-physics","run-physics",-450804448),(function (db,p__22362){
var vec__22363 = p__22362;
var _ = cljs.core.nth.call(null,vec__22363,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22363,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"ship","ship",197863473),closhooter.core.update_ship_position);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-ship-speed","update-ship-speed",615654420),(function (db,p__22366){
var vec__22367 = p__22366;
var _ = cljs.core.nth.call(null,vec__22367,(0),null);
var key = cljs.core.nth.call(null,vec__22367,(1),null);
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(db);
var move_fn = closhooter.core.accel_ship_fn.call(null,key);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ship","ship",197863473),move_fn.call(null,ship));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ship-state","ship-state",-459561098),(function (db,_){
return new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(db);
}));
/**
 * Update HTMl element for ship whenever ship state changes
 */
closhooter.core.render_ship = (function closhooter$core$render_ship(){
var ship = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship-state","ship-state",-459561098)], null)));
var left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship)),"%"].join('');
var top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)),"%"].join('');
cljs.core.println.call(null,ship);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ship","div.ship",1803811433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top], null)], null),"SHIP"], null);
});
closhooter.core.ui = (function closhooter$core$ui(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.universe","div.universe",-498619834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.render_ship], null)], null);
});
closhooter.core.run = (function closhooter$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('closhooter.core.run', closhooter.core.run);

//# sourceMappingURL=core.js.map?rel=1563735152083

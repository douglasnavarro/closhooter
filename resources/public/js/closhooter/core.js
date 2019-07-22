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
closhooter.core.update_object_position = (function closhooter$core$update_object_position(ship){
var updated_x = (new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(ship) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship));
var updated_y = (new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(ship) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"x","x",2099068185),updated_x),new cljs.core.Keyword(null,"y","y",-1757859776),updated_y);
});
closhooter.core.accel_ship_fn = (function closhooter$core$accel_ship_fn(key){
if(cljs.core._EQ_.call(null,key,"ArrowRight")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__30313_SHARP_){
return (p1__30313_SHARP_ + 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowLeft")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__30314_SHARP_){
return (p1__30314_SHARP_ - 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowDown")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__30315_SHARP_){
return (p1__30315_SHARP_ + 0.1);
}));
});
} else {
if(cljs.core._EQ_.call(null,key,"ArrowUp")){
return (function (ship){
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__30316_SHARP_){
return (p1__30316_SHARP_ - 0.1);
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
closhooter.core.update_obstacles_position = (function closhooter$core$update_obstacles_position(obstacles){
return cljs.core.map.call(null,closhooter.core.update_object_position,obstacles);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
document.addEventListener("keydown",closhooter.core.user_input);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.Keyword(null,"obstacles","obstacles",1370670211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"vy","vy",-2018509997),0.1,new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"x","x",2099068185),(30),new cljs.core.Keyword(null,"vy","vy",-2018509997),0.2,new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"x","x",2099068185),(60),new cljs.core.Keyword(null,"vy","vy",-2018509997),0.3,new cljs.core.Keyword(null,"y","y",-1757859776),(20)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"run-physics","run-physics",-450804448),(function (db,p__30317){
var vec__30318 = p__30317;
var _ = cljs.core.nth.call(null,vec__30318,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30318,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"ship","ship",197863473),closhooter.core.update_object_position),new cljs.core.Keyword(null,"obstacles","obstacles",1370670211),closhooter.core.update_obstacles_position);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-ship-speed","update-ship-speed",615654420),(function (db,p__30321){
var vec__30322 = p__30321;
var _ = cljs.core.nth.call(null,vec__30322,(0),null);
var key = cljs.core.nth.call(null,vec__30322,(1),null);
var ship = new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(db);
var move_fn = closhooter.core.accel_ship_fn.call(null,key);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ship","ship",197863473),move_fn.call(null,ship));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"ship-state","ship-state",-459561098),(function (db,_){
return new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"obstacles-state","obstacles-state",-2001845706),(function (db,_){
return new cljs.core.Keyword(null,"obstacles","obstacles",1370670211).cljs$core$IFn$_invoke$arity$1(db);
}));
/**
 * Update HTMl element for ship whenever ship state changes
 */
closhooter.core.render_ship = (function closhooter$core$render_ship(){
var ship = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship-state","ship-state",-459561098)], null)));
var left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ship)),"%"].join('');
var top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ship)),"%"].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ship","div.ship",1803811433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top], null)], null),"SHIP"], null);
});
closhooter.core.render_obstacle = (function closhooter$core$render_obstacle(){
return (function (obstacle){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ship","div.ship",1803811433),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(obstacle)),"%"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(obstacle)),"%"].join('')], null)], null),"OBS"], null);
});
});
closhooter.core.render_obstacles = (function closhooter$core$render_obstacles(){
var obstacles = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obstacles-state","obstacles-state",-2001845706)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.obstacles","div.obstacles",-69398887),(function (){var iter__4434__auto__ = ((function (obstacles){
return (function closhooter$core$render_obstacles_$_iter__30325(s__30326){
return (new cljs.core.LazySeq(null,((function (obstacles){
return (function (){
var s__30326__$1 = s__30326;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30326__$1);
if(temp__5720__auto__){
var s__30326__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30326__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__30326__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__30328 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__30327 = (0);
while(true){
if((i__30327 < size__4433__auto__)){
var obstacle = cljs.core._nth.call(null,c__4432__auto__,i__30327);
cljs.core.chunk_append.call(null,b__30328,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.render_obstacle,obstacle], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obstacle)], null)));

var G__30329 = (i__30327 + (1));
i__30327 = G__30329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30328),closhooter$core$render_obstacles_$_iter__30325.call(null,cljs.core.chunk_rest.call(null,s__30326__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30328),null);
}
} else {
var obstacle = cljs.core.first.call(null,s__30326__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.render_obstacle,obstacle], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obstacle)], null)),closhooter$core$render_obstacles_$_iter__30325.call(null,cljs.core.rest.call(null,s__30326__$2)));
}
} else {
return null;
}
break;
}
});})(obstacles))
,null,null));
});})(obstacles))
;
return iter__4434__auto__.call(null,obstacles);
})()], null);
});
closhooter.core.ui = (function closhooter$core$ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.universe","div.universe",-498619834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.render_ship], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.render_obstacles], null)], null);
});
closhooter.core.run = (function closhooter$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [closhooter.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('closhooter.core.run', closhooter.core.run);

//# sourceMappingURL=core.js.map?rel=1563759820974

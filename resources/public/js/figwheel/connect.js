// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29712__delegate = function (x__29696__auto__){
if(cljs.core.truth_(closhooter.core.run)){
return cljs.core.apply.call(null,closhooter.core.run,x__29696__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("closhooter.core/run"),"' is missing"].join(''));
}
};
var G__29712 = function (var_args){
var x__29696__auto__ = null;
if (arguments.length > 0) {
var G__29713__i = 0, G__29713__a = new Array(arguments.length -  0);
while (G__29713__i < G__29713__a.length) {G__29713__a[G__29713__i] = arguments[G__29713__i + 0]; ++G__29713__i;}
  x__29696__auto__ = new cljs.core.IndexedSeq(G__29713__a,0,null);
} 
return G__29712__delegate.call(this,x__29696__auto__);};
G__29712.cljs$lang$maxFixedArity = 0;
G__29712.cljs$lang$applyTo = (function (arglist__29714){
var x__29696__auto__ = cljs.core.seq(arglist__29714);
return G__29712__delegate(x__29696__auto__);
});
G__29712.cljs$core$IFn$_invoke$arity$variadic = G__29712__delegate;
return G__29712;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1563744778218

// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__20904__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20905__i = 0, G__20905__a = new Array(arguments.length -  0);
while (G__20905__i < G__20905__a.length) {G__20905__a[G__20905__i] = arguments[G__20905__i + 0]; ++G__20905__i;}
  args = new cljs.core.IndexedSeq(G__20905__a,0,null);
} 
return G__20904__delegate.call(this,args);};
G__20904.cljs$lang$maxFixedArity = 0;
G__20904.cljs$lang$applyTo = (function (arglist__20906){
var args = cljs.core.seq(arglist__20906);
return G__20904__delegate(args);
});
G__20904.cljs$core$IFn$_invoke$arity$variadic = G__20904__delegate;
return G__20904;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20907__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20908__i = 0, G__20908__a = new Array(arguments.length -  0);
while (G__20908__i < G__20908__a.length) {G__20908__a[G__20908__i] = arguments[G__20908__i + 0]; ++G__20908__i;}
  args = new cljs.core.IndexedSeq(G__20908__a,0,null);
} 
return G__20907__delegate.call(this,args);};
G__20907.cljs$lang$maxFixedArity = 0;
G__20907.cljs$lang$applyTo = (function (arglist__20909){
var args = cljs.core.seq(arglist__20909);
return G__20907__delegate(args);
});
G__20907.cljs$core$IFn$_invoke$arity$variadic = G__20907__delegate;
return G__20907;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563744769092

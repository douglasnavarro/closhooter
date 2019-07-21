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
var G__20905__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20906__i = 0, G__20906__a = new Array(arguments.length -  0);
while (G__20906__i < G__20906__a.length) {G__20906__a[G__20906__i] = arguments[G__20906__i + 0]; ++G__20906__i;}
  args = new cljs.core.IndexedSeq(G__20906__a,0,null);
} 
return G__20905__delegate.call(this,args);};
G__20905.cljs$lang$maxFixedArity = 0;
G__20905.cljs$lang$applyTo = (function (arglist__20907){
var args = cljs.core.seq(arglist__20907);
return G__20905__delegate(args);
});
G__20905.cljs$core$IFn$_invoke$arity$variadic = G__20905__delegate;
return G__20905;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__20908__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__20908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20909__i = 0, G__20909__a = new Array(arguments.length -  0);
while (G__20909__i < G__20909__a.length) {G__20909__a[G__20909__i] = arguments[G__20909__i + 0]; ++G__20909__i;}
  args = new cljs.core.IndexedSeq(G__20909__a,0,null);
} 
return G__20908__delegate.call(this,args);};
G__20908.cljs$lang$maxFixedArity = 0;
G__20908.cljs$lang$applyTo = (function (arglist__20910){
var args = cljs.core.seq(arglist__20910);
return G__20908__delegate(args);
});
G__20908.cljs$core$IFn$_invoke$arity$variadic = G__20908__delegate;
return G__20908;
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

//# sourceMappingURL=debug.js.map?rel=1563735149723

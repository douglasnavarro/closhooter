// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__21894){
var map__21895 = p__21894;
var map__21895__$1 = (((((!((map__21895 == null))))?(((((map__21895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21895):map__21895);
var operation = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__21895__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__21897_21909 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__21898_21910 = null;
var count__21899_21911 = (0);
var i__21900_21912 = (0);
while(true){
if((i__21900_21912 < count__21899_21911)){
var vec__21901_21913 = cljs.core._nth.call(null,chunk__21898_21910,i__21900_21912);
var k_21914 = cljs.core.nth.call(null,vec__21901_21913,(0),null);
var cb_21915 = cljs.core.nth.call(null,vec__21901_21913,(1),null);
try{cb_21915.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21904){var e_21916 = e21904;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21914,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21916);
}

var G__21917 = seq__21897_21909;
var G__21918 = chunk__21898_21910;
var G__21919 = count__21899_21911;
var G__21920 = (i__21900_21912 + (1));
seq__21897_21909 = G__21917;
chunk__21898_21910 = G__21918;
count__21899_21911 = G__21919;
i__21900_21912 = G__21920;
continue;
} else {
var temp__5720__auto___21921 = cljs.core.seq.call(null,seq__21897_21909);
if(temp__5720__auto___21921){
var seq__21897_21922__$1 = temp__5720__auto___21921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21897_21922__$1)){
var c__4461__auto___21923 = cljs.core.chunk_first.call(null,seq__21897_21922__$1);
var G__21924 = cljs.core.chunk_rest.call(null,seq__21897_21922__$1);
var G__21925 = c__4461__auto___21923;
var G__21926 = cljs.core.count.call(null,c__4461__auto___21923);
var G__21927 = (0);
seq__21897_21909 = G__21924;
chunk__21898_21910 = G__21925;
count__21899_21911 = G__21926;
i__21900_21912 = G__21927;
continue;
} else {
var vec__21905_21928 = cljs.core.first.call(null,seq__21897_21922__$1);
var k_21929 = cljs.core.nth.call(null,vec__21905_21928,(0),null);
var cb_21930 = cljs.core.nth.call(null,vec__21905_21928,(1),null);
try{cb_21930.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e21908){var e_21931 = e21908;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_21929,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_21931);
}

var G__21932 = cljs.core.next.call(null,seq__21897_21922__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__21897_21909 = G__21932;
chunk__21898_21910 = G__21933;
count__21899_21911 = G__21934;
i__21900_21912 = G__21935;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1563735151328

// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22035 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22036 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22036;

try{try{var seq__22037 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22038 = null;
var count__22039 = (0);
var i__22040 = (0);
while(true){
if((i__22040 < count__22039)){
var vec__22041 = cljs.core._nth.call(null,chunk__22038,i__22040);
var effect_key = cljs.core.nth.call(null,vec__22041,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22041,(1),null);
var temp__5718__auto___22057 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22057)){
var effect_fn_22058 = temp__5718__auto___22057;
effect_fn_22058.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22059 = seq__22037;
var G__22060 = chunk__22038;
var G__22061 = count__22039;
var G__22062 = (i__22040 + (1));
seq__22037 = G__22059;
chunk__22038 = G__22060;
count__22039 = G__22061;
i__22040 = G__22062;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22037);
if(temp__5720__auto__){
var seq__22037__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22037__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22037__$1);
var G__22063 = cljs.core.chunk_rest.call(null,seq__22037__$1);
var G__22064 = c__4461__auto__;
var G__22065 = cljs.core.count.call(null,c__4461__auto__);
var G__22066 = (0);
seq__22037 = G__22063;
chunk__22038 = G__22064;
count__22039 = G__22065;
i__22040 = G__22066;
continue;
} else {
var vec__22044 = cljs.core.first.call(null,seq__22037__$1);
var effect_key = cljs.core.nth.call(null,vec__22044,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22044,(1),null);
var temp__5718__auto___22067 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22067)){
var effect_fn_22068 = temp__5718__auto___22067;
effect_fn_22068.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22069 = cljs.core.next.call(null,seq__22037__$1);
var G__22070 = null;
var G__22071 = (0);
var G__22072 = (0);
seq__22037 = G__22069;
chunk__22038 = G__22070;
count__22039 = G__22071;
i__22040 = G__22072;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21872__auto___22073 = re_frame.interop.now.call(null);
var duration__21873__auto___22074 = (end__21872__auto___22073 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21873__auto___22074,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21872__auto___22073);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22035;
}} else {
var seq__22047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22048 = null;
var count__22049 = (0);
var i__22050 = (0);
while(true){
if((i__22050 < count__22049)){
var vec__22051 = cljs.core._nth.call(null,chunk__22048,i__22050);
var effect_key = cljs.core.nth.call(null,vec__22051,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22051,(1),null);
var temp__5718__auto___22075 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22075)){
var effect_fn_22076 = temp__5718__auto___22075;
effect_fn_22076.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22077 = seq__22047;
var G__22078 = chunk__22048;
var G__22079 = count__22049;
var G__22080 = (i__22050 + (1));
seq__22047 = G__22077;
chunk__22048 = G__22078;
count__22049 = G__22079;
i__22050 = G__22080;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22047);
if(temp__5720__auto__){
var seq__22047__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22047__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22047__$1);
var G__22081 = cljs.core.chunk_rest.call(null,seq__22047__$1);
var G__22082 = c__4461__auto__;
var G__22083 = cljs.core.count.call(null,c__4461__auto__);
var G__22084 = (0);
seq__22047 = G__22081;
chunk__22048 = G__22082;
count__22049 = G__22083;
i__22050 = G__22084;
continue;
} else {
var vec__22054 = cljs.core.first.call(null,seq__22047__$1);
var effect_key = cljs.core.nth.call(null,vec__22054,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22054,(1),null);
var temp__5718__auto___22085 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22085)){
var effect_fn_22086 = temp__5718__auto___22085;
effect_fn_22086.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22087 = cljs.core.next.call(null,seq__22047__$1);
var G__22088 = null;
var G__22089 = (0);
var G__22090 = (0);
seq__22047 = G__22087;
chunk__22048 = G__22088;
count__22049 = G__22089;
i__22050 = G__22090;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22091 = cljs.core.seq.call(null,value);
var chunk__22092 = null;
var count__22093 = (0);
var i__22094 = (0);
while(true){
if((i__22094 < count__22093)){
var map__22095 = cljs.core._nth.call(null,chunk__22092,i__22094);
var map__22095__$1 = (((((!((map__22095 == null))))?(((((map__22095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22095):map__22095);
var effect = map__22095__$1;
var ms = cljs.core.get.call(null,map__22095__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22095__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22091,chunk__22092,count__22093,i__22094,map__22095,map__22095__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22091,chunk__22092,count__22093,i__22094,map__22095,map__22095__$1,effect,ms,dispatch))
,ms);
}


var G__22099 = seq__22091;
var G__22100 = chunk__22092;
var G__22101 = count__22093;
var G__22102 = (i__22094 + (1));
seq__22091 = G__22099;
chunk__22092 = G__22100;
count__22093 = G__22101;
i__22094 = G__22102;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22091);
if(temp__5720__auto__){
var seq__22091__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22091__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22091__$1);
var G__22103 = cljs.core.chunk_rest.call(null,seq__22091__$1);
var G__22104 = c__4461__auto__;
var G__22105 = cljs.core.count.call(null,c__4461__auto__);
var G__22106 = (0);
seq__22091 = G__22103;
chunk__22092 = G__22104;
count__22093 = G__22105;
i__22094 = G__22106;
continue;
} else {
var map__22097 = cljs.core.first.call(null,seq__22091__$1);
var map__22097__$1 = (((((!((map__22097 == null))))?(((((map__22097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22097):map__22097);
var effect = map__22097__$1;
var ms = cljs.core.get.call(null,map__22097__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22097__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22091,chunk__22092,count__22093,i__22094,map__22097,map__22097__$1,effect,ms,dispatch,seq__22091__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22091,chunk__22092,count__22093,i__22094,map__22097,map__22097__$1,effect,ms,dispatch,seq__22091__$1,temp__5720__auto__))
,ms);
}


var G__22107 = cljs.core.next.call(null,seq__22091__$1);
var G__22108 = null;
var G__22109 = (0);
var G__22110 = (0);
seq__22091 = G__22107;
chunk__22092 = G__22108;
count__22093 = G__22109;
i__22094 = G__22110;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22111 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22112 = null;
var count__22113 = (0);
var i__22114 = (0);
while(true){
if((i__22114 < count__22113)){
var event = cljs.core._nth.call(null,chunk__22112,i__22114);
re_frame.router.dispatch.call(null,event);


var G__22115 = seq__22111;
var G__22116 = chunk__22112;
var G__22117 = count__22113;
var G__22118 = (i__22114 + (1));
seq__22111 = G__22115;
chunk__22112 = G__22116;
count__22113 = G__22117;
i__22114 = G__22118;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22111);
if(temp__5720__auto__){
var seq__22111__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22111__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22111__$1);
var G__22119 = cljs.core.chunk_rest.call(null,seq__22111__$1);
var G__22120 = c__4461__auto__;
var G__22121 = cljs.core.count.call(null,c__4461__auto__);
var G__22122 = (0);
seq__22111 = G__22119;
chunk__22112 = G__22120;
count__22113 = G__22121;
i__22114 = G__22122;
continue;
} else {
var event = cljs.core.first.call(null,seq__22111__$1);
re_frame.router.dispatch.call(null,event);


var G__22123 = cljs.core.next.call(null,seq__22111__$1);
var G__22124 = null;
var G__22125 = (0);
var G__22126 = (0);
seq__22111 = G__22123;
chunk__22112 = G__22124;
count__22113 = G__22125;
i__22114 = G__22126;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22127 = cljs.core.seq.call(null,value);
var chunk__22128 = null;
var count__22129 = (0);
var i__22130 = (0);
while(true){
if((i__22130 < count__22129)){
var event = cljs.core._nth.call(null,chunk__22128,i__22130);
clear_event.call(null,event);


var G__22131 = seq__22127;
var G__22132 = chunk__22128;
var G__22133 = count__22129;
var G__22134 = (i__22130 + (1));
seq__22127 = G__22131;
chunk__22128 = G__22132;
count__22129 = G__22133;
i__22130 = G__22134;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22127);
if(temp__5720__auto__){
var seq__22127__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22127__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22127__$1);
var G__22135 = cljs.core.chunk_rest.call(null,seq__22127__$1);
var G__22136 = c__4461__auto__;
var G__22137 = cljs.core.count.call(null,c__4461__auto__);
var G__22138 = (0);
seq__22127 = G__22135;
chunk__22128 = G__22136;
count__22129 = G__22137;
i__22130 = G__22138;
continue;
} else {
var event = cljs.core.first.call(null,seq__22127__$1);
clear_event.call(null,event);


var G__22139 = cljs.core.next.call(null,seq__22127__$1);
var G__22140 = null;
var G__22141 = (0);
var G__22142 = (0);
seq__22127 = G__22139;
chunk__22128 = G__22140;
count__22129 = G__22141;
i__22130 = G__22142;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1563735151682

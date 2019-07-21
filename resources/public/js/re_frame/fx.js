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
var _STAR_current_trace_STAR__orig_val__22034 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22035 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22035;

try{try{var seq__22036 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22037 = null;
var count__22038 = (0);
var i__22039 = (0);
while(true){
if((i__22039 < count__22038)){
var vec__22040 = cljs.core._nth.call(null,chunk__22037,i__22039);
var effect_key = cljs.core.nth.call(null,vec__22040,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22040,(1),null);
var temp__5718__auto___22056 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22056)){
var effect_fn_22057 = temp__5718__auto___22056;
effect_fn_22057.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22058 = seq__22036;
var G__22059 = chunk__22037;
var G__22060 = count__22038;
var G__22061 = (i__22039 + (1));
seq__22036 = G__22058;
chunk__22037 = G__22059;
count__22038 = G__22060;
i__22039 = G__22061;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22036);
if(temp__5720__auto__){
var seq__22036__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22036__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22036__$1);
var G__22062 = cljs.core.chunk_rest.call(null,seq__22036__$1);
var G__22063 = c__4461__auto__;
var G__22064 = cljs.core.count.call(null,c__4461__auto__);
var G__22065 = (0);
seq__22036 = G__22062;
chunk__22037 = G__22063;
count__22038 = G__22064;
i__22039 = G__22065;
continue;
} else {
var vec__22043 = cljs.core.first.call(null,seq__22036__$1);
var effect_key = cljs.core.nth.call(null,vec__22043,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22043,(1),null);
var temp__5718__auto___22066 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22066)){
var effect_fn_22067 = temp__5718__auto___22066;
effect_fn_22067.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22068 = cljs.core.next.call(null,seq__22036__$1);
var G__22069 = null;
var G__22070 = (0);
var G__22071 = (0);
seq__22036 = G__22068;
chunk__22037 = G__22069;
count__22038 = G__22070;
i__22039 = G__22071;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21871__auto___22072 = re_frame.interop.now.call(null);
var duration__21872__auto___22073 = (end__21871__auto___22072 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21872__auto___22073,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21871__auto___22072);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22034;
}} else {
var seq__22046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22047 = null;
var count__22048 = (0);
var i__22049 = (0);
while(true){
if((i__22049 < count__22048)){
var vec__22050 = cljs.core._nth.call(null,chunk__22047,i__22049);
var effect_key = cljs.core.nth.call(null,vec__22050,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22050,(1),null);
var temp__5718__auto___22074 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22074)){
var effect_fn_22075 = temp__5718__auto___22074;
effect_fn_22075.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22076 = seq__22046;
var G__22077 = chunk__22047;
var G__22078 = count__22048;
var G__22079 = (i__22049 + (1));
seq__22046 = G__22076;
chunk__22047 = G__22077;
count__22048 = G__22078;
i__22049 = G__22079;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22046);
if(temp__5720__auto__){
var seq__22046__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22046__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22046__$1);
var G__22080 = cljs.core.chunk_rest.call(null,seq__22046__$1);
var G__22081 = c__4461__auto__;
var G__22082 = cljs.core.count.call(null,c__4461__auto__);
var G__22083 = (0);
seq__22046 = G__22080;
chunk__22047 = G__22081;
count__22048 = G__22082;
i__22049 = G__22083;
continue;
} else {
var vec__22053 = cljs.core.first.call(null,seq__22046__$1);
var effect_key = cljs.core.nth.call(null,vec__22053,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22053,(1),null);
var temp__5718__auto___22084 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22084)){
var effect_fn_22085 = temp__5718__auto___22084;
effect_fn_22085.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22086 = cljs.core.next.call(null,seq__22046__$1);
var G__22087 = null;
var G__22088 = (0);
var G__22089 = (0);
seq__22046 = G__22086;
chunk__22047 = G__22087;
count__22048 = G__22088;
i__22049 = G__22089;
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
var seq__22090 = cljs.core.seq.call(null,value);
var chunk__22091 = null;
var count__22092 = (0);
var i__22093 = (0);
while(true){
if((i__22093 < count__22092)){
var map__22094 = cljs.core._nth.call(null,chunk__22091,i__22093);
var map__22094__$1 = (((((!((map__22094 == null))))?(((((map__22094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22094):map__22094);
var effect = map__22094__$1;
var ms = cljs.core.get.call(null,map__22094__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22094__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22090,chunk__22091,count__22092,i__22093,map__22094,map__22094__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22090,chunk__22091,count__22092,i__22093,map__22094,map__22094__$1,effect,ms,dispatch))
,ms);
}


var G__22098 = seq__22090;
var G__22099 = chunk__22091;
var G__22100 = count__22092;
var G__22101 = (i__22093 + (1));
seq__22090 = G__22098;
chunk__22091 = G__22099;
count__22092 = G__22100;
i__22093 = G__22101;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22090);
if(temp__5720__auto__){
var seq__22090__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22090__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22090__$1);
var G__22102 = cljs.core.chunk_rest.call(null,seq__22090__$1);
var G__22103 = c__4461__auto__;
var G__22104 = cljs.core.count.call(null,c__4461__auto__);
var G__22105 = (0);
seq__22090 = G__22102;
chunk__22091 = G__22103;
count__22092 = G__22104;
i__22093 = G__22105;
continue;
} else {
var map__22096 = cljs.core.first.call(null,seq__22090__$1);
var map__22096__$1 = (((((!((map__22096 == null))))?(((((map__22096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22096):map__22096);
var effect = map__22096__$1;
var ms = cljs.core.get.call(null,map__22096__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22096__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22090,chunk__22091,count__22092,i__22093,map__22096,map__22096__$1,effect,ms,dispatch,seq__22090__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22090,chunk__22091,count__22092,i__22093,map__22096,map__22096__$1,effect,ms,dispatch,seq__22090__$1,temp__5720__auto__))
,ms);
}


var G__22106 = cljs.core.next.call(null,seq__22090__$1);
var G__22107 = null;
var G__22108 = (0);
var G__22109 = (0);
seq__22090 = G__22106;
chunk__22091 = G__22107;
count__22092 = G__22108;
i__22093 = G__22109;
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
var seq__22110 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22111 = null;
var count__22112 = (0);
var i__22113 = (0);
while(true){
if((i__22113 < count__22112)){
var event = cljs.core._nth.call(null,chunk__22111,i__22113);
re_frame.router.dispatch.call(null,event);


var G__22114 = seq__22110;
var G__22115 = chunk__22111;
var G__22116 = count__22112;
var G__22117 = (i__22113 + (1));
seq__22110 = G__22114;
chunk__22111 = G__22115;
count__22112 = G__22116;
i__22113 = G__22117;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22110);
if(temp__5720__auto__){
var seq__22110__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22110__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22110__$1);
var G__22118 = cljs.core.chunk_rest.call(null,seq__22110__$1);
var G__22119 = c__4461__auto__;
var G__22120 = cljs.core.count.call(null,c__4461__auto__);
var G__22121 = (0);
seq__22110 = G__22118;
chunk__22111 = G__22119;
count__22112 = G__22120;
i__22113 = G__22121;
continue;
} else {
var event = cljs.core.first.call(null,seq__22110__$1);
re_frame.router.dispatch.call(null,event);


var G__22122 = cljs.core.next.call(null,seq__22110__$1);
var G__22123 = null;
var G__22124 = (0);
var G__22125 = (0);
seq__22110 = G__22122;
chunk__22111 = G__22123;
count__22112 = G__22124;
i__22113 = G__22125;
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
var seq__22126 = cljs.core.seq.call(null,value);
var chunk__22127 = null;
var count__22128 = (0);
var i__22129 = (0);
while(true){
if((i__22129 < count__22128)){
var event = cljs.core._nth.call(null,chunk__22127,i__22129);
clear_event.call(null,event);


var G__22130 = seq__22126;
var G__22131 = chunk__22127;
var G__22132 = count__22128;
var G__22133 = (i__22129 + (1));
seq__22126 = G__22130;
chunk__22127 = G__22131;
count__22128 = G__22132;
i__22129 = G__22133;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22126);
if(temp__5720__auto__){
var seq__22126__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22126__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__22126__$1);
var G__22134 = cljs.core.chunk_rest.call(null,seq__22126__$1);
var G__22135 = c__4461__auto__;
var G__22136 = cljs.core.count.call(null,c__4461__auto__);
var G__22137 = (0);
seq__22126 = G__22134;
chunk__22127 = G__22135;
count__22128 = G__22136;
i__22129 = G__22137;
continue;
} else {
var event = cljs.core.first.call(null,seq__22126__$1);
clear_event.call(null,event);


var G__22138 = cljs.core.next.call(null,seq__22126__$1);
var G__22139 = null;
var G__22140 = (0);
var G__22141 = (0);
seq__22126 = G__22138;
chunk__22127 = G__22139;
count__22128 = G__22140;
i__22129 = G__22141;
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

//# sourceMappingURL=fx.js.map?rel=1563744770982

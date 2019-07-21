// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29221){if((e29221 instanceof Error)){
var e = e29221;
return "Error: Unable to stringify";
} else {
throw e29221;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29224 = arguments.length;
switch (G__29224) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29222_SHARP_){
if(typeof p1__29222_SHARP_ === 'string'){
return p1__29222_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29222_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29227 = arguments.length;
var i__4642__auto___29228 = (0);
while(true){
if((i__4642__auto___29228 < len__4641__auto___29227)){
args__4647__auto__.push((arguments[i__4642__auto___29228]));

var G__29229 = (i__4642__auto___29228 + (1));
i__4642__auto___29228 = G__29229;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29226){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29226));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29231 = arguments.length;
var i__4642__auto___29232 = (0);
while(true){
if((i__4642__auto___29232 < len__4641__auto___29231)){
args__4647__auto__.push((arguments[i__4642__auto___29232]));

var G__29233 = (i__4642__auto___29232 + (1));
i__4642__auto___29232 = G__29233;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29230){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29230));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29234){
var map__29235 = p__29234;
var map__29235__$1 = (((((!((map__29235 == null))))?(((((map__29235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29235):map__29235);
var message = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29235__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24120__auto___29314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___29314,ch){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___29314,ch){
return (function (state_29286){
var state_val_29287 = (state_29286[(1)]);
if((state_val_29287 === (7))){
var inst_29282 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29288_29315 = state_29286__$1;
(statearr_29288_29315[(2)] = inst_29282);

(statearr_29288_29315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (1))){
var state_29286__$1 = state_29286;
var statearr_29289_29316 = state_29286__$1;
(statearr_29289_29316[(2)] = null);

(statearr_29289_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (4))){
var inst_29239 = (state_29286[(7)]);
var inst_29239__$1 = (state_29286[(2)]);
var state_29286__$1 = (function (){var statearr_29290 = state_29286;
(statearr_29290[(7)] = inst_29239__$1);

return statearr_29290;
})();
if(cljs.core.truth_(inst_29239__$1)){
var statearr_29291_29317 = state_29286__$1;
(statearr_29291_29317[(1)] = (5));

} else {
var statearr_29292_29318 = state_29286__$1;
(statearr_29292_29318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (15))){
var inst_29246 = (state_29286[(8)]);
var inst_29261 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29246);
var inst_29262 = cljs.core.first.call(null,inst_29261);
var inst_29263 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29262);
var inst_29264 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29263)].join('');
var inst_29265 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29264);
var state_29286__$1 = state_29286;
var statearr_29293_29319 = state_29286__$1;
(statearr_29293_29319[(2)] = inst_29265);

(statearr_29293_29319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (13))){
var inst_29270 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29294_29320 = state_29286__$1;
(statearr_29294_29320[(2)] = inst_29270);

(statearr_29294_29320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (6))){
var state_29286__$1 = state_29286;
var statearr_29295_29321 = state_29286__$1;
(statearr_29295_29321[(2)] = null);

(statearr_29295_29321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (17))){
var inst_29268 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29296_29322 = state_29286__$1;
(statearr_29296_29322[(2)] = inst_29268);

(statearr_29296_29322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (3))){
var inst_29284 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29286__$1,inst_29284);
} else {
if((state_val_29287 === (12))){
var inst_29245 = (state_29286[(9)]);
var inst_29259 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29245,opts);
var state_29286__$1 = state_29286;
if(inst_29259){
var statearr_29297_29323 = state_29286__$1;
(statearr_29297_29323[(1)] = (15));

} else {
var statearr_29298_29324 = state_29286__$1;
(statearr_29298_29324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (2))){
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(4),ch);
} else {
if((state_val_29287 === (11))){
var inst_29246 = (state_29286[(8)]);
var inst_29251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29252 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29246);
var inst_29253 = cljs.core.async.timeout.call(null,(1000));
var inst_29254 = [inst_29252,inst_29253];
var inst_29255 = (new cljs.core.PersistentVector(null,2,(5),inst_29251,inst_29254,null));
var state_29286__$1 = state_29286;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29286__$1,(14),inst_29255);
} else {
if((state_val_29287 === (9))){
var inst_29246 = (state_29286[(8)]);
var inst_29272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29273 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29246);
var inst_29274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29273);
var inst_29275 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29274)].join('');
var inst_29276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29275);
var state_29286__$1 = (function (){var statearr_29299 = state_29286;
(statearr_29299[(10)] = inst_29272);

return statearr_29299;
})();
var statearr_29300_29325 = state_29286__$1;
(statearr_29300_29325[(2)] = inst_29276);

(statearr_29300_29325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (5))){
var inst_29239 = (state_29286[(7)]);
var inst_29241 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29242 = (new cljs.core.PersistentArrayMap(null,2,inst_29241,null));
var inst_29243 = (new cljs.core.PersistentHashSet(null,inst_29242,null));
var inst_29244 = figwheel.client.focus_msgs.call(null,inst_29243,inst_29239);
var inst_29245 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29244);
var inst_29246 = cljs.core.first.call(null,inst_29244);
var inst_29247 = figwheel.client.autoload_QMARK_.call(null);
var state_29286__$1 = (function (){var statearr_29301 = state_29286;
(statearr_29301[(8)] = inst_29246);

(statearr_29301[(9)] = inst_29245);

return statearr_29301;
})();
if(cljs.core.truth_(inst_29247)){
var statearr_29302_29326 = state_29286__$1;
(statearr_29302_29326[(1)] = (8));

} else {
var statearr_29303_29327 = state_29286__$1;
(statearr_29303_29327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (14))){
var inst_29257 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29304_29328 = state_29286__$1;
(statearr_29304_29328[(2)] = inst_29257);

(statearr_29304_29328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (16))){
var state_29286__$1 = state_29286;
var statearr_29305_29329 = state_29286__$1;
(statearr_29305_29329[(2)] = null);

(statearr_29305_29329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (10))){
var inst_29278 = (state_29286[(2)]);
var state_29286__$1 = (function (){var statearr_29306 = state_29286;
(statearr_29306[(11)] = inst_29278);

return statearr_29306;
})();
var statearr_29307_29330 = state_29286__$1;
(statearr_29307_29330[(2)] = null);

(statearr_29307_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (8))){
var inst_29245 = (state_29286[(9)]);
var inst_29249 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29245,opts);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29249)){
var statearr_29308_29331 = state_29286__$1;
(statearr_29308_29331[(1)] = (11));

} else {
var statearr_29309_29332 = state_29286__$1;
(statearr_29309_29332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24120__auto___29314,ch))
;
return ((function (switch__24025__auto__,c__24120__auto___29314,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____0 = (function (){
var statearr_29310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29310[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__);

(statearr_29310[(1)] = (1));

return statearr_29310;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____1 = (function (state_29286){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_29286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e29311){if((e29311 instanceof Object)){
var ex__24029__auto__ = e29311;
var statearr_29312_29333 = state_29286;
(statearr_29312_29333[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29334 = state_29286;
state_29286 = G__29334;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__ = function(state_29286){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____1.call(this,state_29286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24026__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___29314,ch))
})();
var state__24122__auto__ = (function (){var statearr_29313 = f__24121__auto__.call(null);
(statearr_29313[(6)] = c__24120__auto___29314);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___29314,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29335_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29335_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29341 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29341){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29337 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29338 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29339 = true;
var _STAR_print_fn_STAR__temp_val__29340 = ((function (_STAR_print_newline_STAR__orig_val__29337,_STAR_print_fn_STAR__orig_val__29338,_STAR_print_newline_STAR__temp_val__29339,sb,base_path_29341){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29337,_STAR_print_fn_STAR__orig_val__29338,_STAR_print_newline_STAR__temp_val__29339,sb,base_path_29341))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29339;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29340;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29338;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29337;
}}catch (e29336){if((e29336 instanceof Error)){
var e = e29336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29341], null));
} else {
var e = e29336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29341))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29342){
var map__29343 = p__29342;
var map__29343__$1 = (((((!((map__29343 == null))))?(((((map__29343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29343):map__29343);
var opts = map__29343__$1;
var build_id = cljs.core.get.call(null,map__29343__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29343,map__29343__$1,opts,build_id){
return (function (p__29345){
var vec__29346 = p__29345;
var seq__29347 = cljs.core.seq.call(null,vec__29346);
var first__29348 = cljs.core.first.call(null,seq__29347);
var seq__29347__$1 = cljs.core.next.call(null,seq__29347);
var map__29349 = first__29348;
var map__29349__$1 = (((((!((map__29349 == null))))?(((((map__29349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29349):map__29349);
var msg = map__29349__$1;
var msg_name = cljs.core.get.call(null,map__29349__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29347__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29346,seq__29347,first__29348,seq__29347__$1,map__29349,map__29349__$1,msg,msg_name,_,map__29343,map__29343__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29346,seq__29347,first__29348,seq__29347__$1,map__29349,map__29349__$1,msg,msg_name,_,map__29343,map__29343__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29343,map__29343__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29351){
var vec__29352 = p__29351;
var seq__29353 = cljs.core.seq.call(null,vec__29352);
var first__29354 = cljs.core.first.call(null,seq__29353);
var seq__29353__$1 = cljs.core.next.call(null,seq__29353);
var map__29355 = first__29354;
var map__29355__$1 = (((((!((map__29355 == null))))?(((((map__29355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29355):map__29355);
var msg = map__29355__$1;
var msg_name = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29353__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29357){
var map__29358 = p__29357;
var map__29358__$1 = (((((!((map__29358 == null))))?(((((map__29358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29358):map__29358);
var on_compile_warning = cljs.core.get.call(null,map__29358__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29358__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29358,map__29358__$1,on_compile_warning,on_compile_fail){
return (function (p__29360){
var vec__29361 = p__29360;
var seq__29362 = cljs.core.seq.call(null,vec__29361);
var first__29363 = cljs.core.first.call(null,seq__29362);
var seq__29362__$1 = cljs.core.next.call(null,seq__29362);
var map__29364 = first__29363;
var map__29364__$1 = (((((!((map__29364 == null))))?(((((map__29364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);
var msg = map__29364__$1;
var msg_name = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29362__$1;
var pred__29366 = cljs.core._EQ_;
var expr__29367 = msg_name;
if(cljs.core.truth_(pred__29366.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29367))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29366.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29367))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29358,map__29358__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__,msg_hist,msg_names,msg){
return (function (state_29456){
var state_val_29457 = (state_29456[(1)]);
if((state_val_29457 === (7))){
var inst_29376 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29376)){
var statearr_29458_29505 = state_29456__$1;
(statearr_29458_29505[(1)] = (8));

} else {
var statearr_29459_29506 = state_29456__$1;
(statearr_29459_29506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (20))){
var inst_29450 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29460_29507 = state_29456__$1;
(statearr_29460_29507[(2)] = inst_29450);

(statearr_29460_29507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (27))){
var inst_29446 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29461_29508 = state_29456__$1;
(statearr_29461_29508[(2)] = inst_29446);

(statearr_29461_29508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (1))){
var inst_29369 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29456__$1 = state_29456;
if(cljs.core.truth_(inst_29369)){
var statearr_29462_29509 = state_29456__$1;
(statearr_29462_29509[(1)] = (2));

} else {
var statearr_29463_29510 = state_29456__$1;
(statearr_29463_29510[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (24))){
var inst_29448 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29464_29511 = state_29456__$1;
(statearr_29464_29511[(2)] = inst_29448);

(statearr_29464_29511[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (4))){
var inst_29454 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29456__$1,inst_29454);
} else {
if((state_val_29457 === (15))){
var inst_29452 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29465_29512 = state_29456__$1;
(statearr_29465_29512[(2)] = inst_29452);

(statearr_29465_29512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (21))){
var inst_29405 = (state_29456[(2)]);
var inst_29406 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29407 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29406);
var state_29456__$1 = (function (){var statearr_29466 = state_29456;
(statearr_29466[(7)] = inst_29405);

return statearr_29466;
})();
var statearr_29467_29513 = state_29456__$1;
(statearr_29467_29513[(2)] = inst_29407);

(statearr_29467_29513[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (31))){
var inst_29435 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29435){
var statearr_29468_29514 = state_29456__$1;
(statearr_29468_29514[(1)] = (34));

} else {
var statearr_29469_29515 = state_29456__$1;
(statearr_29469_29515[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (32))){
var inst_29444 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29470_29516 = state_29456__$1;
(statearr_29470_29516[(2)] = inst_29444);

(statearr_29470_29516[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (33))){
var inst_29431 = (state_29456[(2)]);
var inst_29432 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29433 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29432);
var state_29456__$1 = (function (){var statearr_29471 = state_29456;
(statearr_29471[(8)] = inst_29431);

return statearr_29471;
})();
var statearr_29472_29517 = state_29456__$1;
(statearr_29472_29517[(2)] = inst_29433);

(statearr_29472_29517[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (13))){
var inst_29390 = figwheel.client.heads_up.clear.call(null);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(16),inst_29390);
} else {
if((state_val_29457 === (22))){
var inst_29411 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29412 = figwheel.client.heads_up.append_warning_message.call(null,inst_29411);
var state_29456__$1 = state_29456;
var statearr_29473_29518 = state_29456__$1;
(statearr_29473_29518[(2)] = inst_29412);

(statearr_29473_29518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (36))){
var inst_29442 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29474_29519 = state_29456__$1;
(statearr_29474_29519[(2)] = inst_29442);

(statearr_29474_29519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (29))){
var inst_29422 = (state_29456[(2)]);
var inst_29423 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29424 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29423);
var state_29456__$1 = (function (){var statearr_29475 = state_29456;
(statearr_29475[(9)] = inst_29422);

return statearr_29475;
})();
var statearr_29476_29520 = state_29456__$1;
(statearr_29476_29520[(2)] = inst_29424);

(statearr_29476_29520[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (6))){
var inst_29371 = (state_29456[(10)]);
var state_29456__$1 = state_29456;
var statearr_29477_29521 = state_29456__$1;
(statearr_29477_29521[(2)] = inst_29371);

(statearr_29477_29521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (28))){
var inst_29418 = (state_29456[(2)]);
var inst_29419 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29420 = figwheel.client.heads_up.display_warning.call(null,inst_29419);
var state_29456__$1 = (function (){var statearr_29478 = state_29456;
(statearr_29478[(11)] = inst_29418);

return statearr_29478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(29),inst_29420);
} else {
if((state_val_29457 === (25))){
var inst_29416 = figwheel.client.heads_up.clear.call(null);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(28),inst_29416);
} else {
if((state_val_29457 === (34))){
var inst_29437 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(37),inst_29437);
} else {
if((state_val_29457 === (17))){
var inst_29396 = (state_29456[(2)]);
var inst_29397 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29398 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29397);
var state_29456__$1 = (function (){var statearr_29479 = state_29456;
(statearr_29479[(12)] = inst_29396);

return statearr_29479;
})();
var statearr_29480_29522 = state_29456__$1;
(statearr_29480_29522[(2)] = inst_29398);

(statearr_29480_29522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (3))){
var inst_29388 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29388){
var statearr_29481_29523 = state_29456__$1;
(statearr_29481_29523[(1)] = (13));

} else {
var statearr_29482_29524 = state_29456__$1;
(statearr_29482_29524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (12))){
var inst_29384 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29483_29525 = state_29456__$1;
(statearr_29483_29525[(2)] = inst_29384);

(statearr_29483_29525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (2))){
var inst_29371 = (state_29456[(10)]);
var inst_29371__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29456__$1 = (function (){var statearr_29484 = state_29456;
(statearr_29484[(10)] = inst_29371__$1);

return statearr_29484;
})();
if(cljs.core.truth_(inst_29371__$1)){
var statearr_29485_29526 = state_29456__$1;
(statearr_29485_29526[(1)] = (5));

} else {
var statearr_29486_29527 = state_29456__$1;
(statearr_29486_29527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (23))){
var inst_29414 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29414){
var statearr_29487_29528 = state_29456__$1;
(statearr_29487_29528[(1)] = (25));

} else {
var statearr_29488_29529 = state_29456__$1;
(statearr_29488_29529[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (35))){
var state_29456__$1 = state_29456;
var statearr_29489_29530 = state_29456__$1;
(statearr_29489_29530[(2)] = null);

(statearr_29489_29530[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (19))){
var inst_29409 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29409){
var statearr_29490_29531 = state_29456__$1;
(statearr_29490_29531[(1)] = (22));

} else {
var statearr_29491_29532 = state_29456__$1;
(statearr_29491_29532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (11))){
var inst_29380 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29492_29533 = state_29456__$1;
(statearr_29492_29533[(2)] = inst_29380);

(statearr_29492_29533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (9))){
var inst_29382 = figwheel.client.heads_up.clear.call(null);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(12),inst_29382);
} else {
if((state_val_29457 === (5))){
var inst_29373 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29456__$1 = state_29456;
var statearr_29493_29534 = state_29456__$1;
(statearr_29493_29534[(2)] = inst_29373);

(statearr_29493_29534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (14))){
var inst_29400 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29400){
var statearr_29494_29535 = state_29456__$1;
(statearr_29494_29535[(1)] = (18));

} else {
var statearr_29495_29536 = state_29456__$1;
(statearr_29495_29536[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (26))){
var inst_29426 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29456__$1 = state_29456;
if(inst_29426){
var statearr_29496_29537 = state_29456__$1;
(statearr_29496_29537[(1)] = (30));

} else {
var statearr_29497_29538 = state_29456__$1;
(statearr_29497_29538[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (16))){
var inst_29392 = (state_29456[(2)]);
var inst_29393 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29394 = figwheel.client.heads_up.display_exception.call(null,inst_29393);
var state_29456__$1 = (function (){var statearr_29498 = state_29456;
(statearr_29498[(13)] = inst_29392);

return statearr_29498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(17),inst_29394);
} else {
if((state_val_29457 === (30))){
var inst_29428 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29429 = figwheel.client.heads_up.display_warning.call(null,inst_29428);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(33),inst_29429);
} else {
if((state_val_29457 === (10))){
var inst_29386 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29499_29539 = state_29456__$1;
(statearr_29499_29539[(2)] = inst_29386);

(statearr_29499_29539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (18))){
var inst_29402 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29403 = figwheel.client.heads_up.display_exception.call(null,inst_29402);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(21),inst_29403);
} else {
if((state_val_29457 === (37))){
var inst_29439 = (state_29456[(2)]);
var state_29456__$1 = state_29456;
var statearr_29500_29540 = state_29456__$1;
(statearr_29500_29540[(2)] = inst_29439);

(statearr_29500_29540[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29457 === (8))){
var inst_29378 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(11),inst_29378);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24120__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24025__auto__,c__24120__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____0 = (function (){
var statearr_29501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29501[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__);

(statearr_29501[(1)] = (1));

return statearr_29501;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____1 = (function (state_29456){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_29456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e29502){if((e29502 instanceof Object)){
var ex__24029__auto__ = e29502;
var statearr_29503_29541 = state_29456;
(statearr_29503_29541[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29542 = state_29456;
state_29456 = G__29542;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__ = function(state_29456){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____1.call(this,state_29456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__,msg_hist,msg_names,msg))
})();
var state__24122__auto__ = (function (){var statearr_29504 = f__24121__auto__.call(null);
(statearr_29504[(6)] = c__24120__auto__);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,msg_hist,msg_names,msg))
);

return c__24120__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24120__auto___29571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___29571,ch){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___29571,ch){
return (function (state_29557){
var state_val_29558 = (state_29557[(1)]);
if((state_val_29558 === (1))){
var state_29557__$1 = state_29557;
var statearr_29559_29572 = state_29557__$1;
(statearr_29559_29572[(2)] = null);

(statearr_29559_29572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (2))){
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29557__$1,(4),ch);
} else {
if((state_val_29558 === (3))){
var inst_29555 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else {
if((state_val_29558 === (4))){
var inst_29545 = (state_29557[(7)]);
var inst_29545__$1 = (state_29557[(2)]);
var state_29557__$1 = (function (){var statearr_29560 = state_29557;
(statearr_29560[(7)] = inst_29545__$1);

return statearr_29560;
})();
if(cljs.core.truth_(inst_29545__$1)){
var statearr_29561_29573 = state_29557__$1;
(statearr_29561_29573[(1)] = (5));

} else {
var statearr_29562_29574 = state_29557__$1;
(statearr_29562_29574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (5))){
var inst_29545 = (state_29557[(7)]);
var inst_29547 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29545);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29557__$1,(8),inst_29547);
} else {
if((state_val_29558 === (6))){
var state_29557__$1 = state_29557;
var statearr_29563_29575 = state_29557__$1;
(statearr_29563_29575[(2)] = null);

(statearr_29563_29575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (7))){
var inst_29553 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29564_29576 = state_29557__$1;
(statearr_29564_29576[(2)] = inst_29553);

(statearr_29564_29576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29549 = (state_29557[(2)]);
var state_29557__$1 = (function (){var statearr_29565 = state_29557;
(statearr_29565[(8)] = inst_29549);

return statearr_29565;
})();
var statearr_29566_29577 = state_29557__$1;
(statearr_29566_29577[(2)] = null);

(statearr_29566_29577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24120__auto___29571,ch))
;
return ((function (switch__24025__auto__,c__24120__auto___29571,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24026__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24026__auto____0 = (function (){
var statearr_29567 = [null,null,null,null,null,null,null,null,null];
(statearr_29567[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24026__auto__);

(statearr_29567[(1)] = (1));

return statearr_29567;
});
var figwheel$client$heads_up_plugin_$_state_machine__24026__auto____1 = (function (state_29557){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_29557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e29568){if((e29568 instanceof Object)){
var ex__24029__auto__ = e29568;
var statearr_29569_29578 = state_29557;
(statearr_29569_29578[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29579 = state_29557;
state_29557 = G__29579;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24026__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24026__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24026__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24026__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___29571,ch))
})();
var state__24122__auto__ = (function (){var statearr_29570 = f__24121__auto__.call(null);
(statearr_29570[(6)] = c__24120__auto___29571);

return statearr_29570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___29571,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__){
return (function (state_29585){
var state_val_29586 = (state_29585[(1)]);
if((state_val_29586 === (1))){
var inst_29580 = cljs.core.async.timeout.call(null,(3000));
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29585__$1,(2),inst_29580);
} else {
if((state_val_29586 === (2))){
var inst_29582 = (state_29585[(2)]);
var inst_29583 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29585__$1 = (function (){var statearr_29587 = state_29585;
(statearr_29587[(7)] = inst_29582);

return statearr_29587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29585__$1,inst_29583);
} else {
return null;
}
}
});})(c__24120__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____0 = (function (){
var statearr_29588 = [null,null,null,null,null,null,null,null];
(statearr_29588[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__);

(statearr_29588[(1)] = (1));

return statearr_29588;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____1 = (function (state_29585){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_29585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e29589){if((e29589 instanceof Object)){
var ex__24029__auto__ = e29589;
var statearr_29590_29592 = state_29585;
(statearr_29590_29592[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29593 = state_29585;
state_29585 = G__29593;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__ = function(state_29585){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____1.call(this,state_29585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24026__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_29591 = f__24121__auto__.call(null);
(statearr_29591[(6)] = c__24120__auto__);

return statearr_29591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__,figwheel_version,temp__5720__auto__){
return (function (state_29600){
var state_val_29601 = (state_29600[(1)]);
if((state_val_29601 === (1))){
var inst_29594 = cljs.core.async.timeout.call(null,(2000));
var state_29600__$1 = state_29600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29600__$1,(2),inst_29594);
} else {
if((state_val_29601 === (2))){
var inst_29596 = (state_29600[(2)]);
var inst_29597 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29598 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29597);
var state_29600__$1 = (function (){var statearr_29602 = state_29600;
(statearr_29602[(7)] = inst_29596);

return statearr_29602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29600__$1,inst_29598);
} else {
return null;
}
}
});})(c__24120__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____0 = (function (){
var statearr_29603 = [null,null,null,null,null,null,null,null];
(statearr_29603[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__);

(statearr_29603[(1)] = (1));

return statearr_29603;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____1 = (function (state_29600){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_29600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e29604){if((e29604 instanceof Object)){
var ex__24029__auto__ = e29604;
var statearr_29605_29607 = state_29600;
(statearr_29605_29607[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29608 = state_29600;
state_29600 = G__29608;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__ = function(state_29600){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____1.call(this,state_29600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__,figwheel_version,temp__5720__auto__))
})();
var state__24122__auto__ = (function (){var statearr_29606 = f__24121__auto__.call(null);
(statearr_29606[(6)] = c__24120__auto__);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,figwheel_version,temp__5720__auto__))
);

return c__24120__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29609){
var map__29610 = p__29609;
var map__29610__$1 = (((((!((map__29610 == null))))?(((((map__29610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29610):map__29610);
var file = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29612 = "";
var G__29612__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29612),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29612);
var G__29612__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29612__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29612__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29612__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29612__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29613){
var map__29614 = p__29613;
var map__29614__$1 = (((((!((map__29614 == null))))?(((((map__29614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29614):map__29614);
var ed = map__29614__$1;
var exception_data = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29617 = (function (){var G__29616 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29616)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__29616;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29617);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29618){
var map__29619 = p__29618;
var map__29619__$1 = (((((!((map__29619 == null))))?(((((map__29619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29619):map__29619);
var w = map__29619__$1;
var message = cljs.core.get.call(null,map__29619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29621 = cljs.core.seq.call(null,plugins);
var chunk__29622 = null;
var count__29623 = (0);
var i__29624 = (0);
while(true){
if((i__29624 < count__29623)){
var vec__29625 = cljs.core._nth.call(null,chunk__29622,i__29624);
var k = cljs.core.nth.call(null,vec__29625,(0),null);
var plugin = cljs.core.nth.call(null,vec__29625,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29631 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29621,chunk__29622,count__29623,i__29624,pl_29631,vec__29625,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29631.call(null,msg_hist);
});})(seq__29621,chunk__29622,count__29623,i__29624,pl_29631,vec__29625,k,plugin))
);
} else {
}


var G__29632 = seq__29621;
var G__29633 = chunk__29622;
var G__29634 = count__29623;
var G__29635 = (i__29624 + (1));
seq__29621 = G__29632;
chunk__29622 = G__29633;
count__29623 = G__29634;
i__29624 = G__29635;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29621);
if(temp__5720__auto__){
var seq__29621__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29621__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29621__$1);
var G__29636 = cljs.core.chunk_rest.call(null,seq__29621__$1);
var G__29637 = c__4461__auto__;
var G__29638 = cljs.core.count.call(null,c__4461__auto__);
var G__29639 = (0);
seq__29621 = G__29636;
chunk__29622 = G__29637;
count__29623 = G__29638;
i__29624 = G__29639;
continue;
} else {
var vec__29628 = cljs.core.first.call(null,seq__29621__$1);
var k = cljs.core.nth.call(null,vec__29628,(0),null);
var plugin = cljs.core.nth.call(null,vec__29628,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29640 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29621,chunk__29622,count__29623,i__29624,pl_29640,vec__29628,k,plugin,seq__29621__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29640.call(null,msg_hist);
});})(seq__29621,chunk__29622,count__29623,i__29624,pl_29640,vec__29628,k,plugin,seq__29621__$1,temp__5720__auto__))
);
} else {
}


var G__29641 = cljs.core.next.call(null,seq__29621__$1);
var G__29642 = null;
var G__29643 = (0);
var G__29644 = (0);
seq__29621 = G__29641;
chunk__29622 = G__29642;
count__29623 = G__29643;
i__29624 = G__29644;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__29646 = arguments.length;
switch (G__29646) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29647_29652 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29648_29653 = null;
var count__29649_29654 = (0);
var i__29650_29655 = (0);
while(true){
if((i__29650_29655 < count__29649_29654)){
var msg_29656 = cljs.core._nth.call(null,chunk__29648_29653,i__29650_29655);
figwheel.client.socket.handle_incoming_message.call(null,msg_29656);


var G__29657 = seq__29647_29652;
var G__29658 = chunk__29648_29653;
var G__29659 = count__29649_29654;
var G__29660 = (i__29650_29655 + (1));
seq__29647_29652 = G__29657;
chunk__29648_29653 = G__29658;
count__29649_29654 = G__29659;
i__29650_29655 = G__29660;
continue;
} else {
var temp__5720__auto___29661 = cljs.core.seq.call(null,seq__29647_29652);
if(temp__5720__auto___29661){
var seq__29647_29662__$1 = temp__5720__auto___29661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29647_29662__$1)){
var c__4461__auto___29663 = cljs.core.chunk_first.call(null,seq__29647_29662__$1);
var G__29664 = cljs.core.chunk_rest.call(null,seq__29647_29662__$1);
var G__29665 = c__4461__auto___29663;
var G__29666 = cljs.core.count.call(null,c__4461__auto___29663);
var G__29667 = (0);
seq__29647_29652 = G__29664;
chunk__29648_29653 = G__29665;
count__29649_29654 = G__29666;
i__29650_29655 = G__29667;
continue;
} else {
var msg_29668 = cljs.core.first.call(null,seq__29647_29662__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29668);


var G__29669 = cljs.core.next.call(null,seq__29647_29662__$1);
var G__29670 = null;
var G__29671 = (0);
var G__29672 = (0);
seq__29647_29652 = G__29669;
chunk__29648_29653 = G__29670;
count__29649_29654 = G__29671;
i__29650_29655 = G__29672;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29677 = arguments.length;
var i__4642__auto___29678 = (0);
while(true){
if((i__4642__auto___29678 < len__4641__auto___29677)){
args__4647__auto__.push((arguments[i__4642__auto___29678]));

var G__29679 = (i__4642__auto___29678 + (1));
i__4642__auto___29678 = G__29679;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29674){
var map__29675 = p__29674;
var map__29675__$1 = (((((!((map__29675 == null))))?(((((map__29675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);
var opts = map__29675__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29673){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29673));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29680){if((e29680 instanceof Error)){
var e = e29680;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29680;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29681){
var map__29682 = p__29681;
var map__29682__$1 = (((((!((map__29682 == null))))?(((((map__29682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var msg_name = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563735158981

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
}catch (e29220){if((e29220 instanceof Error)){
var e = e29220;
return "Error: Unable to stringify";
} else {
throw e29220;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29223 = arguments.length;
switch (G__29223) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29221_SHARP_){
if(typeof p1__29221_SHARP_ === 'string'){
return p1__29221_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29221_SHARP_);
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
var len__4641__auto___29226 = arguments.length;
var i__4642__auto___29227 = (0);
while(true){
if((i__4642__auto___29227 < len__4641__auto___29226)){
args__4647__auto__.push((arguments[i__4642__auto___29227]));

var G__29228 = (i__4642__auto___29227 + (1));
i__4642__auto___29227 = G__29228;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29225){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29225));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29230 = arguments.length;
var i__4642__auto___29231 = (0);
while(true){
if((i__4642__auto___29231 < len__4641__auto___29230)){
args__4647__auto__.push((arguments[i__4642__auto___29231]));

var G__29232 = (i__4642__auto___29231 + (1));
i__4642__auto___29231 = G__29232;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29229){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29229));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29233){
var map__29234 = p__29233;
var map__29234__$1 = (((((!((map__29234 == null))))?(((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);
var message = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24119__auto___29313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___29313,ch){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___29313,ch){
return (function (state_29285){
var state_val_29286 = (state_29285[(1)]);
if((state_val_29286 === (7))){
var inst_29281 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29287_29314 = state_29285__$1;
(statearr_29287_29314[(2)] = inst_29281);

(statearr_29287_29314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (1))){
var state_29285__$1 = state_29285;
var statearr_29288_29315 = state_29285__$1;
(statearr_29288_29315[(2)] = null);

(statearr_29288_29315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (4))){
var inst_29238 = (state_29285[(7)]);
var inst_29238__$1 = (state_29285[(2)]);
var state_29285__$1 = (function (){var statearr_29289 = state_29285;
(statearr_29289[(7)] = inst_29238__$1);

return statearr_29289;
})();
if(cljs.core.truth_(inst_29238__$1)){
var statearr_29290_29316 = state_29285__$1;
(statearr_29290_29316[(1)] = (5));

} else {
var statearr_29291_29317 = state_29285__$1;
(statearr_29291_29317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (15))){
var inst_29245 = (state_29285[(8)]);
var inst_29260 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29245);
var inst_29261 = cljs.core.first.call(null,inst_29260);
var inst_29262 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29261);
var inst_29263 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29262)].join('');
var inst_29264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29263);
var state_29285__$1 = state_29285;
var statearr_29292_29318 = state_29285__$1;
(statearr_29292_29318[(2)] = inst_29264);

(statearr_29292_29318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (13))){
var inst_29269 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29293_29319 = state_29285__$1;
(statearr_29293_29319[(2)] = inst_29269);

(statearr_29293_29319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (6))){
var state_29285__$1 = state_29285;
var statearr_29294_29320 = state_29285__$1;
(statearr_29294_29320[(2)] = null);

(statearr_29294_29320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (17))){
var inst_29267 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29295_29321 = state_29285__$1;
(statearr_29295_29321[(2)] = inst_29267);

(statearr_29295_29321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (3))){
var inst_29283 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29285__$1,inst_29283);
} else {
if((state_val_29286 === (12))){
var inst_29244 = (state_29285[(9)]);
var inst_29258 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29244,opts);
var state_29285__$1 = state_29285;
if(inst_29258){
var statearr_29296_29322 = state_29285__$1;
(statearr_29296_29322[(1)] = (15));

} else {
var statearr_29297_29323 = state_29285__$1;
(statearr_29297_29323[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (2))){
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29285__$1,(4),ch);
} else {
if((state_val_29286 === (11))){
var inst_29245 = (state_29285[(8)]);
var inst_29250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29251 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29245);
var inst_29252 = cljs.core.async.timeout.call(null,(1000));
var inst_29253 = [inst_29251,inst_29252];
var inst_29254 = (new cljs.core.PersistentVector(null,2,(5),inst_29250,inst_29253,null));
var state_29285__$1 = state_29285;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29285__$1,(14),inst_29254);
} else {
if((state_val_29286 === (9))){
var inst_29245 = (state_29285[(8)]);
var inst_29271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29272 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29245);
var inst_29273 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29272);
var inst_29274 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29273)].join('');
var inst_29275 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29274);
var state_29285__$1 = (function (){var statearr_29298 = state_29285;
(statearr_29298[(10)] = inst_29271);

return statearr_29298;
})();
var statearr_29299_29324 = state_29285__$1;
(statearr_29299_29324[(2)] = inst_29275);

(statearr_29299_29324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (5))){
var inst_29238 = (state_29285[(7)]);
var inst_29240 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29241 = (new cljs.core.PersistentArrayMap(null,2,inst_29240,null));
var inst_29242 = (new cljs.core.PersistentHashSet(null,inst_29241,null));
var inst_29243 = figwheel.client.focus_msgs.call(null,inst_29242,inst_29238);
var inst_29244 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29243);
var inst_29245 = cljs.core.first.call(null,inst_29243);
var inst_29246 = figwheel.client.autoload_QMARK_.call(null);
var state_29285__$1 = (function (){var statearr_29300 = state_29285;
(statearr_29300[(9)] = inst_29244);

(statearr_29300[(8)] = inst_29245);

return statearr_29300;
})();
if(cljs.core.truth_(inst_29246)){
var statearr_29301_29325 = state_29285__$1;
(statearr_29301_29325[(1)] = (8));

} else {
var statearr_29302_29326 = state_29285__$1;
(statearr_29302_29326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (14))){
var inst_29256 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29303_29327 = state_29285__$1;
(statearr_29303_29327[(2)] = inst_29256);

(statearr_29303_29327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (16))){
var state_29285__$1 = state_29285;
var statearr_29304_29328 = state_29285__$1;
(statearr_29304_29328[(2)] = null);

(statearr_29304_29328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (10))){
var inst_29277 = (state_29285[(2)]);
var state_29285__$1 = (function (){var statearr_29305 = state_29285;
(statearr_29305[(11)] = inst_29277);

return statearr_29305;
})();
var statearr_29306_29329 = state_29285__$1;
(statearr_29306_29329[(2)] = null);

(statearr_29306_29329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (8))){
var inst_29244 = (state_29285[(9)]);
var inst_29248 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29244,opts);
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29248)){
var statearr_29307_29330 = state_29285__$1;
(statearr_29307_29330[(1)] = (11));

} else {
var statearr_29308_29331 = state_29285__$1;
(statearr_29308_29331[(1)] = (12));

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
});})(c__24119__auto___29313,ch))
;
return ((function (switch__24024__auto__,c__24119__auto___29313,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____0 = (function (){
var statearr_29309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29309[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__);

(statearr_29309[(1)] = (1));

return statearr_29309;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____1 = (function (state_29285){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_29285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e29310){if((e29310 instanceof Object)){
var ex__24028__auto__ = e29310;
var statearr_29311_29332 = state_29285;
(statearr_29311_29332[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29333 = state_29285;
state_29285 = G__29333;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__ = function(state_29285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____1.call(this,state_29285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24025__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___29313,ch))
})();
var state__24121__auto__ = (function (){var statearr_29312 = f__24120__auto__.call(null);
(statearr_29312[(6)] = c__24119__auto___29313);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___29313,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29334_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29334_SHARP_));
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
var base_path_29340 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29340){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29336 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29337 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29338 = true;
var _STAR_print_fn_STAR__temp_val__29339 = ((function (_STAR_print_newline_STAR__orig_val__29336,_STAR_print_fn_STAR__orig_val__29337,_STAR_print_newline_STAR__temp_val__29338,sb,base_path_29340){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__29336,_STAR_print_fn_STAR__orig_val__29337,_STAR_print_newline_STAR__temp_val__29338,sb,base_path_29340))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29338;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29339;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29337;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29336;
}}catch (e29335){if((e29335 instanceof Error)){
var e = e29335;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29340], null));
} else {
var e = e29335;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29340))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29341){
var map__29342 = p__29341;
var map__29342__$1 = (((((!((map__29342 == null))))?(((((map__29342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29342):map__29342);
var opts = map__29342__$1;
var build_id = cljs.core.get.call(null,map__29342__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29342,map__29342__$1,opts,build_id){
return (function (p__29344){
var vec__29345 = p__29344;
var seq__29346 = cljs.core.seq.call(null,vec__29345);
var first__29347 = cljs.core.first.call(null,seq__29346);
var seq__29346__$1 = cljs.core.next.call(null,seq__29346);
var map__29348 = first__29347;
var map__29348__$1 = (((((!((map__29348 == null))))?(((((map__29348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29348):map__29348);
var msg = map__29348__$1;
var msg_name = cljs.core.get.call(null,map__29348__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29346__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29345,seq__29346,first__29347,seq__29346__$1,map__29348,map__29348__$1,msg,msg_name,_,map__29342,map__29342__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29345,seq__29346,first__29347,seq__29346__$1,map__29348,map__29348__$1,msg,msg_name,_,map__29342,map__29342__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29342,map__29342__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29350){
var vec__29351 = p__29350;
var seq__29352 = cljs.core.seq.call(null,vec__29351);
var first__29353 = cljs.core.first.call(null,seq__29352);
var seq__29352__$1 = cljs.core.next.call(null,seq__29352);
var map__29354 = first__29353;
var map__29354__$1 = (((((!((map__29354 == null))))?(((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var msg = map__29354__$1;
var msg_name = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29352__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29356){
var map__29357 = p__29356;
var map__29357__$1 = (((((!((map__29357 == null))))?(((((map__29357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29357):map__29357);
var on_compile_warning = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29357,map__29357__$1,on_compile_warning,on_compile_fail){
return (function (p__29359){
var vec__29360 = p__29359;
var seq__29361 = cljs.core.seq.call(null,vec__29360);
var first__29362 = cljs.core.first.call(null,seq__29361);
var seq__29361__$1 = cljs.core.next.call(null,seq__29361);
var map__29363 = first__29362;
var map__29363__$1 = (((((!((map__29363 == null))))?(((((map__29363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29363):map__29363);
var msg = map__29363__$1;
var msg_name = cljs.core.get.call(null,map__29363__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29361__$1;
var pred__29365 = cljs.core._EQ_;
var expr__29366 = msg_name;
if(cljs.core.truth_(pred__29365.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29366))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29365.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29366))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29357,map__29357__$1,on_compile_warning,on_compile_fail))
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
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__,msg_hist,msg_names,msg){
return (function (state_29455){
var state_val_29456 = (state_29455[(1)]);
if((state_val_29456 === (7))){
var inst_29375 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
if(cljs.core.truth_(inst_29375)){
var statearr_29457_29504 = state_29455__$1;
(statearr_29457_29504[(1)] = (8));

} else {
var statearr_29458_29505 = state_29455__$1;
(statearr_29458_29505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (20))){
var inst_29449 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29459_29506 = state_29455__$1;
(statearr_29459_29506[(2)] = inst_29449);

(statearr_29459_29506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (27))){
var inst_29445 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29460_29507 = state_29455__$1;
(statearr_29460_29507[(2)] = inst_29445);

(statearr_29460_29507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (1))){
var inst_29368 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29455__$1 = state_29455;
if(cljs.core.truth_(inst_29368)){
var statearr_29461_29508 = state_29455__$1;
(statearr_29461_29508[(1)] = (2));

} else {
var statearr_29462_29509 = state_29455__$1;
(statearr_29462_29509[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (24))){
var inst_29447 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29463_29510 = state_29455__$1;
(statearr_29463_29510[(2)] = inst_29447);

(statearr_29463_29510[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (4))){
var inst_29453 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29455__$1,inst_29453);
} else {
if((state_val_29456 === (15))){
var inst_29451 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29464_29511 = state_29455__$1;
(statearr_29464_29511[(2)] = inst_29451);

(statearr_29464_29511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (21))){
var inst_29404 = (state_29455[(2)]);
var inst_29405 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29406 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29405);
var state_29455__$1 = (function (){var statearr_29465 = state_29455;
(statearr_29465[(7)] = inst_29404);

return statearr_29465;
})();
var statearr_29466_29512 = state_29455__$1;
(statearr_29466_29512[(2)] = inst_29406);

(statearr_29466_29512[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (31))){
var inst_29434 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29434){
var statearr_29467_29513 = state_29455__$1;
(statearr_29467_29513[(1)] = (34));

} else {
var statearr_29468_29514 = state_29455__$1;
(statearr_29468_29514[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (32))){
var inst_29443 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29469_29515 = state_29455__$1;
(statearr_29469_29515[(2)] = inst_29443);

(statearr_29469_29515[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (33))){
var inst_29430 = (state_29455[(2)]);
var inst_29431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29432 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29431);
var state_29455__$1 = (function (){var statearr_29470 = state_29455;
(statearr_29470[(8)] = inst_29430);

return statearr_29470;
})();
var statearr_29471_29516 = state_29455__$1;
(statearr_29471_29516[(2)] = inst_29432);

(statearr_29471_29516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (13))){
var inst_29389 = figwheel.client.heads_up.clear.call(null);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(16),inst_29389);
} else {
if((state_val_29456 === (22))){
var inst_29410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29411 = figwheel.client.heads_up.append_warning_message.call(null,inst_29410);
var state_29455__$1 = state_29455;
var statearr_29472_29517 = state_29455__$1;
(statearr_29472_29517[(2)] = inst_29411);

(statearr_29472_29517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (36))){
var inst_29441 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29473_29518 = state_29455__$1;
(statearr_29473_29518[(2)] = inst_29441);

(statearr_29473_29518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (29))){
var inst_29421 = (state_29455[(2)]);
var inst_29422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29423 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29422);
var state_29455__$1 = (function (){var statearr_29474 = state_29455;
(statearr_29474[(9)] = inst_29421);

return statearr_29474;
})();
var statearr_29475_29519 = state_29455__$1;
(statearr_29475_29519[(2)] = inst_29423);

(statearr_29475_29519[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (6))){
var inst_29370 = (state_29455[(10)]);
var state_29455__$1 = state_29455;
var statearr_29476_29520 = state_29455__$1;
(statearr_29476_29520[(2)] = inst_29370);

(statearr_29476_29520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (28))){
var inst_29417 = (state_29455[(2)]);
var inst_29418 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29419 = figwheel.client.heads_up.display_warning.call(null,inst_29418);
var state_29455__$1 = (function (){var statearr_29477 = state_29455;
(statearr_29477[(11)] = inst_29417);

return statearr_29477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(29),inst_29419);
} else {
if((state_val_29456 === (25))){
var inst_29415 = figwheel.client.heads_up.clear.call(null);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(28),inst_29415);
} else {
if((state_val_29456 === (34))){
var inst_29436 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(37),inst_29436);
} else {
if((state_val_29456 === (17))){
var inst_29395 = (state_29455[(2)]);
var inst_29396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29396);
var state_29455__$1 = (function (){var statearr_29478 = state_29455;
(statearr_29478[(12)] = inst_29395);

return statearr_29478;
})();
var statearr_29479_29521 = state_29455__$1;
(statearr_29479_29521[(2)] = inst_29397);

(statearr_29479_29521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (3))){
var inst_29387 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29387){
var statearr_29480_29522 = state_29455__$1;
(statearr_29480_29522[(1)] = (13));

} else {
var statearr_29481_29523 = state_29455__$1;
(statearr_29481_29523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (12))){
var inst_29383 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29482_29524 = state_29455__$1;
(statearr_29482_29524[(2)] = inst_29383);

(statearr_29482_29524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (2))){
var inst_29370 = (state_29455[(10)]);
var inst_29370__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29455__$1 = (function (){var statearr_29483 = state_29455;
(statearr_29483[(10)] = inst_29370__$1);

return statearr_29483;
})();
if(cljs.core.truth_(inst_29370__$1)){
var statearr_29484_29525 = state_29455__$1;
(statearr_29484_29525[(1)] = (5));

} else {
var statearr_29485_29526 = state_29455__$1;
(statearr_29485_29526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (23))){
var inst_29413 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29413){
var statearr_29486_29527 = state_29455__$1;
(statearr_29486_29527[(1)] = (25));

} else {
var statearr_29487_29528 = state_29455__$1;
(statearr_29487_29528[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (35))){
var state_29455__$1 = state_29455;
var statearr_29488_29529 = state_29455__$1;
(statearr_29488_29529[(2)] = null);

(statearr_29488_29529[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (19))){
var inst_29408 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29408){
var statearr_29489_29530 = state_29455__$1;
(statearr_29489_29530[(1)] = (22));

} else {
var statearr_29490_29531 = state_29455__$1;
(statearr_29490_29531[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (11))){
var inst_29379 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29491_29532 = state_29455__$1;
(statearr_29491_29532[(2)] = inst_29379);

(statearr_29491_29532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (9))){
var inst_29381 = figwheel.client.heads_up.clear.call(null);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(12),inst_29381);
} else {
if((state_val_29456 === (5))){
var inst_29372 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29455__$1 = state_29455;
var statearr_29492_29533 = state_29455__$1;
(statearr_29492_29533[(2)] = inst_29372);

(statearr_29492_29533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (14))){
var inst_29399 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29399){
var statearr_29493_29534 = state_29455__$1;
(statearr_29493_29534[(1)] = (18));

} else {
var statearr_29494_29535 = state_29455__$1;
(statearr_29494_29535[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (26))){
var inst_29425 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29455__$1 = state_29455;
if(inst_29425){
var statearr_29495_29536 = state_29455__$1;
(statearr_29495_29536[(1)] = (30));

} else {
var statearr_29496_29537 = state_29455__$1;
(statearr_29496_29537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (16))){
var inst_29391 = (state_29455[(2)]);
var inst_29392 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29393 = figwheel.client.heads_up.display_exception.call(null,inst_29392);
var state_29455__$1 = (function (){var statearr_29497 = state_29455;
(statearr_29497[(13)] = inst_29391);

return statearr_29497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(17),inst_29393);
} else {
if((state_val_29456 === (30))){
var inst_29427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29428 = figwheel.client.heads_up.display_warning.call(null,inst_29427);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(33),inst_29428);
} else {
if((state_val_29456 === (10))){
var inst_29385 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29498_29538 = state_29455__$1;
(statearr_29498_29538[(2)] = inst_29385);

(statearr_29498_29538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (18))){
var inst_29401 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29402 = figwheel.client.heads_up.display_exception.call(null,inst_29401);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(21),inst_29402);
} else {
if((state_val_29456 === (37))){
var inst_29438 = (state_29455[(2)]);
var state_29455__$1 = state_29455;
var statearr_29499_29539 = state_29455__$1;
(statearr_29499_29539[(2)] = inst_29438);

(statearr_29499_29539[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29456 === (8))){
var inst_29377 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29455__$1 = state_29455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29455__$1,(11),inst_29377);
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
});})(c__24119__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24024__auto__,c__24119__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____1 = (function (state_29455){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_29455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e29501){if((e29501 instanceof Object)){
var ex__24028__auto__ = e29501;
var statearr_29502_29540 = state_29455;
(statearr_29502_29540[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29541 = state_29455;
state_29455 = G__29541;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__ = function(state_29455){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____1.call(this,state_29455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__,msg_hist,msg_names,msg))
})();
var state__24121__auto__ = (function (){var statearr_29503 = f__24120__auto__.call(null);
(statearr_29503[(6)] = c__24119__auto__);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__,msg_hist,msg_names,msg))
);

return c__24119__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24119__auto___29570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___29570,ch){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___29570,ch){
return (function (state_29556){
var state_val_29557 = (state_29556[(1)]);
if((state_val_29557 === (1))){
var state_29556__$1 = state_29556;
var statearr_29558_29571 = state_29556__$1;
(statearr_29558_29571[(2)] = null);

(statearr_29558_29571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (2))){
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29556__$1,(4),ch);
} else {
if((state_val_29557 === (3))){
var inst_29554 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29556__$1,inst_29554);
} else {
if((state_val_29557 === (4))){
var inst_29544 = (state_29556[(7)]);
var inst_29544__$1 = (state_29556[(2)]);
var state_29556__$1 = (function (){var statearr_29559 = state_29556;
(statearr_29559[(7)] = inst_29544__$1);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29544__$1)){
var statearr_29560_29572 = state_29556__$1;
(statearr_29560_29572[(1)] = (5));

} else {
var statearr_29561_29573 = state_29556__$1;
(statearr_29561_29573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (5))){
var inst_29544 = (state_29556[(7)]);
var inst_29546 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29544);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29556__$1,(8),inst_29546);
} else {
if((state_val_29557 === (6))){
var state_29556__$1 = state_29556;
var statearr_29562_29574 = state_29556__$1;
(statearr_29562_29574[(2)] = null);

(statearr_29562_29574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (7))){
var inst_29552 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29563_29575 = state_29556__$1;
(statearr_29563_29575[(2)] = inst_29552);

(statearr_29563_29575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (8))){
var inst_29548 = (state_29556[(2)]);
var state_29556__$1 = (function (){var statearr_29564 = state_29556;
(statearr_29564[(8)] = inst_29548);

return statearr_29564;
})();
var statearr_29565_29576 = state_29556__$1;
(statearr_29565_29576[(2)] = null);

(statearr_29565_29576[(1)] = (2));


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
});})(c__24119__auto___29570,ch))
;
return ((function (switch__24024__auto__,c__24119__auto___29570,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24025__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24025__auto____0 = (function (){
var statearr_29566 = [null,null,null,null,null,null,null,null,null];
(statearr_29566[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24025__auto__);

(statearr_29566[(1)] = (1));

return statearr_29566;
});
var figwheel$client$heads_up_plugin_$_state_machine__24025__auto____1 = (function (state_29556){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_29556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e29567){if((e29567 instanceof Object)){
var ex__24028__auto__ = e29567;
var statearr_29568_29577 = state_29556;
(statearr_29568_29577[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29578 = state_29556;
state_29556 = G__29578;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24025__auto__ = function(state_29556){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24025__auto____1.call(this,state_29556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24025__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24025__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___29570,ch))
})();
var state__24121__auto__ = (function (){var statearr_29569 = f__24120__auto__.call(null);
(statearr_29569[(6)] = c__24119__auto___29570);

return statearr_29569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___29570,ch))
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
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__){
return (function (state_29584){
var state_val_29585 = (state_29584[(1)]);
if((state_val_29585 === (1))){
var inst_29579 = cljs.core.async.timeout.call(null,(3000));
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(2),inst_29579);
} else {
if((state_val_29585 === (2))){
var inst_29581 = (state_29584[(2)]);
var inst_29582 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29584__$1 = (function (){var statearr_29586 = state_29584;
(statearr_29586[(7)] = inst_29581);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29584__$1,inst_29582);
} else {
return null;
}
}
});})(c__24119__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____0 = (function (){
var statearr_29587 = [null,null,null,null,null,null,null,null];
(statearr_29587[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__);

(statearr_29587[(1)] = (1));

return statearr_29587;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____1 = (function (state_29584){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_29584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e29588){if((e29588 instanceof Object)){
var ex__24028__auto__ = e29588;
var statearr_29589_29591 = state_29584;
(statearr_29589_29591[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29592 = state_29584;
state_29584 = G__29592;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__ = function(state_29584){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____1.call(this,state_29584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24025__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__))
})();
var state__24121__auto__ = (function (){var statearr_29590 = f__24120__auto__.call(null);
(statearr_29590[(6)] = c__24119__auto__);

return statearr_29590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__))
);

return c__24119__auto__;
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
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__,figwheel_version,temp__5720__auto__){
return (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (1))){
var inst_29593 = cljs.core.async.timeout.call(null,(2000));
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(2),inst_29593);
} else {
if((state_val_29600 === (2))){
var inst_29595 = (state_29599[(2)]);
var inst_29596 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29597 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29596);
var state_29599__$1 = (function (){var statearr_29601 = state_29599;
(statearr_29601[(7)] = inst_29595);

return statearr_29601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else {
return null;
}
}
});})(c__24119__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____0 = (function (){
var statearr_29602 = [null,null,null,null,null,null,null,null];
(statearr_29602[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__);

(statearr_29602[(1)] = (1));

return statearr_29602;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____1 = (function (state_29599){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_29599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e29603){if((e29603 instanceof Object)){
var ex__24028__auto__ = e29603;
var statearr_29604_29606 = state_29599;
(statearr_29604_29606[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29607 = state_29599;
state_29599 = G__29607;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__,figwheel_version,temp__5720__auto__))
})();
var state__24121__auto__ = (function (){var statearr_29605 = f__24120__auto__.call(null);
(statearr_29605[(6)] = c__24119__auto__);

return statearr_29605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__,figwheel_version,temp__5720__auto__))
);

return c__24119__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29608){
var map__29609 = p__29608;
var map__29609__$1 = (((((!((map__29609 == null))))?(((((map__29609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29609):map__29609);
var file = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29611 = "";
var G__29611__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29611),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29611);
var G__29611__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29611__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29611__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29611__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29611__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29612){
var map__29613 = p__29612;
var map__29613__$1 = (((((!((map__29613 == null))))?(((((map__29613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29613):map__29613);
var ed = map__29613__$1;
var exception_data = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_29616 = (function (){var G__29615 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29615)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__29615;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_29616);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29617){
var map__29618 = p__29617;
var map__29618__$1 = (((((!((map__29618 == null))))?(((((map__29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);
var w = map__29618__$1;
var message = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29620 = cljs.core.seq.call(null,plugins);
var chunk__29621 = null;
var count__29622 = (0);
var i__29623 = (0);
while(true){
if((i__29623 < count__29622)){
var vec__29624 = cljs.core._nth.call(null,chunk__29621,i__29623);
var k = cljs.core.nth.call(null,vec__29624,(0),null);
var plugin = cljs.core.nth.call(null,vec__29624,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29630 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29620,chunk__29621,count__29622,i__29623,pl_29630,vec__29624,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29630.call(null,msg_hist);
});})(seq__29620,chunk__29621,count__29622,i__29623,pl_29630,vec__29624,k,plugin))
);
} else {
}


var G__29631 = seq__29620;
var G__29632 = chunk__29621;
var G__29633 = count__29622;
var G__29634 = (i__29623 + (1));
seq__29620 = G__29631;
chunk__29621 = G__29632;
count__29622 = G__29633;
i__29623 = G__29634;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29620);
if(temp__5720__auto__){
var seq__29620__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29620__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29620__$1);
var G__29635 = cljs.core.chunk_rest.call(null,seq__29620__$1);
var G__29636 = c__4461__auto__;
var G__29637 = cljs.core.count.call(null,c__4461__auto__);
var G__29638 = (0);
seq__29620 = G__29635;
chunk__29621 = G__29636;
count__29622 = G__29637;
i__29623 = G__29638;
continue;
} else {
var vec__29627 = cljs.core.first.call(null,seq__29620__$1);
var k = cljs.core.nth.call(null,vec__29627,(0),null);
var plugin = cljs.core.nth.call(null,vec__29627,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29639 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29620,chunk__29621,count__29622,i__29623,pl_29639,vec__29627,k,plugin,seq__29620__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29639.call(null,msg_hist);
});})(seq__29620,chunk__29621,count__29622,i__29623,pl_29639,vec__29627,k,plugin,seq__29620__$1,temp__5720__auto__))
);
} else {
}


var G__29640 = cljs.core.next.call(null,seq__29620__$1);
var G__29641 = null;
var G__29642 = (0);
var G__29643 = (0);
seq__29620 = G__29640;
chunk__29621 = G__29641;
count__29622 = G__29642;
i__29623 = G__29643;
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
var G__29645 = arguments.length;
switch (G__29645) {
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

var seq__29646_29651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29647_29652 = null;
var count__29648_29653 = (0);
var i__29649_29654 = (0);
while(true){
if((i__29649_29654 < count__29648_29653)){
var msg_29655 = cljs.core._nth.call(null,chunk__29647_29652,i__29649_29654);
figwheel.client.socket.handle_incoming_message.call(null,msg_29655);


var G__29656 = seq__29646_29651;
var G__29657 = chunk__29647_29652;
var G__29658 = count__29648_29653;
var G__29659 = (i__29649_29654 + (1));
seq__29646_29651 = G__29656;
chunk__29647_29652 = G__29657;
count__29648_29653 = G__29658;
i__29649_29654 = G__29659;
continue;
} else {
var temp__5720__auto___29660 = cljs.core.seq.call(null,seq__29646_29651);
if(temp__5720__auto___29660){
var seq__29646_29661__$1 = temp__5720__auto___29660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29646_29661__$1)){
var c__4461__auto___29662 = cljs.core.chunk_first.call(null,seq__29646_29661__$1);
var G__29663 = cljs.core.chunk_rest.call(null,seq__29646_29661__$1);
var G__29664 = c__4461__auto___29662;
var G__29665 = cljs.core.count.call(null,c__4461__auto___29662);
var G__29666 = (0);
seq__29646_29651 = G__29663;
chunk__29647_29652 = G__29664;
count__29648_29653 = G__29665;
i__29649_29654 = G__29666;
continue;
} else {
var msg_29667 = cljs.core.first.call(null,seq__29646_29661__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29667);


var G__29668 = cljs.core.next.call(null,seq__29646_29661__$1);
var G__29669 = null;
var G__29670 = (0);
var G__29671 = (0);
seq__29646_29651 = G__29668;
chunk__29647_29652 = G__29669;
count__29648_29653 = G__29670;
i__29649_29654 = G__29671;
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
var len__4641__auto___29676 = arguments.length;
var i__4642__auto___29677 = (0);
while(true){
if((i__4642__auto___29677 < len__4641__auto___29676)){
args__4647__auto__.push((arguments[i__4642__auto___29677]));

var G__29678 = (i__4642__auto___29677 + (1));
i__4642__auto___29677 = G__29678;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29673){
var map__29674 = p__29673;
var map__29674__$1 = (((((!((map__29674 == null))))?(((((map__29674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29674):map__29674);
var opts = map__29674__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29672){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29672));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29679){if((e29679 instanceof Error)){
var e = e29679;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29679;

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
return (function (p__29680){
var map__29681 = p__29680;
var map__29681__$1 = (((((!((map__29681 == null))))?(((((map__29681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681):map__29681);
var msg_name = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563744778143

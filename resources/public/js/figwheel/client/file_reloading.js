// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27469_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27469_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27470 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27471 = null;
var count__27472 = (0);
var i__27473 = (0);
while(true){
if((i__27473 < count__27472)){
var n = cljs.core._nth.call(null,chunk__27471,i__27473);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27474 = seq__27470;
var G__27475 = chunk__27471;
var G__27476 = count__27472;
var G__27477 = (i__27473 + (1));
seq__27470 = G__27474;
chunk__27471 = G__27475;
count__27472 = G__27476;
i__27473 = G__27477;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27470);
if(temp__5720__auto__){
var seq__27470__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27470__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27470__$1);
var G__27478 = cljs.core.chunk_rest.call(null,seq__27470__$1);
var G__27479 = c__4461__auto__;
var G__27480 = cljs.core.count.call(null,c__4461__auto__);
var G__27481 = (0);
seq__27470 = G__27478;
chunk__27471 = G__27479;
count__27472 = G__27480;
i__27473 = G__27481;
continue;
} else {
var n = cljs.core.first.call(null,seq__27470__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27482 = cljs.core.next.call(null,seq__27470__$1);
var G__27483 = null;
var G__27484 = (0);
var G__27485 = (0);
seq__27470 = G__27482;
chunk__27471 = G__27483;
count__27472 = G__27484;
i__27473 = G__27485;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__27486){
var vec__27487 = p__27486;
var _ = cljs.core.nth.call(null,vec__27487,(0),null);
var v = cljs.core.nth.call(null,vec__27487,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27490){
var vec__27491 = p__27490;
var k = cljs.core.nth.call(null,vec__27491,(0),null);
var v = cljs.core.nth.call(null,vec__27491,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27503_27511 = cljs.core.seq.call(null,deps);
var chunk__27504_27512 = null;
var count__27505_27513 = (0);
var i__27506_27514 = (0);
while(true){
if((i__27506_27514 < count__27505_27513)){
var dep_27515 = cljs.core._nth.call(null,chunk__27504_27512,i__27506_27514);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27515;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27515));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27515,(depth + (1)),state);
} else {
}


var G__27516 = seq__27503_27511;
var G__27517 = chunk__27504_27512;
var G__27518 = count__27505_27513;
var G__27519 = (i__27506_27514 + (1));
seq__27503_27511 = G__27516;
chunk__27504_27512 = G__27517;
count__27505_27513 = G__27518;
i__27506_27514 = G__27519;
continue;
} else {
var temp__5720__auto___27520 = cljs.core.seq.call(null,seq__27503_27511);
if(temp__5720__auto___27520){
var seq__27503_27521__$1 = temp__5720__auto___27520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27503_27521__$1)){
var c__4461__auto___27522 = cljs.core.chunk_first.call(null,seq__27503_27521__$1);
var G__27523 = cljs.core.chunk_rest.call(null,seq__27503_27521__$1);
var G__27524 = c__4461__auto___27522;
var G__27525 = cljs.core.count.call(null,c__4461__auto___27522);
var G__27526 = (0);
seq__27503_27511 = G__27523;
chunk__27504_27512 = G__27524;
count__27505_27513 = G__27525;
i__27506_27514 = G__27526;
continue;
} else {
var dep_27527 = cljs.core.first.call(null,seq__27503_27521__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27527;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27527));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27527,(depth + (1)),state);
} else {
}


var G__27528 = cljs.core.next.call(null,seq__27503_27521__$1);
var G__27529 = null;
var G__27530 = (0);
var G__27531 = (0);
seq__27503_27511 = G__27528;
chunk__27504_27512 = G__27529;
count__27505_27513 = G__27530;
i__27506_27514 = G__27531;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27507){
var vec__27508 = p__27507;
var seq__27509 = cljs.core.seq.call(null,vec__27508);
var first__27510 = cljs.core.first.call(null,seq__27509);
var seq__27509__$1 = cljs.core.next.call(null,seq__27509);
var x = first__27510;
var xs = seq__27509__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27508,seq__27509,first__27510,seq__27509__$1,x,xs,get_deps__$1){
return (function (p1__27494_SHARP_){
return clojure.set.difference.call(null,p1__27494_SHARP_,x);
});})(vec__27508,seq__27509,first__27510,seq__27509__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27532 = cljs.core.seq.call(null,provides);
var chunk__27533 = null;
var count__27534 = (0);
var i__27535 = (0);
while(true){
if((i__27535 < count__27534)){
var prov = cljs.core._nth.call(null,chunk__27533,i__27535);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27536_27544 = cljs.core.seq.call(null,requires);
var chunk__27537_27545 = null;
var count__27538_27546 = (0);
var i__27539_27547 = (0);
while(true){
if((i__27539_27547 < count__27538_27546)){
var req_27548 = cljs.core._nth.call(null,chunk__27537_27545,i__27539_27547);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27548,prov);


var G__27549 = seq__27536_27544;
var G__27550 = chunk__27537_27545;
var G__27551 = count__27538_27546;
var G__27552 = (i__27539_27547 + (1));
seq__27536_27544 = G__27549;
chunk__27537_27545 = G__27550;
count__27538_27546 = G__27551;
i__27539_27547 = G__27552;
continue;
} else {
var temp__5720__auto___27553 = cljs.core.seq.call(null,seq__27536_27544);
if(temp__5720__auto___27553){
var seq__27536_27554__$1 = temp__5720__auto___27553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27536_27554__$1)){
var c__4461__auto___27555 = cljs.core.chunk_first.call(null,seq__27536_27554__$1);
var G__27556 = cljs.core.chunk_rest.call(null,seq__27536_27554__$1);
var G__27557 = c__4461__auto___27555;
var G__27558 = cljs.core.count.call(null,c__4461__auto___27555);
var G__27559 = (0);
seq__27536_27544 = G__27556;
chunk__27537_27545 = G__27557;
count__27538_27546 = G__27558;
i__27539_27547 = G__27559;
continue;
} else {
var req_27560 = cljs.core.first.call(null,seq__27536_27554__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27560,prov);


var G__27561 = cljs.core.next.call(null,seq__27536_27554__$1);
var G__27562 = null;
var G__27563 = (0);
var G__27564 = (0);
seq__27536_27544 = G__27561;
chunk__27537_27545 = G__27562;
count__27538_27546 = G__27563;
i__27539_27547 = G__27564;
continue;
}
} else {
}
}
break;
}


var G__27565 = seq__27532;
var G__27566 = chunk__27533;
var G__27567 = count__27534;
var G__27568 = (i__27535 + (1));
seq__27532 = G__27565;
chunk__27533 = G__27566;
count__27534 = G__27567;
i__27535 = G__27568;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27532);
if(temp__5720__auto__){
var seq__27532__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27532__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27532__$1);
var G__27569 = cljs.core.chunk_rest.call(null,seq__27532__$1);
var G__27570 = c__4461__auto__;
var G__27571 = cljs.core.count.call(null,c__4461__auto__);
var G__27572 = (0);
seq__27532 = G__27569;
chunk__27533 = G__27570;
count__27534 = G__27571;
i__27535 = G__27572;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27532__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27540_27573 = cljs.core.seq.call(null,requires);
var chunk__27541_27574 = null;
var count__27542_27575 = (0);
var i__27543_27576 = (0);
while(true){
if((i__27543_27576 < count__27542_27575)){
var req_27577 = cljs.core._nth.call(null,chunk__27541_27574,i__27543_27576);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27577,prov);


var G__27578 = seq__27540_27573;
var G__27579 = chunk__27541_27574;
var G__27580 = count__27542_27575;
var G__27581 = (i__27543_27576 + (1));
seq__27540_27573 = G__27578;
chunk__27541_27574 = G__27579;
count__27542_27575 = G__27580;
i__27543_27576 = G__27581;
continue;
} else {
var temp__5720__auto___27582__$1 = cljs.core.seq.call(null,seq__27540_27573);
if(temp__5720__auto___27582__$1){
var seq__27540_27583__$1 = temp__5720__auto___27582__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27540_27583__$1)){
var c__4461__auto___27584 = cljs.core.chunk_first.call(null,seq__27540_27583__$1);
var G__27585 = cljs.core.chunk_rest.call(null,seq__27540_27583__$1);
var G__27586 = c__4461__auto___27584;
var G__27587 = cljs.core.count.call(null,c__4461__auto___27584);
var G__27588 = (0);
seq__27540_27573 = G__27585;
chunk__27541_27574 = G__27586;
count__27542_27575 = G__27587;
i__27543_27576 = G__27588;
continue;
} else {
var req_27589 = cljs.core.first.call(null,seq__27540_27583__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27589,prov);


var G__27590 = cljs.core.next.call(null,seq__27540_27583__$1);
var G__27591 = null;
var G__27592 = (0);
var G__27593 = (0);
seq__27540_27573 = G__27590;
chunk__27541_27574 = G__27591;
count__27542_27575 = G__27592;
i__27543_27576 = G__27593;
continue;
}
} else {
}
}
break;
}


var G__27594 = cljs.core.next.call(null,seq__27532__$1);
var G__27595 = null;
var G__27596 = (0);
var G__27597 = (0);
seq__27532 = G__27594;
chunk__27533 = G__27595;
count__27534 = G__27596;
i__27535 = G__27597;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27598_27602 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27599_27603 = null;
var count__27600_27604 = (0);
var i__27601_27605 = (0);
while(true){
if((i__27601_27605 < count__27600_27604)){
var ns_27606 = cljs.core._nth.call(null,chunk__27599_27603,i__27601_27605);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27606);


var G__27607 = seq__27598_27602;
var G__27608 = chunk__27599_27603;
var G__27609 = count__27600_27604;
var G__27610 = (i__27601_27605 + (1));
seq__27598_27602 = G__27607;
chunk__27599_27603 = G__27608;
count__27600_27604 = G__27609;
i__27601_27605 = G__27610;
continue;
} else {
var temp__5720__auto___27611 = cljs.core.seq.call(null,seq__27598_27602);
if(temp__5720__auto___27611){
var seq__27598_27612__$1 = temp__5720__auto___27611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27598_27612__$1)){
var c__4461__auto___27613 = cljs.core.chunk_first.call(null,seq__27598_27612__$1);
var G__27614 = cljs.core.chunk_rest.call(null,seq__27598_27612__$1);
var G__27615 = c__4461__auto___27613;
var G__27616 = cljs.core.count.call(null,c__4461__auto___27613);
var G__27617 = (0);
seq__27598_27602 = G__27614;
chunk__27599_27603 = G__27615;
count__27600_27604 = G__27616;
i__27601_27605 = G__27617;
continue;
} else {
var ns_27618 = cljs.core.first.call(null,seq__27598_27612__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27618);


var G__27619 = cljs.core.next.call(null,seq__27598_27612__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27598_27602 = G__27619;
chunk__27599_27603 = G__27620;
count__27600_27604 = G__27621;
i__27601_27605 = G__27622;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27623__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27624__i = 0, G__27624__a = new Array(arguments.length -  0);
while (G__27624__i < G__27624__a.length) {G__27624__a[G__27624__i] = arguments[G__27624__i + 0]; ++G__27624__i;}
  args = new cljs.core.IndexedSeq(G__27624__a,0,null);
} 
return G__27623__delegate.call(this,args);};
G__27623.cljs$lang$maxFixedArity = 0;
G__27623.cljs$lang$applyTo = (function (arglist__27625){
var args = cljs.core.seq(arglist__27625);
return G__27623__delegate(args);
});
G__27623.cljs$core$IFn$_invoke$arity$variadic = G__27623__delegate;
return G__27623;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27626_SHARP_,p2__27627_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27626_SHARP_)),p2__27627_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27628_SHARP_,p2__27629_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27628_SHARP_),p2__27629_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27630 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27630.addCallback(((function (G__27630){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27630))
);

G__27630.addErrback(((function (G__27630){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27630))
);

return G__27630;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27631){if((e27631 instanceof Error)){
var e = e27631;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27631;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27632){if((e27632 instanceof Error)){
var e = e27632;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27632;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27633 = cljs.core._EQ_;
var expr__27634 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27633.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27634))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27633.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27634))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27633.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27634))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27633,expr__27634){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27633,expr__27634))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27636,callback){
var map__27637 = p__27636;
var map__27637__$1 = (((((!((map__27637 == null))))?(((((map__27637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27637):map__27637);
var file_msg = map__27637__$1;
var request_url = cljs.core.get.call(null,map__27637__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27637,map__27637__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27637,map__27637__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__){
return (function (state_27675){
var state_val_27676 = (state_27675[(1)]);
if((state_val_27676 === (7))){
var inst_27671 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27677_27703 = state_27675__$1;
(statearr_27677_27703[(2)] = inst_27671);

(statearr_27677_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (1))){
var state_27675__$1 = state_27675;
var statearr_27678_27704 = state_27675__$1;
(statearr_27678_27704[(2)] = null);

(statearr_27678_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (4))){
var inst_27641 = (state_27675[(7)]);
var inst_27641__$1 = (state_27675[(2)]);
var state_27675__$1 = (function (){var statearr_27679 = state_27675;
(statearr_27679[(7)] = inst_27641__$1);

return statearr_27679;
})();
if(cljs.core.truth_(inst_27641__$1)){
var statearr_27680_27705 = state_27675__$1;
(statearr_27680_27705[(1)] = (5));

} else {
var statearr_27681_27706 = state_27675__$1;
(statearr_27681_27706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (15))){
var inst_27656 = (state_27675[(8)]);
var inst_27654 = (state_27675[(9)]);
var inst_27658 = inst_27656.call(null,inst_27654);
var state_27675__$1 = state_27675;
var statearr_27682_27707 = state_27675__$1;
(statearr_27682_27707[(2)] = inst_27658);

(statearr_27682_27707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (13))){
var inst_27665 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27683_27708 = state_27675__$1;
(statearr_27683_27708[(2)] = inst_27665);

(statearr_27683_27708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (6))){
var state_27675__$1 = state_27675;
var statearr_27684_27709 = state_27675__$1;
(statearr_27684_27709[(2)] = null);

(statearr_27684_27709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (17))){
var inst_27662 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
var statearr_27685_27710 = state_27675__$1;
(statearr_27685_27710[(2)] = inst_27662);

(statearr_27685_27710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (3))){
var inst_27673 = (state_27675[(2)]);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27675__$1,inst_27673);
} else {
if((state_val_27676 === (12))){
var state_27675__$1 = state_27675;
var statearr_27686_27711 = state_27675__$1;
(statearr_27686_27711[(2)] = null);

(statearr_27686_27711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (2))){
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27675__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27676 === (11))){
var inst_27646 = (state_27675[(10)]);
var inst_27652 = figwheel.client.file_reloading.blocking_load.call(null,inst_27646);
var state_27675__$1 = state_27675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27675__$1,(14),inst_27652);
} else {
if((state_val_27676 === (9))){
var inst_27646 = (state_27675[(10)]);
var state_27675__$1 = state_27675;
if(cljs.core.truth_(inst_27646)){
var statearr_27687_27712 = state_27675__$1;
(statearr_27687_27712[(1)] = (11));

} else {
var statearr_27688_27713 = state_27675__$1;
(statearr_27688_27713[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (5))){
var inst_27647 = (state_27675[(11)]);
var inst_27641 = (state_27675[(7)]);
var inst_27646 = cljs.core.nth.call(null,inst_27641,(0),null);
var inst_27647__$1 = cljs.core.nth.call(null,inst_27641,(1),null);
var state_27675__$1 = (function (){var statearr_27689 = state_27675;
(statearr_27689[(10)] = inst_27646);

(statearr_27689[(11)] = inst_27647__$1);

return statearr_27689;
})();
if(cljs.core.truth_(inst_27647__$1)){
var statearr_27690_27714 = state_27675__$1;
(statearr_27690_27714[(1)] = (8));

} else {
var statearr_27691_27715 = state_27675__$1;
(statearr_27691_27715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (14))){
var inst_27646 = (state_27675[(10)]);
var inst_27656 = (state_27675[(8)]);
var inst_27654 = (state_27675[(2)]);
var inst_27655 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27656__$1 = cljs.core.get.call(null,inst_27655,inst_27646);
var state_27675__$1 = (function (){var statearr_27692 = state_27675;
(statearr_27692[(8)] = inst_27656__$1);

(statearr_27692[(9)] = inst_27654);

return statearr_27692;
})();
if(cljs.core.truth_(inst_27656__$1)){
var statearr_27693_27716 = state_27675__$1;
(statearr_27693_27716[(1)] = (15));

} else {
var statearr_27694_27717 = state_27675__$1;
(statearr_27694_27717[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (16))){
var inst_27654 = (state_27675[(9)]);
var inst_27660 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27654);
var state_27675__$1 = state_27675;
var statearr_27695_27718 = state_27675__$1;
(statearr_27695_27718[(2)] = inst_27660);

(statearr_27695_27718[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (10))){
var inst_27667 = (state_27675[(2)]);
var state_27675__$1 = (function (){var statearr_27696 = state_27675;
(statearr_27696[(12)] = inst_27667);

return statearr_27696;
})();
var statearr_27697_27719 = state_27675__$1;
(statearr_27697_27719[(2)] = null);

(statearr_27697_27719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27676 === (8))){
var inst_27647 = (state_27675[(11)]);
var inst_27649 = eval(inst_27647);
var state_27675__$1 = state_27675;
var statearr_27698_27720 = state_27675__$1;
(statearr_27698_27720[(2)] = inst_27649);

(statearr_27698_27720[(1)] = (10));


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
});})(c__24119__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24025__auto__ = null;
var figwheel$client$file_reloading$state_machine__24025__auto____0 = (function (){
var statearr_27699 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27699[(0)] = figwheel$client$file_reloading$state_machine__24025__auto__);

(statearr_27699[(1)] = (1));

return statearr_27699;
});
var figwheel$client$file_reloading$state_machine__24025__auto____1 = (function (state_27675){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_27675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e27700){if((e27700 instanceof Object)){
var ex__24028__auto__ = e27700;
var statearr_27701_27721 = state_27675;
(statearr_27701_27721[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27722 = state_27675;
state_27675 = G__27722;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24025__auto__ = function(state_27675){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24025__auto____1.call(this,state_27675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24025__auto____0;
figwheel$client$file_reloading$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24025__auto____1;
return figwheel$client$file_reloading$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__))
})();
var state__24121__auto__ = (function (){var statearr_27702 = f__24120__auto__.call(null);
(statearr_27702[(6)] = c__24119__auto__);

return statearr_27702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__))
);

return c__24119__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27724 = arguments.length;
switch (G__27724) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27726,callback){
var map__27727 = p__27726;
var map__27727__$1 = (((((!((map__27727 == null))))?(((((map__27727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27727):map__27727);
var file_msg = map__27727__$1;
var namespace = cljs.core.get.call(null,map__27727__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27727,map__27727__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27727,map__27727__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27729){
var map__27730 = p__27729;
var map__27730__$1 = (((((!((map__27730 == null))))?(((((map__27730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27730):map__27730);
var file_msg = map__27730__$1;
var namespace = cljs.core.get.call(null,map__27730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27732){
var map__27733 = p__27732;
var map__27733__$1 = (((((!((map__27733 == null))))?(((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27733):map__27733);
var file_msg = map__27733__$1;
var namespace = cljs.core.get.call(null,map__27733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27735,callback){
var map__27736 = p__27735;
var map__27736__$1 = (((((!((map__27736 == null))))?(((((map__27736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27736):map__27736);
var file_msg = map__27736__$1;
var request_url = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24119__auto___27786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___27786,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___27786,out){
return (function (state_27771){
var state_val_27772 = (state_27771[(1)]);
if((state_val_27772 === (1))){
var inst_27745 = cljs.core.seq.call(null,files);
var inst_27746 = cljs.core.first.call(null,inst_27745);
var inst_27747 = cljs.core.next.call(null,inst_27745);
var inst_27748 = files;
var state_27771__$1 = (function (){var statearr_27773 = state_27771;
(statearr_27773[(7)] = inst_27746);

(statearr_27773[(8)] = inst_27748);

(statearr_27773[(9)] = inst_27747);

return statearr_27773;
})();
var statearr_27774_27787 = state_27771__$1;
(statearr_27774_27787[(2)] = null);

(statearr_27774_27787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (2))){
var inst_27748 = (state_27771[(8)]);
var inst_27754 = (state_27771[(10)]);
var inst_27753 = cljs.core.seq.call(null,inst_27748);
var inst_27754__$1 = cljs.core.first.call(null,inst_27753);
var inst_27755 = cljs.core.next.call(null,inst_27753);
var inst_27756 = (inst_27754__$1 == null);
var inst_27757 = cljs.core.not.call(null,inst_27756);
var state_27771__$1 = (function (){var statearr_27775 = state_27771;
(statearr_27775[(11)] = inst_27755);

(statearr_27775[(10)] = inst_27754__$1);

return statearr_27775;
})();
if(inst_27757){
var statearr_27776_27788 = state_27771__$1;
(statearr_27776_27788[(1)] = (4));

} else {
var statearr_27777_27789 = state_27771__$1;
(statearr_27777_27789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (3))){
var inst_27769 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27771__$1,inst_27769);
} else {
if((state_val_27772 === (4))){
var inst_27754 = (state_27771[(10)]);
var inst_27759 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27754);
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27771__$1,(7),inst_27759);
} else {
if((state_val_27772 === (5))){
var inst_27765 = cljs.core.async.close_BANG_.call(null,out);
var state_27771__$1 = state_27771;
var statearr_27778_27790 = state_27771__$1;
(statearr_27778_27790[(2)] = inst_27765);

(statearr_27778_27790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (6))){
var inst_27767 = (state_27771[(2)]);
var state_27771__$1 = state_27771;
var statearr_27779_27791 = state_27771__$1;
(statearr_27779_27791[(2)] = inst_27767);

(statearr_27779_27791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27772 === (7))){
var inst_27755 = (state_27771[(11)]);
var inst_27761 = (state_27771[(2)]);
var inst_27762 = cljs.core.async.put_BANG_.call(null,out,inst_27761);
var inst_27748 = inst_27755;
var state_27771__$1 = (function (){var statearr_27780 = state_27771;
(statearr_27780[(12)] = inst_27762);

(statearr_27780[(8)] = inst_27748);

return statearr_27780;
})();
var statearr_27781_27792 = state_27771__$1;
(statearr_27781_27792[(2)] = null);

(statearr_27781_27792[(1)] = (2));


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
});})(c__24119__auto___27786,out))
;
return ((function (switch__24024__auto__,c__24119__auto___27786,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____0 = (function (){
var statearr_27782 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27782[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__);

(statearr_27782[(1)] = (1));

return statearr_27782;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____1 = (function (state_27771){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_27771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e27783){if((e27783 instanceof Object)){
var ex__24028__auto__ = e27783;
var statearr_27784_27793 = state_27771;
(statearr_27784_27793[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27794 = state_27771;
state_27771 = G__27794;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__ = function(state_27771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____1.call(this,state_27771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___27786,out))
})();
var state__24121__auto__ = (function (){var statearr_27785 = f__24120__auto__.call(null);
(statearr_27785[(6)] = c__24119__auto___27786);

return statearr_27785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___27786,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27795,opts){
var map__27796 = p__27795;
var map__27796__$1 = (((((!((map__27796 == null))))?(((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var eval_body = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27798){var e = e27798;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27799_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27799_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27800){
var vec__27801 = p__27800;
var k = cljs.core.nth.call(null,vec__27801,(0),null);
var v = cljs.core.nth.call(null,vec__27801,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27804){
var vec__27805 = p__27804;
var k = cljs.core.nth.call(null,vec__27805,(0),null);
var v = cljs.core.nth.call(null,vec__27805,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27811,p__27812){
var map__27813 = p__27811;
var map__27813__$1 = (((((!((map__27813 == null))))?(((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var opts = map__27813__$1;
var before_jsload = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27814 = p__27812;
var map__27814__$1 = (((((!((map__27814 == null))))?(((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var msg = map__27814__$1;
var files = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27968){
var state_val_27969 = (state_27968[(1)]);
if((state_val_27969 === (7))){
var inst_27830 = (state_27968[(7)]);
var inst_27828 = (state_27968[(8)]);
var inst_27831 = (state_27968[(9)]);
var inst_27829 = (state_27968[(10)]);
var inst_27836 = cljs.core._nth.call(null,inst_27829,inst_27831);
var inst_27837 = figwheel.client.file_reloading.eval_body.call(null,inst_27836,opts);
var inst_27838 = (inst_27831 + (1));
var tmp27970 = inst_27830;
var tmp27971 = inst_27828;
var tmp27972 = inst_27829;
var inst_27828__$1 = tmp27971;
var inst_27829__$1 = tmp27972;
var inst_27830__$1 = tmp27970;
var inst_27831__$1 = inst_27838;
var state_27968__$1 = (function (){var statearr_27973 = state_27968;
(statearr_27973[(11)] = inst_27837);

(statearr_27973[(7)] = inst_27830__$1);

(statearr_27973[(8)] = inst_27828__$1);

(statearr_27973[(9)] = inst_27831__$1);

(statearr_27973[(10)] = inst_27829__$1);

return statearr_27973;
})();
var statearr_27974_28057 = state_27968__$1;
(statearr_27974_28057[(2)] = null);

(statearr_27974_28057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (20))){
var inst_27871 = (state_27968[(12)]);
var inst_27879 = figwheel.client.file_reloading.sort_files.call(null,inst_27871);
var state_27968__$1 = state_27968;
var statearr_27975_28058 = state_27968__$1;
(statearr_27975_28058[(2)] = inst_27879);

(statearr_27975_28058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (27))){
var state_27968__$1 = state_27968;
var statearr_27976_28059 = state_27968__$1;
(statearr_27976_28059[(2)] = null);

(statearr_27976_28059[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (1))){
var inst_27820 = (state_27968[(13)]);
var inst_27817 = before_jsload.call(null,files);
var inst_27818 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27819 = (function (){return ((function (inst_27820,inst_27817,inst_27818,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27808_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27808_SHARP_);
});
;})(inst_27820,inst_27817,inst_27818,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27820__$1 = cljs.core.filter.call(null,inst_27819,files);
var inst_27821 = cljs.core.not_empty.call(null,inst_27820__$1);
var state_27968__$1 = (function (){var statearr_27977 = state_27968;
(statearr_27977[(13)] = inst_27820__$1);

(statearr_27977[(14)] = inst_27817);

(statearr_27977[(15)] = inst_27818);

return statearr_27977;
})();
if(cljs.core.truth_(inst_27821)){
var statearr_27978_28060 = state_27968__$1;
(statearr_27978_28060[(1)] = (2));

} else {
var statearr_27979_28061 = state_27968__$1;
(statearr_27979_28061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (24))){
var state_27968__$1 = state_27968;
var statearr_27980_28062 = state_27968__$1;
(statearr_27980_28062[(2)] = null);

(statearr_27980_28062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (39))){
var inst_27921 = (state_27968[(16)]);
var state_27968__$1 = state_27968;
var statearr_27981_28063 = state_27968__$1;
(statearr_27981_28063[(2)] = inst_27921);

(statearr_27981_28063[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (46))){
var inst_27963 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27982_28064 = state_27968__$1;
(statearr_27982_28064[(2)] = inst_27963);

(statearr_27982_28064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (4))){
var inst_27865 = (state_27968[(2)]);
var inst_27866 = cljs.core.List.EMPTY;
var inst_27867 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27866);
var inst_27868 = (function (){return ((function (inst_27865,inst_27866,inst_27867,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27809_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27809_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27809_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27809_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_27865,inst_27866,inst_27867,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27869 = cljs.core.filter.call(null,inst_27868,files);
var inst_27870 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27871 = cljs.core.concat.call(null,inst_27869,inst_27870);
var state_27968__$1 = (function (){var statearr_27983 = state_27968;
(statearr_27983[(17)] = inst_27867);

(statearr_27983[(18)] = inst_27865);

(statearr_27983[(12)] = inst_27871);

return statearr_27983;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27984_28065 = state_27968__$1;
(statearr_27984_28065[(1)] = (16));

} else {
var statearr_27985_28066 = state_27968__$1;
(statearr_27985_28066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (15))){
var inst_27855 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_27986_28067 = state_27968__$1;
(statearr_27986_28067[(2)] = inst_27855);

(statearr_27986_28067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (21))){
var inst_27881 = (state_27968[(19)]);
var inst_27881__$1 = (state_27968[(2)]);
var inst_27882 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27881__$1);
var state_27968__$1 = (function (){var statearr_27987 = state_27968;
(statearr_27987[(19)] = inst_27881__$1);

return statearr_27987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27968__$1,(22),inst_27882);
} else {
if((state_val_27969 === (31))){
var inst_27966 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27968__$1,inst_27966);
} else {
if((state_val_27969 === (32))){
var inst_27921 = (state_27968[(16)]);
var inst_27926 = inst_27921.cljs$lang$protocol_mask$partition0$;
var inst_27927 = (inst_27926 & (64));
var inst_27928 = inst_27921.cljs$core$ISeq$;
var inst_27929 = (cljs.core.PROTOCOL_SENTINEL === inst_27928);
var inst_27930 = ((inst_27927) || (inst_27929));
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27930)){
var statearr_27988_28068 = state_27968__$1;
(statearr_27988_28068[(1)] = (35));

} else {
var statearr_27989_28069 = state_27968__$1;
(statearr_27989_28069[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (40))){
var inst_27943 = (state_27968[(20)]);
var inst_27942 = (state_27968[(2)]);
var inst_27943__$1 = cljs.core.get.call(null,inst_27942,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27944 = cljs.core.get.call(null,inst_27942,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27945 = cljs.core.not_empty.call(null,inst_27943__$1);
var state_27968__$1 = (function (){var statearr_27990 = state_27968;
(statearr_27990[(20)] = inst_27943__$1);

(statearr_27990[(21)] = inst_27944);

return statearr_27990;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_27991_28070 = state_27968__$1;
(statearr_27991_28070[(1)] = (41));

} else {
var statearr_27992_28071 = state_27968__$1;
(statearr_27992_28071[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (33))){
var state_27968__$1 = state_27968;
var statearr_27993_28072 = state_27968__$1;
(statearr_27993_28072[(2)] = false);

(statearr_27993_28072[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (13))){
var inst_27841 = (state_27968[(22)]);
var inst_27845 = cljs.core.chunk_first.call(null,inst_27841);
var inst_27846 = cljs.core.chunk_rest.call(null,inst_27841);
var inst_27847 = cljs.core.count.call(null,inst_27845);
var inst_27828 = inst_27846;
var inst_27829 = inst_27845;
var inst_27830 = inst_27847;
var inst_27831 = (0);
var state_27968__$1 = (function (){var statearr_27994 = state_27968;
(statearr_27994[(7)] = inst_27830);

(statearr_27994[(8)] = inst_27828);

(statearr_27994[(9)] = inst_27831);

(statearr_27994[(10)] = inst_27829);

return statearr_27994;
})();
var statearr_27995_28073 = state_27968__$1;
(statearr_27995_28073[(2)] = null);

(statearr_27995_28073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (22))){
var inst_27889 = (state_27968[(23)]);
var inst_27881 = (state_27968[(19)]);
var inst_27884 = (state_27968[(24)]);
var inst_27885 = (state_27968[(25)]);
var inst_27884__$1 = (state_27968[(2)]);
var inst_27885__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27884__$1);
var inst_27886 = (function (){var all_files = inst_27881;
var res_SINGLEQUOTE_ = inst_27884__$1;
var res = inst_27885__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27889,inst_27881,inst_27884,inst_27885,inst_27884__$1,inst_27885__$1,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27810_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27810_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27889,inst_27881,inst_27884,inst_27885,inst_27884__$1,inst_27885__$1,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27887 = cljs.core.filter.call(null,inst_27886,inst_27884__$1);
var inst_27888 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27889__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27888);
var inst_27890 = cljs.core.not_empty.call(null,inst_27889__$1);
var state_27968__$1 = (function (){var statearr_27996 = state_27968;
(statearr_27996[(23)] = inst_27889__$1);

(statearr_27996[(26)] = inst_27887);

(statearr_27996[(24)] = inst_27884__$1);

(statearr_27996[(25)] = inst_27885__$1);

return statearr_27996;
})();
if(cljs.core.truth_(inst_27890)){
var statearr_27997_28074 = state_27968__$1;
(statearr_27997_28074[(1)] = (23));

} else {
var statearr_27998_28075 = state_27968__$1;
(statearr_27998_28075[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (36))){
var state_27968__$1 = state_27968;
var statearr_27999_28076 = state_27968__$1;
(statearr_27999_28076[(2)] = false);

(statearr_27999_28076[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (41))){
var inst_27943 = (state_27968[(20)]);
var inst_27947 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27948 = cljs.core.map.call(null,inst_27947,inst_27943);
var inst_27949 = cljs.core.pr_str.call(null,inst_27948);
var inst_27950 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27949)].join('');
var inst_27951 = figwheel.client.utils.log.call(null,inst_27950);
var state_27968__$1 = state_27968;
var statearr_28000_28077 = state_27968__$1;
(statearr_28000_28077[(2)] = inst_27951);

(statearr_28000_28077[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (43))){
var inst_27944 = (state_27968[(21)]);
var inst_27954 = (state_27968[(2)]);
var inst_27955 = cljs.core.not_empty.call(null,inst_27944);
var state_27968__$1 = (function (){var statearr_28001 = state_27968;
(statearr_28001[(27)] = inst_27954);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27955)){
var statearr_28002_28078 = state_27968__$1;
(statearr_28002_28078[(1)] = (44));

} else {
var statearr_28003_28079 = state_27968__$1;
(statearr_28003_28079[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (29))){
var inst_27889 = (state_27968[(23)]);
var inst_27887 = (state_27968[(26)]);
var inst_27921 = (state_27968[(16)]);
var inst_27881 = (state_27968[(19)]);
var inst_27884 = (state_27968[(24)]);
var inst_27885 = (state_27968[(25)]);
var inst_27917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27920 = (function (){var all_files = inst_27881;
var res_SINGLEQUOTE_ = inst_27884;
var res = inst_27885;
var files_not_loaded = inst_27887;
var dependencies_that_loaded = inst_27889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27921,inst_27881,inst_27884,inst_27885,inst_27917,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27919){
var map__28004 = p__27919;
var map__28004__$1 = (((((!((map__28004 == null))))?(((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var namespace = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27921,inst_27881,inst_27884,inst_27885,inst_27917,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27921__$1 = cljs.core.group_by.call(null,inst_27920,inst_27887);
var inst_27923 = (inst_27921__$1 == null);
var inst_27924 = cljs.core.not.call(null,inst_27923);
var state_27968__$1 = (function (){var statearr_28006 = state_27968;
(statearr_28006[(16)] = inst_27921__$1);

(statearr_28006[(28)] = inst_27917);

return statearr_28006;
})();
if(inst_27924){
var statearr_28007_28080 = state_27968__$1;
(statearr_28007_28080[(1)] = (32));

} else {
var statearr_28008_28081 = state_27968__$1;
(statearr_28008_28081[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (44))){
var inst_27944 = (state_27968[(21)]);
var inst_27957 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27944);
var inst_27958 = cljs.core.pr_str.call(null,inst_27957);
var inst_27959 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27958)].join('');
var inst_27960 = figwheel.client.utils.log.call(null,inst_27959);
var state_27968__$1 = state_27968;
var statearr_28009_28082 = state_27968__$1;
(statearr_28009_28082[(2)] = inst_27960);

(statearr_28009_28082[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (6))){
var inst_27862 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28010_28083 = state_27968__$1;
(statearr_28010_28083[(2)] = inst_27862);

(statearr_28010_28083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (28))){
var inst_27887 = (state_27968[(26)]);
var inst_27914 = (state_27968[(2)]);
var inst_27915 = cljs.core.not_empty.call(null,inst_27887);
var state_27968__$1 = (function (){var statearr_28011 = state_27968;
(statearr_28011[(29)] = inst_27914);

return statearr_28011;
})();
if(cljs.core.truth_(inst_27915)){
var statearr_28012_28084 = state_27968__$1;
(statearr_28012_28084[(1)] = (29));

} else {
var statearr_28013_28085 = state_27968__$1;
(statearr_28013_28085[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (25))){
var inst_27885 = (state_27968[(25)]);
var inst_27901 = (state_27968[(2)]);
var inst_27902 = cljs.core.not_empty.call(null,inst_27885);
var state_27968__$1 = (function (){var statearr_28014 = state_27968;
(statearr_28014[(30)] = inst_27901);

return statearr_28014;
})();
if(cljs.core.truth_(inst_27902)){
var statearr_28015_28086 = state_27968__$1;
(statearr_28015_28086[(1)] = (26));

} else {
var statearr_28016_28087 = state_27968__$1;
(statearr_28016_28087[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (34))){
var inst_27937 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27937)){
var statearr_28017_28088 = state_27968__$1;
(statearr_28017_28088[(1)] = (38));

} else {
var statearr_28018_28089 = state_27968__$1;
(statearr_28018_28089[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (17))){
var state_27968__$1 = state_27968;
var statearr_28019_28090 = state_27968__$1;
(statearr_28019_28090[(2)] = recompile_dependents);

(statearr_28019_28090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (3))){
var state_27968__$1 = state_27968;
var statearr_28020_28091 = state_27968__$1;
(statearr_28020_28091[(2)] = null);

(statearr_28020_28091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (12))){
var inst_27858 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28021_28092 = state_27968__$1;
(statearr_28021_28092[(2)] = inst_27858);

(statearr_28021_28092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (2))){
var inst_27820 = (state_27968[(13)]);
var inst_27827 = cljs.core.seq.call(null,inst_27820);
var inst_27828 = inst_27827;
var inst_27829 = null;
var inst_27830 = (0);
var inst_27831 = (0);
var state_27968__$1 = (function (){var statearr_28022 = state_27968;
(statearr_28022[(7)] = inst_27830);

(statearr_28022[(8)] = inst_27828);

(statearr_28022[(9)] = inst_27831);

(statearr_28022[(10)] = inst_27829);

return statearr_28022;
})();
var statearr_28023_28093 = state_27968__$1;
(statearr_28023_28093[(2)] = null);

(statearr_28023_28093[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (23))){
var inst_27889 = (state_27968[(23)]);
var inst_27887 = (state_27968[(26)]);
var inst_27881 = (state_27968[(19)]);
var inst_27884 = (state_27968[(24)]);
var inst_27885 = (state_27968[(25)]);
var inst_27892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27894 = (function (){var all_files = inst_27881;
var res_SINGLEQUOTE_ = inst_27884;
var res = inst_27885;
var files_not_loaded = inst_27887;
var dependencies_that_loaded = inst_27889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27892,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27893){
var map__28024 = p__27893;
var map__28024__$1 = (((((!((map__28024 == null))))?(((((map__28024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28024):map__28024);
var request_url = cljs.core.get.call(null,map__28024__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27892,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27895 = cljs.core.reverse.call(null,inst_27889);
var inst_27896 = cljs.core.map.call(null,inst_27894,inst_27895);
var inst_27897 = cljs.core.pr_str.call(null,inst_27896);
var inst_27898 = figwheel.client.utils.log.call(null,inst_27897);
var state_27968__$1 = (function (){var statearr_28026 = state_27968;
(statearr_28026[(31)] = inst_27892);

return statearr_28026;
})();
var statearr_28027_28094 = state_27968__$1;
(statearr_28027_28094[(2)] = inst_27898);

(statearr_28027_28094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (35))){
var state_27968__$1 = state_27968;
var statearr_28028_28095 = state_27968__$1;
(statearr_28028_28095[(2)] = true);

(statearr_28028_28095[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (19))){
var inst_27871 = (state_27968[(12)]);
var inst_27877 = figwheel.client.file_reloading.expand_files.call(null,inst_27871);
var state_27968__$1 = state_27968;
var statearr_28029_28096 = state_27968__$1;
(statearr_28029_28096[(2)] = inst_27877);

(statearr_28029_28096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (11))){
var state_27968__$1 = state_27968;
var statearr_28030_28097 = state_27968__$1;
(statearr_28030_28097[(2)] = null);

(statearr_28030_28097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (9))){
var inst_27860 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28031_28098 = state_27968__$1;
(statearr_28031_28098[(2)] = inst_27860);

(statearr_28031_28098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (5))){
var inst_27830 = (state_27968[(7)]);
var inst_27831 = (state_27968[(9)]);
var inst_27833 = (inst_27831 < inst_27830);
var inst_27834 = inst_27833;
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27834)){
var statearr_28032_28099 = state_27968__$1;
(statearr_28032_28099[(1)] = (7));

} else {
var statearr_28033_28100 = state_27968__$1;
(statearr_28033_28100[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (14))){
var inst_27841 = (state_27968[(22)]);
var inst_27850 = cljs.core.first.call(null,inst_27841);
var inst_27851 = figwheel.client.file_reloading.eval_body.call(null,inst_27850,opts);
var inst_27852 = cljs.core.next.call(null,inst_27841);
var inst_27828 = inst_27852;
var inst_27829 = null;
var inst_27830 = (0);
var inst_27831 = (0);
var state_27968__$1 = (function (){var statearr_28034 = state_27968;
(statearr_28034[(32)] = inst_27851);

(statearr_28034[(7)] = inst_27830);

(statearr_28034[(8)] = inst_27828);

(statearr_28034[(9)] = inst_27831);

(statearr_28034[(10)] = inst_27829);

return statearr_28034;
})();
var statearr_28035_28101 = state_27968__$1;
(statearr_28035_28101[(2)] = null);

(statearr_28035_28101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (45))){
var state_27968__$1 = state_27968;
var statearr_28036_28102 = state_27968__$1;
(statearr_28036_28102[(2)] = null);

(statearr_28036_28102[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (26))){
var inst_27889 = (state_27968[(23)]);
var inst_27887 = (state_27968[(26)]);
var inst_27881 = (state_27968[(19)]);
var inst_27884 = (state_27968[(24)]);
var inst_27885 = (state_27968[(25)]);
var inst_27904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27906 = (function (){var all_files = inst_27881;
var res_SINGLEQUOTE_ = inst_27884;
var res = inst_27885;
var files_not_loaded = inst_27887;
var dependencies_that_loaded = inst_27889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27904,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27905){
var map__28037 = p__27905;
var map__28037__$1 = (((((!((map__28037 == null))))?(((((map__28037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var namespace = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27904,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27907 = cljs.core.map.call(null,inst_27906,inst_27885);
var inst_27908 = cljs.core.pr_str.call(null,inst_27907);
var inst_27909 = figwheel.client.utils.log.call(null,inst_27908);
var inst_27910 = (function (){var all_files = inst_27881;
var res_SINGLEQUOTE_ = inst_27884;
var res = inst_27885;
var files_not_loaded = inst_27887;
var dependencies_that_loaded = inst_27889;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27904,inst_27906,inst_27907,inst_27908,inst_27909,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27889,inst_27887,inst_27881,inst_27884,inst_27885,inst_27904,inst_27906,inst_27907,inst_27908,inst_27909,state_val_27969,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27911 = setTimeout(inst_27910,(10));
var state_27968__$1 = (function (){var statearr_28039 = state_27968;
(statearr_28039[(33)] = inst_27909);

(statearr_28039[(34)] = inst_27904);

return statearr_28039;
})();
var statearr_28040_28103 = state_27968__$1;
(statearr_28040_28103[(2)] = inst_27911);

(statearr_28040_28103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (16))){
var state_27968__$1 = state_27968;
var statearr_28041_28104 = state_27968__$1;
(statearr_28041_28104[(2)] = reload_dependents);

(statearr_28041_28104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (38))){
var inst_27921 = (state_27968[(16)]);
var inst_27939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27921);
var state_27968__$1 = state_27968;
var statearr_28042_28105 = state_27968__$1;
(statearr_28042_28105[(2)] = inst_27939);

(statearr_28042_28105[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (30))){
var state_27968__$1 = state_27968;
var statearr_28043_28106 = state_27968__$1;
(statearr_28043_28106[(2)] = null);

(statearr_28043_28106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (10))){
var inst_27841 = (state_27968[(22)]);
var inst_27843 = cljs.core.chunked_seq_QMARK_.call(null,inst_27841);
var state_27968__$1 = state_27968;
if(inst_27843){
var statearr_28044_28107 = state_27968__$1;
(statearr_28044_28107[(1)] = (13));

} else {
var statearr_28045_28108 = state_27968__$1;
(statearr_28045_28108[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (18))){
var inst_27875 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
if(cljs.core.truth_(inst_27875)){
var statearr_28046_28109 = state_27968__$1;
(statearr_28046_28109[(1)] = (19));

} else {
var statearr_28047_28110 = state_27968__$1;
(statearr_28047_28110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (42))){
var state_27968__$1 = state_27968;
var statearr_28048_28111 = state_27968__$1;
(statearr_28048_28111[(2)] = null);

(statearr_28048_28111[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (37))){
var inst_27934 = (state_27968[(2)]);
var state_27968__$1 = state_27968;
var statearr_28049_28112 = state_27968__$1;
(statearr_28049_28112[(2)] = inst_27934);

(statearr_28049_28112[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27969 === (8))){
var inst_27841 = (state_27968[(22)]);
var inst_27828 = (state_27968[(8)]);
var inst_27841__$1 = cljs.core.seq.call(null,inst_27828);
var state_27968__$1 = (function (){var statearr_28050 = state_27968;
(statearr_28050[(22)] = inst_27841__$1);

return statearr_28050;
})();
if(inst_27841__$1){
var statearr_28051_28113 = state_27968__$1;
(statearr_28051_28113[(1)] = (10));

} else {
var statearr_28052_28114 = state_27968__$1;
(statearr_28052_28114[(1)] = (11));

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
});})(c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24024__auto__,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____0 = (function (){
var statearr_28053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28053[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__);

(statearr_28053[(1)] = (1));

return statearr_28053;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____1 = (function (state_27968){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_27968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e28054){if((e28054 instanceof Object)){
var ex__24028__auto__ = e28054;
var statearr_28055_28115 = state_27968;
(statearr_28055_28115[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28116 = state_27968;
state_27968 = G__28116;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__ = function(state_27968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____1.call(this,state_27968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24121__auto__ = (function (){var statearr_28056 = f__24120__auto__.call(null);
(statearr_28056[(6)] = c__24119__auto__);

return statearr_28056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__,map__27813,map__27813__$1,opts,before_jsload,on_jsload,reload_dependents,map__27814,map__27814__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24119__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28119,link){
var map__28120 = p__28119;
var map__28120__$1 = (((((!((map__28120 == null))))?(((((map__28120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28120):map__28120);
var file = cljs.core.get.call(null,map__28120__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28120,map__28120__$1,file){
return (function (p1__28117_SHARP_,p2__28118_SHARP_){
if(cljs.core._EQ_.call(null,p1__28117_SHARP_,p2__28118_SHARP_)){
return p1__28117_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28120,map__28120__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28123){
var map__28124 = p__28123;
var map__28124__$1 = (((((!((map__28124 == null))))?(((((map__28124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var match_length = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28122_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28122_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28126_SHARP_,p2__28127_SHARP_){
return cljs.core.assoc.call(null,p1__28126_SHARP_,cljs.core.get.call(null,p2__28127_SHARP_,key),p2__28127_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28128 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28128);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28128);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28129,p__28130){
var map__28131 = p__28129;
var map__28131__$1 = (((((!((map__28131 == null))))?(((((map__28131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28131):map__28131);
var on_cssload = cljs.core.get.call(null,map__28131__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28132 = p__28130;
var map__28132__$1 = (((((!((map__28132 == null))))?(((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var files_msg = map__28132__$1;
var files = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563744776254

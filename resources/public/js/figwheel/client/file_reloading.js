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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27470_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27470_SHARP_));
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
var seq__27471 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27472 = null;
var count__27473 = (0);
var i__27474 = (0);
while(true){
if((i__27474 < count__27473)){
var n = cljs.core._nth.call(null,chunk__27472,i__27474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27475 = seq__27471;
var G__27476 = chunk__27472;
var G__27477 = count__27473;
var G__27478 = (i__27474 + (1));
seq__27471 = G__27475;
chunk__27472 = G__27476;
count__27473 = G__27477;
i__27474 = G__27478;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27471);
if(temp__5720__auto__){
var seq__27471__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27471__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27471__$1);
var G__27479 = cljs.core.chunk_rest.call(null,seq__27471__$1);
var G__27480 = c__4461__auto__;
var G__27481 = cljs.core.count.call(null,c__4461__auto__);
var G__27482 = (0);
seq__27471 = G__27479;
chunk__27472 = G__27480;
count__27473 = G__27481;
i__27474 = G__27482;
continue;
} else {
var n = cljs.core.first.call(null,seq__27471__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__27483 = cljs.core.next.call(null,seq__27471__$1);
var G__27484 = null;
var G__27485 = (0);
var G__27486 = (0);
seq__27471 = G__27483;
chunk__27472 = G__27484;
count__27473 = G__27485;
i__27474 = G__27486;
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
return cljs.core.some.call(null,(function (p__27487){
var vec__27488 = p__27487;
var _ = cljs.core.nth.call(null,vec__27488,(0),null);
var v = cljs.core.nth.call(null,vec__27488,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__27491){
var vec__27492 = p__27491;
var k = cljs.core.nth.call(null,vec__27492,(0),null);
var v = cljs.core.nth.call(null,vec__27492,(1),null);
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

var seq__27504_27512 = cljs.core.seq.call(null,deps);
var chunk__27505_27513 = null;
var count__27506_27514 = (0);
var i__27507_27515 = (0);
while(true){
if((i__27507_27515 < count__27506_27514)){
var dep_27516 = cljs.core._nth.call(null,chunk__27505_27513,i__27507_27515);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27516;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27516));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27516,(depth + (1)),state);
} else {
}


var G__27517 = seq__27504_27512;
var G__27518 = chunk__27505_27513;
var G__27519 = count__27506_27514;
var G__27520 = (i__27507_27515 + (1));
seq__27504_27512 = G__27517;
chunk__27505_27513 = G__27518;
count__27506_27514 = G__27519;
i__27507_27515 = G__27520;
continue;
} else {
var temp__5720__auto___27521 = cljs.core.seq.call(null,seq__27504_27512);
if(temp__5720__auto___27521){
var seq__27504_27522__$1 = temp__5720__auto___27521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27504_27522__$1)){
var c__4461__auto___27523 = cljs.core.chunk_first.call(null,seq__27504_27522__$1);
var G__27524 = cljs.core.chunk_rest.call(null,seq__27504_27522__$1);
var G__27525 = c__4461__auto___27523;
var G__27526 = cljs.core.count.call(null,c__4461__auto___27523);
var G__27527 = (0);
seq__27504_27512 = G__27524;
chunk__27505_27513 = G__27525;
count__27506_27514 = G__27526;
i__27507_27515 = G__27527;
continue;
} else {
var dep_27528 = cljs.core.first.call(null,seq__27504_27522__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_27528;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_27528));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_27528,(depth + (1)),state);
} else {
}


var G__27529 = cljs.core.next.call(null,seq__27504_27522__$1);
var G__27530 = null;
var G__27531 = (0);
var G__27532 = (0);
seq__27504_27512 = G__27529;
chunk__27505_27513 = G__27530;
count__27506_27514 = G__27531;
i__27507_27515 = G__27532;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27508){
var vec__27509 = p__27508;
var seq__27510 = cljs.core.seq.call(null,vec__27509);
var first__27511 = cljs.core.first.call(null,seq__27510);
var seq__27510__$1 = cljs.core.next.call(null,seq__27510);
var x = first__27511;
var xs = seq__27510__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27509,seq__27510,first__27511,seq__27510__$1,x,xs,get_deps__$1){
return (function (p1__27495_SHARP_){
return clojure.set.difference.call(null,p1__27495_SHARP_,x);
});})(vec__27509,seq__27510,first__27511,seq__27510__$1,x,xs,get_deps__$1))
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
var seq__27533 = cljs.core.seq.call(null,provides);
var chunk__27534 = null;
var count__27535 = (0);
var i__27536 = (0);
while(true){
if((i__27536 < count__27535)){
var prov = cljs.core._nth.call(null,chunk__27534,i__27536);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27537_27545 = cljs.core.seq.call(null,requires);
var chunk__27538_27546 = null;
var count__27539_27547 = (0);
var i__27540_27548 = (0);
while(true){
if((i__27540_27548 < count__27539_27547)){
var req_27549 = cljs.core._nth.call(null,chunk__27538_27546,i__27540_27548);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27549,prov);


var G__27550 = seq__27537_27545;
var G__27551 = chunk__27538_27546;
var G__27552 = count__27539_27547;
var G__27553 = (i__27540_27548 + (1));
seq__27537_27545 = G__27550;
chunk__27538_27546 = G__27551;
count__27539_27547 = G__27552;
i__27540_27548 = G__27553;
continue;
} else {
var temp__5720__auto___27554 = cljs.core.seq.call(null,seq__27537_27545);
if(temp__5720__auto___27554){
var seq__27537_27555__$1 = temp__5720__auto___27554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27537_27555__$1)){
var c__4461__auto___27556 = cljs.core.chunk_first.call(null,seq__27537_27555__$1);
var G__27557 = cljs.core.chunk_rest.call(null,seq__27537_27555__$1);
var G__27558 = c__4461__auto___27556;
var G__27559 = cljs.core.count.call(null,c__4461__auto___27556);
var G__27560 = (0);
seq__27537_27545 = G__27557;
chunk__27538_27546 = G__27558;
count__27539_27547 = G__27559;
i__27540_27548 = G__27560;
continue;
} else {
var req_27561 = cljs.core.first.call(null,seq__27537_27555__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27561,prov);


var G__27562 = cljs.core.next.call(null,seq__27537_27555__$1);
var G__27563 = null;
var G__27564 = (0);
var G__27565 = (0);
seq__27537_27545 = G__27562;
chunk__27538_27546 = G__27563;
count__27539_27547 = G__27564;
i__27540_27548 = G__27565;
continue;
}
} else {
}
}
break;
}


var G__27566 = seq__27533;
var G__27567 = chunk__27534;
var G__27568 = count__27535;
var G__27569 = (i__27536 + (1));
seq__27533 = G__27566;
chunk__27534 = G__27567;
count__27535 = G__27568;
i__27536 = G__27569;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27533);
if(temp__5720__auto__){
var seq__27533__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27533__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__27533__$1);
var G__27570 = cljs.core.chunk_rest.call(null,seq__27533__$1);
var G__27571 = c__4461__auto__;
var G__27572 = cljs.core.count.call(null,c__4461__auto__);
var G__27573 = (0);
seq__27533 = G__27570;
chunk__27534 = G__27571;
count__27535 = G__27572;
i__27536 = G__27573;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27533__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27541_27574 = cljs.core.seq.call(null,requires);
var chunk__27542_27575 = null;
var count__27543_27576 = (0);
var i__27544_27577 = (0);
while(true){
if((i__27544_27577 < count__27543_27576)){
var req_27578 = cljs.core._nth.call(null,chunk__27542_27575,i__27544_27577);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27578,prov);


var G__27579 = seq__27541_27574;
var G__27580 = chunk__27542_27575;
var G__27581 = count__27543_27576;
var G__27582 = (i__27544_27577 + (1));
seq__27541_27574 = G__27579;
chunk__27542_27575 = G__27580;
count__27543_27576 = G__27581;
i__27544_27577 = G__27582;
continue;
} else {
var temp__5720__auto___27583__$1 = cljs.core.seq.call(null,seq__27541_27574);
if(temp__5720__auto___27583__$1){
var seq__27541_27584__$1 = temp__5720__auto___27583__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27541_27584__$1)){
var c__4461__auto___27585 = cljs.core.chunk_first.call(null,seq__27541_27584__$1);
var G__27586 = cljs.core.chunk_rest.call(null,seq__27541_27584__$1);
var G__27587 = c__4461__auto___27585;
var G__27588 = cljs.core.count.call(null,c__4461__auto___27585);
var G__27589 = (0);
seq__27541_27574 = G__27586;
chunk__27542_27575 = G__27587;
count__27543_27576 = G__27588;
i__27544_27577 = G__27589;
continue;
} else {
var req_27590 = cljs.core.first.call(null,seq__27541_27584__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27590,prov);


var G__27591 = cljs.core.next.call(null,seq__27541_27584__$1);
var G__27592 = null;
var G__27593 = (0);
var G__27594 = (0);
seq__27541_27574 = G__27591;
chunk__27542_27575 = G__27592;
count__27543_27576 = G__27593;
i__27544_27577 = G__27594;
continue;
}
} else {
}
}
break;
}


var G__27595 = cljs.core.next.call(null,seq__27533__$1);
var G__27596 = null;
var G__27597 = (0);
var G__27598 = (0);
seq__27533 = G__27595;
chunk__27534 = G__27596;
count__27535 = G__27597;
i__27536 = G__27598;
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
var seq__27599_27603 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27600_27604 = null;
var count__27601_27605 = (0);
var i__27602_27606 = (0);
while(true){
if((i__27602_27606 < count__27601_27605)){
var ns_27607 = cljs.core._nth.call(null,chunk__27600_27604,i__27602_27606);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27607);


var G__27608 = seq__27599_27603;
var G__27609 = chunk__27600_27604;
var G__27610 = count__27601_27605;
var G__27611 = (i__27602_27606 + (1));
seq__27599_27603 = G__27608;
chunk__27600_27604 = G__27609;
count__27601_27605 = G__27610;
i__27602_27606 = G__27611;
continue;
} else {
var temp__5720__auto___27612 = cljs.core.seq.call(null,seq__27599_27603);
if(temp__5720__auto___27612){
var seq__27599_27613__$1 = temp__5720__auto___27612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27599_27613__$1)){
var c__4461__auto___27614 = cljs.core.chunk_first.call(null,seq__27599_27613__$1);
var G__27615 = cljs.core.chunk_rest.call(null,seq__27599_27613__$1);
var G__27616 = c__4461__auto___27614;
var G__27617 = cljs.core.count.call(null,c__4461__auto___27614);
var G__27618 = (0);
seq__27599_27603 = G__27615;
chunk__27600_27604 = G__27616;
count__27601_27605 = G__27617;
i__27602_27606 = G__27618;
continue;
} else {
var ns_27619 = cljs.core.first.call(null,seq__27599_27613__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27619);


var G__27620 = cljs.core.next.call(null,seq__27599_27613__$1);
var G__27621 = null;
var G__27622 = (0);
var G__27623 = (0);
seq__27599_27603 = G__27620;
chunk__27600_27604 = G__27621;
count__27601_27605 = G__27622;
i__27602_27606 = G__27623;
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
var G__27624__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27625__i = 0, G__27625__a = new Array(arguments.length -  0);
while (G__27625__i < G__27625__a.length) {G__27625__a[G__27625__i] = arguments[G__27625__i + 0]; ++G__27625__i;}
  args = new cljs.core.IndexedSeq(G__27625__a,0,null);
} 
return G__27624__delegate.call(this,args);};
G__27624.cljs$lang$maxFixedArity = 0;
G__27624.cljs$lang$applyTo = (function (arglist__27626){
var args = cljs.core.seq(arglist__27626);
return G__27624__delegate(args);
});
G__27624.cljs$core$IFn$_invoke$arity$variadic = G__27624__delegate;
return G__27624;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27627_SHARP_,p2__27628_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27627_SHARP_)),p2__27628_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27629_SHARP_,p2__27630_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27629_SHARP_),p2__27630_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__27631 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27631.addCallback(((function (G__27631){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__27631))
);

G__27631.addErrback(((function (G__27631){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__27631))
);

return G__27631;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e27632){if((e27632 instanceof Error)){
var e = e27632;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27632;

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
}catch (e27633){if((e27633 instanceof Error)){
var e = e27633;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27633;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27634 = cljs.core._EQ_;
var expr__27635 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27634.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27635))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27634.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27635))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27634.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27635))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__27634,expr__27635){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27634,expr__27635))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27637,callback){
var map__27638 = p__27637;
var map__27638__$1 = (((((!((map__27638 == null))))?(((((map__27638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27638):map__27638);
var file_msg = map__27638__$1;
var request_url = cljs.core.get.call(null,map__27638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__27638,map__27638__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27638,map__27638__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (7))){
var inst_27672 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27678_27704 = state_27676__$1;
(statearr_27678_27704[(2)] = inst_27672);

(statearr_27678_27704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (1))){
var state_27676__$1 = state_27676;
var statearr_27679_27705 = state_27676__$1;
(statearr_27679_27705[(2)] = null);

(statearr_27679_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (4))){
var inst_27642 = (state_27676[(7)]);
var inst_27642__$1 = (state_27676[(2)]);
var state_27676__$1 = (function (){var statearr_27680 = state_27676;
(statearr_27680[(7)] = inst_27642__$1);

return statearr_27680;
})();
if(cljs.core.truth_(inst_27642__$1)){
var statearr_27681_27706 = state_27676__$1;
(statearr_27681_27706[(1)] = (5));

} else {
var statearr_27682_27707 = state_27676__$1;
(statearr_27682_27707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (15))){
var inst_27657 = (state_27676[(8)]);
var inst_27655 = (state_27676[(9)]);
var inst_27659 = inst_27657.call(null,inst_27655);
var state_27676__$1 = state_27676;
var statearr_27683_27708 = state_27676__$1;
(statearr_27683_27708[(2)] = inst_27659);

(statearr_27683_27708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (13))){
var inst_27666 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27684_27709 = state_27676__$1;
(statearr_27684_27709[(2)] = inst_27666);

(statearr_27684_27709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (6))){
var state_27676__$1 = state_27676;
var statearr_27685_27710 = state_27676__$1;
(statearr_27685_27710[(2)] = null);

(statearr_27685_27710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (17))){
var inst_27663 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27686_27711 = state_27676__$1;
(statearr_27686_27711[(2)] = inst_27663);

(statearr_27686_27711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (3))){
var inst_27674 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
if((state_val_27677 === (12))){
var state_27676__$1 = state_27676;
var statearr_27687_27712 = state_27676__$1;
(statearr_27687_27712[(2)] = null);

(statearr_27687_27712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (2))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27677 === (11))){
var inst_27647 = (state_27676[(10)]);
var inst_27653 = figwheel.client.file_reloading.blocking_load.call(null,inst_27647);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(14),inst_27653);
} else {
if((state_val_27677 === (9))){
var inst_27647 = (state_27676[(10)]);
var state_27676__$1 = state_27676;
if(cljs.core.truth_(inst_27647)){
var statearr_27688_27713 = state_27676__$1;
(statearr_27688_27713[(1)] = (11));

} else {
var statearr_27689_27714 = state_27676__$1;
(statearr_27689_27714[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (5))){
var inst_27642 = (state_27676[(7)]);
var inst_27648 = (state_27676[(11)]);
var inst_27647 = cljs.core.nth.call(null,inst_27642,(0),null);
var inst_27648__$1 = cljs.core.nth.call(null,inst_27642,(1),null);
var state_27676__$1 = (function (){var statearr_27690 = state_27676;
(statearr_27690[(11)] = inst_27648__$1);

(statearr_27690[(10)] = inst_27647);

return statearr_27690;
})();
if(cljs.core.truth_(inst_27648__$1)){
var statearr_27691_27715 = state_27676__$1;
(statearr_27691_27715[(1)] = (8));

} else {
var statearr_27692_27716 = state_27676__$1;
(statearr_27692_27716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (14))){
var inst_27657 = (state_27676[(8)]);
var inst_27647 = (state_27676[(10)]);
var inst_27655 = (state_27676[(2)]);
var inst_27656 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27657__$1 = cljs.core.get.call(null,inst_27656,inst_27647);
var state_27676__$1 = (function (){var statearr_27693 = state_27676;
(statearr_27693[(8)] = inst_27657__$1);

(statearr_27693[(9)] = inst_27655);

return statearr_27693;
})();
if(cljs.core.truth_(inst_27657__$1)){
var statearr_27694_27717 = state_27676__$1;
(statearr_27694_27717[(1)] = (15));

} else {
var statearr_27695_27718 = state_27676__$1;
(statearr_27695_27718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (16))){
var inst_27655 = (state_27676[(9)]);
var inst_27661 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27655);
var state_27676__$1 = state_27676;
var statearr_27696_27719 = state_27676__$1;
(statearr_27696_27719[(2)] = inst_27661);

(statearr_27696_27719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (10))){
var inst_27668 = (state_27676[(2)]);
var state_27676__$1 = (function (){var statearr_27697 = state_27676;
(statearr_27697[(12)] = inst_27668);

return statearr_27697;
})();
var statearr_27698_27720 = state_27676__$1;
(statearr_27698_27720[(2)] = null);

(statearr_27698_27720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (8))){
var inst_27648 = (state_27676[(11)]);
var inst_27650 = eval(inst_27648);
var state_27676__$1 = state_27676;
var statearr_27699_27721 = state_27676__$1;
(statearr_27699_27721[(2)] = inst_27650);

(statearr_27699_27721[(1)] = (10));


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
});})(c__24120__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24026__auto__ = null;
var figwheel$client$file_reloading$state_machine__24026__auto____0 = (function (){
var statearr_27700 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27700[(0)] = figwheel$client$file_reloading$state_machine__24026__auto__);

(statearr_27700[(1)] = (1));

return statearr_27700;
});
var figwheel$client$file_reloading$state_machine__24026__auto____1 = (function (state_27676){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e27701){if((e27701 instanceof Object)){
var ex__24029__auto__ = e27701;
var statearr_27702_27722 = state_27676;
(statearr_27702_27722[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27723 = state_27676;
state_27676 = G__27723;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24026__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24026__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24026__auto____0;
figwheel$client$file_reloading$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24026__auto____1;
return figwheel$client$file_reloading$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_27703 = f__24121__auto__.call(null);
(statearr_27703[(6)] = c__24120__auto__);

return statearr_27703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__27725 = arguments.length;
switch (G__27725) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27727,callback){
var map__27728 = p__27727;
var map__27728__$1 = (((((!((map__27728 == null))))?(((((map__27728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27728):map__27728);
var file_msg = map__27728__$1;
var namespace = cljs.core.get.call(null,map__27728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27728,map__27728__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27728,map__27728__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__27730){
var map__27731 = p__27730;
var map__27731__$1 = (((((!((map__27731 == null))))?(((((map__27731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27731):map__27731);
var file_msg = map__27731__$1;
var namespace = cljs.core.get.call(null,map__27731__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27733){
var map__27734 = p__27733;
var map__27734__$1 = (((((!((map__27734 == null))))?(((((map__27734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27734):map__27734);
var file_msg = map__27734__$1;
var namespace = cljs.core.get.call(null,map__27734__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27736,callback){
var map__27737 = p__27736;
var map__27737__$1 = (((((!((map__27737 == null))))?(((((map__27737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27737):map__27737);
var file_msg = map__27737__$1;
var request_url = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24120__auto___27787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___27787,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___27787,out){
return (function (state_27772){
var state_val_27773 = (state_27772[(1)]);
if((state_val_27773 === (1))){
var inst_27746 = cljs.core.seq.call(null,files);
var inst_27747 = cljs.core.first.call(null,inst_27746);
var inst_27748 = cljs.core.next.call(null,inst_27746);
var inst_27749 = files;
var state_27772__$1 = (function (){var statearr_27774 = state_27772;
(statearr_27774[(7)] = inst_27748);

(statearr_27774[(8)] = inst_27747);

(statearr_27774[(9)] = inst_27749);

return statearr_27774;
})();
var statearr_27775_27788 = state_27772__$1;
(statearr_27775_27788[(2)] = null);

(statearr_27775_27788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (2))){
var inst_27755 = (state_27772[(10)]);
var inst_27749 = (state_27772[(9)]);
var inst_27754 = cljs.core.seq.call(null,inst_27749);
var inst_27755__$1 = cljs.core.first.call(null,inst_27754);
var inst_27756 = cljs.core.next.call(null,inst_27754);
var inst_27757 = (inst_27755__$1 == null);
var inst_27758 = cljs.core.not.call(null,inst_27757);
var state_27772__$1 = (function (){var statearr_27776 = state_27772;
(statearr_27776[(11)] = inst_27756);

(statearr_27776[(10)] = inst_27755__$1);

return statearr_27776;
})();
if(inst_27758){
var statearr_27777_27789 = state_27772__$1;
(statearr_27777_27789[(1)] = (4));

} else {
var statearr_27778_27790 = state_27772__$1;
(statearr_27778_27790[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (3))){
var inst_27770 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27772__$1,inst_27770);
} else {
if((state_val_27773 === (4))){
var inst_27755 = (state_27772[(10)]);
var inst_27760 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27755);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27772__$1,(7),inst_27760);
} else {
if((state_val_27773 === (5))){
var inst_27766 = cljs.core.async.close_BANG_.call(null,out);
var state_27772__$1 = state_27772;
var statearr_27779_27791 = state_27772__$1;
(statearr_27779_27791[(2)] = inst_27766);

(statearr_27779_27791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (6))){
var inst_27768 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27780_27792 = state_27772__$1;
(statearr_27780_27792[(2)] = inst_27768);

(statearr_27780_27792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (7))){
var inst_27756 = (state_27772[(11)]);
var inst_27762 = (state_27772[(2)]);
var inst_27763 = cljs.core.async.put_BANG_.call(null,out,inst_27762);
var inst_27749 = inst_27756;
var state_27772__$1 = (function (){var statearr_27781 = state_27772;
(statearr_27781[(12)] = inst_27763);

(statearr_27781[(9)] = inst_27749);

return statearr_27781;
})();
var statearr_27782_27793 = state_27772__$1;
(statearr_27782_27793[(2)] = null);

(statearr_27782_27793[(1)] = (2));


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
});})(c__24120__auto___27787,out))
;
return ((function (switch__24025__auto__,c__24120__auto___27787,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____0 = (function (){
var statearr_27783 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27783[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__);

(statearr_27783[(1)] = (1));

return statearr_27783;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____1 = (function (state_27772){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_27772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e27784){if((e27784 instanceof Object)){
var ex__24029__auto__ = e27784;
var statearr_27785_27794 = state_27772;
(statearr_27785_27794[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27795 = state_27772;
state_27772 = G__27795;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__ = function(state_27772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____1.call(this,state_27772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___27787,out))
})();
var state__24122__auto__ = (function (){var statearr_27786 = f__24121__auto__.call(null);
(statearr_27786[(6)] = c__24120__auto___27787);

return statearr_27786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___27787,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27796,opts){
var map__27797 = p__27796;
var map__27797__$1 = (((((!((map__27797 == null))))?(((((map__27797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27797):map__27797);
var eval_body = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27799){var e = e27799;
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
return (function (p1__27800_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27800_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27801){
var vec__27802 = p__27801;
var k = cljs.core.nth.call(null,vec__27802,(0),null);
var v = cljs.core.nth.call(null,vec__27802,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27805){
var vec__27806 = p__27805;
var k = cljs.core.nth.call(null,vec__27806,(0),null);
var v = cljs.core.nth.call(null,vec__27806,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27812,p__27813){
var map__27814 = p__27812;
var map__27814__$1 = (((((!((map__27814 == null))))?(((((map__27814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27814):map__27814);
var opts = map__27814__$1;
var before_jsload = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27814__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27815 = p__27813;
var map__27815__$1 = (((((!((map__27815 == null))))?(((((map__27815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27815):map__27815);
var msg = map__27815__$1;
var files = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27815__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27969){
var state_val_27970 = (state_27969[(1)]);
if((state_val_27970 === (7))){
var inst_27830 = (state_27969[(7)]);
var inst_27831 = (state_27969[(8)]);
var inst_27832 = (state_27969[(9)]);
var inst_27829 = (state_27969[(10)]);
var inst_27837 = cljs.core._nth.call(null,inst_27830,inst_27832);
var inst_27838 = figwheel.client.file_reloading.eval_body.call(null,inst_27837,opts);
var inst_27839 = (inst_27832 + (1));
var tmp27971 = inst_27830;
var tmp27972 = inst_27831;
var tmp27973 = inst_27829;
var inst_27829__$1 = tmp27973;
var inst_27830__$1 = tmp27971;
var inst_27831__$1 = tmp27972;
var inst_27832__$1 = inst_27839;
var state_27969__$1 = (function (){var statearr_27974 = state_27969;
(statearr_27974[(11)] = inst_27838);

(statearr_27974[(7)] = inst_27830__$1);

(statearr_27974[(8)] = inst_27831__$1);

(statearr_27974[(9)] = inst_27832__$1);

(statearr_27974[(10)] = inst_27829__$1);

return statearr_27974;
})();
var statearr_27975_28058 = state_27969__$1;
(statearr_27975_28058[(2)] = null);

(statearr_27975_28058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (20))){
var inst_27872 = (state_27969[(12)]);
var inst_27880 = figwheel.client.file_reloading.sort_files.call(null,inst_27872);
var state_27969__$1 = state_27969;
var statearr_27976_28059 = state_27969__$1;
(statearr_27976_28059[(2)] = inst_27880);

(statearr_27976_28059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (27))){
var state_27969__$1 = state_27969;
var statearr_27977_28060 = state_27969__$1;
(statearr_27977_28060[(2)] = null);

(statearr_27977_28060[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (1))){
var inst_27821 = (state_27969[(13)]);
var inst_27818 = before_jsload.call(null,files);
var inst_27819 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27820 = (function (){return ((function (inst_27821,inst_27818,inst_27819,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27809_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27809_SHARP_);
});
;})(inst_27821,inst_27818,inst_27819,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27821__$1 = cljs.core.filter.call(null,inst_27820,files);
var inst_27822 = cljs.core.not_empty.call(null,inst_27821__$1);
var state_27969__$1 = (function (){var statearr_27978 = state_27969;
(statearr_27978[(14)] = inst_27818);

(statearr_27978[(13)] = inst_27821__$1);

(statearr_27978[(15)] = inst_27819);

return statearr_27978;
})();
if(cljs.core.truth_(inst_27822)){
var statearr_27979_28061 = state_27969__$1;
(statearr_27979_28061[(1)] = (2));

} else {
var statearr_27980_28062 = state_27969__$1;
(statearr_27980_28062[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (24))){
var state_27969__$1 = state_27969;
var statearr_27981_28063 = state_27969__$1;
(statearr_27981_28063[(2)] = null);

(statearr_27981_28063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (39))){
var inst_27922 = (state_27969[(16)]);
var state_27969__$1 = state_27969;
var statearr_27982_28064 = state_27969__$1;
(statearr_27982_28064[(2)] = inst_27922);

(statearr_27982_28064[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (46))){
var inst_27964 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_27983_28065 = state_27969__$1;
(statearr_27983_28065[(2)] = inst_27964);

(statearr_27983_28065[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (4))){
var inst_27866 = (state_27969[(2)]);
var inst_27867 = cljs.core.List.EMPTY;
var inst_27868 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27867);
var inst_27869 = (function (){return ((function (inst_27866,inst_27867,inst_27868,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27810_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27810_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27810_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__27810_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_27866,inst_27867,inst_27868,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27870 = cljs.core.filter.call(null,inst_27869,files);
var inst_27871 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27872 = cljs.core.concat.call(null,inst_27870,inst_27871);
var state_27969__$1 = (function (){var statearr_27984 = state_27969;
(statearr_27984[(17)] = inst_27868);

(statearr_27984[(18)] = inst_27866);

(statearr_27984[(12)] = inst_27872);

return statearr_27984;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27985_28066 = state_27969__$1;
(statearr_27985_28066[(1)] = (16));

} else {
var statearr_27986_28067 = state_27969__$1;
(statearr_27986_28067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (15))){
var inst_27856 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_27987_28068 = state_27969__$1;
(statearr_27987_28068[(2)] = inst_27856);

(statearr_27987_28068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (21))){
var inst_27882 = (state_27969[(19)]);
var inst_27882__$1 = (state_27969[(2)]);
var inst_27883 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27882__$1);
var state_27969__$1 = (function (){var statearr_27988 = state_27969;
(statearr_27988[(19)] = inst_27882__$1);

return statearr_27988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27969__$1,(22),inst_27883);
} else {
if((state_val_27970 === (31))){
var inst_27967 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27969__$1,inst_27967);
} else {
if((state_val_27970 === (32))){
var inst_27922 = (state_27969[(16)]);
var inst_27927 = inst_27922.cljs$lang$protocol_mask$partition0$;
var inst_27928 = (inst_27927 & (64));
var inst_27929 = inst_27922.cljs$core$ISeq$;
var inst_27930 = (cljs.core.PROTOCOL_SENTINEL === inst_27929);
var inst_27931 = ((inst_27928) || (inst_27930));
var state_27969__$1 = state_27969;
if(cljs.core.truth_(inst_27931)){
var statearr_27989_28069 = state_27969__$1;
(statearr_27989_28069[(1)] = (35));

} else {
var statearr_27990_28070 = state_27969__$1;
(statearr_27990_28070[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (40))){
var inst_27944 = (state_27969[(20)]);
var inst_27943 = (state_27969[(2)]);
var inst_27944__$1 = cljs.core.get.call(null,inst_27943,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27945 = cljs.core.get.call(null,inst_27943,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27946 = cljs.core.not_empty.call(null,inst_27944__$1);
var state_27969__$1 = (function (){var statearr_27991 = state_27969;
(statearr_27991[(20)] = inst_27944__$1);

(statearr_27991[(21)] = inst_27945);

return statearr_27991;
})();
if(cljs.core.truth_(inst_27946)){
var statearr_27992_28071 = state_27969__$1;
(statearr_27992_28071[(1)] = (41));

} else {
var statearr_27993_28072 = state_27969__$1;
(statearr_27993_28072[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (33))){
var state_27969__$1 = state_27969;
var statearr_27994_28073 = state_27969__$1;
(statearr_27994_28073[(2)] = false);

(statearr_27994_28073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (13))){
var inst_27842 = (state_27969[(22)]);
var inst_27846 = cljs.core.chunk_first.call(null,inst_27842);
var inst_27847 = cljs.core.chunk_rest.call(null,inst_27842);
var inst_27848 = cljs.core.count.call(null,inst_27846);
var inst_27829 = inst_27847;
var inst_27830 = inst_27846;
var inst_27831 = inst_27848;
var inst_27832 = (0);
var state_27969__$1 = (function (){var statearr_27995 = state_27969;
(statearr_27995[(7)] = inst_27830);

(statearr_27995[(8)] = inst_27831);

(statearr_27995[(9)] = inst_27832);

(statearr_27995[(10)] = inst_27829);

return statearr_27995;
})();
var statearr_27996_28074 = state_27969__$1;
(statearr_27996_28074[(2)] = null);

(statearr_27996_28074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (22))){
var inst_27886 = (state_27969[(23)]);
var inst_27882 = (state_27969[(19)]);
var inst_27890 = (state_27969[(24)]);
var inst_27885 = (state_27969[(25)]);
var inst_27885__$1 = (state_27969[(2)]);
var inst_27886__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27885__$1);
var inst_27887 = (function (){var all_files = inst_27882;
var res_SINGLEQUOTE_ = inst_27885__$1;
var res = inst_27886__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27886,inst_27882,inst_27890,inst_27885,inst_27885__$1,inst_27886__$1,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27811_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27811_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27886,inst_27882,inst_27890,inst_27885,inst_27885__$1,inst_27886__$1,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27888 = cljs.core.filter.call(null,inst_27887,inst_27885__$1);
var inst_27889 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27890__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27889);
var inst_27891 = cljs.core.not_empty.call(null,inst_27890__$1);
var state_27969__$1 = (function (){var statearr_27997 = state_27969;
(statearr_27997[(23)] = inst_27886__$1);

(statearr_27997[(24)] = inst_27890__$1);

(statearr_27997[(25)] = inst_27885__$1);

(statearr_27997[(26)] = inst_27888);

return statearr_27997;
})();
if(cljs.core.truth_(inst_27891)){
var statearr_27998_28075 = state_27969__$1;
(statearr_27998_28075[(1)] = (23));

} else {
var statearr_27999_28076 = state_27969__$1;
(statearr_27999_28076[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (36))){
var state_27969__$1 = state_27969;
var statearr_28000_28077 = state_27969__$1;
(statearr_28000_28077[(2)] = false);

(statearr_28000_28077[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (41))){
var inst_27944 = (state_27969[(20)]);
var inst_27948 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27949 = cljs.core.map.call(null,inst_27948,inst_27944);
var inst_27950 = cljs.core.pr_str.call(null,inst_27949);
var inst_27951 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27950)].join('');
var inst_27952 = figwheel.client.utils.log.call(null,inst_27951);
var state_27969__$1 = state_27969;
var statearr_28001_28078 = state_27969__$1;
(statearr_28001_28078[(2)] = inst_27952);

(statearr_28001_28078[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (43))){
var inst_27945 = (state_27969[(21)]);
var inst_27955 = (state_27969[(2)]);
var inst_27956 = cljs.core.not_empty.call(null,inst_27945);
var state_27969__$1 = (function (){var statearr_28002 = state_27969;
(statearr_28002[(27)] = inst_27955);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27956)){
var statearr_28003_28079 = state_27969__$1;
(statearr_28003_28079[(1)] = (44));

} else {
var statearr_28004_28080 = state_27969__$1;
(statearr_28004_28080[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (29))){
var inst_27886 = (state_27969[(23)]);
var inst_27882 = (state_27969[(19)]);
var inst_27922 = (state_27969[(16)]);
var inst_27890 = (state_27969[(24)]);
var inst_27885 = (state_27969[(25)]);
var inst_27888 = (state_27969[(26)]);
var inst_27918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27921 = (function (){var all_files = inst_27882;
var res_SINGLEQUOTE_ = inst_27885;
var res = inst_27886;
var files_not_loaded = inst_27888;
var dependencies_that_loaded = inst_27890;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27922,inst_27890,inst_27885,inst_27888,inst_27918,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27920){
var map__28005 = p__27920;
var map__28005__$1 = (((((!((map__28005 == null))))?(((((map__28005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28005):map__28005);
var namespace = cljs.core.get.call(null,map__28005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27922,inst_27890,inst_27885,inst_27888,inst_27918,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27922__$1 = cljs.core.group_by.call(null,inst_27921,inst_27888);
var inst_27924 = (inst_27922__$1 == null);
var inst_27925 = cljs.core.not.call(null,inst_27924);
var state_27969__$1 = (function (){var statearr_28007 = state_27969;
(statearr_28007[(16)] = inst_27922__$1);

(statearr_28007[(28)] = inst_27918);

return statearr_28007;
})();
if(inst_27925){
var statearr_28008_28081 = state_27969__$1;
(statearr_28008_28081[(1)] = (32));

} else {
var statearr_28009_28082 = state_27969__$1;
(statearr_28009_28082[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (44))){
var inst_27945 = (state_27969[(21)]);
var inst_27958 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27945);
var inst_27959 = cljs.core.pr_str.call(null,inst_27958);
var inst_27960 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27959)].join('');
var inst_27961 = figwheel.client.utils.log.call(null,inst_27960);
var state_27969__$1 = state_27969;
var statearr_28010_28083 = state_27969__$1;
(statearr_28010_28083[(2)] = inst_27961);

(statearr_28010_28083[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (6))){
var inst_27863 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_28011_28084 = state_27969__$1;
(statearr_28011_28084[(2)] = inst_27863);

(statearr_28011_28084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (28))){
var inst_27888 = (state_27969[(26)]);
var inst_27915 = (state_27969[(2)]);
var inst_27916 = cljs.core.not_empty.call(null,inst_27888);
var state_27969__$1 = (function (){var statearr_28012 = state_27969;
(statearr_28012[(29)] = inst_27915);

return statearr_28012;
})();
if(cljs.core.truth_(inst_27916)){
var statearr_28013_28085 = state_27969__$1;
(statearr_28013_28085[(1)] = (29));

} else {
var statearr_28014_28086 = state_27969__$1;
(statearr_28014_28086[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (25))){
var inst_27886 = (state_27969[(23)]);
var inst_27902 = (state_27969[(2)]);
var inst_27903 = cljs.core.not_empty.call(null,inst_27886);
var state_27969__$1 = (function (){var statearr_28015 = state_27969;
(statearr_28015[(30)] = inst_27902);

return statearr_28015;
})();
if(cljs.core.truth_(inst_27903)){
var statearr_28016_28087 = state_27969__$1;
(statearr_28016_28087[(1)] = (26));

} else {
var statearr_28017_28088 = state_27969__$1;
(statearr_28017_28088[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (34))){
var inst_27938 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
if(cljs.core.truth_(inst_27938)){
var statearr_28018_28089 = state_27969__$1;
(statearr_28018_28089[(1)] = (38));

} else {
var statearr_28019_28090 = state_27969__$1;
(statearr_28019_28090[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (17))){
var state_27969__$1 = state_27969;
var statearr_28020_28091 = state_27969__$1;
(statearr_28020_28091[(2)] = recompile_dependents);

(statearr_28020_28091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (3))){
var state_27969__$1 = state_27969;
var statearr_28021_28092 = state_27969__$1;
(statearr_28021_28092[(2)] = null);

(statearr_28021_28092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (12))){
var inst_27859 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_28022_28093 = state_27969__$1;
(statearr_28022_28093[(2)] = inst_27859);

(statearr_28022_28093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (2))){
var inst_27821 = (state_27969[(13)]);
var inst_27828 = cljs.core.seq.call(null,inst_27821);
var inst_27829 = inst_27828;
var inst_27830 = null;
var inst_27831 = (0);
var inst_27832 = (0);
var state_27969__$1 = (function (){var statearr_28023 = state_27969;
(statearr_28023[(7)] = inst_27830);

(statearr_28023[(8)] = inst_27831);

(statearr_28023[(9)] = inst_27832);

(statearr_28023[(10)] = inst_27829);

return statearr_28023;
})();
var statearr_28024_28094 = state_27969__$1;
(statearr_28024_28094[(2)] = null);

(statearr_28024_28094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (23))){
var inst_27886 = (state_27969[(23)]);
var inst_27882 = (state_27969[(19)]);
var inst_27890 = (state_27969[(24)]);
var inst_27885 = (state_27969[(25)]);
var inst_27888 = (state_27969[(26)]);
var inst_27893 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27895 = (function (){var all_files = inst_27882;
var res_SINGLEQUOTE_ = inst_27885;
var res = inst_27886;
var files_not_loaded = inst_27888;
var dependencies_that_loaded = inst_27890;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27893,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27894){
var map__28025 = p__27894;
var map__28025__$1 = (((((!((map__28025 == null))))?(((((map__28025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28025):map__28025);
var request_url = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27893,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27896 = cljs.core.reverse.call(null,inst_27890);
var inst_27897 = cljs.core.map.call(null,inst_27895,inst_27896);
var inst_27898 = cljs.core.pr_str.call(null,inst_27897);
var inst_27899 = figwheel.client.utils.log.call(null,inst_27898);
var state_27969__$1 = (function (){var statearr_28027 = state_27969;
(statearr_28027[(31)] = inst_27893);

return statearr_28027;
})();
var statearr_28028_28095 = state_27969__$1;
(statearr_28028_28095[(2)] = inst_27899);

(statearr_28028_28095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (35))){
var state_27969__$1 = state_27969;
var statearr_28029_28096 = state_27969__$1;
(statearr_28029_28096[(2)] = true);

(statearr_28029_28096[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (19))){
var inst_27872 = (state_27969[(12)]);
var inst_27878 = figwheel.client.file_reloading.expand_files.call(null,inst_27872);
var state_27969__$1 = state_27969;
var statearr_28030_28097 = state_27969__$1;
(statearr_28030_28097[(2)] = inst_27878);

(statearr_28030_28097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (11))){
var state_27969__$1 = state_27969;
var statearr_28031_28098 = state_27969__$1;
(statearr_28031_28098[(2)] = null);

(statearr_28031_28098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (9))){
var inst_27861 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_28032_28099 = state_27969__$1;
(statearr_28032_28099[(2)] = inst_27861);

(statearr_28032_28099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (5))){
var inst_27831 = (state_27969[(8)]);
var inst_27832 = (state_27969[(9)]);
var inst_27834 = (inst_27832 < inst_27831);
var inst_27835 = inst_27834;
var state_27969__$1 = state_27969;
if(cljs.core.truth_(inst_27835)){
var statearr_28033_28100 = state_27969__$1;
(statearr_28033_28100[(1)] = (7));

} else {
var statearr_28034_28101 = state_27969__$1;
(statearr_28034_28101[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (14))){
var inst_27842 = (state_27969[(22)]);
var inst_27851 = cljs.core.first.call(null,inst_27842);
var inst_27852 = figwheel.client.file_reloading.eval_body.call(null,inst_27851,opts);
var inst_27853 = cljs.core.next.call(null,inst_27842);
var inst_27829 = inst_27853;
var inst_27830 = null;
var inst_27831 = (0);
var inst_27832 = (0);
var state_27969__$1 = (function (){var statearr_28035 = state_27969;
(statearr_28035[(32)] = inst_27852);

(statearr_28035[(7)] = inst_27830);

(statearr_28035[(8)] = inst_27831);

(statearr_28035[(9)] = inst_27832);

(statearr_28035[(10)] = inst_27829);

return statearr_28035;
})();
var statearr_28036_28102 = state_27969__$1;
(statearr_28036_28102[(2)] = null);

(statearr_28036_28102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (45))){
var state_27969__$1 = state_27969;
var statearr_28037_28103 = state_27969__$1;
(statearr_28037_28103[(2)] = null);

(statearr_28037_28103[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (26))){
var inst_27886 = (state_27969[(23)]);
var inst_27882 = (state_27969[(19)]);
var inst_27890 = (state_27969[(24)]);
var inst_27885 = (state_27969[(25)]);
var inst_27888 = (state_27969[(26)]);
var inst_27905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27907 = (function (){var all_files = inst_27882;
var res_SINGLEQUOTE_ = inst_27885;
var res = inst_27886;
var files_not_loaded = inst_27888;
var dependencies_that_loaded = inst_27890;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27905,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27906){
var map__28038 = p__27906;
var map__28038__$1 = (((((!((map__28038 == null))))?(((((map__28038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28038):map__28038);
var namespace = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27905,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27908 = cljs.core.map.call(null,inst_27907,inst_27886);
var inst_27909 = cljs.core.pr_str.call(null,inst_27908);
var inst_27910 = figwheel.client.utils.log.call(null,inst_27909);
var inst_27911 = (function (){var all_files = inst_27882;
var res_SINGLEQUOTE_ = inst_27885;
var res = inst_27886;
var files_not_loaded = inst_27888;
var dependencies_that_loaded = inst_27890;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27905,inst_27907,inst_27908,inst_27909,inst_27910,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27886,inst_27882,inst_27890,inst_27885,inst_27888,inst_27905,inst_27907,inst_27908,inst_27909,inst_27910,state_val_27970,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27912 = setTimeout(inst_27911,(10));
var state_27969__$1 = (function (){var statearr_28040 = state_27969;
(statearr_28040[(33)] = inst_27910);

(statearr_28040[(34)] = inst_27905);

return statearr_28040;
})();
var statearr_28041_28104 = state_27969__$1;
(statearr_28041_28104[(2)] = inst_27912);

(statearr_28041_28104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (16))){
var state_27969__$1 = state_27969;
var statearr_28042_28105 = state_27969__$1;
(statearr_28042_28105[(2)] = reload_dependents);

(statearr_28042_28105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (38))){
var inst_27922 = (state_27969[(16)]);
var inst_27940 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27922);
var state_27969__$1 = state_27969;
var statearr_28043_28106 = state_27969__$1;
(statearr_28043_28106[(2)] = inst_27940);

(statearr_28043_28106[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (30))){
var state_27969__$1 = state_27969;
var statearr_28044_28107 = state_27969__$1;
(statearr_28044_28107[(2)] = null);

(statearr_28044_28107[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (10))){
var inst_27842 = (state_27969[(22)]);
var inst_27844 = cljs.core.chunked_seq_QMARK_.call(null,inst_27842);
var state_27969__$1 = state_27969;
if(inst_27844){
var statearr_28045_28108 = state_27969__$1;
(statearr_28045_28108[(1)] = (13));

} else {
var statearr_28046_28109 = state_27969__$1;
(statearr_28046_28109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (18))){
var inst_27876 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
if(cljs.core.truth_(inst_27876)){
var statearr_28047_28110 = state_27969__$1;
(statearr_28047_28110[(1)] = (19));

} else {
var statearr_28048_28111 = state_27969__$1;
(statearr_28048_28111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (42))){
var state_27969__$1 = state_27969;
var statearr_28049_28112 = state_27969__$1;
(statearr_28049_28112[(2)] = null);

(statearr_28049_28112[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (37))){
var inst_27935 = (state_27969[(2)]);
var state_27969__$1 = state_27969;
var statearr_28050_28113 = state_27969__$1;
(statearr_28050_28113[(2)] = inst_27935);

(statearr_28050_28113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27970 === (8))){
var inst_27842 = (state_27969[(22)]);
var inst_27829 = (state_27969[(10)]);
var inst_27842__$1 = cljs.core.seq.call(null,inst_27829);
var state_27969__$1 = (function (){var statearr_28051 = state_27969;
(statearr_28051[(22)] = inst_27842__$1);

return statearr_28051;
})();
if(inst_27842__$1){
var statearr_28052_28114 = state_27969__$1;
(statearr_28052_28114[(1)] = (10));

} else {
var statearr_28053_28115 = state_27969__$1;
(statearr_28053_28115[(1)] = (11));

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
});})(c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24025__auto__,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____0 = (function (){
var statearr_28054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28054[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__);

(statearr_28054[(1)] = (1));

return statearr_28054;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____1 = (function (state_27969){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_27969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e28055){if((e28055 instanceof Object)){
var ex__24029__auto__ = e28055;
var statearr_28056_28116 = state_27969;
(statearr_28056_28116[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28117 = state_27969;
state_27969 = G__28117;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__ = function(state_27969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____1.call(this,state_27969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24122__auto__ = (function (){var statearr_28057 = f__24121__auto__.call(null);
(statearr_28057[(6)] = c__24120__auto__);

return statearr_28057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,map__27814,map__27814__$1,opts,before_jsload,on_jsload,reload_dependents,map__27815,map__27815__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24120__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28120,link){
var map__28121 = p__28120;
var map__28121__$1 = (((((!((map__28121 == null))))?(((((map__28121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28121):map__28121);
var file = cljs.core.get.call(null,map__28121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__28121,map__28121__$1,file){
return (function (p1__28118_SHARP_,p2__28119_SHARP_){
if(cljs.core._EQ_.call(null,p1__28118_SHARP_,p2__28119_SHARP_)){
return p1__28118_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__28121,map__28121__$1,file))
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
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28124){
var map__28125 = p__28124;
var map__28125__$1 = (((((!((map__28125 == null))))?(((((map__28125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28125):map__28125);
var match_length = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28125__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28123_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28123_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28127_SHARP_,p2__28128_SHARP_){
return cljs.core.assoc.call(null,p1__28127_SHARP_,cljs.core.get.call(null,p2__28128_SHARP_,key),p2__28128_SHARP_);
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
var loaded_f_datas_28129 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28129);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28129);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28130,p__28131){
var map__28132 = p__28130;
var map__28132__$1 = (((((!((map__28132 == null))))?(((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var on_cssload = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28133 = p__28131;
var map__28133__$1 = (((((!((map__28133 == null))))?(((((map__28133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28133):map__28133);
var files_msg = map__28133__$1;
var files = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1563735157072

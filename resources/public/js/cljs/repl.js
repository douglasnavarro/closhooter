// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28933){
var map__28934 = p__28933;
var map__28934__$1 = (((((!((map__28934 == null))))?(((((map__28934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28934):map__28934);
var m = map__28934__$1;
var n = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28936_28958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28937_28959 = null;
var count__28938_28960 = (0);
var i__28939_28961 = (0);
while(true){
if((i__28939_28961 < count__28938_28960)){
var f_28962 = cljs.core._nth.call(null,chunk__28937_28959,i__28939_28961);
cljs.core.println.call(null,"  ",f_28962);


var G__28963 = seq__28936_28958;
var G__28964 = chunk__28937_28959;
var G__28965 = count__28938_28960;
var G__28966 = (i__28939_28961 + (1));
seq__28936_28958 = G__28963;
chunk__28937_28959 = G__28964;
count__28938_28960 = G__28965;
i__28939_28961 = G__28966;
continue;
} else {
var temp__5720__auto___28967 = cljs.core.seq.call(null,seq__28936_28958);
if(temp__5720__auto___28967){
var seq__28936_28968__$1 = temp__5720__auto___28967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28936_28968__$1)){
var c__4461__auto___28969 = cljs.core.chunk_first.call(null,seq__28936_28968__$1);
var G__28970 = cljs.core.chunk_rest.call(null,seq__28936_28968__$1);
var G__28971 = c__4461__auto___28969;
var G__28972 = cljs.core.count.call(null,c__4461__auto___28969);
var G__28973 = (0);
seq__28936_28958 = G__28970;
chunk__28937_28959 = G__28971;
count__28938_28960 = G__28972;
i__28939_28961 = G__28973;
continue;
} else {
var f_28974 = cljs.core.first.call(null,seq__28936_28968__$1);
cljs.core.println.call(null,"  ",f_28974);


var G__28975 = cljs.core.next.call(null,seq__28936_28968__$1);
var G__28976 = null;
var G__28977 = (0);
var G__28978 = (0);
seq__28936_28958 = G__28975;
chunk__28937_28959 = G__28976;
count__28938_28960 = G__28977;
i__28939_28961 = G__28978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28979);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28979)))?cljs.core.second.call(null,arglists_28979):arglists_28979));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28940_28980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28941_28981 = null;
var count__28942_28982 = (0);
var i__28943_28983 = (0);
while(true){
if((i__28943_28983 < count__28942_28982)){
var vec__28944_28984 = cljs.core._nth.call(null,chunk__28941_28981,i__28943_28983);
var name_28985 = cljs.core.nth.call(null,vec__28944_28984,(0),null);
var map__28947_28986 = cljs.core.nth.call(null,vec__28944_28984,(1),null);
var map__28947_28987__$1 = (((((!((map__28947_28986 == null))))?(((((map__28947_28986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28947_28986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28947_28986):map__28947_28986);
var doc_28988 = cljs.core.get.call(null,map__28947_28987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28989 = cljs.core.get.call(null,map__28947_28987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28985);

cljs.core.println.call(null," ",arglists_28989);

if(cljs.core.truth_(doc_28988)){
cljs.core.println.call(null," ",doc_28988);
} else {
}


var G__28990 = seq__28940_28980;
var G__28991 = chunk__28941_28981;
var G__28992 = count__28942_28982;
var G__28993 = (i__28943_28983 + (1));
seq__28940_28980 = G__28990;
chunk__28941_28981 = G__28991;
count__28942_28982 = G__28992;
i__28943_28983 = G__28993;
continue;
} else {
var temp__5720__auto___28994 = cljs.core.seq.call(null,seq__28940_28980);
if(temp__5720__auto___28994){
var seq__28940_28995__$1 = temp__5720__auto___28994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28940_28995__$1)){
var c__4461__auto___28996 = cljs.core.chunk_first.call(null,seq__28940_28995__$1);
var G__28997 = cljs.core.chunk_rest.call(null,seq__28940_28995__$1);
var G__28998 = c__4461__auto___28996;
var G__28999 = cljs.core.count.call(null,c__4461__auto___28996);
var G__29000 = (0);
seq__28940_28980 = G__28997;
chunk__28941_28981 = G__28998;
count__28942_28982 = G__28999;
i__28943_28983 = G__29000;
continue;
} else {
var vec__28949_29001 = cljs.core.first.call(null,seq__28940_28995__$1);
var name_29002 = cljs.core.nth.call(null,vec__28949_29001,(0),null);
var map__28952_29003 = cljs.core.nth.call(null,vec__28949_29001,(1),null);
var map__28952_29004__$1 = (((((!((map__28952_29003 == null))))?(((((map__28952_29003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28952_29003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28952_29003):map__28952_29003);
var doc_29005 = cljs.core.get.call(null,map__28952_29004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29006 = cljs.core.get.call(null,map__28952_29004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29002);

cljs.core.println.call(null," ",arglists_29006);

if(cljs.core.truth_(doc_29005)){
cljs.core.println.call(null," ",doc_29005);
} else {
}


var G__29007 = cljs.core.next.call(null,seq__28940_28995__$1);
var G__29008 = null;
var G__29009 = (0);
var G__29010 = (0);
seq__28940_28980 = G__29007;
chunk__28941_28981 = G__29008;
count__28942_28982 = G__29009;
i__28943_28983 = G__29010;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__28954 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28955 = null;
var count__28956 = (0);
var i__28957 = (0);
while(true){
if((i__28957 < count__28956)){
var role = cljs.core._nth.call(null,chunk__28955,i__28957);
var temp__5720__auto___29011__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29011__$1)){
var spec_29012 = temp__5720__auto___29011__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29012));
} else {
}


var G__29013 = seq__28954;
var G__29014 = chunk__28955;
var G__29015 = count__28956;
var G__29016 = (i__28957 + (1));
seq__28954 = G__29013;
chunk__28955 = G__29014;
count__28956 = G__29015;
i__28957 = G__29016;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28954);
if(temp__5720__auto____$1){
var seq__28954__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28954__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28954__$1);
var G__29017 = cljs.core.chunk_rest.call(null,seq__28954__$1);
var G__29018 = c__4461__auto__;
var G__29019 = cljs.core.count.call(null,c__4461__auto__);
var G__29020 = (0);
seq__28954 = G__29017;
chunk__28955 = G__29018;
count__28956 = G__29019;
i__28957 = G__29020;
continue;
} else {
var role = cljs.core.first.call(null,seq__28954__$1);
var temp__5720__auto___29021__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29021__$2)){
var spec_29022 = temp__5720__auto___29021__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29022));
} else {
}


var G__29023 = cljs.core.next.call(null,seq__28954__$1);
var G__29024 = null;
var G__29025 = (0);
var G__29026 = (0);
seq__28954 = G__29023;
chunk__28955 = G__29024;
count__28956 = G__29025;
i__28957 = G__29026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1563735158497

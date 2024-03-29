// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28932){
var map__28933 = p__28932;
var map__28933__$1 = (((((!((map__28933 == null))))?(((((map__28933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28933):map__28933);
var m = map__28933__$1;
var n = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28935_28957 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28936_28958 = null;
var count__28937_28959 = (0);
var i__28938_28960 = (0);
while(true){
if((i__28938_28960 < count__28937_28959)){
var f_28961 = cljs.core._nth.call(null,chunk__28936_28958,i__28938_28960);
cljs.core.println.call(null,"  ",f_28961);


var G__28962 = seq__28935_28957;
var G__28963 = chunk__28936_28958;
var G__28964 = count__28937_28959;
var G__28965 = (i__28938_28960 + (1));
seq__28935_28957 = G__28962;
chunk__28936_28958 = G__28963;
count__28937_28959 = G__28964;
i__28938_28960 = G__28965;
continue;
} else {
var temp__5720__auto___28966 = cljs.core.seq.call(null,seq__28935_28957);
if(temp__5720__auto___28966){
var seq__28935_28967__$1 = temp__5720__auto___28966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28935_28967__$1)){
var c__4461__auto___28968 = cljs.core.chunk_first.call(null,seq__28935_28967__$1);
var G__28969 = cljs.core.chunk_rest.call(null,seq__28935_28967__$1);
var G__28970 = c__4461__auto___28968;
var G__28971 = cljs.core.count.call(null,c__4461__auto___28968);
var G__28972 = (0);
seq__28935_28957 = G__28969;
chunk__28936_28958 = G__28970;
count__28937_28959 = G__28971;
i__28938_28960 = G__28972;
continue;
} else {
var f_28973 = cljs.core.first.call(null,seq__28935_28967__$1);
cljs.core.println.call(null,"  ",f_28973);


var G__28974 = cljs.core.next.call(null,seq__28935_28967__$1);
var G__28975 = null;
var G__28976 = (0);
var G__28977 = (0);
seq__28935_28957 = G__28974;
chunk__28936_28958 = G__28975;
count__28937_28959 = G__28976;
i__28938_28960 = G__28977;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28978 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28978);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28978)))?cljs.core.second.call(null,arglists_28978):arglists_28978));
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
var seq__28939_28979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28940_28980 = null;
var count__28941_28981 = (0);
var i__28942_28982 = (0);
while(true){
if((i__28942_28982 < count__28941_28981)){
var vec__28943_28983 = cljs.core._nth.call(null,chunk__28940_28980,i__28942_28982);
var name_28984 = cljs.core.nth.call(null,vec__28943_28983,(0),null);
var map__28946_28985 = cljs.core.nth.call(null,vec__28943_28983,(1),null);
var map__28946_28986__$1 = (((((!((map__28946_28985 == null))))?(((((map__28946_28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28946_28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28946_28985):map__28946_28985);
var doc_28987 = cljs.core.get.call(null,map__28946_28986__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28988 = cljs.core.get.call(null,map__28946_28986__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28984);

cljs.core.println.call(null," ",arglists_28988);

if(cljs.core.truth_(doc_28987)){
cljs.core.println.call(null," ",doc_28987);
} else {
}


var G__28989 = seq__28939_28979;
var G__28990 = chunk__28940_28980;
var G__28991 = count__28941_28981;
var G__28992 = (i__28942_28982 + (1));
seq__28939_28979 = G__28989;
chunk__28940_28980 = G__28990;
count__28941_28981 = G__28991;
i__28942_28982 = G__28992;
continue;
} else {
var temp__5720__auto___28993 = cljs.core.seq.call(null,seq__28939_28979);
if(temp__5720__auto___28993){
var seq__28939_28994__$1 = temp__5720__auto___28993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28939_28994__$1)){
var c__4461__auto___28995 = cljs.core.chunk_first.call(null,seq__28939_28994__$1);
var G__28996 = cljs.core.chunk_rest.call(null,seq__28939_28994__$1);
var G__28997 = c__4461__auto___28995;
var G__28998 = cljs.core.count.call(null,c__4461__auto___28995);
var G__28999 = (0);
seq__28939_28979 = G__28996;
chunk__28940_28980 = G__28997;
count__28941_28981 = G__28998;
i__28942_28982 = G__28999;
continue;
} else {
var vec__28948_29000 = cljs.core.first.call(null,seq__28939_28994__$1);
var name_29001 = cljs.core.nth.call(null,vec__28948_29000,(0),null);
var map__28951_29002 = cljs.core.nth.call(null,vec__28948_29000,(1),null);
var map__28951_29003__$1 = (((((!((map__28951_29002 == null))))?(((((map__28951_29002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28951_29002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28951_29002):map__28951_29002);
var doc_29004 = cljs.core.get.call(null,map__28951_29003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29005 = cljs.core.get.call(null,map__28951_29003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29001);

cljs.core.println.call(null," ",arglists_29005);

if(cljs.core.truth_(doc_29004)){
cljs.core.println.call(null," ",doc_29004);
} else {
}


var G__29006 = cljs.core.next.call(null,seq__28939_28994__$1);
var G__29007 = null;
var G__29008 = (0);
var G__29009 = (0);
seq__28939_28979 = G__29006;
chunk__28940_28980 = G__29007;
count__28941_28981 = G__29008;
i__28942_28982 = G__29009;
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

var seq__28953 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28954 = null;
var count__28955 = (0);
var i__28956 = (0);
while(true){
if((i__28956 < count__28955)){
var role = cljs.core._nth.call(null,chunk__28954,i__28956);
var temp__5720__auto___29010__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29010__$1)){
var spec_29011 = temp__5720__auto___29010__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29011));
} else {
}


var G__29012 = seq__28953;
var G__29013 = chunk__28954;
var G__29014 = count__28955;
var G__29015 = (i__28956 + (1));
seq__28953 = G__29012;
chunk__28954 = G__29013;
count__28955 = G__29014;
i__28956 = G__29015;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28953);
if(temp__5720__auto____$1){
var seq__28953__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28953__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__28953__$1);
var G__29016 = cljs.core.chunk_rest.call(null,seq__28953__$1);
var G__29017 = c__4461__auto__;
var G__29018 = cljs.core.count.call(null,c__4461__auto__);
var G__29019 = (0);
seq__28953 = G__29016;
chunk__28954 = G__29017;
count__28955 = G__29018;
i__28956 = G__29019;
continue;
} else {
var role = cljs.core.first.call(null,seq__28953__$1);
var temp__5720__auto___29020__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29020__$2)){
var spec_29021 = temp__5720__auto___29020__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29021));
} else {
}


var G__29022 = cljs.core.next.call(null,seq__28953__$1);
var G__29023 = null;
var G__29024 = (0);
var G__29025 = (0);
seq__28953 = G__29022;
chunk__28954 = G__29023;
count__28955 = G__29024;
i__28956 = G__29025;
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

//# sourceMappingURL=repl.js.map?rel=1563744777663

// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24179 = arguments.length;
switch (G__24179) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24180 = (function (f,blockable,meta24181){
this.f = f;
this.blockable = blockable;
this.meta24181 = meta24181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24182,meta24181__$1){
var self__ = this;
var _24182__$1 = this;
return (new cljs.core.async.t_cljs$core$async24180(self__.f,self__.blockable,meta24181__$1));
});

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24182){
var self__ = this;
var _24182__$1 = this;
return self__.meta24181;
});

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24181","meta24181",-1162612179,null)], null);
});

cljs.core.async.t_cljs$core$async24180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24180";

cljs.core.async.t_cljs$core$async24180.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24180");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24180.
 */
cljs.core.async.__GT_t_cljs$core$async24180 = (function cljs$core$async$__GT_t_cljs$core$async24180(f__$1,blockable__$1,meta24181){
return (new cljs.core.async.t_cljs$core$async24180(f__$1,blockable__$1,meta24181));
});

}

return (new cljs.core.async.t_cljs$core$async24180(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24186 = arguments.length;
switch (G__24186) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24189 = arguments.length;
switch (G__24189) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24192 = arguments.length;
switch (G__24192) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24194 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24194);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24194,ret){
return (function (){
return fn1.call(null,val_24194);
});})(val_24194,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24196 = arguments.length;
switch (G__24196) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___24198 = n;
var x_24199 = (0);
while(true){
if((x_24199 < n__4518__auto___24198)){
(a[x_24199] = (0));

var G__24200 = (x_24199 + (1));
x_24199 = G__24200;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24201 = (i + (1));
i = G__24201;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24202 = (function (flag,meta24203){
this.flag = flag;
this.meta24203 = meta24203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24204,meta24203__$1){
var self__ = this;
var _24204__$1 = this;
return (new cljs.core.async.t_cljs$core$async24202(self__.flag,meta24203__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24204){
var self__ = this;
var _24204__$1 = this;
return self__.meta24203;
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24203","meta24203",-908665758,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24202";

cljs.core.async.t_cljs$core$async24202.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24202");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24202.
 */
cljs.core.async.__GT_t_cljs$core$async24202 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24202(flag__$1,meta24203){
return (new cljs.core.async.t_cljs$core$async24202(flag__$1,meta24203));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24202(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24205 = (function (flag,cb,meta24206){
this.flag = flag;
this.cb = cb;
this.meta24206 = meta24206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24207,meta24206__$1){
var self__ = this;
var _24207__$1 = this;
return (new cljs.core.async.t_cljs$core$async24205(self__.flag,self__.cb,meta24206__$1));
});

cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24207){
var self__ = this;
var _24207__$1 = this;
return self__.meta24206;
});

cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24206","meta24206",-497211263,null)], null);
});

cljs.core.async.t_cljs$core$async24205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24205";

cljs.core.async.t_cljs$core$async24205.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24205");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24205.
 */
cljs.core.async.__GT_t_cljs$core$async24205 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24205(flag__$1,cb__$1,meta24206){
return (new cljs.core.async.t_cljs$core$async24205(flag__$1,cb__$1,meta24206));
});

}

return (new cljs.core.async.t_cljs$core$async24205(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24208_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24208_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24209_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24209_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24210 = (i + (1));
i = G__24210;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___24216 = arguments.length;
var i__4642__auto___24217 = (0);
while(true){
if((i__4642__auto___24217 < len__4641__auto___24216)){
args__4647__auto__.push((arguments[i__4642__auto___24217]));

var G__24218 = (i__4642__auto___24217 + (1));
i__4642__auto___24217 = G__24218;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24213){
var map__24214 = p__24213;
var map__24214__$1 = (((((!((map__24214 == null))))?(((((map__24214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24214):map__24214);
var opts = map__24214__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24211){
var G__24212 = cljs.core.first.call(null,seq24211);
var seq24211__$1 = cljs.core.next.call(null,seq24211);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24212,seq24211__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24220 = arguments.length;
switch (G__24220) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24119__auto___24266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___24266){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___24266){
return (function (state_24244){
var state_val_24245 = (state_24244[(1)]);
if((state_val_24245 === (7))){
var inst_24240 = (state_24244[(2)]);
var state_24244__$1 = state_24244;
var statearr_24246_24267 = state_24244__$1;
(statearr_24246_24267[(2)] = inst_24240);

(statearr_24246_24267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (1))){
var state_24244__$1 = state_24244;
var statearr_24247_24268 = state_24244__$1;
(statearr_24247_24268[(2)] = null);

(statearr_24247_24268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (4))){
var inst_24223 = (state_24244[(7)]);
var inst_24223__$1 = (state_24244[(2)]);
var inst_24224 = (inst_24223__$1 == null);
var state_24244__$1 = (function (){var statearr_24248 = state_24244;
(statearr_24248[(7)] = inst_24223__$1);

return statearr_24248;
})();
if(cljs.core.truth_(inst_24224)){
var statearr_24249_24269 = state_24244__$1;
(statearr_24249_24269[(1)] = (5));

} else {
var statearr_24250_24270 = state_24244__$1;
(statearr_24250_24270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (13))){
var state_24244__$1 = state_24244;
var statearr_24251_24271 = state_24244__$1;
(statearr_24251_24271[(2)] = null);

(statearr_24251_24271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (6))){
var inst_24223 = (state_24244[(7)]);
var state_24244__$1 = state_24244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24244__$1,(11),to,inst_24223);
} else {
if((state_val_24245 === (3))){
var inst_24242 = (state_24244[(2)]);
var state_24244__$1 = state_24244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24244__$1,inst_24242);
} else {
if((state_val_24245 === (12))){
var state_24244__$1 = state_24244;
var statearr_24252_24272 = state_24244__$1;
(statearr_24252_24272[(2)] = null);

(statearr_24252_24272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (2))){
var state_24244__$1 = state_24244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24244__$1,(4),from);
} else {
if((state_val_24245 === (11))){
var inst_24233 = (state_24244[(2)]);
var state_24244__$1 = state_24244;
if(cljs.core.truth_(inst_24233)){
var statearr_24253_24273 = state_24244__$1;
(statearr_24253_24273[(1)] = (12));

} else {
var statearr_24254_24274 = state_24244__$1;
(statearr_24254_24274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (9))){
var state_24244__$1 = state_24244;
var statearr_24255_24275 = state_24244__$1;
(statearr_24255_24275[(2)] = null);

(statearr_24255_24275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (5))){
var state_24244__$1 = state_24244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24256_24276 = state_24244__$1;
(statearr_24256_24276[(1)] = (8));

} else {
var statearr_24257_24277 = state_24244__$1;
(statearr_24257_24277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (14))){
var inst_24238 = (state_24244[(2)]);
var state_24244__$1 = state_24244;
var statearr_24258_24278 = state_24244__$1;
(statearr_24258_24278[(2)] = inst_24238);

(statearr_24258_24278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (10))){
var inst_24230 = (state_24244[(2)]);
var state_24244__$1 = state_24244;
var statearr_24259_24279 = state_24244__$1;
(statearr_24259_24279[(2)] = inst_24230);

(statearr_24259_24279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24245 === (8))){
var inst_24227 = cljs.core.async.close_BANG_.call(null,to);
var state_24244__$1 = state_24244;
var statearr_24260_24280 = state_24244__$1;
(statearr_24260_24280[(2)] = inst_24227);

(statearr_24260_24280[(1)] = (10));


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
});})(c__24119__auto___24266))
;
return ((function (switch__24024__auto__,c__24119__auto___24266){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_24261 = [null,null,null,null,null,null,null,null];
(statearr_24261[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_24261[(1)] = (1));

return statearr_24261;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_24244){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24262){if((e24262 instanceof Object)){
var ex__24028__auto__ = e24262;
var statearr_24263_24281 = state_24244;
(statearr_24263_24281[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24282 = state_24244;
state_24244 = G__24282;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_24244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_24244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___24266))
})();
var state__24121__auto__ = (function (){var statearr_24264 = f__24120__auto__.call(null);
(statearr_24264[(6)] = c__24119__auto___24266);

return statearr_24264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___24266))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24283){
var vec__24284 = p__24283;
var v = cljs.core.nth.call(null,vec__24284,(0),null);
var p = cljs.core.nth.call(null,vec__24284,(1),null);
var job = vec__24284;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24119__auto___24455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results){
return (function (state_24291){
var state_val_24292 = (state_24291[(1)]);
if((state_val_24292 === (1))){
var state_24291__$1 = state_24291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24291__$1,(2),res,v);
} else {
if((state_val_24292 === (2))){
var inst_24288 = (state_24291[(2)]);
var inst_24289 = cljs.core.async.close_BANG_.call(null,res);
var state_24291__$1 = (function (){var statearr_24293 = state_24291;
(statearr_24293[(7)] = inst_24288);

return statearr_24293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24291__$1,inst_24289);
} else {
return null;
}
}
});})(c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results))
;
return ((function (switch__24024__auto__,c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_24294 = [null,null,null,null,null,null,null,null];
(statearr_24294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__);

(statearr_24294[(1)] = (1));

return statearr_24294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1 = (function (state_24291){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object)){
var ex__24028__auto__ = e24295;
var statearr_24296_24456 = state_24291;
(statearr_24296_24456[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24457 = state_24291;
state_24291 = G__24457;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = function(state_24291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1.call(this,state_24291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results))
})();
var state__24121__auto__ = (function (){var statearr_24297 = f__24120__auto__.call(null);
(statearr_24297[(6)] = c__24119__auto___24455);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___24455,res,vec__24284,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24298){
var vec__24299 = p__24298;
var v = cljs.core.nth.call(null,vec__24299,(0),null);
var p = cljs.core.nth.call(null,vec__24299,(1),null);
var job = vec__24299;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___24458 = n;
var __24459 = (0);
while(true){
if((__24459 < n__4518__auto___24458)){
var G__24302_24460 = type;
var G__24302_24461__$1 = (((G__24302_24460 instanceof cljs.core.Keyword))?G__24302_24460.fqn:null);
switch (G__24302_24461__$1) {
case "compute":
var c__24119__auto___24463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24459,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (__24459,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function (state_24315){
var state_val_24316 = (state_24315[(1)]);
if((state_val_24316 === (1))){
var state_24315__$1 = state_24315;
var statearr_24317_24464 = state_24315__$1;
(statearr_24317_24464[(2)] = null);

(statearr_24317_24464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (2))){
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24315__$1,(4),jobs);
} else {
if((state_val_24316 === (3))){
var inst_24313 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24315__$1,inst_24313);
} else {
if((state_val_24316 === (4))){
var inst_24305 = (state_24315[(2)]);
var inst_24306 = process.call(null,inst_24305);
var state_24315__$1 = state_24315;
if(cljs.core.truth_(inst_24306)){
var statearr_24318_24465 = state_24315__$1;
(statearr_24318_24465[(1)] = (5));

} else {
var statearr_24319_24466 = state_24315__$1;
(statearr_24319_24466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (5))){
var state_24315__$1 = state_24315;
var statearr_24320_24467 = state_24315__$1;
(statearr_24320_24467[(2)] = null);

(statearr_24320_24467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (6))){
var state_24315__$1 = state_24315;
var statearr_24321_24468 = state_24315__$1;
(statearr_24321_24468[(2)] = null);

(statearr_24321_24468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (7))){
var inst_24311 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24322_24469 = state_24315__$1;
(statearr_24322_24469[(2)] = inst_24311);

(statearr_24322_24469[(1)] = (3));


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
});})(__24459,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
;
return ((function (__24459,switch__24024__auto__,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_24323 = [null,null,null,null,null,null,null];
(statearr_24323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__);

(statearr_24323[(1)] = (1));

return statearr_24323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1 = (function (state_24315){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24324){if((e24324 instanceof Object)){
var ex__24028__auto__ = e24324;
var statearr_24325_24470 = state_24315;
(statearr_24325_24470[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24471 = state_24315;
state_24315 = G__24471;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = function(state_24315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1.call(this,state_24315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__;
})()
;})(__24459,switch__24024__auto__,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
})();
var state__24121__auto__ = (function (){var statearr_24326 = f__24120__auto__.call(null);
(statearr_24326[(6)] = c__24119__auto___24463);

return statearr_24326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(__24459,c__24119__auto___24463,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
);


break;
case "async":
var c__24119__auto___24472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24459,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (__24459,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function (state_24339){
var state_val_24340 = (state_24339[(1)]);
if((state_val_24340 === (1))){
var state_24339__$1 = state_24339;
var statearr_24341_24473 = state_24339__$1;
(statearr_24341_24473[(2)] = null);

(statearr_24341_24473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (2))){
var state_24339__$1 = state_24339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24339__$1,(4),jobs);
} else {
if((state_val_24340 === (3))){
var inst_24337 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24339__$1,inst_24337);
} else {
if((state_val_24340 === (4))){
var inst_24329 = (state_24339[(2)]);
var inst_24330 = async.call(null,inst_24329);
var state_24339__$1 = state_24339;
if(cljs.core.truth_(inst_24330)){
var statearr_24342_24474 = state_24339__$1;
(statearr_24342_24474[(1)] = (5));

} else {
var statearr_24343_24475 = state_24339__$1;
(statearr_24343_24475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (5))){
var state_24339__$1 = state_24339;
var statearr_24344_24476 = state_24339__$1;
(statearr_24344_24476[(2)] = null);

(statearr_24344_24476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (6))){
var state_24339__$1 = state_24339;
var statearr_24345_24477 = state_24339__$1;
(statearr_24345_24477[(2)] = null);

(statearr_24345_24477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24340 === (7))){
var inst_24335 = (state_24339[(2)]);
var state_24339__$1 = state_24339;
var statearr_24346_24478 = state_24339__$1;
(statearr_24346_24478[(2)] = inst_24335);

(statearr_24346_24478[(1)] = (3));


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
});})(__24459,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
;
return ((function (__24459,switch__24024__auto__,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_24347 = [null,null,null,null,null,null,null];
(statearr_24347[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__);

(statearr_24347[(1)] = (1));

return statearr_24347;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1 = (function (state_24339){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24348){if((e24348 instanceof Object)){
var ex__24028__auto__ = e24348;
var statearr_24349_24479 = state_24339;
(statearr_24349_24479[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24480 = state_24339;
state_24339 = G__24480;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = function(state_24339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1.call(this,state_24339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__;
})()
;})(__24459,switch__24024__auto__,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
})();
var state__24121__auto__ = (function (){var statearr_24350 = f__24120__auto__.call(null);
(statearr_24350[(6)] = c__24119__auto___24472);

return statearr_24350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(__24459,c__24119__auto___24472,G__24302_24460,G__24302_24461__$1,n__4518__auto___24458,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24302_24461__$1)].join('')));

}

var G__24481 = (__24459 + (1));
__24459 = G__24481;
continue;
} else {
}
break;
}

var c__24119__auto___24482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___24482,jobs,results,process,async){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___24482,jobs,results,process,async){
return (function (state_24372){
var state_val_24373 = (state_24372[(1)]);
if((state_val_24373 === (7))){
var inst_24368 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
var statearr_24374_24483 = state_24372__$1;
(statearr_24374_24483[(2)] = inst_24368);

(statearr_24374_24483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (1))){
var state_24372__$1 = state_24372;
var statearr_24375_24484 = state_24372__$1;
(statearr_24375_24484[(2)] = null);

(statearr_24375_24484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (4))){
var inst_24353 = (state_24372[(7)]);
var inst_24353__$1 = (state_24372[(2)]);
var inst_24354 = (inst_24353__$1 == null);
var state_24372__$1 = (function (){var statearr_24376 = state_24372;
(statearr_24376[(7)] = inst_24353__$1);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24354)){
var statearr_24377_24485 = state_24372__$1;
(statearr_24377_24485[(1)] = (5));

} else {
var statearr_24378_24486 = state_24372__$1;
(statearr_24378_24486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (6))){
var inst_24353 = (state_24372[(7)]);
var inst_24358 = (state_24372[(8)]);
var inst_24358__$1 = cljs.core.async.chan.call(null,(1));
var inst_24359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24360 = [inst_24353,inst_24358__$1];
var inst_24361 = (new cljs.core.PersistentVector(null,2,(5),inst_24359,inst_24360,null));
var state_24372__$1 = (function (){var statearr_24379 = state_24372;
(statearr_24379[(8)] = inst_24358__$1);

return statearr_24379;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,(8),jobs,inst_24361);
} else {
if((state_val_24373 === (3))){
var inst_24370 = (state_24372[(2)]);
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24372__$1,inst_24370);
} else {
if((state_val_24373 === (2))){
var state_24372__$1 = state_24372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24372__$1,(4),from);
} else {
if((state_val_24373 === (9))){
var inst_24365 = (state_24372[(2)]);
var state_24372__$1 = (function (){var statearr_24380 = state_24372;
(statearr_24380[(9)] = inst_24365);

return statearr_24380;
})();
var statearr_24381_24487 = state_24372__$1;
(statearr_24381_24487[(2)] = null);

(statearr_24381_24487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (5))){
var inst_24356 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24372__$1 = state_24372;
var statearr_24382_24488 = state_24372__$1;
(statearr_24382_24488[(2)] = inst_24356);

(statearr_24382_24488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24373 === (8))){
var inst_24358 = (state_24372[(8)]);
var inst_24363 = (state_24372[(2)]);
var state_24372__$1 = (function (){var statearr_24383 = state_24372;
(statearr_24383[(10)] = inst_24363);

return statearr_24383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,(9),results,inst_24358);
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
});})(c__24119__auto___24482,jobs,results,process,async))
;
return ((function (switch__24024__auto__,c__24119__auto___24482,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1 = (function (state_24372){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__24028__auto__ = e24385;
var statearr_24386_24489 = state_24372;
(statearr_24386_24489[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24490 = state_24372;
state_24372 = G__24490;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = function(state_24372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1.call(this,state_24372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___24482,jobs,results,process,async))
})();
var state__24121__auto__ = (function (){var statearr_24387 = f__24120__auto__.call(null);
(statearr_24387[(6)] = c__24119__auto___24482);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___24482,jobs,results,process,async))
);


var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__,jobs,results,process,async){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__,jobs,results,process,async){
return (function (state_24425){
var state_val_24426 = (state_24425[(1)]);
if((state_val_24426 === (7))){
var inst_24421 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24427_24491 = state_24425__$1;
(statearr_24427_24491[(2)] = inst_24421);

(statearr_24427_24491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (20))){
var state_24425__$1 = state_24425;
var statearr_24428_24492 = state_24425__$1;
(statearr_24428_24492[(2)] = null);

(statearr_24428_24492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (1))){
var state_24425__$1 = state_24425;
var statearr_24429_24493 = state_24425__$1;
(statearr_24429_24493[(2)] = null);

(statearr_24429_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (4))){
var inst_24390 = (state_24425[(7)]);
var inst_24390__$1 = (state_24425[(2)]);
var inst_24391 = (inst_24390__$1 == null);
var state_24425__$1 = (function (){var statearr_24430 = state_24425;
(statearr_24430[(7)] = inst_24390__$1);

return statearr_24430;
})();
if(cljs.core.truth_(inst_24391)){
var statearr_24431_24494 = state_24425__$1;
(statearr_24431_24494[(1)] = (5));

} else {
var statearr_24432_24495 = state_24425__$1;
(statearr_24432_24495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (15))){
var inst_24403 = (state_24425[(8)]);
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24425__$1,(18),to,inst_24403);
} else {
if((state_val_24426 === (21))){
var inst_24416 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24433_24496 = state_24425__$1;
(statearr_24433_24496[(2)] = inst_24416);

(statearr_24433_24496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (13))){
var inst_24418 = (state_24425[(2)]);
var state_24425__$1 = (function (){var statearr_24434 = state_24425;
(statearr_24434[(9)] = inst_24418);

return statearr_24434;
})();
var statearr_24435_24497 = state_24425__$1;
(statearr_24435_24497[(2)] = null);

(statearr_24435_24497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (6))){
var inst_24390 = (state_24425[(7)]);
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24425__$1,(11),inst_24390);
} else {
if((state_val_24426 === (17))){
var inst_24411 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
if(cljs.core.truth_(inst_24411)){
var statearr_24436_24498 = state_24425__$1;
(statearr_24436_24498[(1)] = (19));

} else {
var statearr_24437_24499 = state_24425__$1;
(statearr_24437_24499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (3))){
var inst_24423 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24425__$1,inst_24423);
} else {
if((state_val_24426 === (12))){
var inst_24400 = (state_24425[(10)]);
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24425__$1,(14),inst_24400);
} else {
if((state_val_24426 === (2))){
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24425__$1,(4),results);
} else {
if((state_val_24426 === (19))){
var state_24425__$1 = state_24425;
var statearr_24438_24500 = state_24425__$1;
(statearr_24438_24500[(2)] = null);

(statearr_24438_24500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (11))){
var inst_24400 = (state_24425[(2)]);
var state_24425__$1 = (function (){var statearr_24439 = state_24425;
(statearr_24439[(10)] = inst_24400);

return statearr_24439;
})();
var statearr_24440_24501 = state_24425__$1;
(statearr_24440_24501[(2)] = null);

(statearr_24440_24501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (9))){
var state_24425__$1 = state_24425;
var statearr_24441_24502 = state_24425__$1;
(statearr_24441_24502[(2)] = null);

(statearr_24441_24502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (5))){
var state_24425__$1 = state_24425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24442_24503 = state_24425__$1;
(statearr_24442_24503[(1)] = (8));

} else {
var statearr_24443_24504 = state_24425__$1;
(statearr_24443_24504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (14))){
var inst_24403 = (state_24425[(8)]);
var inst_24405 = (state_24425[(11)]);
var inst_24403__$1 = (state_24425[(2)]);
var inst_24404 = (inst_24403__$1 == null);
var inst_24405__$1 = cljs.core.not.call(null,inst_24404);
var state_24425__$1 = (function (){var statearr_24444 = state_24425;
(statearr_24444[(8)] = inst_24403__$1);

(statearr_24444[(11)] = inst_24405__$1);

return statearr_24444;
})();
if(inst_24405__$1){
var statearr_24445_24505 = state_24425__$1;
(statearr_24445_24505[(1)] = (15));

} else {
var statearr_24446_24506 = state_24425__$1;
(statearr_24446_24506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (16))){
var inst_24405 = (state_24425[(11)]);
var state_24425__$1 = state_24425;
var statearr_24447_24507 = state_24425__$1;
(statearr_24447_24507[(2)] = inst_24405);

(statearr_24447_24507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (10))){
var inst_24397 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24448_24508 = state_24425__$1;
(statearr_24448_24508[(2)] = inst_24397);

(statearr_24448_24508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (18))){
var inst_24408 = (state_24425[(2)]);
var state_24425__$1 = state_24425;
var statearr_24449_24509 = state_24425__$1;
(statearr_24449_24509[(2)] = inst_24408);

(statearr_24449_24509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24426 === (8))){
var inst_24394 = cljs.core.async.close_BANG_.call(null,to);
var state_24425__$1 = state_24425;
var statearr_24450_24510 = state_24425__$1;
(statearr_24450_24510[(2)] = inst_24394);

(statearr_24450_24510[(1)] = (10));


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
});})(c__24119__auto__,jobs,results,process,async))
;
return ((function (switch__24024__auto__,c__24119__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1 = (function (state_24425){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__24028__auto__ = e24452;
var statearr_24453_24511 = state_24425;
(statearr_24453_24511[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24512 = state_24425;
state_24425 = G__24512;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__ = function(state_24425){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1.call(this,state_24425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__,jobs,results,process,async))
})();
var state__24121__auto__ = (function (){var statearr_24454 = f__24120__auto__.call(null);
(statearr_24454[(6)] = c__24119__auto__);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__,jobs,results,process,async))
);

return c__24119__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24514 = arguments.length;
switch (G__24514) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24517 = arguments.length;
switch (G__24517) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24520 = arguments.length;
switch (G__24520) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24119__auto___24569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___24569,tc,fc){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___24569,tc,fc){
return (function (state_24546){
var state_val_24547 = (state_24546[(1)]);
if((state_val_24547 === (7))){
var inst_24542 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24548_24570 = state_24546__$1;
(statearr_24548_24570[(2)] = inst_24542);

(statearr_24548_24570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (1))){
var state_24546__$1 = state_24546;
var statearr_24549_24571 = state_24546__$1;
(statearr_24549_24571[(2)] = null);

(statearr_24549_24571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (4))){
var inst_24523 = (state_24546[(7)]);
var inst_24523__$1 = (state_24546[(2)]);
var inst_24524 = (inst_24523__$1 == null);
var state_24546__$1 = (function (){var statearr_24550 = state_24546;
(statearr_24550[(7)] = inst_24523__$1);

return statearr_24550;
})();
if(cljs.core.truth_(inst_24524)){
var statearr_24551_24572 = state_24546__$1;
(statearr_24551_24572[(1)] = (5));

} else {
var statearr_24552_24573 = state_24546__$1;
(statearr_24552_24573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (13))){
var state_24546__$1 = state_24546;
var statearr_24553_24574 = state_24546__$1;
(statearr_24553_24574[(2)] = null);

(statearr_24553_24574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (6))){
var inst_24523 = (state_24546[(7)]);
var inst_24529 = p.call(null,inst_24523);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24529)){
var statearr_24554_24575 = state_24546__$1;
(statearr_24554_24575[(1)] = (9));

} else {
var statearr_24555_24576 = state_24546__$1;
(statearr_24555_24576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (3))){
var inst_24544 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else {
if((state_val_24547 === (12))){
var state_24546__$1 = state_24546;
var statearr_24556_24577 = state_24546__$1;
(statearr_24556_24577[(2)] = null);

(statearr_24556_24577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (2))){
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(4),ch);
} else {
if((state_val_24547 === (11))){
var inst_24523 = (state_24546[(7)]);
var inst_24533 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24546__$1,(8),inst_24533,inst_24523);
} else {
if((state_val_24547 === (9))){
var state_24546__$1 = state_24546;
var statearr_24557_24578 = state_24546__$1;
(statearr_24557_24578[(2)] = tc);

(statearr_24557_24578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (5))){
var inst_24526 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24527 = cljs.core.async.close_BANG_.call(null,fc);
var state_24546__$1 = (function (){var statearr_24558 = state_24546;
(statearr_24558[(8)] = inst_24526);

return statearr_24558;
})();
var statearr_24559_24579 = state_24546__$1;
(statearr_24559_24579[(2)] = inst_24527);

(statearr_24559_24579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (14))){
var inst_24540 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24560_24580 = state_24546__$1;
(statearr_24560_24580[(2)] = inst_24540);

(statearr_24560_24580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (10))){
var state_24546__$1 = state_24546;
var statearr_24561_24581 = state_24546__$1;
(statearr_24561_24581[(2)] = fc);

(statearr_24561_24581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (8))){
var inst_24535 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24535)){
var statearr_24562_24582 = state_24546__$1;
(statearr_24562_24582[(1)] = (12));

} else {
var statearr_24563_24583 = state_24546__$1;
(statearr_24563_24583[(1)] = (13));

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
});})(c__24119__auto___24569,tc,fc))
;
return ((function (switch__24024__auto__,c__24119__auto___24569,tc,fc){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_24564 = [null,null,null,null,null,null,null,null,null];
(statearr_24564[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_24564[(1)] = (1));

return statearr_24564;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_24546){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24565){if((e24565 instanceof Object)){
var ex__24028__auto__ = e24565;
var statearr_24566_24584 = state_24546;
(statearr_24566_24584[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24585 = state_24546;
state_24546 = G__24585;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___24569,tc,fc))
})();
var state__24121__auto__ = (function (){var statearr_24567 = f__24120__auto__.call(null);
(statearr_24567[(6)] = c__24119__auto___24569);

return statearr_24567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___24569,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__){
return (function (state_24606){
var state_val_24607 = (state_24606[(1)]);
if((state_val_24607 === (7))){
var inst_24602 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
var statearr_24608_24626 = state_24606__$1;
(statearr_24608_24626[(2)] = inst_24602);

(statearr_24608_24626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (1))){
var inst_24586 = init;
var state_24606__$1 = (function (){var statearr_24609 = state_24606;
(statearr_24609[(7)] = inst_24586);

return statearr_24609;
})();
var statearr_24610_24627 = state_24606__$1;
(statearr_24610_24627[(2)] = null);

(statearr_24610_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (4))){
var inst_24589 = (state_24606[(8)]);
var inst_24589__$1 = (state_24606[(2)]);
var inst_24590 = (inst_24589__$1 == null);
var state_24606__$1 = (function (){var statearr_24611 = state_24606;
(statearr_24611[(8)] = inst_24589__$1);

return statearr_24611;
})();
if(cljs.core.truth_(inst_24590)){
var statearr_24612_24628 = state_24606__$1;
(statearr_24612_24628[(1)] = (5));

} else {
var statearr_24613_24629 = state_24606__$1;
(statearr_24613_24629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (6))){
var inst_24589 = (state_24606[(8)]);
var inst_24586 = (state_24606[(7)]);
var inst_24593 = (state_24606[(9)]);
var inst_24593__$1 = f.call(null,inst_24586,inst_24589);
var inst_24594 = cljs.core.reduced_QMARK_.call(null,inst_24593__$1);
var state_24606__$1 = (function (){var statearr_24614 = state_24606;
(statearr_24614[(9)] = inst_24593__$1);

return statearr_24614;
})();
if(inst_24594){
var statearr_24615_24630 = state_24606__$1;
(statearr_24615_24630[(1)] = (8));

} else {
var statearr_24616_24631 = state_24606__$1;
(statearr_24616_24631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (3))){
var inst_24604 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24606__$1,inst_24604);
} else {
if((state_val_24607 === (2))){
var state_24606__$1 = state_24606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24606__$1,(4),ch);
} else {
if((state_val_24607 === (9))){
var inst_24593 = (state_24606[(9)]);
var inst_24586 = inst_24593;
var state_24606__$1 = (function (){var statearr_24617 = state_24606;
(statearr_24617[(7)] = inst_24586);

return statearr_24617;
})();
var statearr_24618_24632 = state_24606__$1;
(statearr_24618_24632[(2)] = null);

(statearr_24618_24632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (5))){
var inst_24586 = (state_24606[(7)]);
var state_24606__$1 = state_24606;
var statearr_24619_24633 = state_24606__$1;
(statearr_24619_24633[(2)] = inst_24586);

(statearr_24619_24633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (10))){
var inst_24600 = (state_24606[(2)]);
var state_24606__$1 = state_24606;
var statearr_24620_24634 = state_24606__$1;
(statearr_24620_24634[(2)] = inst_24600);

(statearr_24620_24634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24607 === (8))){
var inst_24593 = (state_24606[(9)]);
var inst_24596 = cljs.core.deref.call(null,inst_24593);
var state_24606__$1 = state_24606;
var statearr_24621_24635 = state_24606__$1;
(statearr_24621_24635[(2)] = inst_24596);

(statearr_24621_24635[(1)] = (10));


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
});})(c__24119__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24025__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24025__auto____0 = (function (){
var statearr_24622 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24622[(0)] = cljs$core$async$reduce_$_state_machine__24025__auto__);

(statearr_24622[(1)] = (1));

return statearr_24622;
});
var cljs$core$async$reduce_$_state_machine__24025__auto____1 = (function (state_24606){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24623){if((e24623 instanceof Object)){
var ex__24028__auto__ = e24623;
var statearr_24624_24636 = state_24606;
(statearr_24624_24636[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24637 = state_24606;
state_24606 = G__24637;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24025__auto__ = function(state_24606){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24025__auto____1.call(this,state_24606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24025__auto____0;
cljs$core$async$reduce_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24025__auto____1;
return cljs$core$async$reduce_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__))
})();
var state__24121__auto__ = (function (){var statearr_24625 = f__24120__auto__.call(null);
(statearr_24625[(6)] = c__24119__auto__);

return statearr_24625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__))
);

return c__24119__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__,f__$1){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__,f__$1){
return (function (state_24643){
var state_val_24644 = (state_24643[(1)]);
if((state_val_24644 === (1))){
var inst_24638 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24643__$1,(2),inst_24638);
} else {
if((state_val_24644 === (2))){
var inst_24640 = (state_24643[(2)]);
var inst_24641 = f__$1.call(null,inst_24640);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24643__$1,inst_24641);
} else {
return null;
}
}
});})(c__24119__auto__,f__$1))
;
return ((function (switch__24024__auto__,c__24119__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24025__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24025__auto____0 = (function (){
var statearr_24645 = [null,null,null,null,null,null,null];
(statearr_24645[(0)] = cljs$core$async$transduce_$_state_machine__24025__auto__);

(statearr_24645[(1)] = (1));

return statearr_24645;
});
var cljs$core$async$transduce_$_state_machine__24025__auto____1 = (function (state_24643){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24646){if((e24646 instanceof Object)){
var ex__24028__auto__ = e24646;
var statearr_24647_24649 = state_24643;
(statearr_24647_24649[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24650 = state_24643;
state_24643 = G__24650;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24025__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24025__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24025__auto____0;
cljs$core$async$transduce_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24025__auto____1;
return cljs$core$async$transduce_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__,f__$1))
})();
var state__24121__auto__ = (function (){var statearr_24648 = f__24120__auto__.call(null);
(statearr_24648[(6)] = c__24119__auto__);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__,f__$1))
);

return c__24119__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24652 = arguments.length;
switch (G__24652) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__){
return (function (state_24677){
var state_val_24678 = (state_24677[(1)]);
if((state_val_24678 === (7))){
var inst_24659 = (state_24677[(2)]);
var state_24677__$1 = state_24677;
var statearr_24679_24700 = state_24677__$1;
(statearr_24679_24700[(2)] = inst_24659);

(statearr_24679_24700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (1))){
var inst_24653 = cljs.core.seq.call(null,coll);
var inst_24654 = inst_24653;
var state_24677__$1 = (function (){var statearr_24680 = state_24677;
(statearr_24680[(7)] = inst_24654);

return statearr_24680;
})();
var statearr_24681_24701 = state_24677__$1;
(statearr_24681_24701[(2)] = null);

(statearr_24681_24701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (4))){
var inst_24654 = (state_24677[(7)]);
var inst_24657 = cljs.core.first.call(null,inst_24654);
var state_24677__$1 = state_24677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24677__$1,(7),ch,inst_24657);
} else {
if((state_val_24678 === (13))){
var inst_24671 = (state_24677[(2)]);
var state_24677__$1 = state_24677;
var statearr_24682_24702 = state_24677__$1;
(statearr_24682_24702[(2)] = inst_24671);

(statearr_24682_24702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (6))){
var inst_24662 = (state_24677[(2)]);
var state_24677__$1 = state_24677;
if(cljs.core.truth_(inst_24662)){
var statearr_24683_24703 = state_24677__$1;
(statearr_24683_24703[(1)] = (8));

} else {
var statearr_24684_24704 = state_24677__$1;
(statearr_24684_24704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (3))){
var inst_24675 = (state_24677[(2)]);
var state_24677__$1 = state_24677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24677__$1,inst_24675);
} else {
if((state_val_24678 === (12))){
var state_24677__$1 = state_24677;
var statearr_24685_24705 = state_24677__$1;
(statearr_24685_24705[(2)] = null);

(statearr_24685_24705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (2))){
var inst_24654 = (state_24677[(7)]);
var state_24677__$1 = state_24677;
if(cljs.core.truth_(inst_24654)){
var statearr_24686_24706 = state_24677__$1;
(statearr_24686_24706[(1)] = (4));

} else {
var statearr_24687_24707 = state_24677__$1;
(statearr_24687_24707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (11))){
var inst_24668 = cljs.core.async.close_BANG_.call(null,ch);
var state_24677__$1 = state_24677;
var statearr_24688_24708 = state_24677__$1;
(statearr_24688_24708[(2)] = inst_24668);

(statearr_24688_24708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (9))){
var state_24677__$1 = state_24677;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24689_24709 = state_24677__$1;
(statearr_24689_24709[(1)] = (11));

} else {
var statearr_24690_24710 = state_24677__$1;
(statearr_24690_24710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (5))){
var inst_24654 = (state_24677[(7)]);
var state_24677__$1 = state_24677;
var statearr_24691_24711 = state_24677__$1;
(statearr_24691_24711[(2)] = inst_24654);

(statearr_24691_24711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (10))){
var inst_24673 = (state_24677[(2)]);
var state_24677__$1 = state_24677;
var statearr_24692_24712 = state_24677__$1;
(statearr_24692_24712[(2)] = inst_24673);

(statearr_24692_24712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24678 === (8))){
var inst_24654 = (state_24677[(7)]);
var inst_24664 = cljs.core.next.call(null,inst_24654);
var inst_24654__$1 = inst_24664;
var state_24677__$1 = (function (){var statearr_24693 = state_24677;
(statearr_24693[(7)] = inst_24654__$1);

return statearr_24693;
})();
var statearr_24694_24713 = state_24677__$1;
(statearr_24694_24713[(2)] = null);

(statearr_24694_24713[(1)] = (2));


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
});})(c__24119__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_24695 = [null,null,null,null,null,null,null,null];
(statearr_24695[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_24695[(1)] = (1));

return statearr_24695;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_24677){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24696){if((e24696 instanceof Object)){
var ex__24028__auto__ = e24696;
var statearr_24697_24714 = state_24677;
(statearr_24697_24714[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24715 = state_24677;
state_24677 = G__24715;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_24677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_24677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__))
})();
var state__24121__auto__ = (function (){var statearr_24698 = f__24120__auto__.call(null);
(statearr_24698[(6)] = c__24119__auto__);

return statearr_24698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__))
);

return c__24119__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24716 = (function (ch,cs,meta24717){
this.ch = ch;
this.cs = cs;
this.meta24717 = meta24717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24718,meta24717__$1){
var self__ = this;
var _24718__$1 = this;
return (new cljs.core.async.t_cljs$core$async24716(self__.ch,self__.cs,meta24717__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24718){
var self__ = this;
var _24718__$1 = this;
return self__.meta24717;
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24717","meta24717",1142157757,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24716";

cljs.core.async.t_cljs$core$async24716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24716");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24716.
 */
cljs.core.async.__GT_t_cljs$core$async24716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24716(ch__$1,cs__$1,meta24717){
return (new cljs.core.async.t_cljs$core$async24716(ch__$1,cs__$1,meta24717));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24716(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24119__auto___24938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___24938,cs,m,dchan,dctr,done){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___24938,cs,m,dchan,dctr,done){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24855_24939 = state_24853__$1;
(statearr_24855_24939[(2)] = inst_24849);

(statearr_24855_24939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (20))){
var inst_24752 = (state_24853[(7)]);
var inst_24764 = cljs.core.first.call(null,inst_24752);
var inst_24765 = cljs.core.nth.call(null,inst_24764,(0),null);
var inst_24766 = cljs.core.nth.call(null,inst_24764,(1),null);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(8)] = inst_24765);

return statearr_24856;
})();
if(cljs.core.truth_(inst_24766)){
var statearr_24857_24940 = state_24853__$1;
(statearr_24857_24940[(1)] = (22));

} else {
var statearr_24858_24941 = state_24853__$1;
(statearr_24858_24941[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (27))){
var inst_24796 = (state_24853[(9)]);
var inst_24721 = (state_24853[(10)]);
var inst_24801 = (state_24853[(11)]);
var inst_24794 = (state_24853[(12)]);
var inst_24801__$1 = cljs.core._nth.call(null,inst_24794,inst_24796);
var inst_24802 = cljs.core.async.put_BANG_.call(null,inst_24801__$1,inst_24721,done);
var state_24853__$1 = (function (){var statearr_24859 = state_24853;
(statearr_24859[(11)] = inst_24801__$1);

return statearr_24859;
})();
if(cljs.core.truth_(inst_24802)){
var statearr_24860_24942 = state_24853__$1;
(statearr_24860_24942[(1)] = (30));

} else {
var statearr_24861_24943 = state_24853__$1;
(statearr_24861_24943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24862_24944 = state_24853__$1;
(statearr_24862_24944[(2)] = null);

(statearr_24862_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (24))){
var inst_24752 = (state_24853[(7)]);
var inst_24771 = (state_24853[(2)]);
var inst_24772 = cljs.core.next.call(null,inst_24752);
var inst_24730 = inst_24772;
var inst_24731 = null;
var inst_24732 = (0);
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24863 = state_24853;
(statearr_24863[(13)] = inst_24731);

(statearr_24863[(14)] = inst_24733);

(statearr_24863[(15)] = inst_24771);

(statearr_24863[(16)] = inst_24732);

(statearr_24863[(17)] = inst_24730);

return statearr_24863;
})();
var statearr_24864_24945 = state_24853__$1;
(statearr_24864_24945[(2)] = null);

(statearr_24864_24945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (39))){
var state_24853__$1 = state_24853;
var statearr_24868_24946 = state_24853__$1;
(statearr_24868_24946[(2)] = null);

(statearr_24868_24946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (4))){
var inst_24721 = (state_24853[(10)]);
var inst_24721__$1 = (state_24853[(2)]);
var inst_24722 = (inst_24721__$1 == null);
var state_24853__$1 = (function (){var statearr_24869 = state_24853;
(statearr_24869[(10)] = inst_24721__$1);

return statearr_24869;
})();
if(cljs.core.truth_(inst_24722)){
var statearr_24870_24947 = state_24853__$1;
(statearr_24870_24947[(1)] = (5));

} else {
var statearr_24871_24948 = state_24853__$1;
(statearr_24871_24948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (15))){
var inst_24731 = (state_24853[(13)]);
var inst_24733 = (state_24853[(14)]);
var inst_24732 = (state_24853[(16)]);
var inst_24730 = (state_24853[(17)]);
var inst_24748 = (state_24853[(2)]);
var inst_24749 = (inst_24733 + (1));
var tmp24865 = inst_24731;
var tmp24866 = inst_24732;
var tmp24867 = inst_24730;
var inst_24730__$1 = tmp24867;
var inst_24731__$1 = tmp24865;
var inst_24732__$1 = tmp24866;
var inst_24733__$1 = inst_24749;
var state_24853__$1 = (function (){var statearr_24872 = state_24853;
(statearr_24872[(13)] = inst_24731__$1);

(statearr_24872[(18)] = inst_24748);

(statearr_24872[(14)] = inst_24733__$1);

(statearr_24872[(16)] = inst_24732__$1);

(statearr_24872[(17)] = inst_24730__$1);

return statearr_24872;
})();
var statearr_24873_24949 = state_24853__$1;
(statearr_24873_24949[(2)] = null);

(statearr_24873_24949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (21))){
var inst_24775 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24877_24950 = state_24853__$1;
(statearr_24877_24950[(2)] = inst_24775);

(statearr_24877_24950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (31))){
var inst_24801 = (state_24853[(11)]);
var inst_24805 = done.call(null,null);
var inst_24806 = cljs.core.async.untap_STAR_.call(null,m,inst_24801);
var state_24853__$1 = (function (){var statearr_24878 = state_24853;
(statearr_24878[(19)] = inst_24805);

return statearr_24878;
})();
var statearr_24879_24951 = state_24853__$1;
(statearr_24879_24951[(2)] = inst_24806);

(statearr_24879_24951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (32))){
var inst_24795 = (state_24853[(20)]);
var inst_24796 = (state_24853[(9)]);
var inst_24794 = (state_24853[(12)]);
var inst_24793 = (state_24853[(21)]);
var inst_24808 = (state_24853[(2)]);
var inst_24809 = (inst_24796 + (1));
var tmp24874 = inst_24795;
var tmp24875 = inst_24794;
var tmp24876 = inst_24793;
var inst_24793__$1 = tmp24876;
var inst_24794__$1 = tmp24875;
var inst_24795__$1 = tmp24874;
var inst_24796__$1 = inst_24809;
var state_24853__$1 = (function (){var statearr_24880 = state_24853;
(statearr_24880[(20)] = inst_24795__$1);

(statearr_24880[(22)] = inst_24808);

(statearr_24880[(9)] = inst_24796__$1);

(statearr_24880[(12)] = inst_24794__$1);

(statearr_24880[(21)] = inst_24793__$1);

return statearr_24880;
})();
var statearr_24881_24952 = state_24853__$1;
(statearr_24881_24952[(2)] = null);

(statearr_24881_24952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (40))){
var inst_24821 = (state_24853[(23)]);
var inst_24825 = done.call(null,null);
var inst_24826 = cljs.core.async.untap_STAR_.call(null,m,inst_24821);
var state_24853__$1 = (function (){var statearr_24882 = state_24853;
(statearr_24882[(24)] = inst_24825);

return statearr_24882;
})();
var statearr_24883_24953 = state_24853__$1;
(statearr_24883_24953[(2)] = inst_24826);

(statearr_24883_24953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (33))){
var inst_24812 = (state_24853[(25)]);
var inst_24814 = cljs.core.chunked_seq_QMARK_.call(null,inst_24812);
var state_24853__$1 = state_24853;
if(inst_24814){
var statearr_24884_24954 = state_24853__$1;
(statearr_24884_24954[(1)] = (36));

} else {
var statearr_24885_24955 = state_24853__$1;
(statearr_24885_24955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (13))){
var inst_24742 = (state_24853[(26)]);
var inst_24745 = cljs.core.async.close_BANG_.call(null,inst_24742);
var state_24853__$1 = state_24853;
var statearr_24886_24956 = state_24853__$1;
(statearr_24886_24956[(2)] = inst_24745);

(statearr_24886_24956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (22))){
var inst_24765 = (state_24853[(8)]);
var inst_24768 = cljs.core.async.close_BANG_.call(null,inst_24765);
var state_24853__$1 = state_24853;
var statearr_24887_24957 = state_24853__$1;
(statearr_24887_24957[(2)] = inst_24768);

(statearr_24887_24957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (36))){
var inst_24812 = (state_24853[(25)]);
var inst_24816 = cljs.core.chunk_first.call(null,inst_24812);
var inst_24817 = cljs.core.chunk_rest.call(null,inst_24812);
var inst_24818 = cljs.core.count.call(null,inst_24816);
var inst_24793 = inst_24817;
var inst_24794 = inst_24816;
var inst_24795 = inst_24818;
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24888 = state_24853;
(statearr_24888[(20)] = inst_24795);

(statearr_24888[(9)] = inst_24796);

(statearr_24888[(12)] = inst_24794);

(statearr_24888[(21)] = inst_24793);

return statearr_24888;
})();
var statearr_24889_24958 = state_24853__$1;
(statearr_24889_24958[(2)] = null);

(statearr_24889_24958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (41))){
var inst_24812 = (state_24853[(25)]);
var inst_24828 = (state_24853[(2)]);
var inst_24829 = cljs.core.next.call(null,inst_24812);
var inst_24793 = inst_24829;
var inst_24794 = null;
var inst_24795 = (0);
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24890 = state_24853;
(statearr_24890[(20)] = inst_24795);

(statearr_24890[(9)] = inst_24796);

(statearr_24890[(27)] = inst_24828);

(statearr_24890[(12)] = inst_24794);

(statearr_24890[(21)] = inst_24793);

return statearr_24890;
})();
var statearr_24891_24959 = state_24853__$1;
(statearr_24891_24959[(2)] = null);

(statearr_24891_24959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (43))){
var state_24853__$1 = state_24853;
var statearr_24892_24960 = state_24853__$1;
(statearr_24892_24960[(2)] = null);

(statearr_24892_24960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (29))){
var inst_24837 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24893_24961 = state_24853__$1;
(statearr_24893_24961[(2)] = inst_24837);

(statearr_24893_24961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (44))){
var inst_24846 = (state_24853[(2)]);
var state_24853__$1 = (function (){var statearr_24894 = state_24853;
(statearr_24894[(28)] = inst_24846);

return statearr_24894;
})();
var statearr_24895_24962 = state_24853__$1;
(statearr_24895_24962[(2)] = null);

(statearr_24895_24962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24785 = (state_24853[(29)]);
var inst_24784 = cljs.core.deref.call(null,cs);
var inst_24785__$1 = cljs.core.keys.call(null,inst_24784);
var inst_24786 = cljs.core.count.call(null,inst_24785__$1);
var inst_24787 = cljs.core.reset_BANG_.call(null,dctr,inst_24786);
var inst_24792 = cljs.core.seq.call(null,inst_24785__$1);
var inst_24793 = inst_24792;
var inst_24794 = null;
var inst_24795 = (0);
var inst_24796 = (0);
var state_24853__$1 = (function (){var statearr_24896 = state_24853;
(statearr_24896[(20)] = inst_24795);

(statearr_24896[(29)] = inst_24785__$1);

(statearr_24896[(9)] = inst_24796);

(statearr_24896[(12)] = inst_24794);

(statearr_24896[(30)] = inst_24787);

(statearr_24896[(21)] = inst_24793);

return statearr_24896;
})();
var statearr_24897_24963 = state_24853__$1;
(statearr_24897_24963[(2)] = null);

(statearr_24897_24963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (28))){
var inst_24812 = (state_24853[(25)]);
var inst_24793 = (state_24853[(21)]);
var inst_24812__$1 = cljs.core.seq.call(null,inst_24793);
var state_24853__$1 = (function (){var statearr_24898 = state_24853;
(statearr_24898[(25)] = inst_24812__$1);

return statearr_24898;
})();
if(inst_24812__$1){
var statearr_24899_24964 = state_24853__$1;
(statearr_24899_24964[(1)] = (33));

} else {
var statearr_24900_24965 = state_24853__$1;
(statearr_24900_24965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (25))){
var inst_24795 = (state_24853[(20)]);
var inst_24796 = (state_24853[(9)]);
var inst_24798 = (inst_24796 < inst_24795);
var inst_24799 = inst_24798;
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24799)){
var statearr_24901_24966 = state_24853__$1;
(statearr_24901_24966[(1)] = (27));

} else {
var statearr_24902_24967 = state_24853__$1;
(statearr_24902_24967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (34))){
var state_24853__$1 = state_24853;
var statearr_24903_24968 = state_24853__$1;
(statearr_24903_24968[(2)] = null);

(statearr_24903_24968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (17))){
var state_24853__$1 = state_24853;
var statearr_24904_24969 = state_24853__$1;
(statearr_24904_24969[(2)] = null);

(statearr_24904_24969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (12))){
var inst_24780 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24905_24970 = state_24853__$1;
(statearr_24905_24970[(2)] = inst_24780);

(statearr_24905_24970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),ch);
} else {
if((state_val_24854 === (23))){
var state_24853__$1 = state_24853;
var statearr_24906_24971 = state_24853__$1;
(statearr_24906_24971[(2)] = null);

(statearr_24906_24971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (35))){
var inst_24835 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24907_24972 = state_24853__$1;
(statearr_24907_24972[(2)] = inst_24835);

(statearr_24907_24972[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (19))){
var inst_24752 = (state_24853[(7)]);
var inst_24756 = cljs.core.chunk_first.call(null,inst_24752);
var inst_24757 = cljs.core.chunk_rest.call(null,inst_24752);
var inst_24758 = cljs.core.count.call(null,inst_24756);
var inst_24730 = inst_24757;
var inst_24731 = inst_24756;
var inst_24732 = inst_24758;
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24908 = state_24853;
(statearr_24908[(13)] = inst_24731);

(statearr_24908[(14)] = inst_24733);

(statearr_24908[(16)] = inst_24732);

(statearr_24908[(17)] = inst_24730);

return statearr_24908;
})();
var statearr_24909_24973 = state_24853__$1;
(statearr_24909_24973[(2)] = null);

(statearr_24909_24973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (11))){
var inst_24752 = (state_24853[(7)]);
var inst_24730 = (state_24853[(17)]);
var inst_24752__$1 = cljs.core.seq.call(null,inst_24730);
var state_24853__$1 = (function (){var statearr_24910 = state_24853;
(statearr_24910[(7)] = inst_24752__$1);

return statearr_24910;
})();
if(inst_24752__$1){
var statearr_24911_24974 = state_24853__$1;
(statearr_24911_24974[(1)] = (16));

} else {
var statearr_24912_24975 = state_24853__$1;
(statearr_24912_24975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (9))){
var inst_24782 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24913_24976 = state_24853__$1;
(statearr_24913_24976[(2)] = inst_24782);

(statearr_24913_24976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24728 = cljs.core.deref.call(null,cs);
var inst_24729 = cljs.core.seq.call(null,inst_24728);
var inst_24730 = inst_24729;
var inst_24731 = null;
var inst_24732 = (0);
var inst_24733 = (0);
var state_24853__$1 = (function (){var statearr_24914 = state_24853;
(statearr_24914[(13)] = inst_24731);

(statearr_24914[(14)] = inst_24733);

(statearr_24914[(16)] = inst_24732);

(statearr_24914[(17)] = inst_24730);

return statearr_24914;
})();
var statearr_24915_24977 = state_24853__$1;
(statearr_24915_24977[(2)] = null);

(statearr_24915_24977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (14))){
var state_24853__$1 = state_24853;
var statearr_24916_24978 = state_24853__$1;
(statearr_24916_24978[(2)] = null);

(statearr_24916_24978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (45))){
var inst_24843 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24917_24979 = state_24853__$1;
(statearr_24917_24979[(2)] = inst_24843);

(statearr_24917_24979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (26))){
var inst_24785 = (state_24853[(29)]);
var inst_24839 = (state_24853[(2)]);
var inst_24840 = cljs.core.seq.call(null,inst_24785);
var state_24853__$1 = (function (){var statearr_24918 = state_24853;
(statearr_24918[(31)] = inst_24839);

return statearr_24918;
})();
if(inst_24840){
var statearr_24919_24980 = state_24853__$1;
(statearr_24919_24980[(1)] = (42));

} else {
var statearr_24920_24981 = state_24853__$1;
(statearr_24920_24981[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (16))){
var inst_24752 = (state_24853[(7)]);
var inst_24754 = cljs.core.chunked_seq_QMARK_.call(null,inst_24752);
var state_24853__$1 = state_24853;
if(inst_24754){
var statearr_24921_24982 = state_24853__$1;
(statearr_24921_24982[(1)] = (19));

} else {
var statearr_24922_24983 = state_24853__$1;
(statearr_24922_24983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (38))){
var inst_24832 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24923_24984 = state_24853__$1;
(statearr_24923_24984[(2)] = inst_24832);

(statearr_24923_24984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (30))){
var state_24853__$1 = state_24853;
var statearr_24924_24985 = state_24853__$1;
(statearr_24924_24985[(2)] = null);

(statearr_24924_24985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (10))){
var inst_24731 = (state_24853[(13)]);
var inst_24733 = (state_24853[(14)]);
var inst_24741 = cljs.core._nth.call(null,inst_24731,inst_24733);
var inst_24742 = cljs.core.nth.call(null,inst_24741,(0),null);
var inst_24743 = cljs.core.nth.call(null,inst_24741,(1),null);
var state_24853__$1 = (function (){var statearr_24925 = state_24853;
(statearr_24925[(26)] = inst_24742);

return statearr_24925;
})();
if(cljs.core.truth_(inst_24743)){
var statearr_24926_24986 = state_24853__$1;
(statearr_24926_24986[(1)] = (13));

} else {
var statearr_24927_24987 = state_24853__$1;
(statearr_24927_24987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (18))){
var inst_24778 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24928_24988 = state_24853__$1;
(statearr_24928_24988[(2)] = inst_24778);

(statearr_24928_24988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (42))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(45),dchan);
} else {
if((state_val_24854 === (37))){
var inst_24812 = (state_24853[(25)]);
var inst_24821 = (state_24853[(23)]);
var inst_24721 = (state_24853[(10)]);
var inst_24821__$1 = cljs.core.first.call(null,inst_24812);
var inst_24822 = cljs.core.async.put_BANG_.call(null,inst_24821__$1,inst_24721,done);
var state_24853__$1 = (function (){var statearr_24929 = state_24853;
(statearr_24929[(23)] = inst_24821__$1);

return statearr_24929;
})();
if(cljs.core.truth_(inst_24822)){
var statearr_24930_24989 = state_24853__$1;
(statearr_24930_24989[(1)] = (39));

} else {
var statearr_24931_24990 = state_24853__$1;
(statearr_24931_24990[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (8))){
var inst_24733 = (state_24853[(14)]);
var inst_24732 = (state_24853[(16)]);
var inst_24735 = (inst_24733 < inst_24732);
var inst_24736 = inst_24735;
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24736)){
var statearr_24932_24991 = state_24853__$1;
(statearr_24932_24991[(1)] = (10));

} else {
var statearr_24933_24992 = state_24853__$1;
(statearr_24933_24992[(1)] = (11));

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
});})(c__24119__auto___24938,cs,m,dchan,dctr,done))
;
return ((function (switch__24024__auto__,c__24119__auto___24938,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24025__auto__ = null;
var cljs$core$async$mult_$_state_machine__24025__auto____0 = (function (){
var statearr_24934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24934[(0)] = cljs$core$async$mult_$_state_machine__24025__auto__);

(statearr_24934[(1)] = (1));

return statearr_24934;
});
var cljs$core$async$mult_$_state_machine__24025__auto____1 = (function (state_24853){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e24935){if((e24935 instanceof Object)){
var ex__24028__auto__ = e24935;
var statearr_24936_24993 = state_24853;
(statearr_24936_24993[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24994 = state_24853;
state_24853 = G__24994;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24025__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24025__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24025__auto____0;
cljs$core$async$mult_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24025__auto____1;
return cljs$core$async$mult_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___24938,cs,m,dchan,dctr,done))
})();
var state__24121__auto__ = (function (){var statearr_24937 = f__24120__auto__.call(null);
(statearr_24937[(6)] = c__24119__auto___24938);

return statearr_24937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___24938,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24996 = arguments.length;
switch (G__24996) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___25008 = arguments.length;
var i__4642__auto___25009 = (0);
while(true){
if((i__4642__auto___25009 < len__4641__auto___25008)){
args__4647__auto__.push((arguments[i__4642__auto___25009]));

var G__25010 = (i__4642__auto___25009 + (1));
i__4642__auto___25009 = G__25010;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25002){
var map__25003 = p__25002;
var map__25003__$1 = (((((!((map__25003 == null))))?(((((map__25003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25003):map__25003);
var opts = map__25003__$1;
var statearr_25005_25011 = state;
(statearr_25005_25011[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25003,map__25003__$1,opts){
return (function (val){
var statearr_25006_25012 = state;
(statearr_25006_25012[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25003,map__25003__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25007_25013 = state;
(statearr_25007_25013[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24998){
var G__24999 = cljs.core.first.call(null,seq24998);
var seq24998__$1 = cljs.core.next.call(null,seq24998);
var G__25000 = cljs.core.first.call(null,seq24998__$1);
var seq24998__$2 = cljs.core.next.call(null,seq24998__$1);
var G__25001 = cljs.core.first.call(null,seq24998__$2);
var seq24998__$3 = cljs.core.next.call(null,seq24998__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24999,G__25000,G__25001,seq24998__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25014 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25015){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25015 = meta25015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25016,meta25015__$1){
var self__ = this;
var _25016__$1 = this;
return (new cljs.core.async.t_cljs$core$async25014(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25015__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25016){
var self__ = this;
var _25016__$1 = this;
return self__.meta25015;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25015","meta25015",523656880,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25014";

cljs.core.async.t_cljs$core$async25014.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25014");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25014.
 */
cljs.core.async.__GT_t_cljs$core$async25014 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25014(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25015){
return (new cljs.core.async.t_cljs$core$async25014(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25015));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25014(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24119__auto___25178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25118){
var state_val_25119 = (state_25118[(1)]);
if((state_val_25119 === (7))){
var inst_25033 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
var statearr_25120_25179 = state_25118__$1;
(statearr_25120_25179[(2)] = inst_25033);

(statearr_25120_25179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (20))){
var inst_25045 = (state_25118[(7)]);
var state_25118__$1 = state_25118;
var statearr_25121_25180 = state_25118__$1;
(statearr_25121_25180[(2)] = inst_25045);

(statearr_25121_25180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (27))){
var state_25118__$1 = state_25118;
var statearr_25122_25181 = state_25118__$1;
(statearr_25122_25181[(2)] = null);

(statearr_25122_25181[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (1))){
var inst_25020 = (state_25118[(8)]);
var inst_25020__$1 = calc_state.call(null);
var inst_25022 = (inst_25020__$1 == null);
var inst_25023 = cljs.core.not.call(null,inst_25022);
var state_25118__$1 = (function (){var statearr_25123 = state_25118;
(statearr_25123[(8)] = inst_25020__$1);

return statearr_25123;
})();
if(inst_25023){
var statearr_25124_25182 = state_25118__$1;
(statearr_25124_25182[(1)] = (2));

} else {
var statearr_25125_25183 = state_25118__$1;
(statearr_25125_25183[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (24))){
var inst_25092 = (state_25118[(9)]);
var inst_25069 = (state_25118[(10)]);
var inst_25078 = (state_25118[(11)]);
var inst_25092__$1 = inst_25069.call(null,inst_25078);
var state_25118__$1 = (function (){var statearr_25126 = state_25118;
(statearr_25126[(9)] = inst_25092__$1);

return statearr_25126;
})();
if(cljs.core.truth_(inst_25092__$1)){
var statearr_25127_25184 = state_25118__$1;
(statearr_25127_25184[(1)] = (29));

} else {
var statearr_25128_25185 = state_25118__$1;
(statearr_25128_25185[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (4))){
var inst_25036 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25036)){
var statearr_25129_25186 = state_25118__$1;
(statearr_25129_25186[(1)] = (8));

} else {
var statearr_25130_25187 = state_25118__$1;
(statearr_25130_25187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (15))){
var inst_25063 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25063)){
var statearr_25131_25188 = state_25118__$1;
(statearr_25131_25188[(1)] = (19));

} else {
var statearr_25132_25189 = state_25118__$1;
(statearr_25132_25189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (21))){
var inst_25068 = (state_25118[(12)]);
var inst_25068__$1 = (state_25118[(2)]);
var inst_25069 = cljs.core.get.call(null,inst_25068__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25070 = cljs.core.get.call(null,inst_25068__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25071 = cljs.core.get.call(null,inst_25068__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25118__$1 = (function (){var statearr_25133 = state_25118;
(statearr_25133[(10)] = inst_25069);

(statearr_25133[(12)] = inst_25068__$1);

(statearr_25133[(13)] = inst_25070);

return statearr_25133;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25118__$1,(22),inst_25071);
} else {
if((state_val_25119 === (31))){
var inst_25100 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25100)){
var statearr_25134_25190 = state_25118__$1;
(statearr_25134_25190[(1)] = (32));

} else {
var statearr_25135_25191 = state_25118__$1;
(statearr_25135_25191[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (32))){
var inst_25077 = (state_25118[(14)]);
var state_25118__$1 = state_25118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25118__$1,(35),out,inst_25077);
} else {
if((state_val_25119 === (33))){
var inst_25068 = (state_25118[(12)]);
var inst_25045 = inst_25068;
var state_25118__$1 = (function (){var statearr_25136 = state_25118;
(statearr_25136[(7)] = inst_25045);

return statearr_25136;
})();
var statearr_25137_25192 = state_25118__$1;
(statearr_25137_25192[(2)] = null);

(statearr_25137_25192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (13))){
var inst_25045 = (state_25118[(7)]);
var inst_25052 = inst_25045.cljs$lang$protocol_mask$partition0$;
var inst_25053 = (inst_25052 & (64));
var inst_25054 = inst_25045.cljs$core$ISeq$;
var inst_25055 = (cljs.core.PROTOCOL_SENTINEL === inst_25054);
var inst_25056 = ((inst_25053) || (inst_25055));
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25056)){
var statearr_25138_25193 = state_25118__$1;
(statearr_25138_25193[(1)] = (16));

} else {
var statearr_25139_25194 = state_25118__$1;
(statearr_25139_25194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (22))){
var inst_25077 = (state_25118[(14)]);
var inst_25078 = (state_25118[(11)]);
var inst_25076 = (state_25118[(2)]);
var inst_25077__$1 = cljs.core.nth.call(null,inst_25076,(0),null);
var inst_25078__$1 = cljs.core.nth.call(null,inst_25076,(1),null);
var inst_25079 = (inst_25077__$1 == null);
var inst_25080 = cljs.core._EQ_.call(null,inst_25078__$1,change);
var inst_25081 = ((inst_25079) || (inst_25080));
var state_25118__$1 = (function (){var statearr_25140 = state_25118;
(statearr_25140[(14)] = inst_25077__$1);

(statearr_25140[(11)] = inst_25078__$1);

return statearr_25140;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25141_25195 = state_25118__$1;
(statearr_25141_25195[(1)] = (23));

} else {
var statearr_25142_25196 = state_25118__$1;
(statearr_25142_25196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (36))){
var inst_25068 = (state_25118[(12)]);
var inst_25045 = inst_25068;
var state_25118__$1 = (function (){var statearr_25143 = state_25118;
(statearr_25143[(7)] = inst_25045);

return statearr_25143;
})();
var statearr_25144_25197 = state_25118__$1;
(statearr_25144_25197[(2)] = null);

(statearr_25144_25197[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (29))){
var inst_25092 = (state_25118[(9)]);
var state_25118__$1 = state_25118;
var statearr_25145_25198 = state_25118__$1;
(statearr_25145_25198[(2)] = inst_25092);

(statearr_25145_25198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (6))){
var state_25118__$1 = state_25118;
var statearr_25146_25199 = state_25118__$1;
(statearr_25146_25199[(2)] = false);

(statearr_25146_25199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (28))){
var inst_25088 = (state_25118[(2)]);
var inst_25089 = calc_state.call(null);
var inst_25045 = inst_25089;
var state_25118__$1 = (function (){var statearr_25147 = state_25118;
(statearr_25147[(15)] = inst_25088);

(statearr_25147[(7)] = inst_25045);

return statearr_25147;
})();
var statearr_25148_25200 = state_25118__$1;
(statearr_25148_25200[(2)] = null);

(statearr_25148_25200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (25))){
var inst_25114 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
var statearr_25149_25201 = state_25118__$1;
(statearr_25149_25201[(2)] = inst_25114);

(statearr_25149_25201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (34))){
var inst_25112 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
var statearr_25150_25202 = state_25118__$1;
(statearr_25150_25202[(2)] = inst_25112);

(statearr_25150_25202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (17))){
var state_25118__$1 = state_25118;
var statearr_25151_25203 = state_25118__$1;
(statearr_25151_25203[(2)] = false);

(statearr_25151_25203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (3))){
var state_25118__$1 = state_25118;
var statearr_25152_25204 = state_25118__$1;
(statearr_25152_25204[(2)] = false);

(statearr_25152_25204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (12))){
var inst_25116 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25118__$1,inst_25116);
} else {
if((state_val_25119 === (2))){
var inst_25020 = (state_25118[(8)]);
var inst_25025 = inst_25020.cljs$lang$protocol_mask$partition0$;
var inst_25026 = (inst_25025 & (64));
var inst_25027 = inst_25020.cljs$core$ISeq$;
var inst_25028 = (cljs.core.PROTOCOL_SENTINEL === inst_25027);
var inst_25029 = ((inst_25026) || (inst_25028));
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25029)){
var statearr_25153_25205 = state_25118__$1;
(statearr_25153_25205[(1)] = (5));

} else {
var statearr_25154_25206 = state_25118__$1;
(statearr_25154_25206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (23))){
var inst_25077 = (state_25118[(14)]);
var inst_25083 = (inst_25077 == null);
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25083)){
var statearr_25155_25207 = state_25118__$1;
(statearr_25155_25207[(1)] = (26));

} else {
var statearr_25156_25208 = state_25118__$1;
(statearr_25156_25208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (35))){
var inst_25103 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
if(cljs.core.truth_(inst_25103)){
var statearr_25157_25209 = state_25118__$1;
(statearr_25157_25209[(1)] = (36));

} else {
var statearr_25158_25210 = state_25118__$1;
(statearr_25158_25210[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (19))){
var inst_25045 = (state_25118[(7)]);
var inst_25065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25045);
var state_25118__$1 = state_25118;
var statearr_25159_25211 = state_25118__$1;
(statearr_25159_25211[(2)] = inst_25065);

(statearr_25159_25211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (11))){
var inst_25045 = (state_25118[(7)]);
var inst_25049 = (inst_25045 == null);
var inst_25050 = cljs.core.not.call(null,inst_25049);
var state_25118__$1 = state_25118;
if(inst_25050){
var statearr_25160_25212 = state_25118__$1;
(statearr_25160_25212[(1)] = (13));

} else {
var statearr_25161_25213 = state_25118__$1;
(statearr_25161_25213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (9))){
var inst_25020 = (state_25118[(8)]);
var state_25118__$1 = state_25118;
var statearr_25162_25214 = state_25118__$1;
(statearr_25162_25214[(2)] = inst_25020);

(statearr_25162_25214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (5))){
var state_25118__$1 = state_25118;
var statearr_25163_25215 = state_25118__$1;
(statearr_25163_25215[(2)] = true);

(statearr_25163_25215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (14))){
var state_25118__$1 = state_25118;
var statearr_25164_25216 = state_25118__$1;
(statearr_25164_25216[(2)] = false);

(statearr_25164_25216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (26))){
var inst_25078 = (state_25118[(11)]);
var inst_25085 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25078);
var state_25118__$1 = state_25118;
var statearr_25165_25217 = state_25118__$1;
(statearr_25165_25217[(2)] = inst_25085);

(statearr_25165_25217[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (16))){
var state_25118__$1 = state_25118;
var statearr_25166_25218 = state_25118__$1;
(statearr_25166_25218[(2)] = true);

(statearr_25166_25218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (38))){
var inst_25108 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
var statearr_25167_25219 = state_25118__$1;
(statearr_25167_25219[(2)] = inst_25108);

(statearr_25167_25219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (30))){
var inst_25069 = (state_25118[(10)]);
var inst_25070 = (state_25118[(13)]);
var inst_25078 = (state_25118[(11)]);
var inst_25095 = cljs.core.empty_QMARK_.call(null,inst_25069);
var inst_25096 = inst_25070.call(null,inst_25078);
var inst_25097 = cljs.core.not.call(null,inst_25096);
var inst_25098 = ((inst_25095) && (inst_25097));
var state_25118__$1 = state_25118;
var statearr_25168_25220 = state_25118__$1;
(statearr_25168_25220[(2)] = inst_25098);

(statearr_25168_25220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (10))){
var inst_25020 = (state_25118[(8)]);
var inst_25041 = (state_25118[(2)]);
var inst_25042 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25043 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25044 = cljs.core.get.call(null,inst_25041,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25045 = inst_25020;
var state_25118__$1 = (function (){var statearr_25169 = state_25118;
(statearr_25169[(16)] = inst_25042);

(statearr_25169[(17)] = inst_25043);

(statearr_25169[(18)] = inst_25044);

(statearr_25169[(7)] = inst_25045);

return statearr_25169;
})();
var statearr_25170_25221 = state_25118__$1;
(statearr_25170_25221[(2)] = null);

(statearr_25170_25221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (18))){
var inst_25060 = (state_25118[(2)]);
var state_25118__$1 = state_25118;
var statearr_25171_25222 = state_25118__$1;
(statearr_25171_25222[(2)] = inst_25060);

(statearr_25171_25222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (37))){
var state_25118__$1 = state_25118;
var statearr_25172_25223 = state_25118__$1;
(statearr_25172_25223[(2)] = null);

(statearr_25172_25223[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25119 === (8))){
var inst_25020 = (state_25118[(8)]);
var inst_25038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25020);
var state_25118__$1 = state_25118;
var statearr_25173_25224 = state_25118__$1;
(statearr_25173_25224[(2)] = inst_25038);

(statearr_25173_25224[(1)] = (10));


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
});})(c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24024__auto__,c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24025__auto__ = null;
var cljs$core$async$mix_$_state_machine__24025__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$mix_$_state_machine__24025__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$mix_$_state_machine__24025__auto____1 = (function (state_25118){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__24028__auto__ = e25175;
var statearr_25176_25225 = state_25118;
(statearr_25176_25225[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25226 = state_25118;
state_25118 = G__25226;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24025__auto__ = function(state_25118){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24025__auto____1.call(this,state_25118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24025__auto____0;
cljs$core$async$mix_$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24025__auto____1;
return cljs$core$async$mix_$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24121__auto__ = (function (){var statearr_25177 = f__24120__auto__.call(null);
(statearr_25177[(6)] = c__24119__auto___25178);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25178,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25228 = arguments.length;
switch (G__25228) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25232 = arguments.length;
switch (G__25232) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__25230_SHARP_){
if(cljs.core.truth_(p1__25230_SHARP_.call(null,topic))){
return p1__25230_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25230_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25233 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25234){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25234 = meta25234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25235,meta25234__$1){
var self__ = this;
var _25235__$1 = this;
return (new cljs.core.async.t_cljs$core$async25233(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25234__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25235){
var self__ = this;
var _25235__$1 = this;
return self__.meta25234;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25234","meta25234",-441748035,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25233";

cljs.core.async.t_cljs$core$async25233.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25233");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25233.
 */
cljs.core.async.__GT_t_cljs$core$async25233 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25234){
return (new cljs.core.async.t_cljs$core$async25233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25234));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25233(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24119__auto___25353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25353,mults,ensure_mult,p){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25353,mults,ensure_mult,p){
return (function (state_25307){
var state_val_25308 = (state_25307[(1)]);
if((state_val_25308 === (7))){
var inst_25303 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25309_25354 = state_25307__$1;
(statearr_25309_25354[(2)] = inst_25303);

(statearr_25309_25354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (20))){
var state_25307__$1 = state_25307;
var statearr_25310_25355 = state_25307__$1;
(statearr_25310_25355[(2)] = null);

(statearr_25310_25355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (1))){
var state_25307__$1 = state_25307;
var statearr_25311_25356 = state_25307__$1;
(statearr_25311_25356[(2)] = null);

(statearr_25311_25356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (24))){
var inst_25286 = (state_25307[(7)]);
var inst_25295 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25286);
var state_25307__$1 = state_25307;
var statearr_25312_25357 = state_25307__$1;
(statearr_25312_25357[(2)] = inst_25295);

(statearr_25312_25357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (4))){
var inst_25238 = (state_25307[(8)]);
var inst_25238__$1 = (state_25307[(2)]);
var inst_25239 = (inst_25238__$1 == null);
var state_25307__$1 = (function (){var statearr_25313 = state_25307;
(statearr_25313[(8)] = inst_25238__$1);

return statearr_25313;
})();
if(cljs.core.truth_(inst_25239)){
var statearr_25314_25358 = state_25307__$1;
(statearr_25314_25358[(1)] = (5));

} else {
var statearr_25315_25359 = state_25307__$1;
(statearr_25315_25359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (15))){
var inst_25280 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25316_25360 = state_25307__$1;
(statearr_25316_25360[(2)] = inst_25280);

(statearr_25316_25360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (21))){
var inst_25300 = (state_25307[(2)]);
var state_25307__$1 = (function (){var statearr_25317 = state_25307;
(statearr_25317[(9)] = inst_25300);

return statearr_25317;
})();
var statearr_25318_25361 = state_25307__$1;
(statearr_25318_25361[(2)] = null);

(statearr_25318_25361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (13))){
var inst_25262 = (state_25307[(10)]);
var inst_25264 = cljs.core.chunked_seq_QMARK_.call(null,inst_25262);
var state_25307__$1 = state_25307;
if(inst_25264){
var statearr_25319_25362 = state_25307__$1;
(statearr_25319_25362[(1)] = (16));

} else {
var statearr_25320_25363 = state_25307__$1;
(statearr_25320_25363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (22))){
var inst_25292 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
if(cljs.core.truth_(inst_25292)){
var statearr_25321_25364 = state_25307__$1;
(statearr_25321_25364[(1)] = (23));

} else {
var statearr_25322_25365 = state_25307__$1;
(statearr_25322_25365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (6))){
var inst_25238 = (state_25307[(8)]);
var inst_25286 = (state_25307[(7)]);
var inst_25288 = (state_25307[(11)]);
var inst_25286__$1 = topic_fn.call(null,inst_25238);
var inst_25287 = cljs.core.deref.call(null,mults);
var inst_25288__$1 = cljs.core.get.call(null,inst_25287,inst_25286__$1);
var state_25307__$1 = (function (){var statearr_25323 = state_25307;
(statearr_25323[(7)] = inst_25286__$1);

(statearr_25323[(11)] = inst_25288__$1);

return statearr_25323;
})();
if(cljs.core.truth_(inst_25288__$1)){
var statearr_25324_25366 = state_25307__$1;
(statearr_25324_25366[(1)] = (19));

} else {
var statearr_25325_25367 = state_25307__$1;
(statearr_25325_25367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (25))){
var inst_25297 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25326_25368 = state_25307__$1;
(statearr_25326_25368[(2)] = inst_25297);

(statearr_25326_25368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (17))){
var inst_25262 = (state_25307[(10)]);
var inst_25271 = cljs.core.first.call(null,inst_25262);
var inst_25272 = cljs.core.async.muxch_STAR_.call(null,inst_25271);
var inst_25273 = cljs.core.async.close_BANG_.call(null,inst_25272);
var inst_25274 = cljs.core.next.call(null,inst_25262);
var inst_25248 = inst_25274;
var inst_25249 = null;
var inst_25250 = (0);
var inst_25251 = (0);
var state_25307__$1 = (function (){var statearr_25327 = state_25307;
(statearr_25327[(12)] = inst_25250);

(statearr_25327[(13)] = inst_25248);

(statearr_25327[(14)] = inst_25273);

(statearr_25327[(15)] = inst_25251);

(statearr_25327[(16)] = inst_25249);

return statearr_25327;
})();
var statearr_25328_25369 = state_25307__$1;
(statearr_25328_25369[(2)] = null);

(statearr_25328_25369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (3))){
var inst_25305 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25307__$1,inst_25305);
} else {
if((state_val_25308 === (12))){
var inst_25282 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25329_25370 = state_25307__$1;
(statearr_25329_25370[(2)] = inst_25282);

(statearr_25329_25370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (2))){
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25307__$1,(4),ch);
} else {
if((state_val_25308 === (23))){
var state_25307__$1 = state_25307;
var statearr_25330_25371 = state_25307__$1;
(statearr_25330_25371[(2)] = null);

(statearr_25330_25371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (19))){
var inst_25238 = (state_25307[(8)]);
var inst_25288 = (state_25307[(11)]);
var inst_25290 = cljs.core.async.muxch_STAR_.call(null,inst_25288);
var state_25307__$1 = state_25307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25307__$1,(22),inst_25290,inst_25238);
} else {
if((state_val_25308 === (11))){
var inst_25262 = (state_25307[(10)]);
var inst_25248 = (state_25307[(13)]);
var inst_25262__$1 = cljs.core.seq.call(null,inst_25248);
var state_25307__$1 = (function (){var statearr_25331 = state_25307;
(statearr_25331[(10)] = inst_25262__$1);

return statearr_25331;
})();
if(inst_25262__$1){
var statearr_25332_25372 = state_25307__$1;
(statearr_25332_25372[(1)] = (13));

} else {
var statearr_25333_25373 = state_25307__$1;
(statearr_25333_25373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (9))){
var inst_25284 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25334_25374 = state_25307__$1;
(statearr_25334_25374[(2)] = inst_25284);

(statearr_25334_25374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (5))){
var inst_25245 = cljs.core.deref.call(null,mults);
var inst_25246 = cljs.core.vals.call(null,inst_25245);
var inst_25247 = cljs.core.seq.call(null,inst_25246);
var inst_25248 = inst_25247;
var inst_25249 = null;
var inst_25250 = (0);
var inst_25251 = (0);
var state_25307__$1 = (function (){var statearr_25335 = state_25307;
(statearr_25335[(12)] = inst_25250);

(statearr_25335[(13)] = inst_25248);

(statearr_25335[(15)] = inst_25251);

(statearr_25335[(16)] = inst_25249);

return statearr_25335;
})();
var statearr_25336_25375 = state_25307__$1;
(statearr_25336_25375[(2)] = null);

(statearr_25336_25375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (14))){
var state_25307__$1 = state_25307;
var statearr_25340_25376 = state_25307__$1;
(statearr_25340_25376[(2)] = null);

(statearr_25340_25376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (16))){
var inst_25262 = (state_25307[(10)]);
var inst_25266 = cljs.core.chunk_first.call(null,inst_25262);
var inst_25267 = cljs.core.chunk_rest.call(null,inst_25262);
var inst_25268 = cljs.core.count.call(null,inst_25266);
var inst_25248 = inst_25267;
var inst_25249 = inst_25266;
var inst_25250 = inst_25268;
var inst_25251 = (0);
var state_25307__$1 = (function (){var statearr_25341 = state_25307;
(statearr_25341[(12)] = inst_25250);

(statearr_25341[(13)] = inst_25248);

(statearr_25341[(15)] = inst_25251);

(statearr_25341[(16)] = inst_25249);

return statearr_25341;
})();
var statearr_25342_25377 = state_25307__$1;
(statearr_25342_25377[(2)] = null);

(statearr_25342_25377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (10))){
var inst_25250 = (state_25307[(12)]);
var inst_25248 = (state_25307[(13)]);
var inst_25251 = (state_25307[(15)]);
var inst_25249 = (state_25307[(16)]);
var inst_25256 = cljs.core._nth.call(null,inst_25249,inst_25251);
var inst_25257 = cljs.core.async.muxch_STAR_.call(null,inst_25256);
var inst_25258 = cljs.core.async.close_BANG_.call(null,inst_25257);
var inst_25259 = (inst_25251 + (1));
var tmp25337 = inst_25250;
var tmp25338 = inst_25248;
var tmp25339 = inst_25249;
var inst_25248__$1 = tmp25338;
var inst_25249__$1 = tmp25339;
var inst_25250__$1 = tmp25337;
var inst_25251__$1 = inst_25259;
var state_25307__$1 = (function (){var statearr_25343 = state_25307;
(statearr_25343[(17)] = inst_25258);

(statearr_25343[(12)] = inst_25250__$1);

(statearr_25343[(13)] = inst_25248__$1);

(statearr_25343[(15)] = inst_25251__$1);

(statearr_25343[(16)] = inst_25249__$1);

return statearr_25343;
})();
var statearr_25344_25378 = state_25307__$1;
(statearr_25344_25378[(2)] = null);

(statearr_25344_25378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (18))){
var inst_25277 = (state_25307[(2)]);
var state_25307__$1 = state_25307;
var statearr_25345_25379 = state_25307__$1;
(statearr_25345_25379[(2)] = inst_25277);

(statearr_25345_25379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25308 === (8))){
var inst_25250 = (state_25307[(12)]);
var inst_25251 = (state_25307[(15)]);
var inst_25253 = (inst_25251 < inst_25250);
var inst_25254 = inst_25253;
var state_25307__$1 = state_25307;
if(cljs.core.truth_(inst_25254)){
var statearr_25346_25380 = state_25307__$1;
(statearr_25346_25380[(1)] = (10));

} else {
var statearr_25347_25381 = state_25307__$1;
(statearr_25347_25381[(1)] = (11));

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
});})(c__24119__auto___25353,mults,ensure_mult,p))
;
return ((function (switch__24024__auto__,c__24119__auto___25353,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25348[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25348[(1)] = (1));

return statearr_25348;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25307){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25349){if((e25349 instanceof Object)){
var ex__24028__auto__ = e25349;
var statearr_25350_25382 = state_25307;
(statearr_25350_25382[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25307;
state_25307 = G__25383;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25353,mults,ensure_mult,p))
})();
var state__24121__auto__ = (function (){var statearr_25351 = f__24120__auto__.call(null);
(statearr_25351[(6)] = c__24119__auto___25353);

return statearr_25351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25353,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25385 = arguments.length;
switch (G__25385) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25388 = arguments.length;
switch (G__25388) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25391 = arguments.length;
switch (G__25391) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24119__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25430){
var state_val_25431 = (state_25430[(1)]);
if((state_val_25431 === (7))){
var state_25430__$1 = state_25430;
var statearr_25432_25459 = state_25430__$1;
(statearr_25432_25459[(2)] = null);

(statearr_25432_25459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (1))){
var state_25430__$1 = state_25430;
var statearr_25433_25460 = state_25430__$1;
(statearr_25433_25460[(2)] = null);

(statearr_25433_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (4))){
var inst_25394 = (state_25430[(7)]);
var inst_25396 = (inst_25394 < cnt);
var state_25430__$1 = state_25430;
if(cljs.core.truth_(inst_25396)){
var statearr_25434_25461 = state_25430__$1;
(statearr_25434_25461[(1)] = (6));

} else {
var statearr_25435_25462 = state_25430__$1;
(statearr_25435_25462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (15))){
var inst_25426 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25436_25463 = state_25430__$1;
(statearr_25436_25463[(2)] = inst_25426);

(statearr_25436_25463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (13))){
var inst_25419 = cljs.core.async.close_BANG_.call(null,out);
var state_25430__$1 = state_25430;
var statearr_25437_25464 = state_25430__$1;
(statearr_25437_25464[(2)] = inst_25419);

(statearr_25437_25464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (6))){
var state_25430__$1 = state_25430;
var statearr_25438_25465 = state_25430__$1;
(statearr_25438_25465[(2)] = null);

(statearr_25438_25465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (3))){
var inst_25428 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25430__$1,inst_25428);
} else {
if((state_val_25431 === (12))){
var inst_25416 = (state_25430[(8)]);
var inst_25416__$1 = (state_25430[(2)]);
var inst_25417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25416__$1);
var state_25430__$1 = (function (){var statearr_25439 = state_25430;
(statearr_25439[(8)] = inst_25416__$1);

return statearr_25439;
})();
if(cljs.core.truth_(inst_25417)){
var statearr_25440_25466 = state_25430__$1;
(statearr_25440_25466[(1)] = (13));

} else {
var statearr_25441_25467 = state_25430__$1;
(statearr_25441_25467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (2))){
var inst_25393 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25394 = (0);
var state_25430__$1 = (function (){var statearr_25442 = state_25430;
(statearr_25442[(7)] = inst_25394);

(statearr_25442[(9)] = inst_25393);

return statearr_25442;
})();
var statearr_25443_25468 = state_25430__$1;
(statearr_25443_25468[(2)] = null);

(statearr_25443_25468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (11))){
var inst_25394 = (state_25430[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25430,(10),Object,null,(9));
var inst_25403 = chs__$1.call(null,inst_25394);
var inst_25404 = done.call(null,inst_25394);
var inst_25405 = cljs.core.async.take_BANG_.call(null,inst_25403,inst_25404);
var state_25430__$1 = state_25430;
var statearr_25444_25469 = state_25430__$1;
(statearr_25444_25469[(2)] = inst_25405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (9))){
var inst_25394 = (state_25430[(7)]);
var inst_25407 = (state_25430[(2)]);
var inst_25408 = (inst_25394 + (1));
var inst_25394__$1 = inst_25408;
var state_25430__$1 = (function (){var statearr_25445 = state_25430;
(statearr_25445[(7)] = inst_25394__$1);

(statearr_25445[(10)] = inst_25407);

return statearr_25445;
})();
var statearr_25446_25470 = state_25430__$1;
(statearr_25446_25470[(2)] = null);

(statearr_25446_25470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (5))){
var inst_25414 = (state_25430[(2)]);
var state_25430__$1 = (function (){var statearr_25447 = state_25430;
(statearr_25447[(11)] = inst_25414);

return statearr_25447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25430__$1,(12),dchan);
} else {
if((state_val_25431 === (14))){
var inst_25416 = (state_25430[(8)]);
var inst_25421 = cljs.core.apply.call(null,f,inst_25416);
var state_25430__$1 = state_25430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25430__$1,(16),out,inst_25421);
} else {
if((state_val_25431 === (16))){
var inst_25423 = (state_25430[(2)]);
var state_25430__$1 = (function (){var statearr_25448 = state_25430;
(statearr_25448[(12)] = inst_25423);

return statearr_25448;
})();
var statearr_25449_25471 = state_25430__$1;
(statearr_25449_25471[(2)] = null);

(statearr_25449_25471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (10))){
var inst_25398 = (state_25430[(2)]);
var inst_25399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25430__$1 = (function (){var statearr_25450 = state_25430;
(statearr_25450[(13)] = inst_25398);

return statearr_25450;
})();
var statearr_25451_25472 = state_25430__$1;
(statearr_25451_25472[(2)] = inst_25399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25431 === (8))){
var inst_25412 = (state_25430[(2)]);
var state_25430__$1 = state_25430;
var statearr_25452_25473 = state_25430__$1;
(statearr_25452_25473[(2)] = inst_25412);

(statearr_25452_25473[(1)] = (5));


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
});})(c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24024__auto__,c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25453[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25453[(1)] = (1));

return statearr_25453;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25430){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25454){if((e25454 instanceof Object)){
var ex__24028__auto__ = e25454;
var statearr_25455_25474 = state_25430;
(statearr_25455_25474[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25475 = state_25430;
state_25430 = G__25475;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24121__auto__ = (function (){var statearr_25456 = f__24120__auto__.call(null);
(statearr_25456[(6)] = c__24119__auto___25458);

return statearr_25456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25458,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25478 = arguments.length;
switch (G__25478) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___25532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25532,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25532,out){
return (function (state_25510){
var state_val_25511 = (state_25510[(1)]);
if((state_val_25511 === (7))){
var inst_25490 = (state_25510[(7)]);
var inst_25489 = (state_25510[(8)]);
var inst_25489__$1 = (state_25510[(2)]);
var inst_25490__$1 = cljs.core.nth.call(null,inst_25489__$1,(0),null);
var inst_25491 = cljs.core.nth.call(null,inst_25489__$1,(1),null);
var inst_25492 = (inst_25490__$1 == null);
var state_25510__$1 = (function (){var statearr_25512 = state_25510;
(statearr_25512[(9)] = inst_25491);

(statearr_25512[(7)] = inst_25490__$1);

(statearr_25512[(8)] = inst_25489__$1);

return statearr_25512;
})();
if(cljs.core.truth_(inst_25492)){
var statearr_25513_25533 = state_25510__$1;
(statearr_25513_25533[(1)] = (8));

} else {
var statearr_25514_25534 = state_25510__$1;
(statearr_25514_25534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (1))){
var inst_25479 = cljs.core.vec.call(null,chs);
var inst_25480 = inst_25479;
var state_25510__$1 = (function (){var statearr_25515 = state_25510;
(statearr_25515[(10)] = inst_25480);

return statearr_25515;
})();
var statearr_25516_25535 = state_25510__$1;
(statearr_25516_25535[(2)] = null);

(statearr_25516_25535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (4))){
var inst_25480 = (state_25510[(10)]);
var state_25510__$1 = state_25510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25510__$1,(7),inst_25480);
} else {
if((state_val_25511 === (6))){
var inst_25506 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25517_25536 = state_25510__$1;
(statearr_25517_25536[(2)] = inst_25506);

(statearr_25517_25536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (3))){
var inst_25508 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25510__$1,inst_25508);
} else {
if((state_val_25511 === (2))){
var inst_25480 = (state_25510[(10)]);
var inst_25482 = cljs.core.count.call(null,inst_25480);
var inst_25483 = (inst_25482 > (0));
var state_25510__$1 = state_25510;
if(cljs.core.truth_(inst_25483)){
var statearr_25519_25537 = state_25510__$1;
(statearr_25519_25537[(1)] = (4));

} else {
var statearr_25520_25538 = state_25510__$1;
(statearr_25520_25538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (11))){
var inst_25480 = (state_25510[(10)]);
var inst_25499 = (state_25510[(2)]);
var tmp25518 = inst_25480;
var inst_25480__$1 = tmp25518;
var state_25510__$1 = (function (){var statearr_25521 = state_25510;
(statearr_25521[(11)] = inst_25499);

(statearr_25521[(10)] = inst_25480__$1);

return statearr_25521;
})();
var statearr_25522_25539 = state_25510__$1;
(statearr_25522_25539[(2)] = null);

(statearr_25522_25539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (9))){
var inst_25490 = (state_25510[(7)]);
var state_25510__$1 = state_25510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25510__$1,(11),out,inst_25490);
} else {
if((state_val_25511 === (5))){
var inst_25504 = cljs.core.async.close_BANG_.call(null,out);
var state_25510__$1 = state_25510;
var statearr_25523_25540 = state_25510__$1;
(statearr_25523_25540[(2)] = inst_25504);

(statearr_25523_25540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (10))){
var inst_25502 = (state_25510[(2)]);
var state_25510__$1 = state_25510;
var statearr_25524_25541 = state_25510__$1;
(statearr_25524_25541[(2)] = inst_25502);

(statearr_25524_25541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25511 === (8))){
var inst_25491 = (state_25510[(9)]);
var inst_25480 = (state_25510[(10)]);
var inst_25490 = (state_25510[(7)]);
var inst_25489 = (state_25510[(8)]);
var inst_25494 = (function (){var cs = inst_25480;
var vec__25485 = inst_25489;
var v = inst_25490;
var c = inst_25491;
return ((function (cs,vec__25485,v,c,inst_25491,inst_25480,inst_25490,inst_25489,state_val_25511,c__24119__auto___25532,out){
return (function (p1__25476_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25476_SHARP_);
});
;})(cs,vec__25485,v,c,inst_25491,inst_25480,inst_25490,inst_25489,state_val_25511,c__24119__auto___25532,out))
})();
var inst_25495 = cljs.core.filterv.call(null,inst_25494,inst_25480);
var inst_25480__$1 = inst_25495;
var state_25510__$1 = (function (){var statearr_25525 = state_25510;
(statearr_25525[(10)] = inst_25480__$1);

return statearr_25525;
})();
var statearr_25526_25542 = state_25510__$1;
(statearr_25526_25542[(2)] = null);

(statearr_25526_25542[(1)] = (2));


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
});})(c__24119__auto___25532,out))
;
return ((function (switch__24024__auto__,c__24119__auto___25532,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25527[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25527[(1)] = (1));

return statearr_25527;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25510){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25528){if((e25528 instanceof Object)){
var ex__24028__auto__ = e25528;
var statearr_25529_25543 = state_25510;
(statearr_25529_25543[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25544 = state_25510;
state_25510 = G__25544;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25532,out))
})();
var state__24121__auto__ = (function (){var statearr_25530 = f__24120__auto__.call(null);
(statearr_25530[(6)] = c__24119__auto___25532);

return statearr_25530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25532,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25546 = arguments.length;
switch (G__25546) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___25591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25591,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25591,out){
return (function (state_25570){
var state_val_25571 = (state_25570[(1)]);
if((state_val_25571 === (7))){
var inst_25552 = (state_25570[(7)]);
var inst_25552__$1 = (state_25570[(2)]);
var inst_25553 = (inst_25552__$1 == null);
var inst_25554 = cljs.core.not.call(null,inst_25553);
var state_25570__$1 = (function (){var statearr_25572 = state_25570;
(statearr_25572[(7)] = inst_25552__$1);

return statearr_25572;
})();
if(inst_25554){
var statearr_25573_25592 = state_25570__$1;
(statearr_25573_25592[(1)] = (8));

} else {
var statearr_25574_25593 = state_25570__$1;
(statearr_25574_25593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (1))){
var inst_25547 = (0);
var state_25570__$1 = (function (){var statearr_25575 = state_25570;
(statearr_25575[(8)] = inst_25547);

return statearr_25575;
})();
var statearr_25576_25594 = state_25570__$1;
(statearr_25576_25594[(2)] = null);

(statearr_25576_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (4))){
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25570__$1,(7),ch);
} else {
if((state_val_25571 === (6))){
var inst_25565 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25577_25595 = state_25570__$1;
(statearr_25577_25595[(2)] = inst_25565);

(statearr_25577_25595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (3))){
var inst_25567 = (state_25570[(2)]);
var inst_25568 = cljs.core.async.close_BANG_.call(null,out);
var state_25570__$1 = (function (){var statearr_25578 = state_25570;
(statearr_25578[(9)] = inst_25567);

return statearr_25578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25570__$1,inst_25568);
} else {
if((state_val_25571 === (2))){
var inst_25547 = (state_25570[(8)]);
var inst_25549 = (inst_25547 < n);
var state_25570__$1 = state_25570;
if(cljs.core.truth_(inst_25549)){
var statearr_25579_25596 = state_25570__$1;
(statearr_25579_25596[(1)] = (4));

} else {
var statearr_25580_25597 = state_25570__$1;
(statearr_25580_25597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (11))){
var inst_25547 = (state_25570[(8)]);
var inst_25557 = (state_25570[(2)]);
var inst_25558 = (inst_25547 + (1));
var inst_25547__$1 = inst_25558;
var state_25570__$1 = (function (){var statearr_25581 = state_25570;
(statearr_25581[(10)] = inst_25557);

(statearr_25581[(8)] = inst_25547__$1);

return statearr_25581;
})();
var statearr_25582_25598 = state_25570__$1;
(statearr_25582_25598[(2)] = null);

(statearr_25582_25598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (9))){
var state_25570__$1 = state_25570;
var statearr_25583_25599 = state_25570__$1;
(statearr_25583_25599[(2)] = null);

(statearr_25583_25599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (5))){
var state_25570__$1 = state_25570;
var statearr_25584_25600 = state_25570__$1;
(statearr_25584_25600[(2)] = null);

(statearr_25584_25600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (10))){
var inst_25562 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25585_25601 = state_25570__$1;
(statearr_25585_25601[(2)] = inst_25562);

(statearr_25585_25601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25571 === (8))){
var inst_25552 = (state_25570[(7)]);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25570__$1,(11),out,inst_25552);
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
});})(c__24119__auto___25591,out))
;
return ((function (switch__24024__auto__,c__24119__auto___25591,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25586[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25586[(1)] = (1));

return statearr_25586;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25570){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25587){if((e25587 instanceof Object)){
var ex__24028__auto__ = e25587;
var statearr_25588_25602 = state_25570;
(statearr_25588_25602[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25603 = state_25570;
state_25570 = G__25603;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25591,out))
})();
var state__24121__auto__ = (function (){var statearr_25589 = f__24120__auto__.call(null);
(statearr_25589[(6)] = c__24119__auto___25591);

return statearr_25589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25591,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25605 = (function (f,ch,meta25606){
this.f = f;
this.ch = ch;
this.meta25606 = meta25606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25607,meta25606__$1){
var self__ = this;
var _25607__$1 = this;
return (new cljs.core.async.t_cljs$core$async25605(self__.f,self__.ch,meta25606__$1));
});

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25607){
var self__ = this;
var _25607__$1 = this;
return self__.meta25606;
});

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25608 = (function (f,ch,meta25606,_,fn1,meta25609){
this.f = f;
this.ch = ch;
this.meta25606 = meta25606;
this._ = _;
this.fn1 = fn1;
this.meta25609 = meta25609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25610,meta25609__$1){
var self__ = this;
var _25610__$1 = this;
return (new cljs.core.async.t_cljs$core$async25608(self__.f,self__.ch,self__.meta25606,self__._,self__.fn1,meta25609__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25610){
var self__ = this;
var _25610__$1 = this;
return self__.meta25609;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25604_SHARP_){
return f1.call(null,(((p1__25604_SHARP_ == null))?null:self__.f.call(null,p1__25604_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25606","meta25606",455601714,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25605","cljs.core.async/t_cljs$core$async25605",1820621962,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25609","meta25609",-1364844084,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25608";

cljs.core.async.t_cljs$core$async25608.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25608");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25608.
 */
cljs.core.async.__GT_t_cljs$core$async25608 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25608(f__$1,ch__$1,meta25606__$1,___$2,fn1__$1,meta25609){
return (new cljs.core.async.t_cljs$core$async25608(f__$1,ch__$1,meta25606__$1,___$2,fn1__$1,meta25609));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25608(self__.f,self__.ch,self__.meta25606,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25606","meta25606",455601714,null)], null);
});

cljs.core.async.t_cljs$core$async25605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25605";

cljs.core.async.t_cljs$core$async25605.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25605");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25605.
 */
cljs.core.async.__GT_t_cljs$core$async25605 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25605(f__$1,ch__$1,meta25606){
return (new cljs.core.async.t_cljs$core$async25605(f__$1,ch__$1,meta25606));
});

}

return (new cljs.core.async.t_cljs$core$async25605(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25611 = (function (f,ch,meta25612){
this.f = f;
this.ch = ch;
this.meta25612 = meta25612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25613,meta25612__$1){
var self__ = this;
var _25613__$1 = this;
return (new cljs.core.async.t_cljs$core$async25611(self__.f,self__.ch,meta25612__$1));
});

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25613){
var self__ = this;
var _25613__$1 = this;
return self__.meta25612;
});

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25612","meta25612",-1247640890,null)], null);
});

cljs.core.async.t_cljs$core$async25611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25611";

cljs.core.async.t_cljs$core$async25611.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25611.
 */
cljs.core.async.__GT_t_cljs$core$async25611 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25611(f__$1,ch__$1,meta25612){
return (new cljs.core.async.t_cljs$core$async25611(f__$1,ch__$1,meta25612));
});

}

return (new cljs.core.async.t_cljs$core$async25611(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25614 = (function (p,ch,meta25615){
this.p = p;
this.ch = ch;
this.meta25615 = meta25615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25616,meta25615__$1){
var self__ = this;
var _25616__$1 = this;
return (new cljs.core.async.t_cljs$core$async25614(self__.p,self__.ch,meta25615__$1));
});

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25616){
var self__ = this;
var _25616__$1 = this;
return self__.meta25615;
});

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25615","meta25615",820491236,null)], null);
});

cljs.core.async.t_cljs$core$async25614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25614";

cljs.core.async.t_cljs$core$async25614.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25614");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25614.
 */
cljs.core.async.__GT_t_cljs$core$async25614 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25614(p__$1,ch__$1,meta25615){
return (new cljs.core.async.t_cljs$core$async25614(p__$1,ch__$1,meta25615));
});

}

return (new cljs.core.async.t_cljs$core$async25614(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25618 = arguments.length;
switch (G__25618) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___25658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25658,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25658,out){
return (function (state_25639){
var state_val_25640 = (state_25639[(1)]);
if((state_val_25640 === (7))){
var inst_25635 = (state_25639[(2)]);
var state_25639__$1 = state_25639;
var statearr_25641_25659 = state_25639__$1;
(statearr_25641_25659[(2)] = inst_25635);

(statearr_25641_25659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (1))){
var state_25639__$1 = state_25639;
var statearr_25642_25660 = state_25639__$1;
(statearr_25642_25660[(2)] = null);

(statearr_25642_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (4))){
var inst_25621 = (state_25639[(7)]);
var inst_25621__$1 = (state_25639[(2)]);
var inst_25622 = (inst_25621__$1 == null);
var state_25639__$1 = (function (){var statearr_25643 = state_25639;
(statearr_25643[(7)] = inst_25621__$1);

return statearr_25643;
})();
if(cljs.core.truth_(inst_25622)){
var statearr_25644_25661 = state_25639__$1;
(statearr_25644_25661[(1)] = (5));

} else {
var statearr_25645_25662 = state_25639__$1;
(statearr_25645_25662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (6))){
var inst_25621 = (state_25639[(7)]);
var inst_25626 = p.call(null,inst_25621);
var state_25639__$1 = state_25639;
if(cljs.core.truth_(inst_25626)){
var statearr_25646_25663 = state_25639__$1;
(statearr_25646_25663[(1)] = (8));

} else {
var statearr_25647_25664 = state_25639__$1;
(statearr_25647_25664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (3))){
var inst_25637 = (state_25639[(2)]);
var state_25639__$1 = state_25639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25639__$1,inst_25637);
} else {
if((state_val_25640 === (2))){
var state_25639__$1 = state_25639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25639__$1,(4),ch);
} else {
if((state_val_25640 === (11))){
var inst_25629 = (state_25639[(2)]);
var state_25639__$1 = state_25639;
var statearr_25648_25665 = state_25639__$1;
(statearr_25648_25665[(2)] = inst_25629);

(statearr_25648_25665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (9))){
var state_25639__$1 = state_25639;
var statearr_25649_25666 = state_25639__$1;
(statearr_25649_25666[(2)] = null);

(statearr_25649_25666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (5))){
var inst_25624 = cljs.core.async.close_BANG_.call(null,out);
var state_25639__$1 = state_25639;
var statearr_25650_25667 = state_25639__$1;
(statearr_25650_25667[(2)] = inst_25624);

(statearr_25650_25667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (10))){
var inst_25632 = (state_25639[(2)]);
var state_25639__$1 = (function (){var statearr_25651 = state_25639;
(statearr_25651[(8)] = inst_25632);

return statearr_25651;
})();
var statearr_25652_25668 = state_25639__$1;
(statearr_25652_25668[(2)] = null);

(statearr_25652_25668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25640 === (8))){
var inst_25621 = (state_25639[(7)]);
var state_25639__$1 = state_25639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25639__$1,(11),out,inst_25621);
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
});})(c__24119__auto___25658,out))
;
return ((function (switch__24024__auto__,c__24119__auto___25658,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25653 = [null,null,null,null,null,null,null,null,null];
(statearr_25653[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25653[(1)] = (1));

return statearr_25653;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25639){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25654){if((e25654 instanceof Object)){
var ex__24028__auto__ = e25654;
var statearr_25655_25669 = state_25639;
(statearr_25655_25669[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25670 = state_25639;
state_25639 = G__25670;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25658,out))
})();
var state__24121__auto__ = (function (){var statearr_25656 = f__24120__auto__.call(null);
(statearr_25656[(6)] = c__24119__auto___25658);

return statearr_25656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25658,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25672 = arguments.length;
switch (G__25672) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24119__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto__){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto__){
return (function (state_25735){
var state_val_25736 = (state_25735[(1)]);
if((state_val_25736 === (7))){
var inst_25731 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25737_25775 = state_25735__$1;
(statearr_25737_25775[(2)] = inst_25731);

(statearr_25737_25775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (20))){
var inst_25701 = (state_25735[(7)]);
var inst_25712 = (state_25735[(2)]);
var inst_25713 = cljs.core.next.call(null,inst_25701);
var inst_25687 = inst_25713;
var inst_25688 = null;
var inst_25689 = (0);
var inst_25690 = (0);
var state_25735__$1 = (function (){var statearr_25738 = state_25735;
(statearr_25738[(8)] = inst_25712);

(statearr_25738[(9)] = inst_25690);

(statearr_25738[(10)] = inst_25689);

(statearr_25738[(11)] = inst_25687);

(statearr_25738[(12)] = inst_25688);

return statearr_25738;
})();
var statearr_25739_25776 = state_25735__$1;
(statearr_25739_25776[(2)] = null);

(statearr_25739_25776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (1))){
var state_25735__$1 = state_25735;
var statearr_25740_25777 = state_25735__$1;
(statearr_25740_25777[(2)] = null);

(statearr_25740_25777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (4))){
var inst_25676 = (state_25735[(13)]);
var inst_25676__$1 = (state_25735[(2)]);
var inst_25677 = (inst_25676__$1 == null);
var state_25735__$1 = (function (){var statearr_25741 = state_25735;
(statearr_25741[(13)] = inst_25676__$1);

return statearr_25741;
})();
if(cljs.core.truth_(inst_25677)){
var statearr_25742_25778 = state_25735__$1;
(statearr_25742_25778[(1)] = (5));

} else {
var statearr_25743_25779 = state_25735__$1;
(statearr_25743_25779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (15))){
var state_25735__$1 = state_25735;
var statearr_25747_25780 = state_25735__$1;
(statearr_25747_25780[(2)] = null);

(statearr_25747_25780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (21))){
var state_25735__$1 = state_25735;
var statearr_25748_25781 = state_25735__$1;
(statearr_25748_25781[(2)] = null);

(statearr_25748_25781[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (13))){
var inst_25690 = (state_25735[(9)]);
var inst_25689 = (state_25735[(10)]);
var inst_25687 = (state_25735[(11)]);
var inst_25688 = (state_25735[(12)]);
var inst_25697 = (state_25735[(2)]);
var inst_25698 = (inst_25690 + (1));
var tmp25744 = inst_25689;
var tmp25745 = inst_25687;
var tmp25746 = inst_25688;
var inst_25687__$1 = tmp25745;
var inst_25688__$1 = tmp25746;
var inst_25689__$1 = tmp25744;
var inst_25690__$1 = inst_25698;
var state_25735__$1 = (function (){var statearr_25749 = state_25735;
(statearr_25749[(14)] = inst_25697);

(statearr_25749[(9)] = inst_25690__$1);

(statearr_25749[(10)] = inst_25689__$1);

(statearr_25749[(11)] = inst_25687__$1);

(statearr_25749[(12)] = inst_25688__$1);

return statearr_25749;
})();
var statearr_25750_25782 = state_25735__$1;
(statearr_25750_25782[(2)] = null);

(statearr_25750_25782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (22))){
var state_25735__$1 = state_25735;
var statearr_25751_25783 = state_25735__$1;
(statearr_25751_25783[(2)] = null);

(statearr_25751_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (6))){
var inst_25676 = (state_25735[(13)]);
var inst_25685 = f.call(null,inst_25676);
var inst_25686 = cljs.core.seq.call(null,inst_25685);
var inst_25687 = inst_25686;
var inst_25688 = null;
var inst_25689 = (0);
var inst_25690 = (0);
var state_25735__$1 = (function (){var statearr_25752 = state_25735;
(statearr_25752[(9)] = inst_25690);

(statearr_25752[(10)] = inst_25689);

(statearr_25752[(11)] = inst_25687);

(statearr_25752[(12)] = inst_25688);

return statearr_25752;
})();
var statearr_25753_25784 = state_25735__$1;
(statearr_25753_25784[(2)] = null);

(statearr_25753_25784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (17))){
var inst_25701 = (state_25735[(7)]);
var inst_25705 = cljs.core.chunk_first.call(null,inst_25701);
var inst_25706 = cljs.core.chunk_rest.call(null,inst_25701);
var inst_25707 = cljs.core.count.call(null,inst_25705);
var inst_25687 = inst_25706;
var inst_25688 = inst_25705;
var inst_25689 = inst_25707;
var inst_25690 = (0);
var state_25735__$1 = (function (){var statearr_25754 = state_25735;
(statearr_25754[(9)] = inst_25690);

(statearr_25754[(10)] = inst_25689);

(statearr_25754[(11)] = inst_25687);

(statearr_25754[(12)] = inst_25688);

return statearr_25754;
})();
var statearr_25755_25785 = state_25735__$1;
(statearr_25755_25785[(2)] = null);

(statearr_25755_25785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (3))){
var inst_25733 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25735__$1,inst_25733);
} else {
if((state_val_25736 === (12))){
var inst_25721 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25756_25786 = state_25735__$1;
(statearr_25756_25786[(2)] = inst_25721);

(statearr_25756_25786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (2))){
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25735__$1,(4),in$);
} else {
if((state_val_25736 === (23))){
var inst_25729 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25757_25787 = state_25735__$1;
(statearr_25757_25787[(2)] = inst_25729);

(statearr_25757_25787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (19))){
var inst_25716 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25758_25788 = state_25735__$1;
(statearr_25758_25788[(2)] = inst_25716);

(statearr_25758_25788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (11))){
var inst_25701 = (state_25735[(7)]);
var inst_25687 = (state_25735[(11)]);
var inst_25701__$1 = cljs.core.seq.call(null,inst_25687);
var state_25735__$1 = (function (){var statearr_25759 = state_25735;
(statearr_25759[(7)] = inst_25701__$1);

return statearr_25759;
})();
if(inst_25701__$1){
var statearr_25760_25789 = state_25735__$1;
(statearr_25760_25789[(1)] = (14));

} else {
var statearr_25761_25790 = state_25735__$1;
(statearr_25761_25790[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (9))){
var inst_25723 = (state_25735[(2)]);
var inst_25724 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25735__$1 = (function (){var statearr_25762 = state_25735;
(statearr_25762[(15)] = inst_25723);

return statearr_25762;
})();
if(cljs.core.truth_(inst_25724)){
var statearr_25763_25791 = state_25735__$1;
(statearr_25763_25791[(1)] = (21));

} else {
var statearr_25764_25792 = state_25735__$1;
(statearr_25764_25792[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (5))){
var inst_25679 = cljs.core.async.close_BANG_.call(null,out);
var state_25735__$1 = state_25735;
var statearr_25765_25793 = state_25735__$1;
(statearr_25765_25793[(2)] = inst_25679);

(statearr_25765_25793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (14))){
var inst_25701 = (state_25735[(7)]);
var inst_25703 = cljs.core.chunked_seq_QMARK_.call(null,inst_25701);
var state_25735__$1 = state_25735;
if(inst_25703){
var statearr_25766_25794 = state_25735__$1;
(statearr_25766_25794[(1)] = (17));

} else {
var statearr_25767_25795 = state_25735__$1;
(statearr_25767_25795[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (16))){
var inst_25719 = (state_25735[(2)]);
var state_25735__$1 = state_25735;
var statearr_25768_25796 = state_25735__$1;
(statearr_25768_25796[(2)] = inst_25719);

(statearr_25768_25796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25736 === (10))){
var inst_25690 = (state_25735[(9)]);
var inst_25688 = (state_25735[(12)]);
var inst_25695 = cljs.core._nth.call(null,inst_25688,inst_25690);
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25735__$1,(13),out,inst_25695);
} else {
if((state_val_25736 === (18))){
var inst_25701 = (state_25735[(7)]);
var inst_25710 = cljs.core.first.call(null,inst_25701);
var state_25735__$1 = state_25735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25735__$1,(20),out,inst_25710);
} else {
if((state_val_25736 === (8))){
var inst_25690 = (state_25735[(9)]);
var inst_25689 = (state_25735[(10)]);
var inst_25692 = (inst_25690 < inst_25689);
var inst_25693 = inst_25692;
var state_25735__$1 = state_25735;
if(cljs.core.truth_(inst_25693)){
var statearr_25769_25797 = state_25735__$1;
(statearr_25769_25797[(1)] = (10));

} else {
var statearr_25770_25798 = state_25735__$1;
(statearr_25770_25798[(1)] = (11));

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
});})(c__24119__auto__))
;
return ((function (switch__24024__auto__,c__24119__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____0 = (function (){
var statearr_25771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25771[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__);

(statearr_25771[(1)] = (1));

return statearr_25771;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____1 = (function (state_25735){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25772){if((e25772 instanceof Object)){
var ex__24028__auto__ = e25772;
var statearr_25773_25799 = state_25735;
(statearr_25773_25799[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25800 = state_25735;
state_25735 = G__25800;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__ = function(state_25735){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____1.call(this,state_25735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24025__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto__))
})();
var state__24121__auto__ = (function (){var statearr_25774 = f__24120__auto__.call(null);
(statearr_25774[(6)] = c__24119__auto__);

return statearr_25774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto__))
);

return c__24119__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25802 = arguments.length;
switch (G__25802) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25805 = arguments.length;
switch (G__25805) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25808 = arguments.length;
switch (G__25808) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___25855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25855,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25855,out){
return (function (state_25832){
var state_val_25833 = (state_25832[(1)]);
if((state_val_25833 === (7))){
var inst_25827 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25834_25856 = state_25832__$1;
(statearr_25834_25856[(2)] = inst_25827);

(statearr_25834_25856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (1))){
var inst_25809 = null;
var state_25832__$1 = (function (){var statearr_25835 = state_25832;
(statearr_25835[(7)] = inst_25809);

return statearr_25835;
})();
var statearr_25836_25857 = state_25832__$1;
(statearr_25836_25857[(2)] = null);

(statearr_25836_25857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (4))){
var inst_25812 = (state_25832[(8)]);
var inst_25812__$1 = (state_25832[(2)]);
var inst_25813 = (inst_25812__$1 == null);
var inst_25814 = cljs.core.not.call(null,inst_25813);
var state_25832__$1 = (function (){var statearr_25837 = state_25832;
(statearr_25837[(8)] = inst_25812__$1);

return statearr_25837;
})();
if(inst_25814){
var statearr_25838_25858 = state_25832__$1;
(statearr_25838_25858[(1)] = (5));

} else {
var statearr_25839_25859 = state_25832__$1;
(statearr_25839_25859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (6))){
var state_25832__$1 = state_25832;
var statearr_25840_25860 = state_25832__$1;
(statearr_25840_25860[(2)] = null);

(statearr_25840_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (3))){
var inst_25829 = (state_25832[(2)]);
var inst_25830 = cljs.core.async.close_BANG_.call(null,out);
var state_25832__$1 = (function (){var statearr_25841 = state_25832;
(statearr_25841[(9)] = inst_25829);

return statearr_25841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25832__$1,inst_25830);
} else {
if((state_val_25833 === (2))){
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(4),ch);
} else {
if((state_val_25833 === (11))){
var inst_25812 = (state_25832[(8)]);
var inst_25821 = (state_25832[(2)]);
var inst_25809 = inst_25812;
var state_25832__$1 = (function (){var statearr_25842 = state_25832;
(statearr_25842[(10)] = inst_25821);

(statearr_25842[(7)] = inst_25809);

return statearr_25842;
})();
var statearr_25843_25861 = state_25832__$1;
(statearr_25843_25861[(2)] = null);

(statearr_25843_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (9))){
var inst_25812 = (state_25832[(8)]);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25832__$1,(11),out,inst_25812);
} else {
if((state_val_25833 === (5))){
var inst_25812 = (state_25832[(8)]);
var inst_25809 = (state_25832[(7)]);
var inst_25816 = cljs.core._EQ_.call(null,inst_25812,inst_25809);
var state_25832__$1 = state_25832;
if(inst_25816){
var statearr_25845_25862 = state_25832__$1;
(statearr_25845_25862[(1)] = (8));

} else {
var statearr_25846_25863 = state_25832__$1;
(statearr_25846_25863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (10))){
var inst_25824 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25847_25864 = state_25832__$1;
(statearr_25847_25864[(2)] = inst_25824);

(statearr_25847_25864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (8))){
var inst_25809 = (state_25832[(7)]);
var tmp25844 = inst_25809;
var inst_25809__$1 = tmp25844;
var state_25832__$1 = (function (){var statearr_25848 = state_25832;
(statearr_25848[(7)] = inst_25809__$1);

return statearr_25848;
})();
var statearr_25849_25865 = state_25832__$1;
(statearr_25849_25865[(2)] = null);

(statearr_25849_25865[(1)] = (2));


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
});})(c__24119__auto___25855,out))
;
return ((function (switch__24024__auto__,c__24119__auto___25855,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25850[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25850[(1)] = (1));

return statearr_25850;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25832){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25851){if((e25851 instanceof Object)){
var ex__24028__auto__ = e25851;
var statearr_25852_25866 = state_25832;
(statearr_25852_25866[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25867 = state_25832;
state_25832 = G__25867;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25855,out))
})();
var state__24121__auto__ = (function (){var statearr_25853 = f__24120__auto__.call(null);
(statearr_25853[(6)] = c__24119__auto___25855);

return statearr_25853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25855,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25869 = arguments.length;
switch (G__25869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___25935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___25935,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___25935,out){
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (7))){
var inst_25903 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25909_25936 = state_25907__$1;
(statearr_25909_25936[(2)] = inst_25903);

(statearr_25909_25936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (1))){
var inst_25870 = (new Array(n));
var inst_25871 = inst_25870;
var inst_25872 = (0);
var state_25907__$1 = (function (){var statearr_25910 = state_25907;
(statearr_25910[(7)] = inst_25871);

(statearr_25910[(8)] = inst_25872);

return statearr_25910;
})();
var statearr_25911_25937 = state_25907__$1;
(statearr_25911_25937[(2)] = null);

(statearr_25911_25937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (4))){
var inst_25875 = (state_25907[(9)]);
var inst_25875__$1 = (state_25907[(2)]);
var inst_25876 = (inst_25875__$1 == null);
var inst_25877 = cljs.core.not.call(null,inst_25876);
var state_25907__$1 = (function (){var statearr_25912 = state_25907;
(statearr_25912[(9)] = inst_25875__$1);

return statearr_25912;
})();
if(inst_25877){
var statearr_25913_25938 = state_25907__$1;
(statearr_25913_25938[(1)] = (5));

} else {
var statearr_25914_25939 = state_25907__$1;
(statearr_25914_25939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (15))){
var inst_25897 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25915_25940 = state_25907__$1;
(statearr_25915_25940[(2)] = inst_25897);

(statearr_25915_25940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (13))){
var state_25907__$1 = state_25907;
var statearr_25916_25941 = state_25907__$1;
(statearr_25916_25941[(2)] = null);

(statearr_25916_25941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (6))){
var inst_25872 = (state_25907[(8)]);
var inst_25893 = (inst_25872 > (0));
var state_25907__$1 = state_25907;
if(cljs.core.truth_(inst_25893)){
var statearr_25917_25942 = state_25907__$1;
(statearr_25917_25942[(1)] = (12));

} else {
var statearr_25918_25943 = state_25907__$1;
(statearr_25918_25943[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (3))){
var inst_25905 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25907__$1,inst_25905);
} else {
if((state_val_25908 === (12))){
var inst_25871 = (state_25907[(7)]);
var inst_25895 = cljs.core.vec.call(null,inst_25871);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25907__$1,(15),out,inst_25895);
} else {
if((state_val_25908 === (2))){
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(4),ch);
} else {
if((state_val_25908 === (11))){
var inst_25887 = (state_25907[(2)]);
var inst_25888 = (new Array(n));
var inst_25871 = inst_25888;
var inst_25872 = (0);
var state_25907__$1 = (function (){var statearr_25919 = state_25907;
(statearr_25919[(10)] = inst_25887);

(statearr_25919[(7)] = inst_25871);

(statearr_25919[(8)] = inst_25872);

return statearr_25919;
})();
var statearr_25920_25944 = state_25907__$1;
(statearr_25920_25944[(2)] = null);

(statearr_25920_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (9))){
var inst_25871 = (state_25907[(7)]);
var inst_25885 = cljs.core.vec.call(null,inst_25871);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25907__$1,(11),out,inst_25885);
} else {
if((state_val_25908 === (5))){
var inst_25875 = (state_25907[(9)]);
var inst_25871 = (state_25907[(7)]);
var inst_25872 = (state_25907[(8)]);
var inst_25880 = (state_25907[(11)]);
var inst_25879 = (inst_25871[inst_25872] = inst_25875);
var inst_25880__$1 = (inst_25872 + (1));
var inst_25881 = (inst_25880__$1 < n);
var state_25907__$1 = (function (){var statearr_25921 = state_25907;
(statearr_25921[(11)] = inst_25880__$1);

(statearr_25921[(12)] = inst_25879);

return statearr_25921;
})();
if(cljs.core.truth_(inst_25881)){
var statearr_25922_25945 = state_25907__$1;
(statearr_25922_25945[(1)] = (8));

} else {
var statearr_25923_25946 = state_25907__$1;
(statearr_25923_25946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (14))){
var inst_25900 = (state_25907[(2)]);
var inst_25901 = cljs.core.async.close_BANG_.call(null,out);
var state_25907__$1 = (function (){var statearr_25925 = state_25907;
(statearr_25925[(13)] = inst_25900);

return statearr_25925;
})();
var statearr_25926_25947 = state_25907__$1;
(statearr_25926_25947[(2)] = inst_25901);

(statearr_25926_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (10))){
var inst_25891 = (state_25907[(2)]);
var state_25907__$1 = state_25907;
var statearr_25927_25948 = state_25907__$1;
(statearr_25927_25948[(2)] = inst_25891);

(statearr_25927_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25908 === (8))){
var inst_25871 = (state_25907[(7)]);
var inst_25880 = (state_25907[(11)]);
var tmp25924 = inst_25871;
var inst_25871__$1 = tmp25924;
var inst_25872 = inst_25880;
var state_25907__$1 = (function (){var statearr_25928 = state_25907;
(statearr_25928[(7)] = inst_25871__$1);

(statearr_25928[(8)] = inst_25872);

return statearr_25928;
})();
var statearr_25929_25949 = state_25907__$1;
(statearr_25929_25949[(2)] = null);

(statearr_25929_25949[(1)] = (2));


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
});})(c__24119__auto___25935,out))
;
return ((function (switch__24024__auto__,c__24119__auto___25935,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_25930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25930[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_25930[(1)] = (1));

return statearr_25930;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25907){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e25931){if((e25931 instanceof Object)){
var ex__24028__auto__ = e25931;
var statearr_25932_25950 = state_25907;
(statearr_25932_25950[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25907;
state_25907 = G__25951;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___25935,out))
})();
var state__24121__auto__ = (function (){var statearr_25933 = f__24120__auto__.call(null);
(statearr_25933[(6)] = c__24119__auto___25935);

return statearr_25933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___25935,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25953 = arguments.length;
switch (G__25953) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24119__auto___26023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24119__auto___26023,out){
return (function (){
var f__24120__auto__ = (function (){var switch__24024__auto__ = ((function (c__24119__auto___26023,out){
return (function (state_25995){
var state_val_25996 = (state_25995[(1)]);
if((state_val_25996 === (7))){
var inst_25991 = (state_25995[(2)]);
var state_25995__$1 = state_25995;
var statearr_25997_26024 = state_25995__$1;
(statearr_25997_26024[(2)] = inst_25991);

(statearr_25997_26024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (1))){
var inst_25954 = [];
var inst_25955 = inst_25954;
var inst_25956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25995__$1 = (function (){var statearr_25998 = state_25995;
(statearr_25998[(7)] = inst_25956);

(statearr_25998[(8)] = inst_25955);

return statearr_25998;
})();
var statearr_25999_26025 = state_25995__$1;
(statearr_25999_26025[(2)] = null);

(statearr_25999_26025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (4))){
var inst_25959 = (state_25995[(9)]);
var inst_25959__$1 = (state_25995[(2)]);
var inst_25960 = (inst_25959__$1 == null);
var inst_25961 = cljs.core.not.call(null,inst_25960);
var state_25995__$1 = (function (){var statearr_26000 = state_25995;
(statearr_26000[(9)] = inst_25959__$1);

return statearr_26000;
})();
if(inst_25961){
var statearr_26001_26026 = state_25995__$1;
(statearr_26001_26026[(1)] = (5));

} else {
var statearr_26002_26027 = state_25995__$1;
(statearr_26002_26027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (15))){
var inst_25985 = (state_25995[(2)]);
var state_25995__$1 = state_25995;
var statearr_26003_26028 = state_25995__$1;
(statearr_26003_26028[(2)] = inst_25985);

(statearr_26003_26028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (13))){
var state_25995__$1 = state_25995;
var statearr_26004_26029 = state_25995__$1;
(statearr_26004_26029[(2)] = null);

(statearr_26004_26029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (6))){
var inst_25955 = (state_25995[(8)]);
var inst_25980 = inst_25955.length;
var inst_25981 = (inst_25980 > (0));
var state_25995__$1 = state_25995;
if(cljs.core.truth_(inst_25981)){
var statearr_26005_26030 = state_25995__$1;
(statearr_26005_26030[(1)] = (12));

} else {
var statearr_26006_26031 = state_25995__$1;
(statearr_26006_26031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (3))){
var inst_25993 = (state_25995[(2)]);
var state_25995__$1 = state_25995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25995__$1,inst_25993);
} else {
if((state_val_25996 === (12))){
var inst_25955 = (state_25995[(8)]);
var inst_25983 = cljs.core.vec.call(null,inst_25955);
var state_25995__$1 = state_25995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25995__$1,(15),out,inst_25983);
} else {
if((state_val_25996 === (2))){
var state_25995__$1 = state_25995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25995__$1,(4),ch);
} else {
if((state_val_25996 === (11))){
var inst_25959 = (state_25995[(9)]);
var inst_25963 = (state_25995[(10)]);
var inst_25973 = (state_25995[(2)]);
var inst_25974 = [];
var inst_25975 = inst_25974.push(inst_25959);
var inst_25955 = inst_25974;
var inst_25956 = inst_25963;
var state_25995__$1 = (function (){var statearr_26007 = state_25995;
(statearr_26007[(11)] = inst_25973);

(statearr_26007[(7)] = inst_25956);

(statearr_26007[(12)] = inst_25975);

(statearr_26007[(8)] = inst_25955);

return statearr_26007;
})();
var statearr_26008_26032 = state_25995__$1;
(statearr_26008_26032[(2)] = null);

(statearr_26008_26032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (9))){
var inst_25955 = (state_25995[(8)]);
var inst_25971 = cljs.core.vec.call(null,inst_25955);
var state_25995__$1 = state_25995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25995__$1,(11),out,inst_25971);
} else {
if((state_val_25996 === (5))){
var inst_25959 = (state_25995[(9)]);
var inst_25956 = (state_25995[(7)]);
var inst_25963 = (state_25995[(10)]);
var inst_25963__$1 = f.call(null,inst_25959);
var inst_25964 = cljs.core._EQ_.call(null,inst_25963__$1,inst_25956);
var inst_25965 = cljs.core.keyword_identical_QMARK_.call(null,inst_25956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25966 = ((inst_25964) || (inst_25965));
var state_25995__$1 = (function (){var statearr_26009 = state_25995;
(statearr_26009[(10)] = inst_25963__$1);

return statearr_26009;
})();
if(cljs.core.truth_(inst_25966)){
var statearr_26010_26033 = state_25995__$1;
(statearr_26010_26033[(1)] = (8));

} else {
var statearr_26011_26034 = state_25995__$1;
(statearr_26011_26034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (14))){
var inst_25988 = (state_25995[(2)]);
var inst_25989 = cljs.core.async.close_BANG_.call(null,out);
var state_25995__$1 = (function (){var statearr_26013 = state_25995;
(statearr_26013[(13)] = inst_25988);

return statearr_26013;
})();
var statearr_26014_26035 = state_25995__$1;
(statearr_26014_26035[(2)] = inst_25989);

(statearr_26014_26035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (10))){
var inst_25978 = (state_25995[(2)]);
var state_25995__$1 = state_25995;
var statearr_26015_26036 = state_25995__$1;
(statearr_26015_26036[(2)] = inst_25978);

(statearr_26015_26036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25996 === (8))){
var inst_25959 = (state_25995[(9)]);
var inst_25963 = (state_25995[(10)]);
var inst_25955 = (state_25995[(8)]);
var inst_25968 = inst_25955.push(inst_25959);
var tmp26012 = inst_25955;
var inst_25955__$1 = tmp26012;
var inst_25956 = inst_25963;
var state_25995__$1 = (function (){var statearr_26016 = state_25995;
(statearr_26016[(14)] = inst_25968);

(statearr_26016[(7)] = inst_25956);

(statearr_26016[(8)] = inst_25955__$1);

return statearr_26016;
})();
var statearr_26017_26037 = state_25995__$1;
(statearr_26017_26037[(2)] = null);

(statearr_26017_26037[(1)] = (2));


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
});})(c__24119__auto___26023,out))
;
return ((function (switch__24024__auto__,c__24119__auto___26023,out){
return (function() {
var cljs$core$async$state_machine__24025__auto__ = null;
var cljs$core$async$state_machine__24025__auto____0 = (function (){
var statearr_26018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26018[(0)] = cljs$core$async$state_machine__24025__auto__);

(statearr_26018[(1)] = (1));

return statearr_26018;
});
var cljs$core$async$state_machine__24025__auto____1 = (function (state_25995){
while(true){
var ret_value__24026__auto__ = (function (){try{while(true){
var result__24027__auto__ = switch__24024__auto__.call(null,state_25995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24027__auto__;
}
break;
}
}catch (e26019){if((e26019 instanceof Object)){
var ex__24028__auto__ = e26019;
var statearr_26020_26038 = state_25995;
(statearr_26020_26038[(5)] = ex__24028__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24026__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26039 = state_25995;
state_25995 = G__26039;
continue;
} else {
return ret_value__24026__auto__;
}
break;
}
});
cljs$core$async$state_machine__24025__auto__ = function(state_25995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24025__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24025__auto____1.call(this,state_25995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24025__auto____0;
cljs$core$async$state_machine__24025__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24025__auto____1;
return cljs$core$async$state_machine__24025__auto__;
})()
;})(switch__24024__auto__,c__24119__auto___26023,out))
})();
var state__24121__auto__ = (function (){var statearr_26021 = f__24120__auto__.call(null);
(statearr_26021[(6)] = c__24119__auto___26023);

return statearr_26021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24121__auto__);
});})(c__24119__auto___26023,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563744773931

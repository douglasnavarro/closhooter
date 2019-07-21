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
var G__24180 = arguments.length;
switch (G__24180) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24181 = (function (f,blockable,meta24182){
this.f = f;
this.blockable = blockable;
this.meta24182 = meta24182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24183,meta24182__$1){
var self__ = this;
var _24183__$1 = this;
return (new cljs.core.async.t_cljs$core$async24181(self__.f,self__.blockable,meta24182__$1));
});

cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24183){
var self__ = this;
var _24183__$1 = this;
return self__.meta24182;
});

cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24182","meta24182",1232992800,null)], null);
});

cljs.core.async.t_cljs$core$async24181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24181";

cljs.core.async.t_cljs$core$async24181.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24181");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24181.
 */
cljs.core.async.__GT_t_cljs$core$async24181 = (function cljs$core$async$__GT_t_cljs$core$async24181(f__$1,blockable__$1,meta24182){
return (new cljs.core.async.t_cljs$core$async24181(f__$1,blockable__$1,meta24182));
});

}

return (new cljs.core.async.t_cljs$core$async24181(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24187 = arguments.length;
switch (G__24187) {
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
var G__24190 = arguments.length;
switch (G__24190) {
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
var G__24193 = arguments.length;
switch (G__24193) {
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
var val_24195 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24195);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24195,ret){
return (function (){
return fn1.call(null,val_24195);
});})(val_24195,ret))
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
var G__24197 = arguments.length;
switch (G__24197) {
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
var n__4518__auto___24199 = n;
var x_24200 = (0);
while(true){
if((x_24200 < n__4518__auto___24199)){
(a[x_24200] = (0));

var G__24201 = (x_24200 + (1));
x_24200 = G__24201;
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

var G__24202 = (i + (1));
i = G__24202;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24203 = (function (flag,meta24204){
this.flag = flag;
this.meta24204 = meta24204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24205,meta24204__$1){
var self__ = this;
var _24205__$1 = this;
return (new cljs.core.async.t_cljs$core$async24203(self__.flag,meta24204__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24205){
var self__ = this;
var _24205__$1 = this;
return self__.meta24204;
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24204","meta24204",860520916,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24203";

cljs.core.async.t_cljs$core$async24203.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24203");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24203.
 */
cljs.core.async.__GT_t_cljs$core$async24203 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24203(flag__$1,meta24204){
return (new cljs.core.async.t_cljs$core$async24203(flag__$1,meta24204));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24203(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24206 = (function (flag,cb,meta24207){
this.flag = flag;
this.cb = cb;
this.meta24207 = meta24207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24208,meta24207__$1){
var self__ = this;
var _24208__$1 = this;
return (new cljs.core.async.t_cljs$core$async24206(self__.flag,self__.cb,meta24207__$1));
});

cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24208){
var self__ = this;
var _24208__$1 = this;
return self__.meta24207;
});

cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24207","meta24207",1113688603,null)], null);
});

cljs.core.async.t_cljs$core$async24206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24206";

cljs.core.async.t_cljs$core$async24206.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24206");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24206.
 */
cljs.core.async.__GT_t_cljs$core$async24206 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24206(flag__$1,cb__$1,meta24207){
return (new cljs.core.async.t_cljs$core$async24206(flag__$1,cb__$1,meta24207));
});

}

return (new cljs.core.async.t_cljs$core$async24206(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24209_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24209_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24210_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24210_SHARP_,port], null));
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
var G__24211 = (i + (1));
i = G__24211;
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
var len__4641__auto___24217 = arguments.length;
var i__4642__auto___24218 = (0);
while(true){
if((i__4642__auto___24218 < len__4641__auto___24217)){
args__4647__auto__.push((arguments[i__4642__auto___24218]));

var G__24219 = (i__4642__auto___24218 + (1));
i__4642__auto___24218 = G__24219;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24214){
var map__24215 = p__24214;
var map__24215__$1 = (((((!((map__24215 == null))))?(((((map__24215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24215):map__24215);
var opts = map__24215__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24212){
var G__24213 = cljs.core.first.call(null,seq24212);
var seq24212__$1 = cljs.core.next.call(null,seq24212);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24213,seq24212__$1);
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
var G__24221 = arguments.length;
switch (G__24221) {
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
var c__24120__auto___24267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24267){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___24267){
return (function (state_24245){
var state_val_24246 = (state_24245[(1)]);
if((state_val_24246 === (7))){
var inst_24241 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24247_24268 = state_24245__$1;
(statearr_24247_24268[(2)] = inst_24241);

(statearr_24247_24268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (1))){
var state_24245__$1 = state_24245;
var statearr_24248_24269 = state_24245__$1;
(statearr_24248_24269[(2)] = null);

(statearr_24248_24269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (4))){
var inst_24224 = (state_24245[(7)]);
var inst_24224__$1 = (state_24245[(2)]);
var inst_24225 = (inst_24224__$1 == null);
var state_24245__$1 = (function (){var statearr_24249 = state_24245;
(statearr_24249[(7)] = inst_24224__$1);

return statearr_24249;
})();
if(cljs.core.truth_(inst_24225)){
var statearr_24250_24270 = state_24245__$1;
(statearr_24250_24270[(1)] = (5));

} else {
var statearr_24251_24271 = state_24245__$1;
(statearr_24251_24271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (13))){
var state_24245__$1 = state_24245;
var statearr_24252_24272 = state_24245__$1;
(statearr_24252_24272[(2)] = null);

(statearr_24252_24272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (6))){
var inst_24224 = (state_24245[(7)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24245__$1,(11),to,inst_24224);
} else {
if((state_val_24246 === (3))){
var inst_24243 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24245__$1,inst_24243);
} else {
if((state_val_24246 === (12))){
var state_24245__$1 = state_24245;
var statearr_24253_24273 = state_24245__$1;
(statearr_24253_24273[(2)] = null);

(statearr_24253_24273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (2))){
var state_24245__$1 = state_24245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24245__$1,(4),from);
} else {
if((state_val_24246 === (11))){
var inst_24234 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
if(cljs.core.truth_(inst_24234)){
var statearr_24254_24274 = state_24245__$1;
(statearr_24254_24274[(1)] = (12));

} else {
var statearr_24255_24275 = state_24245__$1;
(statearr_24255_24275[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (9))){
var state_24245__$1 = state_24245;
var statearr_24256_24276 = state_24245__$1;
(statearr_24256_24276[(2)] = null);

(statearr_24256_24276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (5))){
var state_24245__$1 = state_24245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24257_24277 = state_24245__$1;
(statearr_24257_24277[(1)] = (8));

} else {
var statearr_24258_24278 = state_24245__$1;
(statearr_24258_24278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (14))){
var inst_24239 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24259_24279 = state_24245__$1;
(statearr_24259_24279[(2)] = inst_24239);

(statearr_24259_24279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (10))){
var inst_24231 = (state_24245[(2)]);
var state_24245__$1 = state_24245;
var statearr_24260_24280 = state_24245__$1;
(statearr_24260_24280[(2)] = inst_24231);

(statearr_24260_24280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24246 === (8))){
var inst_24228 = cljs.core.async.close_BANG_.call(null,to);
var state_24245__$1 = state_24245;
var statearr_24261_24281 = state_24245__$1;
(statearr_24261_24281[(2)] = inst_24228);

(statearr_24261_24281[(1)] = (10));


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
});})(c__24120__auto___24267))
;
return ((function (switch__24025__auto__,c__24120__auto___24267){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_24262 = [null,null,null,null,null,null,null,null];
(statearr_24262[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_24262[(1)] = (1));

return statearr_24262;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_24245){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24263){if((e24263 instanceof Object)){
var ex__24029__auto__ = e24263;
var statearr_24264_24282 = state_24245;
(statearr_24264_24282[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24283 = state_24245;
state_24245 = G__24283;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_24245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_24245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___24267))
})();
var state__24122__auto__ = (function (){var statearr_24265 = f__24121__auto__.call(null);
(statearr_24265[(6)] = c__24120__auto___24267);

return statearr_24265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24267))
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
return (function (p__24284){
var vec__24285 = p__24284;
var v = cljs.core.nth.call(null,vec__24285,(0),null);
var p = cljs.core.nth.call(null,vec__24285,(1),null);
var job = vec__24285;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24120__auto___24456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results){
return (function (state_24292){
var state_val_24293 = (state_24292[(1)]);
if((state_val_24293 === (1))){
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24292__$1,(2),res,v);
} else {
if((state_val_24293 === (2))){
var inst_24289 = (state_24292[(2)]);
var inst_24290 = cljs.core.async.close_BANG_.call(null,res);
var state_24292__$1 = (function (){var statearr_24294 = state_24292;
(statearr_24294[(7)] = inst_24289);

return statearr_24294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24292__$1,inst_24290);
} else {
return null;
}
}
});})(c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results))
;
return ((function (switch__24025__auto__,c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1 = (function (state_24292){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__24029__auto__ = e24296;
var statearr_24297_24457 = state_24292;
(statearr_24297_24457[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24458 = state_24292;
state_24292 = G__24458;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = function(state_24292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1.call(this,state_24292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results))
})();
var state__24122__auto__ = (function (){var statearr_24298 = f__24121__auto__.call(null);
(statearr_24298[(6)] = c__24120__auto___24456);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24456,res,vec__24285,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24299){
var vec__24300 = p__24299;
var v = cljs.core.nth.call(null,vec__24300,(0),null);
var p = cljs.core.nth.call(null,vec__24300,(1),null);
var job = vec__24300;
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
var n__4518__auto___24459 = n;
var __24460 = (0);
while(true){
if((__24460 < n__4518__auto___24459)){
var G__24303_24461 = type;
var G__24303_24462__$1 = (((G__24303_24461 instanceof cljs.core.Keyword))?G__24303_24461.fqn:null);
switch (G__24303_24462__$1) {
case "compute":
var c__24120__auto___24464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24460,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (__24460,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function (state_24316){
var state_val_24317 = (state_24316[(1)]);
if((state_val_24317 === (1))){
var state_24316__$1 = state_24316;
var statearr_24318_24465 = state_24316__$1;
(statearr_24318_24465[(2)] = null);

(statearr_24318_24465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (2))){
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24316__$1,(4),jobs);
} else {
if((state_val_24317 === (3))){
var inst_24314 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24316__$1,inst_24314);
} else {
if((state_val_24317 === (4))){
var inst_24306 = (state_24316[(2)]);
var inst_24307 = process.call(null,inst_24306);
var state_24316__$1 = state_24316;
if(cljs.core.truth_(inst_24307)){
var statearr_24319_24466 = state_24316__$1;
(statearr_24319_24466[(1)] = (5));

} else {
var statearr_24320_24467 = state_24316__$1;
(statearr_24320_24467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (5))){
var state_24316__$1 = state_24316;
var statearr_24321_24468 = state_24316__$1;
(statearr_24321_24468[(2)] = null);

(statearr_24321_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (6))){
var state_24316__$1 = state_24316;
var statearr_24322_24469 = state_24316__$1;
(statearr_24322_24469[(2)] = null);

(statearr_24322_24469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24317 === (7))){
var inst_24312 = (state_24316[(2)]);
var state_24316__$1 = state_24316;
var statearr_24323_24470 = state_24316__$1;
(statearr_24323_24470[(2)] = inst_24312);

(statearr_24323_24470[(1)] = (3));


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
});})(__24460,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
;
return ((function (__24460,switch__24025__auto__,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null];
(statearr_24324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1 = (function (state_24316){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__24029__auto__ = e24325;
var statearr_24326_24471 = state_24316;
(statearr_24326_24471[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24472 = state_24316;
state_24316 = G__24472;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = function(state_24316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1.call(this,state_24316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__;
})()
;})(__24460,switch__24025__auto__,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24327 = f__24121__auto__.call(null);
(statearr_24327[(6)] = c__24120__auto___24464);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(__24460,c__24120__auto___24464,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
);


break;
case "async":
var c__24120__auto___24473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24460,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (__24460,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function (state_24340){
var state_val_24341 = (state_24340[(1)]);
if((state_val_24341 === (1))){
var state_24340__$1 = state_24340;
var statearr_24342_24474 = state_24340__$1;
(statearr_24342_24474[(2)] = null);

(statearr_24342_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (2))){
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24340__$1,(4),jobs);
} else {
if((state_val_24341 === (3))){
var inst_24338 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24340__$1,inst_24338);
} else {
if((state_val_24341 === (4))){
var inst_24330 = (state_24340[(2)]);
var inst_24331 = async.call(null,inst_24330);
var state_24340__$1 = state_24340;
if(cljs.core.truth_(inst_24331)){
var statearr_24343_24475 = state_24340__$1;
(statearr_24343_24475[(1)] = (5));

} else {
var statearr_24344_24476 = state_24340__$1;
(statearr_24344_24476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (5))){
var state_24340__$1 = state_24340;
var statearr_24345_24477 = state_24340__$1;
(statearr_24345_24477[(2)] = null);

(statearr_24345_24477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (6))){
var state_24340__$1 = state_24340;
var statearr_24346_24478 = state_24340__$1;
(statearr_24346_24478[(2)] = null);

(statearr_24346_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24341 === (7))){
var inst_24336 = (state_24340[(2)]);
var state_24340__$1 = state_24340;
var statearr_24347_24479 = state_24340__$1;
(statearr_24347_24479[(2)] = inst_24336);

(statearr_24347_24479[(1)] = (3));


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
});})(__24460,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
;
return ((function (__24460,switch__24025__auto__,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_24348 = [null,null,null,null,null,null,null];
(statearr_24348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__);

(statearr_24348[(1)] = (1));

return statearr_24348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1 = (function (state_24340){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24349){if((e24349 instanceof Object)){
var ex__24029__auto__ = e24349;
var statearr_24350_24480 = state_24340;
(statearr_24350_24480[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24481 = state_24340;
state_24340 = G__24481;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = function(state_24340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1.call(this,state_24340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__;
})()
;})(__24460,switch__24025__auto__,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24351 = f__24121__auto__.call(null);
(statearr_24351[(6)] = c__24120__auto___24473);

return statearr_24351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(__24460,c__24120__auto___24473,G__24303_24461,G__24303_24462__$1,n__4518__auto___24459,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24303_24462__$1)].join('')));

}

var G__24482 = (__24460 + (1));
__24460 = G__24482;
continue;
} else {
}
break;
}

var c__24120__auto___24483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24483,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___24483,jobs,results,process,async){
return (function (state_24373){
var state_val_24374 = (state_24373[(1)]);
if((state_val_24374 === (7))){
var inst_24369 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24375_24484 = state_24373__$1;
(statearr_24375_24484[(2)] = inst_24369);

(statearr_24375_24484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (1))){
var state_24373__$1 = state_24373;
var statearr_24376_24485 = state_24373__$1;
(statearr_24376_24485[(2)] = null);

(statearr_24376_24485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (4))){
var inst_24354 = (state_24373[(7)]);
var inst_24354__$1 = (state_24373[(2)]);
var inst_24355 = (inst_24354__$1 == null);
var state_24373__$1 = (function (){var statearr_24377 = state_24373;
(statearr_24377[(7)] = inst_24354__$1);

return statearr_24377;
})();
if(cljs.core.truth_(inst_24355)){
var statearr_24378_24486 = state_24373__$1;
(statearr_24378_24486[(1)] = (5));

} else {
var statearr_24379_24487 = state_24373__$1;
(statearr_24379_24487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (6))){
var inst_24354 = (state_24373[(7)]);
var inst_24359 = (state_24373[(8)]);
var inst_24359__$1 = cljs.core.async.chan.call(null,(1));
var inst_24360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24361 = [inst_24354,inst_24359__$1];
var inst_24362 = (new cljs.core.PersistentVector(null,2,(5),inst_24360,inst_24361,null));
var state_24373__$1 = (function (){var statearr_24380 = state_24373;
(statearr_24380[(8)] = inst_24359__$1);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24373__$1,(8),jobs,inst_24362);
} else {
if((state_val_24374 === (3))){
var inst_24371 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24373__$1,inst_24371);
} else {
if((state_val_24374 === (2))){
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(4),from);
} else {
if((state_val_24374 === (9))){
var inst_24366 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24381 = state_24373;
(statearr_24381[(9)] = inst_24366);

return statearr_24381;
})();
var statearr_24382_24488 = state_24373__$1;
(statearr_24382_24488[(2)] = null);

(statearr_24382_24488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (5))){
var inst_24357 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24373__$1 = state_24373;
var statearr_24383_24489 = state_24373__$1;
(statearr_24383_24489[(2)] = inst_24357);

(statearr_24383_24489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (8))){
var inst_24359 = (state_24373[(8)]);
var inst_24364 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24384 = state_24373;
(statearr_24384[(10)] = inst_24364);

return statearr_24384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24373__$1,(9),results,inst_24359);
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
});})(c__24120__auto___24483,jobs,results,process,async))
;
return ((function (switch__24025__auto__,c__24120__auto___24483,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_24385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__);

(statearr_24385[(1)] = (1));

return statearr_24385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1 = (function (state_24373){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24386){if((e24386 instanceof Object)){
var ex__24029__auto__ = e24386;
var statearr_24387_24490 = state_24373;
(statearr_24387_24490[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24373;
state_24373 = G__24491;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = function(state_24373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1.call(this,state_24373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___24483,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24388 = f__24121__auto__.call(null);
(statearr_24388[(6)] = c__24120__auto___24483);

return statearr_24388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24483,jobs,results,process,async))
);


var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,jobs,results,process,async){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__,jobs,results,process,async){
return (function (state_24426){
var state_val_24427 = (state_24426[(1)]);
if((state_val_24427 === (7))){
var inst_24422 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24428_24492 = state_24426__$1;
(statearr_24428_24492[(2)] = inst_24422);

(statearr_24428_24492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (20))){
var state_24426__$1 = state_24426;
var statearr_24429_24493 = state_24426__$1;
(statearr_24429_24493[(2)] = null);

(statearr_24429_24493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (1))){
var state_24426__$1 = state_24426;
var statearr_24430_24494 = state_24426__$1;
(statearr_24430_24494[(2)] = null);

(statearr_24430_24494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (4))){
var inst_24391 = (state_24426[(7)]);
var inst_24391__$1 = (state_24426[(2)]);
var inst_24392 = (inst_24391__$1 == null);
var state_24426__$1 = (function (){var statearr_24431 = state_24426;
(statearr_24431[(7)] = inst_24391__$1);

return statearr_24431;
})();
if(cljs.core.truth_(inst_24392)){
var statearr_24432_24495 = state_24426__$1;
(statearr_24432_24495[(1)] = (5));

} else {
var statearr_24433_24496 = state_24426__$1;
(statearr_24433_24496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (15))){
var inst_24404 = (state_24426[(8)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24426__$1,(18),to,inst_24404);
} else {
if((state_val_24427 === (21))){
var inst_24417 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24434_24497 = state_24426__$1;
(statearr_24434_24497[(2)] = inst_24417);

(statearr_24434_24497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (13))){
var inst_24419 = (state_24426[(2)]);
var state_24426__$1 = (function (){var statearr_24435 = state_24426;
(statearr_24435[(9)] = inst_24419);

return statearr_24435;
})();
var statearr_24436_24498 = state_24426__$1;
(statearr_24436_24498[(2)] = null);

(statearr_24436_24498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (6))){
var inst_24391 = (state_24426[(7)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(11),inst_24391);
} else {
if((state_val_24427 === (17))){
var inst_24412 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
if(cljs.core.truth_(inst_24412)){
var statearr_24437_24499 = state_24426__$1;
(statearr_24437_24499[(1)] = (19));

} else {
var statearr_24438_24500 = state_24426__$1;
(statearr_24438_24500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (3))){
var inst_24424 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24426__$1,inst_24424);
} else {
if((state_val_24427 === (12))){
var inst_24401 = (state_24426[(10)]);
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(14),inst_24401);
} else {
if((state_val_24427 === (2))){
var state_24426__$1 = state_24426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24426__$1,(4),results);
} else {
if((state_val_24427 === (19))){
var state_24426__$1 = state_24426;
var statearr_24439_24501 = state_24426__$1;
(statearr_24439_24501[(2)] = null);

(statearr_24439_24501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (11))){
var inst_24401 = (state_24426[(2)]);
var state_24426__$1 = (function (){var statearr_24440 = state_24426;
(statearr_24440[(10)] = inst_24401);

return statearr_24440;
})();
var statearr_24441_24502 = state_24426__$1;
(statearr_24441_24502[(2)] = null);

(statearr_24441_24502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (9))){
var state_24426__$1 = state_24426;
var statearr_24442_24503 = state_24426__$1;
(statearr_24442_24503[(2)] = null);

(statearr_24442_24503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (5))){
var state_24426__$1 = state_24426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24443_24504 = state_24426__$1;
(statearr_24443_24504[(1)] = (8));

} else {
var statearr_24444_24505 = state_24426__$1;
(statearr_24444_24505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (14))){
var inst_24406 = (state_24426[(11)]);
var inst_24404 = (state_24426[(8)]);
var inst_24404__$1 = (state_24426[(2)]);
var inst_24405 = (inst_24404__$1 == null);
var inst_24406__$1 = cljs.core.not.call(null,inst_24405);
var state_24426__$1 = (function (){var statearr_24445 = state_24426;
(statearr_24445[(11)] = inst_24406__$1);

(statearr_24445[(8)] = inst_24404__$1);

return statearr_24445;
})();
if(inst_24406__$1){
var statearr_24446_24506 = state_24426__$1;
(statearr_24446_24506[(1)] = (15));

} else {
var statearr_24447_24507 = state_24426__$1;
(statearr_24447_24507[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (16))){
var inst_24406 = (state_24426[(11)]);
var state_24426__$1 = state_24426;
var statearr_24448_24508 = state_24426__$1;
(statearr_24448_24508[(2)] = inst_24406);

(statearr_24448_24508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (10))){
var inst_24398 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24449_24509 = state_24426__$1;
(statearr_24449_24509[(2)] = inst_24398);

(statearr_24449_24509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (18))){
var inst_24409 = (state_24426[(2)]);
var state_24426__$1 = state_24426;
var statearr_24450_24510 = state_24426__$1;
(statearr_24450_24510[(2)] = inst_24409);

(statearr_24450_24510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24427 === (8))){
var inst_24395 = cljs.core.async.close_BANG_.call(null,to);
var state_24426__$1 = state_24426;
var statearr_24451_24511 = state_24426__$1;
(statearr_24451_24511[(2)] = inst_24395);

(statearr_24451_24511[(1)] = (10));


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
});})(c__24120__auto__,jobs,results,process,async))
;
return ((function (switch__24025__auto__,c__24120__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_24452 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__);

(statearr_24452[(1)] = (1));

return statearr_24452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1 = (function (state_24426){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24453){if((e24453 instanceof Object)){
var ex__24029__auto__ = e24453;
var statearr_24454_24512 = state_24426;
(statearr_24454_24512[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24513 = state_24426;
state_24426 = G__24513;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__ = function(state_24426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1.call(this,state_24426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__,jobs,results,process,async))
})();
var state__24122__auto__ = (function (){var statearr_24455 = f__24121__auto__.call(null);
(statearr_24455[(6)] = c__24120__auto__);

return statearr_24455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,jobs,results,process,async))
);

return c__24120__auto__;
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
var G__24515 = arguments.length;
switch (G__24515) {
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
var G__24518 = arguments.length;
switch (G__24518) {
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
var G__24521 = arguments.length;
switch (G__24521) {
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
var c__24120__auto___24570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24570,tc,fc){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___24570,tc,fc){
return (function (state_24547){
var state_val_24548 = (state_24547[(1)]);
if((state_val_24548 === (7))){
var inst_24543 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24549_24571 = state_24547__$1;
(statearr_24549_24571[(2)] = inst_24543);

(statearr_24549_24571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (1))){
var state_24547__$1 = state_24547;
var statearr_24550_24572 = state_24547__$1;
(statearr_24550_24572[(2)] = null);

(statearr_24550_24572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (4))){
var inst_24524 = (state_24547[(7)]);
var inst_24524__$1 = (state_24547[(2)]);
var inst_24525 = (inst_24524__$1 == null);
var state_24547__$1 = (function (){var statearr_24551 = state_24547;
(statearr_24551[(7)] = inst_24524__$1);

return statearr_24551;
})();
if(cljs.core.truth_(inst_24525)){
var statearr_24552_24573 = state_24547__$1;
(statearr_24552_24573[(1)] = (5));

} else {
var statearr_24553_24574 = state_24547__$1;
(statearr_24553_24574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (13))){
var state_24547__$1 = state_24547;
var statearr_24554_24575 = state_24547__$1;
(statearr_24554_24575[(2)] = null);

(statearr_24554_24575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (6))){
var inst_24524 = (state_24547[(7)]);
var inst_24530 = p.call(null,inst_24524);
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24530)){
var statearr_24555_24576 = state_24547__$1;
(statearr_24555_24576[(1)] = (9));

} else {
var statearr_24556_24577 = state_24547__$1;
(statearr_24556_24577[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (3))){
var inst_24545 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24547__$1,inst_24545);
} else {
if((state_val_24548 === (12))){
var state_24547__$1 = state_24547;
var statearr_24557_24578 = state_24547__$1;
(statearr_24557_24578[(2)] = null);

(statearr_24557_24578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (2))){
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24547__$1,(4),ch);
} else {
if((state_val_24548 === (11))){
var inst_24524 = (state_24547[(7)]);
var inst_24534 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24547__$1,(8),inst_24534,inst_24524);
} else {
if((state_val_24548 === (9))){
var state_24547__$1 = state_24547;
var statearr_24558_24579 = state_24547__$1;
(statearr_24558_24579[(2)] = tc);

(statearr_24558_24579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (5))){
var inst_24527 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24528 = cljs.core.async.close_BANG_.call(null,fc);
var state_24547__$1 = (function (){var statearr_24559 = state_24547;
(statearr_24559[(8)] = inst_24527);

return statearr_24559;
})();
var statearr_24560_24580 = state_24547__$1;
(statearr_24560_24580[(2)] = inst_24528);

(statearr_24560_24580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (14))){
var inst_24541 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
var statearr_24561_24581 = state_24547__$1;
(statearr_24561_24581[(2)] = inst_24541);

(statearr_24561_24581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (10))){
var state_24547__$1 = state_24547;
var statearr_24562_24582 = state_24547__$1;
(statearr_24562_24582[(2)] = fc);

(statearr_24562_24582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24548 === (8))){
var inst_24536 = (state_24547[(2)]);
var state_24547__$1 = state_24547;
if(cljs.core.truth_(inst_24536)){
var statearr_24563_24583 = state_24547__$1;
(statearr_24563_24583[(1)] = (12));

} else {
var statearr_24564_24584 = state_24547__$1;
(statearr_24564_24584[(1)] = (13));

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
});})(c__24120__auto___24570,tc,fc))
;
return ((function (switch__24025__auto__,c__24120__auto___24570,tc,fc){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_24565 = [null,null,null,null,null,null,null,null,null];
(statearr_24565[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_24565[(1)] = (1));

return statearr_24565;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_24547){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24566){if((e24566 instanceof Object)){
var ex__24029__auto__ = e24566;
var statearr_24567_24585 = state_24547;
(statearr_24567_24585[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24586 = state_24547;
state_24547 = G__24586;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_24547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_24547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___24570,tc,fc))
})();
var state__24122__auto__ = (function (){var statearr_24568 = f__24121__auto__.call(null);
(statearr_24568[(6)] = c__24120__auto___24570);

return statearr_24568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24570,tc,fc))
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
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__){
return (function (state_24607){
var state_val_24608 = (state_24607[(1)]);
if((state_val_24608 === (7))){
var inst_24603 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24609_24627 = state_24607__$1;
(statearr_24609_24627[(2)] = inst_24603);

(statearr_24609_24627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (1))){
var inst_24587 = init;
var state_24607__$1 = (function (){var statearr_24610 = state_24607;
(statearr_24610[(7)] = inst_24587);

return statearr_24610;
})();
var statearr_24611_24628 = state_24607__$1;
(statearr_24611_24628[(2)] = null);

(statearr_24611_24628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (4))){
var inst_24590 = (state_24607[(8)]);
var inst_24590__$1 = (state_24607[(2)]);
var inst_24591 = (inst_24590__$1 == null);
var state_24607__$1 = (function (){var statearr_24612 = state_24607;
(statearr_24612[(8)] = inst_24590__$1);

return statearr_24612;
})();
if(cljs.core.truth_(inst_24591)){
var statearr_24613_24629 = state_24607__$1;
(statearr_24613_24629[(1)] = (5));

} else {
var statearr_24614_24630 = state_24607__$1;
(statearr_24614_24630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (6))){
var inst_24590 = (state_24607[(8)]);
var inst_24594 = (state_24607[(9)]);
var inst_24587 = (state_24607[(7)]);
var inst_24594__$1 = f.call(null,inst_24587,inst_24590);
var inst_24595 = cljs.core.reduced_QMARK_.call(null,inst_24594__$1);
var state_24607__$1 = (function (){var statearr_24615 = state_24607;
(statearr_24615[(9)] = inst_24594__$1);

return statearr_24615;
})();
if(inst_24595){
var statearr_24616_24631 = state_24607__$1;
(statearr_24616_24631[(1)] = (8));

} else {
var statearr_24617_24632 = state_24607__$1;
(statearr_24617_24632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (3))){
var inst_24605 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24607__$1,inst_24605);
} else {
if((state_val_24608 === (2))){
var state_24607__$1 = state_24607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24607__$1,(4),ch);
} else {
if((state_val_24608 === (9))){
var inst_24594 = (state_24607[(9)]);
var inst_24587 = inst_24594;
var state_24607__$1 = (function (){var statearr_24618 = state_24607;
(statearr_24618[(7)] = inst_24587);

return statearr_24618;
})();
var statearr_24619_24633 = state_24607__$1;
(statearr_24619_24633[(2)] = null);

(statearr_24619_24633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (5))){
var inst_24587 = (state_24607[(7)]);
var state_24607__$1 = state_24607;
var statearr_24620_24634 = state_24607__$1;
(statearr_24620_24634[(2)] = inst_24587);

(statearr_24620_24634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (10))){
var inst_24601 = (state_24607[(2)]);
var state_24607__$1 = state_24607;
var statearr_24621_24635 = state_24607__$1;
(statearr_24621_24635[(2)] = inst_24601);

(statearr_24621_24635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24608 === (8))){
var inst_24594 = (state_24607[(9)]);
var inst_24597 = cljs.core.deref.call(null,inst_24594);
var state_24607__$1 = state_24607;
var statearr_24622_24636 = state_24607__$1;
(statearr_24622_24636[(2)] = inst_24597);

(statearr_24622_24636[(1)] = (10));


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
});})(c__24120__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24026__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24026__auto____0 = (function (){
var statearr_24623 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24623[(0)] = cljs$core$async$reduce_$_state_machine__24026__auto__);

(statearr_24623[(1)] = (1));

return statearr_24623;
});
var cljs$core$async$reduce_$_state_machine__24026__auto____1 = (function (state_24607){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24624){if((e24624 instanceof Object)){
var ex__24029__auto__ = e24624;
var statearr_24625_24637 = state_24607;
(statearr_24625_24637[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24638 = state_24607;
state_24607 = G__24638;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24026__auto__ = function(state_24607){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24026__auto____1.call(this,state_24607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24026__auto____0;
cljs$core$async$reduce_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24026__auto____1;
return cljs$core$async$reduce_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_24626 = f__24121__auto__.call(null);
(statearr_24626[(6)] = c__24120__auto__);

return statearr_24626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__,f__$1){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__,f__$1){
return (function (state_24644){
var state_val_24645 = (state_24644[(1)]);
if((state_val_24645 === (1))){
var inst_24639 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24644__$1,(2),inst_24639);
} else {
if((state_val_24645 === (2))){
var inst_24641 = (state_24644[(2)]);
var inst_24642 = f__$1.call(null,inst_24641);
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24644__$1,inst_24642);
} else {
return null;
}
}
});})(c__24120__auto__,f__$1))
;
return ((function (switch__24025__auto__,c__24120__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24026__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24026__auto____0 = (function (){
var statearr_24646 = [null,null,null,null,null,null,null];
(statearr_24646[(0)] = cljs$core$async$transduce_$_state_machine__24026__auto__);

(statearr_24646[(1)] = (1));

return statearr_24646;
});
var cljs$core$async$transduce_$_state_machine__24026__auto____1 = (function (state_24644){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24647){if((e24647 instanceof Object)){
var ex__24029__auto__ = e24647;
var statearr_24648_24650 = state_24644;
(statearr_24648_24650[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24651 = state_24644;
state_24644 = G__24651;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24026__auto__ = function(state_24644){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24026__auto____1.call(this,state_24644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24026__auto____0;
cljs$core$async$transduce_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24026__auto____1;
return cljs$core$async$transduce_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__,f__$1))
})();
var state__24122__auto__ = (function (){var statearr_24649 = f__24121__auto__.call(null);
(statearr_24649[(6)] = c__24120__auto__);

return statearr_24649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__,f__$1))
);

return c__24120__auto__;
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
var G__24653 = arguments.length;
switch (G__24653) {
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
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__){
return (function (state_24678){
var state_val_24679 = (state_24678[(1)]);
if((state_val_24679 === (7))){
var inst_24660 = (state_24678[(2)]);
var state_24678__$1 = state_24678;
var statearr_24680_24701 = state_24678__$1;
(statearr_24680_24701[(2)] = inst_24660);

(statearr_24680_24701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (1))){
var inst_24654 = cljs.core.seq.call(null,coll);
var inst_24655 = inst_24654;
var state_24678__$1 = (function (){var statearr_24681 = state_24678;
(statearr_24681[(7)] = inst_24655);

return statearr_24681;
})();
var statearr_24682_24702 = state_24678__$1;
(statearr_24682_24702[(2)] = null);

(statearr_24682_24702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (4))){
var inst_24655 = (state_24678[(7)]);
var inst_24658 = cljs.core.first.call(null,inst_24655);
var state_24678__$1 = state_24678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24678__$1,(7),ch,inst_24658);
} else {
if((state_val_24679 === (13))){
var inst_24672 = (state_24678[(2)]);
var state_24678__$1 = state_24678;
var statearr_24683_24703 = state_24678__$1;
(statearr_24683_24703[(2)] = inst_24672);

(statearr_24683_24703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (6))){
var inst_24663 = (state_24678[(2)]);
var state_24678__$1 = state_24678;
if(cljs.core.truth_(inst_24663)){
var statearr_24684_24704 = state_24678__$1;
(statearr_24684_24704[(1)] = (8));

} else {
var statearr_24685_24705 = state_24678__$1;
(statearr_24685_24705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (3))){
var inst_24676 = (state_24678[(2)]);
var state_24678__$1 = state_24678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24678__$1,inst_24676);
} else {
if((state_val_24679 === (12))){
var state_24678__$1 = state_24678;
var statearr_24686_24706 = state_24678__$1;
(statearr_24686_24706[(2)] = null);

(statearr_24686_24706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (2))){
var inst_24655 = (state_24678[(7)]);
var state_24678__$1 = state_24678;
if(cljs.core.truth_(inst_24655)){
var statearr_24687_24707 = state_24678__$1;
(statearr_24687_24707[(1)] = (4));

} else {
var statearr_24688_24708 = state_24678__$1;
(statearr_24688_24708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (11))){
var inst_24669 = cljs.core.async.close_BANG_.call(null,ch);
var state_24678__$1 = state_24678;
var statearr_24689_24709 = state_24678__$1;
(statearr_24689_24709[(2)] = inst_24669);

(statearr_24689_24709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (9))){
var state_24678__$1 = state_24678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24690_24710 = state_24678__$1;
(statearr_24690_24710[(1)] = (11));

} else {
var statearr_24691_24711 = state_24678__$1;
(statearr_24691_24711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (5))){
var inst_24655 = (state_24678[(7)]);
var state_24678__$1 = state_24678;
var statearr_24692_24712 = state_24678__$1;
(statearr_24692_24712[(2)] = inst_24655);

(statearr_24692_24712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (10))){
var inst_24674 = (state_24678[(2)]);
var state_24678__$1 = state_24678;
var statearr_24693_24713 = state_24678__$1;
(statearr_24693_24713[(2)] = inst_24674);

(statearr_24693_24713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24679 === (8))){
var inst_24655 = (state_24678[(7)]);
var inst_24665 = cljs.core.next.call(null,inst_24655);
var inst_24655__$1 = inst_24665;
var state_24678__$1 = (function (){var statearr_24694 = state_24678;
(statearr_24694[(7)] = inst_24655__$1);

return statearr_24694;
})();
var statearr_24695_24714 = state_24678__$1;
(statearr_24695_24714[(2)] = null);

(statearr_24695_24714[(1)] = (2));


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
});})(c__24120__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_24696 = [null,null,null,null,null,null,null,null];
(statearr_24696[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_24696[(1)] = (1));

return statearr_24696;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_24678){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24697){if((e24697 instanceof Object)){
var ex__24029__auto__ = e24697;
var statearr_24698_24715 = state_24678;
(statearr_24698_24715[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24716 = state_24678;
state_24678 = G__24716;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_24678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_24678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_24699 = f__24121__auto__.call(null);
(statearr_24699[(6)] = c__24120__auto__);

return statearr_24699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24717 = (function (ch,cs,meta24718){
this.ch = ch;
this.cs = cs;
this.meta24718 = meta24718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24719,meta24718__$1){
var self__ = this;
var _24719__$1 = this;
return (new cljs.core.async.t_cljs$core$async24717(self__.ch,self__.cs,meta24718__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24719){
var self__ = this;
var _24719__$1 = this;
return self__.meta24718;
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24718","meta24718",671810425,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24717";

cljs.core.async.t_cljs$core$async24717.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async24717");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24717.
 */
cljs.core.async.__GT_t_cljs$core$async24717 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24717(ch__$1,cs__$1,meta24718){
return (new cljs.core.async.t_cljs$core$async24717(ch__$1,cs__$1,meta24718));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24717(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24120__auto___24939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___24939,cs,m,dchan,dctr,done){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___24939,cs,m,dchan,dctr,done){
return (function (state_24854){
var state_val_24855 = (state_24854[(1)]);
if((state_val_24855 === (7))){
var inst_24850 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24856_24940 = state_24854__$1;
(statearr_24856_24940[(2)] = inst_24850);

(statearr_24856_24940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (20))){
var inst_24753 = (state_24854[(7)]);
var inst_24765 = cljs.core.first.call(null,inst_24753);
var inst_24766 = cljs.core.nth.call(null,inst_24765,(0),null);
var inst_24767 = cljs.core.nth.call(null,inst_24765,(1),null);
var state_24854__$1 = (function (){var statearr_24857 = state_24854;
(statearr_24857[(8)] = inst_24766);

return statearr_24857;
})();
if(cljs.core.truth_(inst_24767)){
var statearr_24858_24941 = state_24854__$1;
(statearr_24858_24941[(1)] = (22));

} else {
var statearr_24859_24942 = state_24854__$1;
(statearr_24859_24942[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (27))){
var inst_24722 = (state_24854[(9)]);
var inst_24795 = (state_24854[(10)]);
var inst_24797 = (state_24854[(11)]);
var inst_24802 = (state_24854[(12)]);
var inst_24802__$1 = cljs.core._nth.call(null,inst_24795,inst_24797);
var inst_24803 = cljs.core.async.put_BANG_.call(null,inst_24802__$1,inst_24722,done);
var state_24854__$1 = (function (){var statearr_24860 = state_24854;
(statearr_24860[(12)] = inst_24802__$1);

return statearr_24860;
})();
if(cljs.core.truth_(inst_24803)){
var statearr_24861_24943 = state_24854__$1;
(statearr_24861_24943[(1)] = (30));

} else {
var statearr_24862_24944 = state_24854__$1;
(statearr_24862_24944[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (1))){
var state_24854__$1 = state_24854;
var statearr_24863_24945 = state_24854__$1;
(statearr_24863_24945[(2)] = null);

(statearr_24863_24945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (24))){
var inst_24753 = (state_24854[(7)]);
var inst_24772 = (state_24854[(2)]);
var inst_24773 = cljs.core.next.call(null,inst_24753);
var inst_24731 = inst_24773;
var inst_24732 = null;
var inst_24733 = (0);
var inst_24734 = (0);
var state_24854__$1 = (function (){var statearr_24864 = state_24854;
(statearr_24864[(13)] = inst_24731);

(statearr_24864[(14)] = inst_24733);

(statearr_24864[(15)] = inst_24732);

(statearr_24864[(16)] = inst_24734);

(statearr_24864[(17)] = inst_24772);

return statearr_24864;
})();
var statearr_24865_24946 = state_24854__$1;
(statearr_24865_24946[(2)] = null);

(statearr_24865_24946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (39))){
var state_24854__$1 = state_24854;
var statearr_24869_24947 = state_24854__$1;
(statearr_24869_24947[(2)] = null);

(statearr_24869_24947[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (4))){
var inst_24722 = (state_24854[(9)]);
var inst_24722__$1 = (state_24854[(2)]);
var inst_24723 = (inst_24722__$1 == null);
var state_24854__$1 = (function (){var statearr_24870 = state_24854;
(statearr_24870[(9)] = inst_24722__$1);

return statearr_24870;
})();
if(cljs.core.truth_(inst_24723)){
var statearr_24871_24948 = state_24854__$1;
(statearr_24871_24948[(1)] = (5));

} else {
var statearr_24872_24949 = state_24854__$1;
(statearr_24872_24949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (15))){
var inst_24731 = (state_24854[(13)]);
var inst_24733 = (state_24854[(14)]);
var inst_24732 = (state_24854[(15)]);
var inst_24734 = (state_24854[(16)]);
var inst_24749 = (state_24854[(2)]);
var inst_24750 = (inst_24734 + (1));
var tmp24866 = inst_24731;
var tmp24867 = inst_24733;
var tmp24868 = inst_24732;
var inst_24731__$1 = tmp24866;
var inst_24732__$1 = tmp24868;
var inst_24733__$1 = tmp24867;
var inst_24734__$1 = inst_24750;
var state_24854__$1 = (function (){var statearr_24873 = state_24854;
(statearr_24873[(13)] = inst_24731__$1);

(statearr_24873[(14)] = inst_24733__$1);

(statearr_24873[(18)] = inst_24749);

(statearr_24873[(15)] = inst_24732__$1);

(statearr_24873[(16)] = inst_24734__$1);

return statearr_24873;
})();
var statearr_24874_24950 = state_24854__$1;
(statearr_24874_24950[(2)] = null);

(statearr_24874_24950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (21))){
var inst_24776 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24878_24951 = state_24854__$1;
(statearr_24878_24951[(2)] = inst_24776);

(statearr_24878_24951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (31))){
var inst_24802 = (state_24854[(12)]);
var inst_24806 = done.call(null,null);
var inst_24807 = cljs.core.async.untap_STAR_.call(null,m,inst_24802);
var state_24854__$1 = (function (){var statearr_24879 = state_24854;
(statearr_24879[(19)] = inst_24806);

return statearr_24879;
})();
var statearr_24880_24952 = state_24854__$1;
(statearr_24880_24952[(2)] = inst_24807);

(statearr_24880_24952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (32))){
var inst_24795 = (state_24854[(10)]);
var inst_24797 = (state_24854[(11)]);
var inst_24796 = (state_24854[(20)]);
var inst_24794 = (state_24854[(21)]);
var inst_24809 = (state_24854[(2)]);
var inst_24810 = (inst_24797 + (1));
var tmp24875 = inst_24795;
var tmp24876 = inst_24796;
var tmp24877 = inst_24794;
var inst_24794__$1 = tmp24877;
var inst_24795__$1 = tmp24875;
var inst_24796__$1 = tmp24876;
var inst_24797__$1 = inst_24810;
var state_24854__$1 = (function (){var statearr_24881 = state_24854;
(statearr_24881[(10)] = inst_24795__$1);

(statearr_24881[(11)] = inst_24797__$1);

(statearr_24881[(20)] = inst_24796__$1);

(statearr_24881[(22)] = inst_24809);

(statearr_24881[(21)] = inst_24794__$1);

return statearr_24881;
})();
var statearr_24882_24953 = state_24854__$1;
(statearr_24882_24953[(2)] = null);

(statearr_24882_24953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (40))){
var inst_24822 = (state_24854[(23)]);
var inst_24826 = done.call(null,null);
var inst_24827 = cljs.core.async.untap_STAR_.call(null,m,inst_24822);
var state_24854__$1 = (function (){var statearr_24883 = state_24854;
(statearr_24883[(24)] = inst_24826);

return statearr_24883;
})();
var statearr_24884_24954 = state_24854__$1;
(statearr_24884_24954[(2)] = inst_24827);

(statearr_24884_24954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (33))){
var inst_24813 = (state_24854[(25)]);
var inst_24815 = cljs.core.chunked_seq_QMARK_.call(null,inst_24813);
var state_24854__$1 = state_24854;
if(inst_24815){
var statearr_24885_24955 = state_24854__$1;
(statearr_24885_24955[(1)] = (36));

} else {
var statearr_24886_24956 = state_24854__$1;
(statearr_24886_24956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (13))){
var inst_24743 = (state_24854[(26)]);
var inst_24746 = cljs.core.async.close_BANG_.call(null,inst_24743);
var state_24854__$1 = state_24854;
var statearr_24887_24957 = state_24854__$1;
(statearr_24887_24957[(2)] = inst_24746);

(statearr_24887_24957[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (22))){
var inst_24766 = (state_24854[(8)]);
var inst_24769 = cljs.core.async.close_BANG_.call(null,inst_24766);
var state_24854__$1 = state_24854;
var statearr_24888_24958 = state_24854__$1;
(statearr_24888_24958[(2)] = inst_24769);

(statearr_24888_24958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (36))){
var inst_24813 = (state_24854[(25)]);
var inst_24817 = cljs.core.chunk_first.call(null,inst_24813);
var inst_24818 = cljs.core.chunk_rest.call(null,inst_24813);
var inst_24819 = cljs.core.count.call(null,inst_24817);
var inst_24794 = inst_24818;
var inst_24795 = inst_24817;
var inst_24796 = inst_24819;
var inst_24797 = (0);
var state_24854__$1 = (function (){var statearr_24889 = state_24854;
(statearr_24889[(10)] = inst_24795);

(statearr_24889[(11)] = inst_24797);

(statearr_24889[(20)] = inst_24796);

(statearr_24889[(21)] = inst_24794);

return statearr_24889;
})();
var statearr_24890_24959 = state_24854__$1;
(statearr_24890_24959[(2)] = null);

(statearr_24890_24959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (41))){
var inst_24813 = (state_24854[(25)]);
var inst_24829 = (state_24854[(2)]);
var inst_24830 = cljs.core.next.call(null,inst_24813);
var inst_24794 = inst_24830;
var inst_24795 = null;
var inst_24796 = (0);
var inst_24797 = (0);
var state_24854__$1 = (function (){var statearr_24891 = state_24854;
(statearr_24891[(10)] = inst_24795);

(statearr_24891[(27)] = inst_24829);

(statearr_24891[(11)] = inst_24797);

(statearr_24891[(20)] = inst_24796);

(statearr_24891[(21)] = inst_24794);

return statearr_24891;
})();
var statearr_24892_24960 = state_24854__$1;
(statearr_24892_24960[(2)] = null);

(statearr_24892_24960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (43))){
var state_24854__$1 = state_24854;
var statearr_24893_24961 = state_24854__$1;
(statearr_24893_24961[(2)] = null);

(statearr_24893_24961[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (29))){
var inst_24838 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24894_24962 = state_24854__$1;
(statearr_24894_24962[(2)] = inst_24838);

(statearr_24894_24962[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (44))){
var inst_24847 = (state_24854[(2)]);
var state_24854__$1 = (function (){var statearr_24895 = state_24854;
(statearr_24895[(28)] = inst_24847);

return statearr_24895;
})();
var statearr_24896_24963 = state_24854__$1;
(statearr_24896_24963[(2)] = null);

(statearr_24896_24963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (6))){
var inst_24786 = (state_24854[(29)]);
var inst_24785 = cljs.core.deref.call(null,cs);
var inst_24786__$1 = cljs.core.keys.call(null,inst_24785);
var inst_24787 = cljs.core.count.call(null,inst_24786__$1);
var inst_24788 = cljs.core.reset_BANG_.call(null,dctr,inst_24787);
var inst_24793 = cljs.core.seq.call(null,inst_24786__$1);
var inst_24794 = inst_24793;
var inst_24795 = null;
var inst_24796 = (0);
var inst_24797 = (0);
var state_24854__$1 = (function (){var statearr_24897 = state_24854;
(statearr_24897[(30)] = inst_24788);

(statearr_24897[(10)] = inst_24795);

(statearr_24897[(29)] = inst_24786__$1);

(statearr_24897[(11)] = inst_24797);

(statearr_24897[(20)] = inst_24796);

(statearr_24897[(21)] = inst_24794);

return statearr_24897;
})();
var statearr_24898_24964 = state_24854__$1;
(statearr_24898_24964[(2)] = null);

(statearr_24898_24964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (28))){
var inst_24813 = (state_24854[(25)]);
var inst_24794 = (state_24854[(21)]);
var inst_24813__$1 = cljs.core.seq.call(null,inst_24794);
var state_24854__$1 = (function (){var statearr_24899 = state_24854;
(statearr_24899[(25)] = inst_24813__$1);

return statearr_24899;
})();
if(inst_24813__$1){
var statearr_24900_24965 = state_24854__$1;
(statearr_24900_24965[(1)] = (33));

} else {
var statearr_24901_24966 = state_24854__$1;
(statearr_24901_24966[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (25))){
var inst_24797 = (state_24854[(11)]);
var inst_24796 = (state_24854[(20)]);
var inst_24799 = (inst_24797 < inst_24796);
var inst_24800 = inst_24799;
var state_24854__$1 = state_24854;
if(cljs.core.truth_(inst_24800)){
var statearr_24902_24967 = state_24854__$1;
(statearr_24902_24967[(1)] = (27));

} else {
var statearr_24903_24968 = state_24854__$1;
(statearr_24903_24968[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (34))){
var state_24854__$1 = state_24854;
var statearr_24904_24969 = state_24854__$1;
(statearr_24904_24969[(2)] = null);

(statearr_24904_24969[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (17))){
var state_24854__$1 = state_24854;
var statearr_24905_24970 = state_24854__$1;
(statearr_24905_24970[(2)] = null);

(statearr_24905_24970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (3))){
var inst_24852 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24854__$1,inst_24852);
} else {
if((state_val_24855 === (12))){
var inst_24781 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24906_24971 = state_24854__$1;
(statearr_24906_24971[(2)] = inst_24781);

(statearr_24906_24971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (2))){
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24854__$1,(4),ch);
} else {
if((state_val_24855 === (23))){
var state_24854__$1 = state_24854;
var statearr_24907_24972 = state_24854__$1;
(statearr_24907_24972[(2)] = null);

(statearr_24907_24972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (35))){
var inst_24836 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24908_24973 = state_24854__$1;
(statearr_24908_24973[(2)] = inst_24836);

(statearr_24908_24973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (19))){
var inst_24753 = (state_24854[(7)]);
var inst_24757 = cljs.core.chunk_first.call(null,inst_24753);
var inst_24758 = cljs.core.chunk_rest.call(null,inst_24753);
var inst_24759 = cljs.core.count.call(null,inst_24757);
var inst_24731 = inst_24758;
var inst_24732 = inst_24757;
var inst_24733 = inst_24759;
var inst_24734 = (0);
var state_24854__$1 = (function (){var statearr_24909 = state_24854;
(statearr_24909[(13)] = inst_24731);

(statearr_24909[(14)] = inst_24733);

(statearr_24909[(15)] = inst_24732);

(statearr_24909[(16)] = inst_24734);

return statearr_24909;
})();
var statearr_24910_24974 = state_24854__$1;
(statearr_24910_24974[(2)] = null);

(statearr_24910_24974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (11))){
var inst_24731 = (state_24854[(13)]);
var inst_24753 = (state_24854[(7)]);
var inst_24753__$1 = cljs.core.seq.call(null,inst_24731);
var state_24854__$1 = (function (){var statearr_24911 = state_24854;
(statearr_24911[(7)] = inst_24753__$1);

return statearr_24911;
})();
if(inst_24753__$1){
var statearr_24912_24975 = state_24854__$1;
(statearr_24912_24975[(1)] = (16));

} else {
var statearr_24913_24976 = state_24854__$1;
(statearr_24913_24976[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (9))){
var inst_24783 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24914_24977 = state_24854__$1;
(statearr_24914_24977[(2)] = inst_24783);

(statearr_24914_24977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (5))){
var inst_24729 = cljs.core.deref.call(null,cs);
var inst_24730 = cljs.core.seq.call(null,inst_24729);
var inst_24731 = inst_24730;
var inst_24732 = null;
var inst_24733 = (0);
var inst_24734 = (0);
var state_24854__$1 = (function (){var statearr_24915 = state_24854;
(statearr_24915[(13)] = inst_24731);

(statearr_24915[(14)] = inst_24733);

(statearr_24915[(15)] = inst_24732);

(statearr_24915[(16)] = inst_24734);

return statearr_24915;
})();
var statearr_24916_24978 = state_24854__$1;
(statearr_24916_24978[(2)] = null);

(statearr_24916_24978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (14))){
var state_24854__$1 = state_24854;
var statearr_24917_24979 = state_24854__$1;
(statearr_24917_24979[(2)] = null);

(statearr_24917_24979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (45))){
var inst_24844 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24918_24980 = state_24854__$1;
(statearr_24918_24980[(2)] = inst_24844);

(statearr_24918_24980[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (26))){
var inst_24786 = (state_24854[(29)]);
var inst_24840 = (state_24854[(2)]);
var inst_24841 = cljs.core.seq.call(null,inst_24786);
var state_24854__$1 = (function (){var statearr_24919 = state_24854;
(statearr_24919[(31)] = inst_24840);

return statearr_24919;
})();
if(inst_24841){
var statearr_24920_24981 = state_24854__$1;
(statearr_24920_24981[(1)] = (42));

} else {
var statearr_24921_24982 = state_24854__$1;
(statearr_24921_24982[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (16))){
var inst_24753 = (state_24854[(7)]);
var inst_24755 = cljs.core.chunked_seq_QMARK_.call(null,inst_24753);
var state_24854__$1 = state_24854;
if(inst_24755){
var statearr_24922_24983 = state_24854__$1;
(statearr_24922_24983[(1)] = (19));

} else {
var statearr_24923_24984 = state_24854__$1;
(statearr_24923_24984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (38))){
var inst_24833 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24924_24985 = state_24854__$1;
(statearr_24924_24985[(2)] = inst_24833);

(statearr_24924_24985[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (30))){
var state_24854__$1 = state_24854;
var statearr_24925_24986 = state_24854__$1;
(statearr_24925_24986[(2)] = null);

(statearr_24925_24986[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (10))){
var inst_24732 = (state_24854[(15)]);
var inst_24734 = (state_24854[(16)]);
var inst_24742 = cljs.core._nth.call(null,inst_24732,inst_24734);
var inst_24743 = cljs.core.nth.call(null,inst_24742,(0),null);
var inst_24744 = cljs.core.nth.call(null,inst_24742,(1),null);
var state_24854__$1 = (function (){var statearr_24926 = state_24854;
(statearr_24926[(26)] = inst_24743);

return statearr_24926;
})();
if(cljs.core.truth_(inst_24744)){
var statearr_24927_24987 = state_24854__$1;
(statearr_24927_24987[(1)] = (13));

} else {
var statearr_24928_24988 = state_24854__$1;
(statearr_24928_24988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (18))){
var inst_24779 = (state_24854[(2)]);
var state_24854__$1 = state_24854;
var statearr_24929_24989 = state_24854__$1;
(statearr_24929_24989[(2)] = inst_24779);

(statearr_24929_24989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (42))){
var state_24854__$1 = state_24854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24854__$1,(45),dchan);
} else {
if((state_val_24855 === (37))){
var inst_24722 = (state_24854[(9)]);
var inst_24822 = (state_24854[(23)]);
var inst_24813 = (state_24854[(25)]);
var inst_24822__$1 = cljs.core.first.call(null,inst_24813);
var inst_24823 = cljs.core.async.put_BANG_.call(null,inst_24822__$1,inst_24722,done);
var state_24854__$1 = (function (){var statearr_24930 = state_24854;
(statearr_24930[(23)] = inst_24822__$1);

return statearr_24930;
})();
if(cljs.core.truth_(inst_24823)){
var statearr_24931_24990 = state_24854__$1;
(statearr_24931_24990[(1)] = (39));

} else {
var statearr_24932_24991 = state_24854__$1;
(statearr_24932_24991[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24855 === (8))){
var inst_24733 = (state_24854[(14)]);
var inst_24734 = (state_24854[(16)]);
var inst_24736 = (inst_24734 < inst_24733);
var inst_24737 = inst_24736;
var state_24854__$1 = state_24854;
if(cljs.core.truth_(inst_24737)){
var statearr_24933_24992 = state_24854__$1;
(statearr_24933_24992[(1)] = (10));

} else {
var statearr_24934_24993 = state_24854__$1;
(statearr_24934_24993[(1)] = (11));

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
});})(c__24120__auto___24939,cs,m,dchan,dctr,done))
;
return ((function (switch__24025__auto__,c__24120__auto___24939,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24026__auto__ = null;
var cljs$core$async$mult_$_state_machine__24026__auto____0 = (function (){
var statearr_24935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24935[(0)] = cljs$core$async$mult_$_state_machine__24026__auto__);

(statearr_24935[(1)] = (1));

return statearr_24935;
});
var cljs$core$async$mult_$_state_machine__24026__auto____1 = (function (state_24854){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_24854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e24936){if((e24936 instanceof Object)){
var ex__24029__auto__ = e24936;
var statearr_24937_24994 = state_24854;
(statearr_24937_24994[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24995 = state_24854;
state_24854 = G__24995;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24026__auto__ = function(state_24854){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24026__auto____1.call(this,state_24854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24026__auto____0;
cljs$core$async$mult_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24026__auto____1;
return cljs$core$async$mult_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___24939,cs,m,dchan,dctr,done))
})();
var state__24122__auto__ = (function (){var statearr_24938 = f__24121__auto__.call(null);
(statearr_24938[(6)] = c__24120__auto___24939);

return statearr_24938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___24939,cs,m,dchan,dctr,done))
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
var G__24997 = arguments.length;
switch (G__24997) {
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
var len__4641__auto___25009 = arguments.length;
var i__4642__auto___25010 = (0);
while(true){
if((i__4642__auto___25010 < len__4641__auto___25009)){
args__4647__auto__.push((arguments[i__4642__auto___25010]));

var G__25011 = (i__4642__auto___25010 + (1));
i__4642__auto___25010 = G__25011;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25003){
var map__25004 = p__25003;
var map__25004__$1 = (((((!((map__25004 == null))))?(((((map__25004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25004):map__25004);
var opts = map__25004__$1;
var statearr_25006_25012 = state;
(statearr_25006_25012[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__25004,map__25004__$1,opts){
return (function (val){
var statearr_25007_25013 = state;
(statearr_25007_25013[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25004,map__25004__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_25008_25014 = state;
(statearr_25008_25014[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24999){
var G__25000 = cljs.core.first.call(null,seq24999);
var seq24999__$1 = cljs.core.next.call(null,seq24999);
var G__25001 = cljs.core.first.call(null,seq24999__$1);
var seq24999__$2 = cljs.core.next.call(null,seq24999__$1);
var G__25002 = cljs.core.first.call(null,seq24999__$2);
var seq24999__$3 = cljs.core.next.call(null,seq24999__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25000,G__25001,G__25002,seq24999__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25015 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25016){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25016 = meta25016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25017,meta25016__$1){
var self__ = this;
var _25017__$1 = this;
return (new cljs.core.async.t_cljs$core$async25015(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25016__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25017){
var self__ = this;
var _25017__$1 = this;
return self__.meta25016;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25015.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25016","meta25016",-338817739,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25015";

cljs.core.async.t_cljs$core$async25015.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25015");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25015.
 */
cljs.core.async.__GT_t_cljs$core$async25015 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25015(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25016){
return (new cljs.core.async.t_cljs$core$async25015(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25016));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25015(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24120__auto___25179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25119){
var state_val_25120 = (state_25119[(1)]);
if((state_val_25120 === (7))){
var inst_25034 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25121_25180 = state_25119__$1;
(statearr_25121_25180[(2)] = inst_25034);

(statearr_25121_25180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (20))){
var inst_25046 = (state_25119[(7)]);
var state_25119__$1 = state_25119;
var statearr_25122_25181 = state_25119__$1;
(statearr_25122_25181[(2)] = inst_25046);

(statearr_25122_25181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (27))){
var state_25119__$1 = state_25119;
var statearr_25123_25182 = state_25119__$1;
(statearr_25123_25182[(2)] = null);

(statearr_25123_25182[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (1))){
var inst_25021 = (state_25119[(8)]);
var inst_25021__$1 = calc_state.call(null);
var inst_25023 = (inst_25021__$1 == null);
var inst_25024 = cljs.core.not.call(null,inst_25023);
var state_25119__$1 = (function (){var statearr_25124 = state_25119;
(statearr_25124[(8)] = inst_25021__$1);

return statearr_25124;
})();
if(inst_25024){
var statearr_25125_25183 = state_25119__$1;
(statearr_25125_25183[(1)] = (2));

} else {
var statearr_25126_25184 = state_25119__$1;
(statearr_25126_25184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (24))){
var inst_25079 = (state_25119[(9)]);
var inst_25093 = (state_25119[(10)]);
var inst_25070 = (state_25119[(11)]);
var inst_25093__$1 = inst_25070.call(null,inst_25079);
var state_25119__$1 = (function (){var statearr_25127 = state_25119;
(statearr_25127[(10)] = inst_25093__$1);

return statearr_25127;
})();
if(cljs.core.truth_(inst_25093__$1)){
var statearr_25128_25185 = state_25119__$1;
(statearr_25128_25185[(1)] = (29));

} else {
var statearr_25129_25186 = state_25119__$1;
(statearr_25129_25186[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (4))){
var inst_25037 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25037)){
var statearr_25130_25187 = state_25119__$1;
(statearr_25130_25187[(1)] = (8));

} else {
var statearr_25131_25188 = state_25119__$1;
(statearr_25131_25188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (15))){
var inst_25064 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25064)){
var statearr_25132_25189 = state_25119__$1;
(statearr_25132_25189[(1)] = (19));

} else {
var statearr_25133_25190 = state_25119__$1;
(statearr_25133_25190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (21))){
var inst_25069 = (state_25119[(12)]);
var inst_25069__$1 = (state_25119[(2)]);
var inst_25070 = cljs.core.get.call(null,inst_25069__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25071 = cljs.core.get.call(null,inst_25069__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25072 = cljs.core.get.call(null,inst_25069__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25119__$1 = (function (){var statearr_25134 = state_25119;
(statearr_25134[(13)] = inst_25071);

(statearr_25134[(12)] = inst_25069__$1);

(statearr_25134[(11)] = inst_25070);

return statearr_25134;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25119__$1,(22),inst_25072);
} else {
if((state_val_25120 === (31))){
var inst_25101 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25101)){
var statearr_25135_25191 = state_25119__$1;
(statearr_25135_25191[(1)] = (32));

} else {
var statearr_25136_25192 = state_25119__$1;
(statearr_25136_25192[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (32))){
var inst_25078 = (state_25119[(14)]);
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25119__$1,(35),out,inst_25078);
} else {
if((state_val_25120 === (33))){
var inst_25069 = (state_25119[(12)]);
var inst_25046 = inst_25069;
var state_25119__$1 = (function (){var statearr_25137 = state_25119;
(statearr_25137[(7)] = inst_25046);

return statearr_25137;
})();
var statearr_25138_25193 = state_25119__$1;
(statearr_25138_25193[(2)] = null);

(statearr_25138_25193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (13))){
var inst_25046 = (state_25119[(7)]);
var inst_25053 = inst_25046.cljs$lang$protocol_mask$partition0$;
var inst_25054 = (inst_25053 & (64));
var inst_25055 = inst_25046.cljs$core$ISeq$;
var inst_25056 = (cljs.core.PROTOCOL_SENTINEL === inst_25055);
var inst_25057 = ((inst_25054) || (inst_25056));
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25057)){
var statearr_25139_25194 = state_25119__$1;
(statearr_25139_25194[(1)] = (16));

} else {
var statearr_25140_25195 = state_25119__$1;
(statearr_25140_25195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (22))){
var inst_25079 = (state_25119[(9)]);
var inst_25078 = (state_25119[(14)]);
var inst_25077 = (state_25119[(2)]);
var inst_25078__$1 = cljs.core.nth.call(null,inst_25077,(0),null);
var inst_25079__$1 = cljs.core.nth.call(null,inst_25077,(1),null);
var inst_25080 = (inst_25078__$1 == null);
var inst_25081 = cljs.core._EQ_.call(null,inst_25079__$1,change);
var inst_25082 = ((inst_25080) || (inst_25081));
var state_25119__$1 = (function (){var statearr_25141 = state_25119;
(statearr_25141[(9)] = inst_25079__$1);

(statearr_25141[(14)] = inst_25078__$1);

return statearr_25141;
})();
if(cljs.core.truth_(inst_25082)){
var statearr_25142_25196 = state_25119__$1;
(statearr_25142_25196[(1)] = (23));

} else {
var statearr_25143_25197 = state_25119__$1;
(statearr_25143_25197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (36))){
var inst_25069 = (state_25119[(12)]);
var inst_25046 = inst_25069;
var state_25119__$1 = (function (){var statearr_25144 = state_25119;
(statearr_25144[(7)] = inst_25046);

return statearr_25144;
})();
var statearr_25145_25198 = state_25119__$1;
(statearr_25145_25198[(2)] = null);

(statearr_25145_25198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (29))){
var inst_25093 = (state_25119[(10)]);
var state_25119__$1 = state_25119;
var statearr_25146_25199 = state_25119__$1;
(statearr_25146_25199[(2)] = inst_25093);

(statearr_25146_25199[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (6))){
var state_25119__$1 = state_25119;
var statearr_25147_25200 = state_25119__$1;
(statearr_25147_25200[(2)] = false);

(statearr_25147_25200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (28))){
var inst_25089 = (state_25119[(2)]);
var inst_25090 = calc_state.call(null);
var inst_25046 = inst_25090;
var state_25119__$1 = (function (){var statearr_25148 = state_25119;
(statearr_25148[(15)] = inst_25089);

(statearr_25148[(7)] = inst_25046);

return statearr_25148;
})();
var statearr_25149_25201 = state_25119__$1;
(statearr_25149_25201[(2)] = null);

(statearr_25149_25201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (25))){
var inst_25115 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25150_25202 = state_25119__$1;
(statearr_25150_25202[(2)] = inst_25115);

(statearr_25150_25202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (34))){
var inst_25113 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25151_25203 = state_25119__$1;
(statearr_25151_25203[(2)] = inst_25113);

(statearr_25151_25203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (17))){
var state_25119__$1 = state_25119;
var statearr_25152_25204 = state_25119__$1;
(statearr_25152_25204[(2)] = false);

(statearr_25152_25204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (3))){
var state_25119__$1 = state_25119;
var statearr_25153_25205 = state_25119__$1;
(statearr_25153_25205[(2)] = false);

(statearr_25153_25205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (12))){
var inst_25117 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25119__$1,inst_25117);
} else {
if((state_val_25120 === (2))){
var inst_25021 = (state_25119[(8)]);
var inst_25026 = inst_25021.cljs$lang$protocol_mask$partition0$;
var inst_25027 = (inst_25026 & (64));
var inst_25028 = inst_25021.cljs$core$ISeq$;
var inst_25029 = (cljs.core.PROTOCOL_SENTINEL === inst_25028);
var inst_25030 = ((inst_25027) || (inst_25029));
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25030)){
var statearr_25154_25206 = state_25119__$1;
(statearr_25154_25206[(1)] = (5));

} else {
var statearr_25155_25207 = state_25119__$1;
(statearr_25155_25207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (23))){
var inst_25078 = (state_25119[(14)]);
var inst_25084 = (inst_25078 == null);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25084)){
var statearr_25156_25208 = state_25119__$1;
(statearr_25156_25208[(1)] = (26));

} else {
var statearr_25157_25209 = state_25119__$1;
(statearr_25157_25209[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (35))){
var inst_25104 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25104)){
var statearr_25158_25210 = state_25119__$1;
(statearr_25158_25210[(1)] = (36));

} else {
var statearr_25159_25211 = state_25119__$1;
(statearr_25159_25211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (19))){
var inst_25046 = (state_25119[(7)]);
var inst_25066 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25046);
var state_25119__$1 = state_25119;
var statearr_25160_25212 = state_25119__$1;
(statearr_25160_25212[(2)] = inst_25066);

(statearr_25160_25212[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (11))){
var inst_25046 = (state_25119[(7)]);
var inst_25050 = (inst_25046 == null);
var inst_25051 = cljs.core.not.call(null,inst_25050);
var state_25119__$1 = state_25119;
if(inst_25051){
var statearr_25161_25213 = state_25119__$1;
(statearr_25161_25213[(1)] = (13));

} else {
var statearr_25162_25214 = state_25119__$1;
(statearr_25162_25214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (9))){
var inst_25021 = (state_25119[(8)]);
var state_25119__$1 = state_25119;
var statearr_25163_25215 = state_25119__$1;
(statearr_25163_25215[(2)] = inst_25021);

(statearr_25163_25215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (5))){
var state_25119__$1 = state_25119;
var statearr_25164_25216 = state_25119__$1;
(statearr_25164_25216[(2)] = true);

(statearr_25164_25216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (14))){
var state_25119__$1 = state_25119;
var statearr_25165_25217 = state_25119__$1;
(statearr_25165_25217[(2)] = false);

(statearr_25165_25217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (26))){
var inst_25079 = (state_25119[(9)]);
var inst_25086 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25079);
var state_25119__$1 = state_25119;
var statearr_25166_25218 = state_25119__$1;
(statearr_25166_25218[(2)] = inst_25086);

(statearr_25166_25218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (16))){
var state_25119__$1 = state_25119;
var statearr_25167_25219 = state_25119__$1;
(statearr_25167_25219[(2)] = true);

(statearr_25167_25219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (38))){
var inst_25109 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25168_25220 = state_25119__$1;
(statearr_25168_25220[(2)] = inst_25109);

(statearr_25168_25220[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (30))){
var inst_25071 = (state_25119[(13)]);
var inst_25079 = (state_25119[(9)]);
var inst_25070 = (state_25119[(11)]);
var inst_25096 = cljs.core.empty_QMARK_.call(null,inst_25070);
var inst_25097 = inst_25071.call(null,inst_25079);
var inst_25098 = cljs.core.not.call(null,inst_25097);
var inst_25099 = ((inst_25096) && (inst_25098));
var state_25119__$1 = state_25119;
var statearr_25169_25221 = state_25119__$1;
(statearr_25169_25221[(2)] = inst_25099);

(statearr_25169_25221[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (10))){
var inst_25021 = (state_25119[(8)]);
var inst_25042 = (state_25119[(2)]);
var inst_25043 = cljs.core.get.call(null,inst_25042,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25044 = cljs.core.get.call(null,inst_25042,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25045 = cljs.core.get.call(null,inst_25042,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25046 = inst_25021;
var state_25119__$1 = (function (){var statearr_25170 = state_25119;
(statearr_25170[(16)] = inst_25043);

(statearr_25170[(7)] = inst_25046);

(statearr_25170[(17)] = inst_25044);

(statearr_25170[(18)] = inst_25045);

return statearr_25170;
})();
var statearr_25171_25222 = state_25119__$1;
(statearr_25171_25222[(2)] = null);

(statearr_25171_25222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (18))){
var inst_25061 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25172_25223 = state_25119__$1;
(statearr_25172_25223[(2)] = inst_25061);

(statearr_25172_25223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (37))){
var state_25119__$1 = state_25119;
var statearr_25173_25224 = state_25119__$1;
(statearr_25173_25224[(2)] = null);

(statearr_25173_25224[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25120 === (8))){
var inst_25021 = (state_25119[(8)]);
var inst_25039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25021);
var state_25119__$1 = state_25119;
var statearr_25174_25225 = state_25119__$1;
(statearr_25174_25225[(2)] = inst_25039);

(statearr_25174_25225[(1)] = (10));


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
});})(c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24025__auto__,c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24026__auto__ = null;
var cljs$core$async$mix_$_state_machine__24026__auto____0 = (function (){
var statearr_25175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25175[(0)] = cljs$core$async$mix_$_state_machine__24026__auto__);

(statearr_25175[(1)] = (1));

return statearr_25175;
});
var cljs$core$async$mix_$_state_machine__24026__auto____1 = (function (state_25119){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object)){
var ex__24029__auto__ = e25176;
var statearr_25177_25226 = state_25119;
(statearr_25177_25226[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25227 = state_25119;
state_25119 = G__25227;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24026__auto__ = function(state_25119){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24026__auto____1.call(this,state_25119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24026__auto____0;
cljs$core$async$mix_$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24026__auto____1;
return cljs$core$async$mix_$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24122__auto__ = (function (){var statearr_25178 = f__24121__auto__.call(null);
(statearr_25178[(6)] = c__24120__auto___25179);

return statearr_25178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25179,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__25229 = arguments.length;
switch (G__25229) {
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
var G__25233 = arguments.length;
switch (G__25233) {
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
return (function (p1__25231_SHARP_){
if(cljs.core.truth_(p1__25231_SHARP_.call(null,topic))){
return p1__25231_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25231_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25234 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25235){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25235 = meta25235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25236,meta25235__$1){
var self__ = this;
var _25236__$1 = this;
return (new cljs.core.async.t_cljs$core$async25234(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25235__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25236){
var self__ = this;
var _25236__$1 = this;
return self__.meta25235;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25235","meta25235",825113737,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25234";

cljs.core.async.t_cljs$core$async25234.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25234");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25234.
 */
cljs.core.async.__GT_t_cljs$core$async25234 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25235){
return (new cljs.core.async.t_cljs$core$async25234(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25235));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25234(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24120__auto___25354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25354,mults,ensure_mult,p){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25354,mults,ensure_mult,p){
return (function (state_25308){
var state_val_25309 = (state_25308[(1)]);
if((state_val_25309 === (7))){
var inst_25304 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25310_25355 = state_25308__$1;
(statearr_25310_25355[(2)] = inst_25304);

(statearr_25310_25355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (20))){
var state_25308__$1 = state_25308;
var statearr_25311_25356 = state_25308__$1;
(statearr_25311_25356[(2)] = null);

(statearr_25311_25356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (1))){
var state_25308__$1 = state_25308;
var statearr_25312_25357 = state_25308__$1;
(statearr_25312_25357[(2)] = null);

(statearr_25312_25357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (24))){
var inst_25287 = (state_25308[(7)]);
var inst_25296 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25287);
var state_25308__$1 = state_25308;
var statearr_25313_25358 = state_25308__$1;
(statearr_25313_25358[(2)] = inst_25296);

(statearr_25313_25358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (4))){
var inst_25239 = (state_25308[(8)]);
var inst_25239__$1 = (state_25308[(2)]);
var inst_25240 = (inst_25239__$1 == null);
var state_25308__$1 = (function (){var statearr_25314 = state_25308;
(statearr_25314[(8)] = inst_25239__$1);

return statearr_25314;
})();
if(cljs.core.truth_(inst_25240)){
var statearr_25315_25359 = state_25308__$1;
(statearr_25315_25359[(1)] = (5));

} else {
var statearr_25316_25360 = state_25308__$1;
(statearr_25316_25360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (15))){
var inst_25281 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25317_25361 = state_25308__$1;
(statearr_25317_25361[(2)] = inst_25281);

(statearr_25317_25361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (21))){
var inst_25301 = (state_25308[(2)]);
var state_25308__$1 = (function (){var statearr_25318 = state_25308;
(statearr_25318[(9)] = inst_25301);

return statearr_25318;
})();
var statearr_25319_25362 = state_25308__$1;
(statearr_25319_25362[(2)] = null);

(statearr_25319_25362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (13))){
var inst_25263 = (state_25308[(10)]);
var inst_25265 = cljs.core.chunked_seq_QMARK_.call(null,inst_25263);
var state_25308__$1 = state_25308;
if(inst_25265){
var statearr_25320_25363 = state_25308__$1;
(statearr_25320_25363[(1)] = (16));

} else {
var statearr_25321_25364 = state_25308__$1;
(statearr_25321_25364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (22))){
var inst_25293 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
if(cljs.core.truth_(inst_25293)){
var statearr_25322_25365 = state_25308__$1;
(statearr_25322_25365[(1)] = (23));

} else {
var statearr_25323_25366 = state_25308__$1;
(statearr_25323_25366[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (6))){
var inst_25289 = (state_25308[(11)]);
var inst_25287 = (state_25308[(7)]);
var inst_25239 = (state_25308[(8)]);
var inst_25287__$1 = topic_fn.call(null,inst_25239);
var inst_25288 = cljs.core.deref.call(null,mults);
var inst_25289__$1 = cljs.core.get.call(null,inst_25288,inst_25287__$1);
var state_25308__$1 = (function (){var statearr_25324 = state_25308;
(statearr_25324[(11)] = inst_25289__$1);

(statearr_25324[(7)] = inst_25287__$1);

return statearr_25324;
})();
if(cljs.core.truth_(inst_25289__$1)){
var statearr_25325_25367 = state_25308__$1;
(statearr_25325_25367[(1)] = (19));

} else {
var statearr_25326_25368 = state_25308__$1;
(statearr_25326_25368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (25))){
var inst_25298 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25327_25369 = state_25308__$1;
(statearr_25327_25369[(2)] = inst_25298);

(statearr_25327_25369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (17))){
var inst_25263 = (state_25308[(10)]);
var inst_25272 = cljs.core.first.call(null,inst_25263);
var inst_25273 = cljs.core.async.muxch_STAR_.call(null,inst_25272);
var inst_25274 = cljs.core.async.close_BANG_.call(null,inst_25273);
var inst_25275 = cljs.core.next.call(null,inst_25263);
var inst_25249 = inst_25275;
var inst_25250 = null;
var inst_25251 = (0);
var inst_25252 = (0);
var state_25308__$1 = (function (){var statearr_25328 = state_25308;
(statearr_25328[(12)] = inst_25250);

(statearr_25328[(13)] = inst_25252);

(statearr_25328[(14)] = inst_25251);

(statearr_25328[(15)] = inst_25274);

(statearr_25328[(16)] = inst_25249);

return statearr_25328;
})();
var statearr_25329_25370 = state_25308__$1;
(statearr_25329_25370[(2)] = null);

(statearr_25329_25370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (3))){
var inst_25306 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25308__$1,inst_25306);
} else {
if((state_val_25309 === (12))){
var inst_25283 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25330_25371 = state_25308__$1;
(statearr_25330_25371[(2)] = inst_25283);

(statearr_25330_25371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (2))){
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25308__$1,(4),ch);
} else {
if((state_val_25309 === (23))){
var state_25308__$1 = state_25308;
var statearr_25331_25372 = state_25308__$1;
(statearr_25331_25372[(2)] = null);

(statearr_25331_25372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (19))){
var inst_25289 = (state_25308[(11)]);
var inst_25239 = (state_25308[(8)]);
var inst_25291 = cljs.core.async.muxch_STAR_.call(null,inst_25289);
var state_25308__$1 = state_25308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25308__$1,(22),inst_25291,inst_25239);
} else {
if((state_val_25309 === (11))){
var inst_25263 = (state_25308[(10)]);
var inst_25249 = (state_25308[(16)]);
var inst_25263__$1 = cljs.core.seq.call(null,inst_25249);
var state_25308__$1 = (function (){var statearr_25332 = state_25308;
(statearr_25332[(10)] = inst_25263__$1);

return statearr_25332;
})();
if(inst_25263__$1){
var statearr_25333_25373 = state_25308__$1;
(statearr_25333_25373[(1)] = (13));

} else {
var statearr_25334_25374 = state_25308__$1;
(statearr_25334_25374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (9))){
var inst_25285 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25335_25375 = state_25308__$1;
(statearr_25335_25375[(2)] = inst_25285);

(statearr_25335_25375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (5))){
var inst_25246 = cljs.core.deref.call(null,mults);
var inst_25247 = cljs.core.vals.call(null,inst_25246);
var inst_25248 = cljs.core.seq.call(null,inst_25247);
var inst_25249 = inst_25248;
var inst_25250 = null;
var inst_25251 = (0);
var inst_25252 = (0);
var state_25308__$1 = (function (){var statearr_25336 = state_25308;
(statearr_25336[(12)] = inst_25250);

(statearr_25336[(13)] = inst_25252);

(statearr_25336[(14)] = inst_25251);

(statearr_25336[(16)] = inst_25249);

return statearr_25336;
})();
var statearr_25337_25376 = state_25308__$1;
(statearr_25337_25376[(2)] = null);

(statearr_25337_25376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (14))){
var state_25308__$1 = state_25308;
var statearr_25341_25377 = state_25308__$1;
(statearr_25341_25377[(2)] = null);

(statearr_25341_25377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (16))){
var inst_25263 = (state_25308[(10)]);
var inst_25267 = cljs.core.chunk_first.call(null,inst_25263);
var inst_25268 = cljs.core.chunk_rest.call(null,inst_25263);
var inst_25269 = cljs.core.count.call(null,inst_25267);
var inst_25249 = inst_25268;
var inst_25250 = inst_25267;
var inst_25251 = inst_25269;
var inst_25252 = (0);
var state_25308__$1 = (function (){var statearr_25342 = state_25308;
(statearr_25342[(12)] = inst_25250);

(statearr_25342[(13)] = inst_25252);

(statearr_25342[(14)] = inst_25251);

(statearr_25342[(16)] = inst_25249);

return statearr_25342;
})();
var statearr_25343_25378 = state_25308__$1;
(statearr_25343_25378[(2)] = null);

(statearr_25343_25378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (10))){
var inst_25250 = (state_25308[(12)]);
var inst_25252 = (state_25308[(13)]);
var inst_25251 = (state_25308[(14)]);
var inst_25249 = (state_25308[(16)]);
var inst_25257 = cljs.core._nth.call(null,inst_25250,inst_25252);
var inst_25258 = cljs.core.async.muxch_STAR_.call(null,inst_25257);
var inst_25259 = cljs.core.async.close_BANG_.call(null,inst_25258);
var inst_25260 = (inst_25252 + (1));
var tmp25338 = inst_25250;
var tmp25339 = inst_25251;
var tmp25340 = inst_25249;
var inst_25249__$1 = tmp25340;
var inst_25250__$1 = tmp25338;
var inst_25251__$1 = tmp25339;
var inst_25252__$1 = inst_25260;
var state_25308__$1 = (function (){var statearr_25344 = state_25308;
(statearr_25344[(17)] = inst_25259);

(statearr_25344[(12)] = inst_25250__$1);

(statearr_25344[(13)] = inst_25252__$1);

(statearr_25344[(14)] = inst_25251__$1);

(statearr_25344[(16)] = inst_25249__$1);

return statearr_25344;
})();
var statearr_25345_25379 = state_25308__$1;
(statearr_25345_25379[(2)] = null);

(statearr_25345_25379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (18))){
var inst_25278 = (state_25308[(2)]);
var state_25308__$1 = state_25308;
var statearr_25346_25380 = state_25308__$1;
(statearr_25346_25380[(2)] = inst_25278);

(statearr_25346_25380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25309 === (8))){
var inst_25252 = (state_25308[(13)]);
var inst_25251 = (state_25308[(14)]);
var inst_25254 = (inst_25252 < inst_25251);
var inst_25255 = inst_25254;
var state_25308__$1 = state_25308;
if(cljs.core.truth_(inst_25255)){
var statearr_25347_25381 = state_25308__$1;
(statearr_25347_25381[(1)] = (10));

} else {
var statearr_25348_25382 = state_25308__$1;
(statearr_25348_25382[(1)] = (11));

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
});})(c__24120__auto___25354,mults,ensure_mult,p))
;
return ((function (switch__24025__auto__,c__24120__auto___25354,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25349[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25349[(1)] = (1));

return statearr_25349;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25308){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25350){if((e25350 instanceof Object)){
var ex__24029__auto__ = e25350;
var statearr_25351_25383 = state_25308;
(statearr_25351_25383[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25308;
state_25308 = G__25384;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25354,mults,ensure_mult,p))
})();
var state__24122__auto__ = (function (){var statearr_25352 = f__24121__auto__.call(null);
(statearr_25352[(6)] = c__24120__auto___25354);

return statearr_25352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25354,mults,ensure_mult,p))
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
var G__25386 = arguments.length;
switch (G__25386) {
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
var G__25389 = arguments.length;
switch (G__25389) {
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
var G__25392 = arguments.length;
switch (G__25392) {
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
var c__24120__auto___25459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var state_25431__$1 = state_25431;
var statearr_25433_25460 = state_25431__$1;
(statearr_25433_25460[(2)] = null);

(statearr_25433_25460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25434_25461 = state_25431__$1;
(statearr_25434_25461[(2)] = null);

(statearr_25434_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (4))){
var inst_25395 = (state_25431[(7)]);
var inst_25397 = (inst_25395 < cnt);
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25397)){
var statearr_25435_25462 = state_25431__$1;
(statearr_25435_25462[(1)] = (6));

} else {
var statearr_25436_25463 = state_25431__$1;
(statearr_25436_25463[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (15))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25437_25464 = state_25431__$1;
(statearr_25437_25464[(2)] = inst_25427);

(statearr_25437_25464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (13))){
var inst_25420 = cljs.core.async.close_BANG_.call(null,out);
var state_25431__$1 = state_25431;
var statearr_25438_25465 = state_25431__$1;
(statearr_25438_25465[(2)] = inst_25420);

(statearr_25438_25465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var state_25431__$1 = state_25431;
var statearr_25439_25466 = state_25431__$1;
(statearr_25439_25466[(2)] = null);

(statearr_25439_25466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (12))){
var inst_25417 = (state_25431[(8)]);
var inst_25417__$1 = (state_25431[(2)]);
var inst_25418 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25417__$1);
var state_25431__$1 = (function (){var statearr_25440 = state_25431;
(statearr_25440[(8)] = inst_25417__$1);

return statearr_25440;
})();
if(cljs.core.truth_(inst_25418)){
var statearr_25441_25467 = state_25431__$1;
(statearr_25441_25467[(1)] = (13));

} else {
var statearr_25442_25468 = state_25431__$1;
(statearr_25442_25468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (2))){
var inst_25394 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25395 = (0);
var state_25431__$1 = (function (){var statearr_25443 = state_25431;
(statearr_25443[(9)] = inst_25394);

(statearr_25443[(7)] = inst_25395);

return statearr_25443;
})();
var statearr_25444_25469 = state_25431__$1;
(statearr_25444_25469[(2)] = null);

(statearr_25444_25469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (11))){
var inst_25395 = (state_25431[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25431,(10),Object,null,(9));
var inst_25404 = chs__$1.call(null,inst_25395);
var inst_25405 = done.call(null,inst_25395);
var inst_25406 = cljs.core.async.take_BANG_.call(null,inst_25404,inst_25405);
var state_25431__$1 = state_25431;
var statearr_25445_25470 = state_25431__$1;
(statearr_25445_25470[(2)] = inst_25406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (9))){
var inst_25395 = (state_25431[(7)]);
var inst_25408 = (state_25431[(2)]);
var inst_25409 = (inst_25395 + (1));
var inst_25395__$1 = inst_25409;
var state_25431__$1 = (function (){var statearr_25446 = state_25431;
(statearr_25446[(10)] = inst_25408);

(statearr_25446[(7)] = inst_25395__$1);

return statearr_25446;
})();
var statearr_25447_25471 = state_25431__$1;
(statearr_25447_25471[(2)] = null);

(statearr_25447_25471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var inst_25415 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25448 = state_25431;
(statearr_25448[(11)] = inst_25415);

return statearr_25448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(12),dchan);
} else {
if((state_val_25432 === (14))){
var inst_25417 = (state_25431[(8)]);
var inst_25422 = cljs.core.apply.call(null,f,inst_25417);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25431__$1,(16),out,inst_25422);
} else {
if((state_val_25432 === (16))){
var inst_25424 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25449 = state_25431;
(statearr_25449[(12)] = inst_25424);

return statearr_25449;
})();
var statearr_25450_25472 = state_25431__$1;
(statearr_25450_25472[(2)] = null);

(statearr_25450_25472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (10))){
var inst_25399 = (state_25431[(2)]);
var inst_25400 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25431__$1 = (function (){var statearr_25451 = state_25431;
(statearr_25451[(13)] = inst_25399);

return statearr_25451;
})();
var statearr_25452_25473 = state_25431__$1;
(statearr_25452_25473[(2)] = inst_25400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (8))){
var inst_25413 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25453_25474 = state_25431__$1;
(statearr_25453_25474[(2)] = inst_25413);

(statearr_25453_25474[(1)] = (5));


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
});})(c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24025__auto__,c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25431){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__24029__auto__ = e25455;
var statearr_25456_25475 = state_25431;
(statearr_25456_25475[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25476 = state_25431;
state_25431 = G__25476;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24122__auto__ = (function (){var statearr_25457 = f__24121__auto__.call(null);
(statearr_25457[(6)] = c__24120__auto___25459);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25459,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25479 = arguments.length;
switch (G__25479) {
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
var c__24120__auto___25533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25533,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25533,out){
return (function (state_25511){
var state_val_25512 = (state_25511[(1)]);
if((state_val_25512 === (7))){
var inst_25491 = (state_25511[(7)]);
var inst_25490 = (state_25511[(8)]);
var inst_25490__$1 = (state_25511[(2)]);
var inst_25491__$1 = cljs.core.nth.call(null,inst_25490__$1,(0),null);
var inst_25492 = cljs.core.nth.call(null,inst_25490__$1,(1),null);
var inst_25493 = (inst_25491__$1 == null);
var state_25511__$1 = (function (){var statearr_25513 = state_25511;
(statearr_25513[(7)] = inst_25491__$1);

(statearr_25513[(8)] = inst_25490__$1);

(statearr_25513[(9)] = inst_25492);

return statearr_25513;
})();
if(cljs.core.truth_(inst_25493)){
var statearr_25514_25534 = state_25511__$1;
(statearr_25514_25534[(1)] = (8));

} else {
var statearr_25515_25535 = state_25511__$1;
(statearr_25515_25535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (1))){
var inst_25480 = cljs.core.vec.call(null,chs);
var inst_25481 = inst_25480;
var state_25511__$1 = (function (){var statearr_25516 = state_25511;
(statearr_25516[(10)] = inst_25481);

return statearr_25516;
})();
var statearr_25517_25536 = state_25511__$1;
(statearr_25517_25536[(2)] = null);

(statearr_25517_25536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (4))){
var inst_25481 = (state_25511[(10)]);
var state_25511__$1 = state_25511;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25511__$1,(7),inst_25481);
} else {
if((state_val_25512 === (6))){
var inst_25507 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25518_25537 = state_25511__$1;
(statearr_25518_25537[(2)] = inst_25507);

(statearr_25518_25537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (3))){
var inst_25509 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25511__$1,inst_25509);
} else {
if((state_val_25512 === (2))){
var inst_25481 = (state_25511[(10)]);
var inst_25483 = cljs.core.count.call(null,inst_25481);
var inst_25484 = (inst_25483 > (0));
var state_25511__$1 = state_25511;
if(cljs.core.truth_(inst_25484)){
var statearr_25520_25538 = state_25511__$1;
(statearr_25520_25538[(1)] = (4));

} else {
var statearr_25521_25539 = state_25511__$1;
(statearr_25521_25539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (11))){
var inst_25481 = (state_25511[(10)]);
var inst_25500 = (state_25511[(2)]);
var tmp25519 = inst_25481;
var inst_25481__$1 = tmp25519;
var state_25511__$1 = (function (){var statearr_25522 = state_25511;
(statearr_25522[(11)] = inst_25500);

(statearr_25522[(10)] = inst_25481__$1);

return statearr_25522;
})();
var statearr_25523_25540 = state_25511__$1;
(statearr_25523_25540[(2)] = null);

(statearr_25523_25540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (9))){
var inst_25491 = (state_25511[(7)]);
var state_25511__$1 = state_25511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25511__$1,(11),out,inst_25491);
} else {
if((state_val_25512 === (5))){
var inst_25505 = cljs.core.async.close_BANG_.call(null,out);
var state_25511__$1 = state_25511;
var statearr_25524_25541 = state_25511__$1;
(statearr_25524_25541[(2)] = inst_25505);

(statearr_25524_25541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (10))){
var inst_25503 = (state_25511[(2)]);
var state_25511__$1 = state_25511;
var statearr_25525_25542 = state_25511__$1;
(statearr_25525_25542[(2)] = inst_25503);

(statearr_25525_25542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25512 === (8))){
var inst_25491 = (state_25511[(7)]);
var inst_25490 = (state_25511[(8)]);
var inst_25492 = (state_25511[(9)]);
var inst_25481 = (state_25511[(10)]);
var inst_25495 = (function (){var cs = inst_25481;
var vec__25486 = inst_25490;
var v = inst_25491;
var c = inst_25492;
return ((function (cs,vec__25486,v,c,inst_25491,inst_25490,inst_25492,inst_25481,state_val_25512,c__24120__auto___25533,out){
return (function (p1__25477_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25477_SHARP_);
});
;})(cs,vec__25486,v,c,inst_25491,inst_25490,inst_25492,inst_25481,state_val_25512,c__24120__auto___25533,out))
})();
var inst_25496 = cljs.core.filterv.call(null,inst_25495,inst_25481);
var inst_25481__$1 = inst_25496;
var state_25511__$1 = (function (){var statearr_25526 = state_25511;
(statearr_25526[(10)] = inst_25481__$1);

return statearr_25526;
})();
var statearr_25527_25543 = state_25511__$1;
(statearr_25527_25543[(2)] = null);

(statearr_25527_25543[(1)] = (2));


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
});})(c__24120__auto___25533,out))
;
return ((function (switch__24025__auto__,c__24120__auto___25533,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25528[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25528[(1)] = (1));

return statearr_25528;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25511){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object)){
var ex__24029__auto__ = e25529;
var statearr_25530_25544 = state_25511;
(statearr_25530_25544[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25545 = state_25511;
state_25511 = G__25545;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25533,out))
})();
var state__24122__auto__ = (function (){var statearr_25531 = f__24121__auto__.call(null);
(statearr_25531[(6)] = c__24120__auto___25533);

return statearr_25531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25533,out))
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
var G__25547 = arguments.length;
switch (G__25547) {
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
var c__24120__auto___25592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25592,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25592,out){
return (function (state_25571){
var state_val_25572 = (state_25571[(1)]);
if((state_val_25572 === (7))){
var inst_25553 = (state_25571[(7)]);
var inst_25553__$1 = (state_25571[(2)]);
var inst_25554 = (inst_25553__$1 == null);
var inst_25555 = cljs.core.not.call(null,inst_25554);
var state_25571__$1 = (function (){var statearr_25573 = state_25571;
(statearr_25573[(7)] = inst_25553__$1);

return statearr_25573;
})();
if(inst_25555){
var statearr_25574_25593 = state_25571__$1;
(statearr_25574_25593[(1)] = (8));

} else {
var statearr_25575_25594 = state_25571__$1;
(statearr_25575_25594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (1))){
var inst_25548 = (0);
var state_25571__$1 = (function (){var statearr_25576 = state_25571;
(statearr_25576[(8)] = inst_25548);

return statearr_25576;
})();
var statearr_25577_25595 = state_25571__$1;
(statearr_25577_25595[(2)] = null);

(statearr_25577_25595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (4))){
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25571__$1,(7),ch);
} else {
if((state_val_25572 === (6))){
var inst_25566 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25578_25596 = state_25571__$1;
(statearr_25578_25596[(2)] = inst_25566);

(statearr_25578_25596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (3))){
var inst_25568 = (state_25571[(2)]);
var inst_25569 = cljs.core.async.close_BANG_.call(null,out);
var state_25571__$1 = (function (){var statearr_25579 = state_25571;
(statearr_25579[(9)] = inst_25568);

return statearr_25579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25571__$1,inst_25569);
} else {
if((state_val_25572 === (2))){
var inst_25548 = (state_25571[(8)]);
var inst_25550 = (inst_25548 < n);
var state_25571__$1 = state_25571;
if(cljs.core.truth_(inst_25550)){
var statearr_25580_25597 = state_25571__$1;
(statearr_25580_25597[(1)] = (4));

} else {
var statearr_25581_25598 = state_25571__$1;
(statearr_25581_25598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (11))){
var inst_25548 = (state_25571[(8)]);
var inst_25558 = (state_25571[(2)]);
var inst_25559 = (inst_25548 + (1));
var inst_25548__$1 = inst_25559;
var state_25571__$1 = (function (){var statearr_25582 = state_25571;
(statearr_25582[(10)] = inst_25558);

(statearr_25582[(8)] = inst_25548__$1);

return statearr_25582;
})();
var statearr_25583_25599 = state_25571__$1;
(statearr_25583_25599[(2)] = null);

(statearr_25583_25599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (9))){
var state_25571__$1 = state_25571;
var statearr_25584_25600 = state_25571__$1;
(statearr_25584_25600[(2)] = null);

(statearr_25584_25600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (5))){
var state_25571__$1 = state_25571;
var statearr_25585_25601 = state_25571__$1;
(statearr_25585_25601[(2)] = null);

(statearr_25585_25601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (10))){
var inst_25563 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25586_25602 = state_25571__$1;
(statearr_25586_25602[(2)] = inst_25563);

(statearr_25586_25602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (8))){
var inst_25553 = (state_25571[(7)]);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25571__$1,(11),out,inst_25553);
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
});})(c__24120__auto___25592,out))
;
return ((function (switch__24025__auto__,c__24120__auto___25592,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25587[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25587[(1)] = (1));

return statearr_25587;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25571){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25588){if((e25588 instanceof Object)){
var ex__24029__auto__ = e25588;
var statearr_25589_25603 = state_25571;
(statearr_25589_25603[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25604 = state_25571;
state_25571 = G__25604;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25592,out))
})();
var state__24122__auto__ = (function (){var statearr_25590 = f__24121__auto__.call(null);
(statearr_25590[(6)] = c__24120__auto___25592);

return statearr_25590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25592,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25606 = (function (f,ch,meta25607){
this.f = f;
this.ch = ch;
this.meta25607 = meta25607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25608,meta25607__$1){
var self__ = this;
var _25608__$1 = this;
return (new cljs.core.async.t_cljs$core$async25606(self__.f,self__.ch,meta25607__$1));
});

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25608){
var self__ = this;
var _25608__$1 = this;
return self__.meta25607;
});

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25609 = (function (f,ch,meta25607,_,fn1,meta25610){
this.f = f;
this.ch = ch;
this.meta25607 = meta25607;
this._ = _;
this.fn1 = fn1;
this.meta25610 = meta25610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25611,meta25610__$1){
var self__ = this;
var _25611__$1 = this;
return (new cljs.core.async.t_cljs$core$async25609(self__.f,self__.ch,self__.meta25607,self__._,self__.fn1,meta25610__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25611){
var self__ = this;
var _25611__$1 = this;
return self__.meta25610;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25605_SHARP_){
return f1.call(null,(((p1__25605_SHARP_ == null))?null:self__.f.call(null,p1__25605_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25607","meta25607",649490420,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25606","cljs.core.async/t_cljs$core$async25606",-1011822432,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25610","meta25610",-625552034,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25609";

cljs.core.async.t_cljs$core$async25609.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25609");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25609.
 */
cljs.core.async.__GT_t_cljs$core$async25609 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25609(f__$1,ch__$1,meta25607__$1,___$2,fn1__$1,meta25610){
return (new cljs.core.async.t_cljs$core$async25609(f__$1,ch__$1,meta25607__$1,___$2,fn1__$1,meta25610));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25609(self__.f,self__.ch,self__.meta25607,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25607","meta25607",649490420,null)], null);
});

cljs.core.async.t_cljs$core$async25606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25606";

cljs.core.async.t_cljs$core$async25606.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25606");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25606.
 */
cljs.core.async.__GT_t_cljs$core$async25606 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25606(f__$1,ch__$1,meta25607){
return (new cljs.core.async.t_cljs$core$async25606(f__$1,ch__$1,meta25607));
});

}

return (new cljs.core.async.t_cljs$core$async25606(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25612 = (function (f,ch,meta25613){
this.f = f;
this.ch = ch;
this.meta25613 = meta25613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25614,meta25613__$1){
var self__ = this;
var _25614__$1 = this;
return (new cljs.core.async.t_cljs$core$async25612(self__.f,self__.ch,meta25613__$1));
});

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25614){
var self__ = this;
var _25614__$1 = this;
return self__.meta25613;
});

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25613","meta25613",1942514215,null)], null);
});

cljs.core.async.t_cljs$core$async25612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25612";

cljs.core.async.t_cljs$core$async25612.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25612");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25612.
 */
cljs.core.async.__GT_t_cljs$core$async25612 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25612(f__$1,ch__$1,meta25613){
return (new cljs.core.async.t_cljs$core$async25612(f__$1,ch__$1,meta25613));
});

}

return (new cljs.core.async.t_cljs$core$async25612(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25615 = (function (p,ch,meta25616){
this.p = p;
this.ch = ch;
this.meta25616 = meta25616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25617,meta25616__$1){
var self__ = this;
var _25617__$1 = this;
return (new cljs.core.async.t_cljs$core$async25615(self__.p,self__.ch,meta25616__$1));
});

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25617){
var self__ = this;
var _25617__$1 = this;
return self__.meta25616;
});

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25616","meta25616",1449041658,null)], null);
});

cljs.core.async.t_cljs$core$async25615.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25615";

cljs.core.async.t_cljs$core$async25615.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async25615");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25615.
 */
cljs.core.async.__GT_t_cljs$core$async25615 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25615(p__$1,ch__$1,meta25616){
return (new cljs.core.async.t_cljs$core$async25615(p__$1,ch__$1,meta25616));
});

}

return (new cljs.core.async.t_cljs$core$async25615(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25619 = arguments.length;
switch (G__25619) {
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
var c__24120__auto___25659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25659,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25659,out){
return (function (state_25640){
var state_val_25641 = (state_25640[(1)]);
if((state_val_25641 === (7))){
var inst_25636 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25642_25660 = state_25640__$1;
(statearr_25642_25660[(2)] = inst_25636);

(statearr_25642_25660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (1))){
var state_25640__$1 = state_25640;
var statearr_25643_25661 = state_25640__$1;
(statearr_25643_25661[(2)] = null);

(statearr_25643_25661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (4))){
var inst_25622 = (state_25640[(7)]);
var inst_25622__$1 = (state_25640[(2)]);
var inst_25623 = (inst_25622__$1 == null);
var state_25640__$1 = (function (){var statearr_25644 = state_25640;
(statearr_25644[(7)] = inst_25622__$1);

return statearr_25644;
})();
if(cljs.core.truth_(inst_25623)){
var statearr_25645_25662 = state_25640__$1;
(statearr_25645_25662[(1)] = (5));

} else {
var statearr_25646_25663 = state_25640__$1;
(statearr_25646_25663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (6))){
var inst_25622 = (state_25640[(7)]);
var inst_25627 = p.call(null,inst_25622);
var state_25640__$1 = state_25640;
if(cljs.core.truth_(inst_25627)){
var statearr_25647_25664 = state_25640__$1;
(statearr_25647_25664[(1)] = (8));

} else {
var statearr_25648_25665 = state_25640__$1;
(statearr_25648_25665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (3))){
var inst_25638 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25640__$1,inst_25638);
} else {
if((state_val_25641 === (2))){
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25640__$1,(4),ch);
} else {
if((state_val_25641 === (11))){
var inst_25630 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25649_25666 = state_25640__$1;
(statearr_25649_25666[(2)] = inst_25630);

(statearr_25649_25666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (9))){
var state_25640__$1 = state_25640;
var statearr_25650_25667 = state_25640__$1;
(statearr_25650_25667[(2)] = null);

(statearr_25650_25667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (5))){
var inst_25625 = cljs.core.async.close_BANG_.call(null,out);
var state_25640__$1 = state_25640;
var statearr_25651_25668 = state_25640__$1;
(statearr_25651_25668[(2)] = inst_25625);

(statearr_25651_25668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (10))){
var inst_25633 = (state_25640[(2)]);
var state_25640__$1 = (function (){var statearr_25652 = state_25640;
(statearr_25652[(8)] = inst_25633);

return statearr_25652;
})();
var statearr_25653_25669 = state_25640__$1;
(statearr_25653_25669[(2)] = null);

(statearr_25653_25669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (8))){
var inst_25622 = (state_25640[(7)]);
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25640__$1,(11),out,inst_25622);
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
});})(c__24120__auto___25659,out))
;
return ((function (switch__24025__auto__,c__24120__auto___25659,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25654 = [null,null,null,null,null,null,null,null,null];
(statearr_25654[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25654[(1)] = (1));

return statearr_25654;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25640){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25655){if((e25655 instanceof Object)){
var ex__24029__auto__ = e25655;
var statearr_25656_25670 = state_25640;
(statearr_25656_25670[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25671 = state_25640;
state_25640 = G__25671;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25659,out))
})();
var state__24122__auto__ = (function (){var statearr_25657 = f__24121__auto__.call(null);
(statearr_25657[(6)] = c__24120__auto___25659);

return statearr_25657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25659,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25673 = arguments.length;
switch (G__25673) {
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
var c__24120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto__){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto__){
return (function (state_25736){
var state_val_25737 = (state_25736[(1)]);
if((state_val_25737 === (7))){
var inst_25732 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25738_25776 = state_25736__$1;
(statearr_25738_25776[(2)] = inst_25732);

(statearr_25738_25776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (20))){
var inst_25702 = (state_25736[(7)]);
var inst_25713 = (state_25736[(2)]);
var inst_25714 = cljs.core.next.call(null,inst_25702);
var inst_25688 = inst_25714;
var inst_25689 = null;
var inst_25690 = (0);
var inst_25691 = (0);
var state_25736__$1 = (function (){var statearr_25739 = state_25736;
(statearr_25739[(8)] = inst_25691);

(statearr_25739[(9)] = inst_25713);

(statearr_25739[(10)] = inst_25690);

(statearr_25739[(11)] = inst_25689);

(statearr_25739[(12)] = inst_25688);

return statearr_25739;
})();
var statearr_25740_25777 = state_25736__$1;
(statearr_25740_25777[(2)] = null);

(statearr_25740_25777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (1))){
var state_25736__$1 = state_25736;
var statearr_25741_25778 = state_25736__$1;
(statearr_25741_25778[(2)] = null);

(statearr_25741_25778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (4))){
var inst_25677 = (state_25736[(13)]);
var inst_25677__$1 = (state_25736[(2)]);
var inst_25678 = (inst_25677__$1 == null);
var state_25736__$1 = (function (){var statearr_25742 = state_25736;
(statearr_25742[(13)] = inst_25677__$1);

return statearr_25742;
})();
if(cljs.core.truth_(inst_25678)){
var statearr_25743_25779 = state_25736__$1;
(statearr_25743_25779[(1)] = (5));

} else {
var statearr_25744_25780 = state_25736__$1;
(statearr_25744_25780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (15))){
var state_25736__$1 = state_25736;
var statearr_25748_25781 = state_25736__$1;
(statearr_25748_25781[(2)] = null);

(statearr_25748_25781[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (21))){
var state_25736__$1 = state_25736;
var statearr_25749_25782 = state_25736__$1;
(statearr_25749_25782[(2)] = null);

(statearr_25749_25782[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (13))){
var inst_25691 = (state_25736[(8)]);
var inst_25690 = (state_25736[(10)]);
var inst_25689 = (state_25736[(11)]);
var inst_25688 = (state_25736[(12)]);
var inst_25698 = (state_25736[(2)]);
var inst_25699 = (inst_25691 + (1));
var tmp25745 = inst_25690;
var tmp25746 = inst_25689;
var tmp25747 = inst_25688;
var inst_25688__$1 = tmp25747;
var inst_25689__$1 = tmp25746;
var inst_25690__$1 = tmp25745;
var inst_25691__$1 = inst_25699;
var state_25736__$1 = (function (){var statearr_25750 = state_25736;
(statearr_25750[(8)] = inst_25691__$1);

(statearr_25750[(10)] = inst_25690__$1);

(statearr_25750[(14)] = inst_25698);

(statearr_25750[(11)] = inst_25689__$1);

(statearr_25750[(12)] = inst_25688__$1);

return statearr_25750;
})();
var statearr_25751_25783 = state_25736__$1;
(statearr_25751_25783[(2)] = null);

(statearr_25751_25783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (22))){
var state_25736__$1 = state_25736;
var statearr_25752_25784 = state_25736__$1;
(statearr_25752_25784[(2)] = null);

(statearr_25752_25784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (6))){
var inst_25677 = (state_25736[(13)]);
var inst_25686 = f.call(null,inst_25677);
var inst_25687 = cljs.core.seq.call(null,inst_25686);
var inst_25688 = inst_25687;
var inst_25689 = null;
var inst_25690 = (0);
var inst_25691 = (0);
var state_25736__$1 = (function (){var statearr_25753 = state_25736;
(statearr_25753[(8)] = inst_25691);

(statearr_25753[(10)] = inst_25690);

(statearr_25753[(11)] = inst_25689);

(statearr_25753[(12)] = inst_25688);

return statearr_25753;
})();
var statearr_25754_25785 = state_25736__$1;
(statearr_25754_25785[(2)] = null);

(statearr_25754_25785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (17))){
var inst_25702 = (state_25736[(7)]);
var inst_25706 = cljs.core.chunk_first.call(null,inst_25702);
var inst_25707 = cljs.core.chunk_rest.call(null,inst_25702);
var inst_25708 = cljs.core.count.call(null,inst_25706);
var inst_25688 = inst_25707;
var inst_25689 = inst_25706;
var inst_25690 = inst_25708;
var inst_25691 = (0);
var state_25736__$1 = (function (){var statearr_25755 = state_25736;
(statearr_25755[(8)] = inst_25691);

(statearr_25755[(10)] = inst_25690);

(statearr_25755[(11)] = inst_25689);

(statearr_25755[(12)] = inst_25688);

return statearr_25755;
})();
var statearr_25756_25786 = state_25736__$1;
(statearr_25756_25786[(2)] = null);

(statearr_25756_25786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (3))){
var inst_25734 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25736__$1,inst_25734);
} else {
if((state_val_25737 === (12))){
var inst_25722 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25757_25787 = state_25736__$1;
(statearr_25757_25787[(2)] = inst_25722);

(statearr_25757_25787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (2))){
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25736__$1,(4),in$);
} else {
if((state_val_25737 === (23))){
var inst_25730 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25758_25788 = state_25736__$1;
(statearr_25758_25788[(2)] = inst_25730);

(statearr_25758_25788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (19))){
var inst_25717 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25759_25789 = state_25736__$1;
(statearr_25759_25789[(2)] = inst_25717);

(statearr_25759_25789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (11))){
var inst_25702 = (state_25736[(7)]);
var inst_25688 = (state_25736[(12)]);
var inst_25702__$1 = cljs.core.seq.call(null,inst_25688);
var state_25736__$1 = (function (){var statearr_25760 = state_25736;
(statearr_25760[(7)] = inst_25702__$1);

return statearr_25760;
})();
if(inst_25702__$1){
var statearr_25761_25790 = state_25736__$1;
(statearr_25761_25790[(1)] = (14));

} else {
var statearr_25762_25791 = state_25736__$1;
(statearr_25762_25791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (9))){
var inst_25724 = (state_25736[(2)]);
var inst_25725 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25736__$1 = (function (){var statearr_25763 = state_25736;
(statearr_25763[(15)] = inst_25724);

return statearr_25763;
})();
if(cljs.core.truth_(inst_25725)){
var statearr_25764_25792 = state_25736__$1;
(statearr_25764_25792[(1)] = (21));

} else {
var statearr_25765_25793 = state_25736__$1;
(statearr_25765_25793[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (5))){
var inst_25680 = cljs.core.async.close_BANG_.call(null,out);
var state_25736__$1 = state_25736;
var statearr_25766_25794 = state_25736__$1;
(statearr_25766_25794[(2)] = inst_25680);

(statearr_25766_25794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (14))){
var inst_25702 = (state_25736[(7)]);
var inst_25704 = cljs.core.chunked_seq_QMARK_.call(null,inst_25702);
var state_25736__$1 = state_25736;
if(inst_25704){
var statearr_25767_25795 = state_25736__$1;
(statearr_25767_25795[(1)] = (17));

} else {
var statearr_25768_25796 = state_25736__$1;
(statearr_25768_25796[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (16))){
var inst_25720 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25769_25797 = state_25736__$1;
(statearr_25769_25797[(2)] = inst_25720);

(statearr_25769_25797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (10))){
var inst_25691 = (state_25736[(8)]);
var inst_25689 = (state_25736[(11)]);
var inst_25696 = cljs.core._nth.call(null,inst_25689,inst_25691);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25736__$1,(13),out,inst_25696);
} else {
if((state_val_25737 === (18))){
var inst_25702 = (state_25736[(7)]);
var inst_25711 = cljs.core.first.call(null,inst_25702);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25736__$1,(20),out,inst_25711);
} else {
if((state_val_25737 === (8))){
var inst_25691 = (state_25736[(8)]);
var inst_25690 = (state_25736[(10)]);
var inst_25693 = (inst_25691 < inst_25690);
var inst_25694 = inst_25693;
var state_25736__$1 = state_25736;
if(cljs.core.truth_(inst_25694)){
var statearr_25770_25798 = state_25736__$1;
(statearr_25770_25798[(1)] = (10));

} else {
var statearr_25771_25799 = state_25736__$1;
(statearr_25771_25799[(1)] = (11));

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
});})(c__24120__auto__))
;
return ((function (switch__24025__auto__,c__24120__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____0 = (function (){
var statearr_25772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25772[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__);

(statearr_25772[(1)] = (1));

return statearr_25772;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____1 = (function (state_25736){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25773){if((e25773 instanceof Object)){
var ex__24029__auto__ = e25773;
var statearr_25774_25800 = state_25736;
(statearr_25774_25800[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25801 = state_25736;
state_25736 = G__25801;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24026__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto__))
})();
var state__24122__auto__ = (function (){var statearr_25775 = f__24121__auto__.call(null);
(statearr_25775[(6)] = c__24120__auto__);

return statearr_25775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto__))
);

return c__24120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25803 = arguments.length;
switch (G__25803) {
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
var G__25806 = arguments.length;
switch (G__25806) {
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
var G__25809 = arguments.length;
switch (G__25809) {
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
var c__24120__auto___25856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25856,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25856,out){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (7))){
var inst_25828 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25835_25857 = state_25833__$1;
(statearr_25835_25857[(2)] = inst_25828);

(statearr_25835_25857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (1))){
var inst_25810 = null;
var state_25833__$1 = (function (){var statearr_25836 = state_25833;
(statearr_25836[(7)] = inst_25810);

return statearr_25836;
})();
var statearr_25837_25858 = state_25833__$1;
(statearr_25837_25858[(2)] = null);

(statearr_25837_25858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (4))){
var inst_25813 = (state_25833[(8)]);
var inst_25813__$1 = (state_25833[(2)]);
var inst_25814 = (inst_25813__$1 == null);
var inst_25815 = cljs.core.not.call(null,inst_25814);
var state_25833__$1 = (function (){var statearr_25838 = state_25833;
(statearr_25838[(8)] = inst_25813__$1);

return statearr_25838;
})();
if(inst_25815){
var statearr_25839_25859 = state_25833__$1;
(statearr_25839_25859[(1)] = (5));

} else {
var statearr_25840_25860 = state_25833__$1;
(statearr_25840_25860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (6))){
var state_25833__$1 = state_25833;
var statearr_25841_25861 = state_25833__$1;
(statearr_25841_25861[(2)] = null);

(statearr_25841_25861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (3))){
var inst_25830 = (state_25833[(2)]);
var inst_25831 = cljs.core.async.close_BANG_.call(null,out);
var state_25833__$1 = (function (){var statearr_25842 = state_25833;
(statearr_25842[(9)] = inst_25830);

return statearr_25842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
if((state_val_25834 === (2))){
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(4),ch);
} else {
if((state_val_25834 === (11))){
var inst_25813 = (state_25833[(8)]);
var inst_25822 = (state_25833[(2)]);
var inst_25810 = inst_25813;
var state_25833__$1 = (function (){var statearr_25843 = state_25833;
(statearr_25843[(7)] = inst_25810);

(statearr_25843[(10)] = inst_25822);

return statearr_25843;
})();
var statearr_25844_25862 = state_25833__$1;
(statearr_25844_25862[(2)] = null);

(statearr_25844_25862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (9))){
var inst_25813 = (state_25833[(8)]);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25833__$1,(11),out,inst_25813);
} else {
if((state_val_25834 === (5))){
var inst_25810 = (state_25833[(7)]);
var inst_25813 = (state_25833[(8)]);
var inst_25817 = cljs.core._EQ_.call(null,inst_25813,inst_25810);
var state_25833__$1 = state_25833;
if(inst_25817){
var statearr_25846_25863 = state_25833__$1;
(statearr_25846_25863[(1)] = (8));

} else {
var statearr_25847_25864 = state_25833__$1;
(statearr_25847_25864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (10))){
var inst_25825 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25848_25865 = state_25833__$1;
(statearr_25848_25865[(2)] = inst_25825);

(statearr_25848_25865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (8))){
var inst_25810 = (state_25833[(7)]);
var tmp25845 = inst_25810;
var inst_25810__$1 = tmp25845;
var state_25833__$1 = (function (){var statearr_25849 = state_25833;
(statearr_25849[(7)] = inst_25810__$1);

return statearr_25849;
})();
var statearr_25850_25866 = state_25833__$1;
(statearr_25850_25866[(2)] = null);

(statearr_25850_25866[(1)] = (2));


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
});})(c__24120__auto___25856,out))
;
return ((function (switch__24025__auto__,c__24120__auto___25856,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25851[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25851[(1)] = (1));

return statearr_25851;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25833){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25852){if((e25852 instanceof Object)){
var ex__24029__auto__ = e25852;
var statearr_25853_25867 = state_25833;
(statearr_25853_25867[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25868 = state_25833;
state_25833 = G__25868;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25856,out))
})();
var state__24122__auto__ = (function (){var statearr_25854 = f__24121__auto__.call(null);
(statearr_25854[(6)] = c__24120__auto___25856);

return statearr_25854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25856,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25870 = arguments.length;
switch (G__25870) {
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
var c__24120__auto___25936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___25936,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___25936,out){
return (function (state_25908){
var state_val_25909 = (state_25908[(1)]);
if((state_val_25909 === (7))){
var inst_25904 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25910_25937 = state_25908__$1;
(statearr_25910_25937[(2)] = inst_25904);

(statearr_25910_25937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (1))){
var inst_25871 = (new Array(n));
var inst_25872 = inst_25871;
var inst_25873 = (0);
var state_25908__$1 = (function (){var statearr_25911 = state_25908;
(statearr_25911[(7)] = inst_25872);

(statearr_25911[(8)] = inst_25873);

return statearr_25911;
})();
var statearr_25912_25938 = state_25908__$1;
(statearr_25912_25938[(2)] = null);

(statearr_25912_25938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (4))){
var inst_25876 = (state_25908[(9)]);
var inst_25876__$1 = (state_25908[(2)]);
var inst_25877 = (inst_25876__$1 == null);
var inst_25878 = cljs.core.not.call(null,inst_25877);
var state_25908__$1 = (function (){var statearr_25913 = state_25908;
(statearr_25913[(9)] = inst_25876__$1);

return statearr_25913;
})();
if(inst_25878){
var statearr_25914_25939 = state_25908__$1;
(statearr_25914_25939[(1)] = (5));

} else {
var statearr_25915_25940 = state_25908__$1;
(statearr_25915_25940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (15))){
var inst_25898 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25916_25941 = state_25908__$1;
(statearr_25916_25941[(2)] = inst_25898);

(statearr_25916_25941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (13))){
var state_25908__$1 = state_25908;
var statearr_25917_25942 = state_25908__$1;
(statearr_25917_25942[(2)] = null);

(statearr_25917_25942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (6))){
var inst_25873 = (state_25908[(8)]);
var inst_25894 = (inst_25873 > (0));
var state_25908__$1 = state_25908;
if(cljs.core.truth_(inst_25894)){
var statearr_25918_25943 = state_25908__$1;
(statearr_25918_25943[(1)] = (12));

} else {
var statearr_25919_25944 = state_25908__$1;
(statearr_25919_25944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (3))){
var inst_25906 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25908__$1,inst_25906);
} else {
if((state_val_25909 === (12))){
var inst_25872 = (state_25908[(7)]);
var inst_25896 = cljs.core.vec.call(null,inst_25872);
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25908__$1,(15),out,inst_25896);
} else {
if((state_val_25909 === (2))){
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25908__$1,(4),ch);
} else {
if((state_val_25909 === (11))){
var inst_25888 = (state_25908[(2)]);
var inst_25889 = (new Array(n));
var inst_25872 = inst_25889;
var inst_25873 = (0);
var state_25908__$1 = (function (){var statearr_25920 = state_25908;
(statearr_25920[(7)] = inst_25872);

(statearr_25920[(8)] = inst_25873);

(statearr_25920[(10)] = inst_25888);

return statearr_25920;
})();
var statearr_25921_25945 = state_25908__$1;
(statearr_25921_25945[(2)] = null);

(statearr_25921_25945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (9))){
var inst_25872 = (state_25908[(7)]);
var inst_25886 = cljs.core.vec.call(null,inst_25872);
var state_25908__$1 = state_25908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25908__$1,(11),out,inst_25886);
} else {
if((state_val_25909 === (5))){
var inst_25872 = (state_25908[(7)]);
var inst_25881 = (state_25908[(11)]);
var inst_25876 = (state_25908[(9)]);
var inst_25873 = (state_25908[(8)]);
var inst_25880 = (inst_25872[inst_25873] = inst_25876);
var inst_25881__$1 = (inst_25873 + (1));
var inst_25882 = (inst_25881__$1 < n);
var state_25908__$1 = (function (){var statearr_25922 = state_25908;
(statearr_25922[(12)] = inst_25880);

(statearr_25922[(11)] = inst_25881__$1);

return statearr_25922;
})();
if(cljs.core.truth_(inst_25882)){
var statearr_25923_25946 = state_25908__$1;
(statearr_25923_25946[(1)] = (8));

} else {
var statearr_25924_25947 = state_25908__$1;
(statearr_25924_25947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (14))){
var inst_25901 = (state_25908[(2)]);
var inst_25902 = cljs.core.async.close_BANG_.call(null,out);
var state_25908__$1 = (function (){var statearr_25926 = state_25908;
(statearr_25926[(13)] = inst_25901);

return statearr_25926;
})();
var statearr_25927_25948 = state_25908__$1;
(statearr_25927_25948[(2)] = inst_25902);

(statearr_25927_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (10))){
var inst_25892 = (state_25908[(2)]);
var state_25908__$1 = state_25908;
var statearr_25928_25949 = state_25908__$1;
(statearr_25928_25949[(2)] = inst_25892);

(statearr_25928_25949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25909 === (8))){
var inst_25872 = (state_25908[(7)]);
var inst_25881 = (state_25908[(11)]);
var tmp25925 = inst_25872;
var inst_25872__$1 = tmp25925;
var inst_25873 = inst_25881;
var state_25908__$1 = (function (){var statearr_25929 = state_25908;
(statearr_25929[(7)] = inst_25872__$1);

(statearr_25929[(8)] = inst_25873);

return statearr_25929;
})();
var statearr_25930_25950 = state_25908__$1;
(statearr_25930_25950[(2)] = null);

(statearr_25930_25950[(1)] = (2));


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
});})(c__24120__auto___25936,out))
;
return ((function (switch__24025__auto__,c__24120__auto___25936,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_25931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25931[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_25931[(1)] = (1));

return statearr_25931;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25908){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e25932){if((e25932 instanceof Object)){
var ex__24029__auto__ = e25932;
var statearr_25933_25951 = state_25908;
(statearr_25933_25951[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25952 = state_25908;
state_25908 = G__25952;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___25936,out))
})();
var state__24122__auto__ = (function (){var statearr_25934 = f__24121__auto__.call(null);
(statearr_25934[(6)] = c__24120__auto___25936);

return statearr_25934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___25936,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25954 = arguments.length;
switch (G__25954) {
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
var c__24120__auto___26024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24120__auto___26024,out){
return (function (){
var f__24121__auto__ = (function (){var switch__24025__auto__ = ((function (c__24120__auto___26024,out){
return (function (state_25996){
var state_val_25997 = (state_25996[(1)]);
if((state_val_25997 === (7))){
var inst_25992 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_25998_26025 = state_25996__$1;
(statearr_25998_26025[(2)] = inst_25992);

(statearr_25998_26025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (1))){
var inst_25955 = [];
var inst_25956 = inst_25955;
var inst_25957 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25996__$1 = (function (){var statearr_25999 = state_25996;
(statearr_25999[(7)] = inst_25956);

(statearr_25999[(8)] = inst_25957);

return statearr_25999;
})();
var statearr_26000_26026 = state_25996__$1;
(statearr_26000_26026[(2)] = null);

(statearr_26000_26026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (4))){
var inst_25960 = (state_25996[(9)]);
var inst_25960__$1 = (state_25996[(2)]);
var inst_25961 = (inst_25960__$1 == null);
var inst_25962 = cljs.core.not.call(null,inst_25961);
var state_25996__$1 = (function (){var statearr_26001 = state_25996;
(statearr_26001[(9)] = inst_25960__$1);

return statearr_26001;
})();
if(inst_25962){
var statearr_26002_26027 = state_25996__$1;
(statearr_26002_26027[(1)] = (5));

} else {
var statearr_26003_26028 = state_25996__$1;
(statearr_26003_26028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (15))){
var inst_25986 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26004_26029 = state_25996__$1;
(statearr_26004_26029[(2)] = inst_25986);

(statearr_26004_26029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (13))){
var state_25996__$1 = state_25996;
var statearr_26005_26030 = state_25996__$1;
(statearr_26005_26030[(2)] = null);

(statearr_26005_26030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (6))){
var inst_25956 = (state_25996[(7)]);
var inst_25981 = inst_25956.length;
var inst_25982 = (inst_25981 > (0));
var state_25996__$1 = state_25996;
if(cljs.core.truth_(inst_25982)){
var statearr_26006_26031 = state_25996__$1;
(statearr_26006_26031[(1)] = (12));

} else {
var statearr_26007_26032 = state_25996__$1;
(statearr_26007_26032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (3))){
var inst_25994 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25996__$1,inst_25994);
} else {
if((state_val_25997 === (12))){
var inst_25956 = (state_25996[(7)]);
var inst_25984 = cljs.core.vec.call(null,inst_25956);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25996__$1,(15),out,inst_25984);
} else {
if((state_val_25997 === (2))){
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25996__$1,(4),ch);
} else {
if((state_val_25997 === (11))){
var inst_25964 = (state_25996[(10)]);
var inst_25960 = (state_25996[(9)]);
var inst_25974 = (state_25996[(2)]);
var inst_25975 = [];
var inst_25976 = inst_25975.push(inst_25960);
var inst_25956 = inst_25975;
var inst_25957 = inst_25964;
var state_25996__$1 = (function (){var statearr_26008 = state_25996;
(statearr_26008[(11)] = inst_25974);

(statearr_26008[(12)] = inst_25976);

(statearr_26008[(7)] = inst_25956);

(statearr_26008[(8)] = inst_25957);

return statearr_26008;
})();
var statearr_26009_26033 = state_25996__$1;
(statearr_26009_26033[(2)] = null);

(statearr_26009_26033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (9))){
var inst_25956 = (state_25996[(7)]);
var inst_25972 = cljs.core.vec.call(null,inst_25956);
var state_25996__$1 = state_25996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25996__$1,(11),out,inst_25972);
} else {
if((state_val_25997 === (5))){
var inst_25964 = (state_25996[(10)]);
var inst_25960 = (state_25996[(9)]);
var inst_25957 = (state_25996[(8)]);
var inst_25964__$1 = f.call(null,inst_25960);
var inst_25965 = cljs.core._EQ_.call(null,inst_25964__$1,inst_25957);
var inst_25966 = cljs.core.keyword_identical_QMARK_.call(null,inst_25957,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25967 = ((inst_25965) || (inst_25966));
var state_25996__$1 = (function (){var statearr_26010 = state_25996;
(statearr_26010[(10)] = inst_25964__$1);

return statearr_26010;
})();
if(cljs.core.truth_(inst_25967)){
var statearr_26011_26034 = state_25996__$1;
(statearr_26011_26034[(1)] = (8));

} else {
var statearr_26012_26035 = state_25996__$1;
(statearr_26012_26035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (14))){
var inst_25989 = (state_25996[(2)]);
var inst_25990 = cljs.core.async.close_BANG_.call(null,out);
var state_25996__$1 = (function (){var statearr_26014 = state_25996;
(statearr_26014[(13)] = inst_25989);

return statearr_26014;
})();
var statearr_26015_26036 = state_25996__$1;
(statearr_26015_26036[(2)] = inst_25990);

(statearr_26015_26036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (10))){
var inst_25979 = (state_25996[(2)]);
var state_25996__$1 = state_25996;
var statearr_26016_26037 = state_25996__$1;
(statearr_26016_26037[(2)] = inst_25979);

(statearr_26016_26037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25997 === (8))){
var inst_25964 = (state_25996[(10)]);
var inst_25960 = (state_25996[(9)]);
var inst_25956 = (state_25996[(7)]);
var inst_25969 = inst_25956.push(inst_25960);
var tmp26013 = inst_25956;
var inst_25956__$1 = tmp26013;
var inst_25957 = inst_25964;
var state_25996__$1 = (function (){var statearr_26017 = state_25996;
(statearr_26017[(14)] = inst_25969);

(statearr_26017[(7)] = inst_25956__$1);

(statearr_26017[(8)] = inst_25957);

return statearr_26017;
})();
var statearr_26018_26038 = state_25996__$1;
(statearr_26018_26038[(2)] = null);

(statearr_26018_26038[(1)] = (2));


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
});})(c__24120__auto___26024,out))
;
return ((function (switch__24025__auto__,c__24120__auto___26024,out){
return (function() {
var cljs$core$async$state_machine__24026__auto__ = null;
var cljs$core$async$state_machine__24026__auto____0 = (function (){
var statearr_26019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26019[(0)] = cljs$core$async$state_machine__24026__auto__);

(statearr_26019[(1)] = (1));

return statearr_26019;
});
var cljs$core$async$state_machine__24026__auto____1 = (function (state_25996){
while(true){
var ret_value__24027__auto__ = (function (){try{while(true){
var result__24028__auto__ = switch__24025__auto__.call(null,state_25996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24028__auto__;
}
break;
}
}catch (e26020){if((e26020 instanceof Object)){
var ex__24029__auto__ = e26020;
var statearr_26021_26039 = state_25996;
(statearr_26021_26039[(5)] = ex__24029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26040 = state_25996;
state_25996 = G__26040;
continue;
} else {
return ret_value__24027__auto__;
}
break;
}
});
cljs$core$async$state_machine__24026__auto__ = function(state_25996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24026__auto____1.call(this,state_25996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24026__auto____0;
cljs$core$async$state_machine__24026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24026__auto____1;
return cljs$core$async$state_machine__24026__auto__;
})()
;})(switch__24025__auto__,c__24120__auto___26024,out))
})();
var state__24122__auto__ = (function (){var statearr_26022 = f__24121__auto__.call(null);
(statearr_26022[(6)] = c__24120__auto___26024);

return statearr_26022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24122__auto__);
});})(c__24120__auto___26024,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563735154713

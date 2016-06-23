//有发射 有绑定
//一个观察者 对应多个事件  一对多
//一个事件名字 对应一个事件池
function Event(){
    this._events = {}
}
//一个event 对应多个callback
Event.prototype.on = function (eventName,callback) {
    //有的话直接放到数组里没有的话创建
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        //一个事件名称 对应多个callback
        this._events[eventName] = [callback]
    }
};
Event.prototype.once  = function (eventName,callback) {
    
};
Event.prototype.off = function (eventName,callback) {
    var arr = this._events[eventName]
    if(arr){
        this._events[eventName] = arr.filter(function (item) {
            return item!=callback
        })
    }
}
Event.prototype.emit = function (eventName) {
    //取出除了名字外的所有参数
    var args = Array.prototype.slice.call(arguments,1);
    //取出所有callback
    var that = this;
    var arr = this._events[eventName]
    if(arr){
        arr.forEach(function (item) {
            item.apply(that,args);
        })
    }
};
// on off emit
var e = new Event();
function eat(who) {
    console.log('我饿了'+who);
}
function eat1(who) {
    console.log('我饿了1'+who);
}
e.once('我饿了', eat);
//发射多次 但是只执行一次
e.emit('我饿了','你');
e.emit('我饿了','你');
e.emit('我饿了','你');
e.emit('我饿了','你');




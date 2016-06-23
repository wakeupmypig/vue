<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app">
    <input type="text" v-model="data">
    <!--//message = hello-->
    <parent :me="message" :message2.sync="data"></parent>
</div>
<template id="tmpl">
    {{me}} <input type="text" v-model="message2">
</template>
<script src="vue.js"></script>
<script>
    Vue.component('parent',{
        template:'#tmpl',
        props:{
            'me':{
                type:[String],
                default: function () {
                    return 2000;//不需要type验证
                },
                validator: function (v) {
                    return v=='hello200'
                },
                coerce: function (v) {
                    return v+200;//在所有验证之前先进行赋值
                }
            },
            'message2':{
                twoWay:true
            }
        }
    });
    var vm = new Vue({
        el:'#app',
        data:{
            message:'hello',
            data:'world'
        }
    });
    //看组件上的属性，如果设置的属性前面有：说明是动态的，去vm上找到对应的数据  得到me = hello
    //me 在我们parent组件上
    //找到组件上props 对应的me，先默认走coerce ，如果没有coerce，并且数据没有传递走default  在依次验证
</script>
</body>
</html>
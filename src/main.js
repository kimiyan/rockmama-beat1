// alert(1111)
import './css/index.css'
import './css/index.scss'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import login from './login.vue'

$(function () { 
    $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor','yellow')
 })

//  class Person {
//      static info = {name : 'zhangsan', age : 20}
//  }
// console.log(Person.info)
// console.log(title)
// console.log(title)
var vm = new Vue({
    el : '#app',
    data : {
        msg : '123',
    },
    render :  c => c(login)
})
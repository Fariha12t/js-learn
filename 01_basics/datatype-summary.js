//1 .Primitive
//call by value 
//7 types : String,Number,Boolean,null(empty),undefined,symbol(unique),BigInt
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemo=null
let userEmail;
//to declare symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
console.log(id==anotherId);

const bigNumber=2492385853985n;

//js is dynamically typed language
//Reference (Non primitive) direct allocation in memory
//array,objects,function
const heros=["iron-man","spidy","loki"]
let myObj={
    name:"fariha",
    age:22,
}

const myfunction=function(){
    console.log("hello world");
}
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
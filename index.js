// 1. Function declaration

// var x = 6;
// a();
// b();
// console.log(x);
// function a(){
//     var x=7;
//     console.log(x);
// }
// function b(){
//     var x=8;
//     console.log(x);
// }

// 2. Window refer to global object

// var a = 6;
// x();
// function x(){
//     var a=7;
//     console.log(a);
// }
// console.log(this.a);

// 3.Closures

// function a(){
//     var b=1;
//     c()
//     function c(){
//         console.log(b);
//     }
// }
//  a();

// 4. let usage (Block Scope)

// let a=1;
// console.log(a);
// var b=2;

// 5. var have boundaries

//  let a = 1;
//  {
//   var a = 2;
//  }
// console.log(a);

// 6. Closures
// a();
// var x=1;

// function a() {
//     var x=1;

//     function b(){

//         console.log(x);
//     }
//     b()
// }
// console.log(x)

// 7.Closures

// function a(){
//     var x = 1;
//     function b(){
//         console.log(x);
//     }
//     return b;
// }
// var x = a();
// console.log(x);
// x();

// 8. Multiple closures

// function a(){
//     var x = 1;
//     function c(){
//         var r = 2;

//     function b(){
//         console.log(x,r);
//     }
//     b()
//     }
// c();
//     }
// var y = a();
// console.log(y);

// 9.setTimeout (Closures model (Fails))

// function a(){
//     for(var i = 1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     },i*1000)
// }
// }
// a();

// 10. setTimeout (Closure model - 1)

// function a(){
//     for (let i = 1;i<=5;i++){
//         setTimeout(function(){
//            console.log(i)
//         },i*1000)
//     }
// }
// a()

// 11. setTimeout (Closure model -2)

// function x(){
//     for(var i = 1; i<=5;i++){
// function a(i){

//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
//     a(i)
// }
// }
// x()

// 12. Callback Function

//    function listener(){
// let count =0, z=1 ;
// document.getElementById("Click me").addEventListener('click',function(){
//     count++
//     console.log(count)
// })
//    }
//   listener()

// 13. Callback function

// setTimeout(function(){
//    console.log("Logesh")
// },5000)
// function a(b){
//     console.log('Hi')
//     b();
// }
// a(function b(){
//     console.log('Hello')
// })

// 14. Asynchronous & Event Loop

// console.log("Start")

// setTimeout(function x(){
//    console.log("Logesh")
// },5000)

// fetch("https://www.google.com")
// .then(function api(){
//     console.log("API connected")
// })

// console.log("End")

// 15. Data Hiding

// function a(){
//     let count = 0
//     this.increment = function(){
//         count ++;
//         console.log(count)
//     }
//     this.decrement = function(){
//         count --;
//         console.log(count)
//     }
// }
// var final = new a()
// final.increment()
// final.increment()

// 16. Data hiding

// function a(){
//     var x = 1;
//     function b(){
//         x++;
//         console.log(x)
//     }
//     return b;
// }
// var final = a()
// final()
// final()

// 17. First Class Function

// let a = function(greetings){
//     return function(){
//    console.log(greetings)
//     }
// }

// let b = function(val){
//    return val;
// }
// b(a)("Hello")()

// 18. SetTimeout Trust Issue -1

// console.log("Start");
// setTimeout(function a() {
//   console.log("Logesh");
// }, 11000);

// let start = new Date().getTime();
// let end = start;
// while (end < start + 10000) {
//   end = new Date().getTime();
// }
// console.log("Bala");
// console.log("End");

// 19. SetTimeout Trust Issue -2

// console.log("Start")
// function  a(){
//     console.log("Hi")
// }

// setTimeout(a,5000)
// console.log("End")

// 20. Callback Function

// function a(){
//     let count = 0;
// document.getElementById("Click").addEventListener('click',function(){
//     count++
//     console.log(count)
// })
// }
// a()

// 30.Higher Order Function

// function a(greetings){
//     console.log(greetings)
// }

// function b(str){
//     return function ab(){
//         str('Hi')
//     }
// }
// let final = b(a)()
// console.log(final)

// 30.Higher Order Function - 2nd type

// let a = function(){
//   console.log("Hi")
// }

// let b = function(a){
//     a()
// }
// b(a)

// 31. Functional Programming

// const radius = [4,2,15,6,3]
// const area = function(radius){
//     return Math.PI*radius*radius
// }
// const circumference = function(radius){
//     return 2*Math.PI*radius
// }
// const diameter = function(radius){
//     return 2*radius
// }
// //Manual loop method

// const calculate = function(radius,logic){
//     let output =[]
//     for(let i =0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(calculate(radius,area))
// console.log(calculate(radius,circumference))
// console.log(calculate(radius,diameter))

// // Map method

//  console.log(radius.map(area))
//  console.log(radius.map(circumference))
//  console.log(radius.map(diameter))

//Functional programming similar to map

// const radius = [5,3,1,4,9]
// const area = function(radius){
//     return Math.PI*radius*radius
// }
// const circumference = function(radius){
//    return 2*Math.PI*radius
// }
// const diameter = function(radius){
//     return 2*radius
// }

// Array.prototype.calculate = function(logic){
//     let output = []
//     for(let i = 0;i<this.length;i++){
//         output.push(logic(this[i]))
//     }
//     return output
// }
// console.log(radius.calculate(area))

// 32. filter

// const arr = [5,1,3,2,6]
// console.log(arr.filter((item ) => item%2==1))

// 33.not reduce method (Manual method)

// const arr = [5,1,3,2,6]
// function a(arr){
//    let sum = 0;
//    for(let i = 0;i<arr.length;i++){
//        sum = sum + arr[i]

//    }
//    return sum
// }
// console.log(a(arr))

// 34. reduce method to sum the amount

// const arr = [ 3,5,1,2,6]
// const final = arr.reduce((acc,curr)=>{
//     acc = acc + curr;
//     return acc;
// },0)
// console.log(final)

// 35. reduce method to find the max

// const arr = [3,5,1,2,6]
// const final = arr.reduce((max,curr) => {
//     if(max<curr){
//       max = curr
//     }
//     return max
// })
// console.log(final)

// 36. map method using array of objects

//  const profile = [
//      {firstName : "Logesh" , lastName :"waran"},
//      {firstName : "Kousik" , lastName :"kumar"},
//      {firstName : "Harish" , lastName :"poori"},
//  ]
//  const final = profile.map((item)=>item.firstName +" " + item.lastName)
//  console.log(final)

// 37.reduce method to find occurences

// const profile = [
//          {firstName : "Logesh" , lastName :"waran", age :20},
//          {firstName : "Kousik" , lastName :"kumar" , age :25},
//          {firstName : "Harish" , lastName :"poori", age :30},
//          {firstName : "Hari" , lastName :"prasath", age :30},
//      ]

//      const final = profile.reduce((acc,curr)=>{
//          if(acc[curr.age]){
//              acc[curr.age]++
//          }
//          else{
//              acc[curr.age]=1
//          }
//          return acc;
//      },{})
//      console.log(final)

// 38. Chaining in filter and reduce

// const profile = [
//     {firstName : "Logesh" , lastName :"waran", age :20},
//     {firstName : "Kousik" , lastName :"kumar" , age :25},
//     {firstName : "Harish" , lastName :"poori", age :30},
//     {firstName : "Hari" , lastName :"prasath", age :30},
// ]

// const final = profile.filter(item=>item.age>25).map(item=>item.firstName)
// console.log(final)

// 39. Filtering and mapping in reduce

// const profile = [
//     {firstName : "Logesh" , lastName :"waran", age :20},
//     {firstName : "Kousik" , lastName :"kumar" , age :25},
//     {firstName : "Harish" , lastName :"poori", age :30},
//     {firstName : "Hari" , lastName :"prasath", age :30},
// ]
// const final = profile.reduce((acc,curr)=>{

//     if(curr.age>25){
//        acc.push(curr.firstName);
//     }
//     return acc
// },[])
// console.log(final)

// 40.call,apply and bind method

// let name1 = {
//     firstName : "Logesh",
//     lastName : "waran",

// }
//  let fullName = function(city, state){
//     console.log(this.firstName+" "+this.lastName + " " + "from" + " " + city)
// }
// let name2 = {
//     firstName : "Kousik",
//     lastName : "kumar",
// }

// fullName.call(name2,"Karur","Tamilnadu")
// fullName.apply(name2,["Chennai","Tamilnadu"])

// let final = fullName.bind(name1,"Cbe")
// final()

// 41. Currying function in bind method

// let multiply = function (a,b){
//     console.log(a*b)
// }

// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(3)

// 42. Currying function in Closures

// let multiply = function(a){
//     return function(b){
//        return function(c){
//             console.log(a,b,c)
//         }
//     }
// }
// multiply(2)(3)(4)

// 44. Local storage

// localStorage.setItem("Name1","Logesh")
// localStorage.setItem("Name2","Kousik")
// console.log(localStorage.getItem("Name1"))
// localStorage.removeItem("Name2")
// console.log(localStorage.getItem("Name2"))
// const obj = {StudentName:"Bala",age:20}
// localStorage.setItem("Student Name",JSON.stringify(obj))
// console.log(JSON.parse(localStorage.getItem("Student Name")))
// const arr = [3,5,12,6]
// localStorage.setItem("Student Profile",JSON.stringify(arr))
// console.log(JSON.parse(localStorage.getItem("Student Profile")))

// 45.Backticks

// const fullName = 'Logesh'
// const id = 1;
// console.log(`
// Name is : ${fullName}
// Id id : ${id}
// `)

// 46. Without declaring var
// percentage = 75.44444;
// final = Math.round(percentage)
// console.log(final);

// 47. falsy value

// 1.Undefined
// 2.null
// 3.0
// 4.""
// 5.NaN

// 48. Switch with role based

// var login = (name,role)=>{
//     switch(role){
//         case "admin":
//             return `${name} is admin with full access`
//             case "subadmin":
//                 return `${name} is subadmin with partial access`
//                 case "user":
//                     return `${name} with user account only`
//             default:
//                 return `${name} with no access`
//         }
// }
// var final = login("Logesh","subadmin")
// console.log(final);

//49. Scope Chain

//  var a = function(){
//     let x =1;
//  var b = function (){
//      let y = 2;
// var c = function(){
//      console.log(x,y);
//    }
//    c()
//  }
//   b()
// }
//  a()

// 50. this keyword

//  console.log(this);
//    var x = 2
//  function a() {
//     var x = 1
//      console.log(this.x)
//      console.log(x)
//  }
//  a()

// 51. Arrays

// const cities1 = ["Chennai", "Mumbai", "Delhi", "Banglore", "Kolkata"];
// const cities2 = new Array(
//   "Uttar",
//   "Tamilnadu",
//   "Kerala",
//   "Karnataka",
//   "Rajastan"
// );
// cities1.pop();
// console.log(cities1);
// cities2.shift();
// console.log(cities2);
// cities1.push("Karur");
// console.log(cities1);
// cities2.unshift("Coimbatore");
// console.log(cities2);
// console.log(Array.from("Logesh"));
// const final = ["Bala", "Hemang", "Nishanth", "Mohan"];
// console.log(final.indexOf("Nishanth"));

// 52.Every method in array(1st method)

// const num = [2,4,6,8]
// const final = num.every(item=>item%2==0)
// console.log(final);

// 53. Every method in array(2nd method)

// const numbers = [5,3,1,7,9]
// const isEven = (item)=>{
//     return item %2 ==1
// }
// const final = numbers.every(isEven)
// console.log(final);

// 54. Fill method in array

// const arr = [4,7,0,13,5]
/*
First parameter to set the value or string.
 Second parameter to set the start inclusive.
 Third parameter to set the end value exclusive
*/
// const final = arr.fill(2,1,4)
// console.log(final)

// 55. Slice and Splice method

// const names = ['Logesh','Kousik','Hari','Harish','Bala']
// console.log(names.slice(1,3));
// names.splice(1,2)
// console.log(names)

// 56. Objects

// const obj = {
//     firstName : 'Logesh',
//     age : 20 ,
//     role : 'Student'
// }
//One method
//  console.log(obj.firstName)
//Another method
// console.table(obj["firstName"])

// 57. Methods and objects

// const profile = {
//     firstName : 'Logesh',
//     lastName : 'waran',
//     role : 'Admin',
//     loginCount : 32,
//     facebookSignedIn : true,
//     courseList : [],
//     buyCourse : function(course){
//          this.courseList.push(course)
//     },
//     getCourseCount : function(){
//         console.log(`${this.firstName} is enrolled in total of ${this.courseList.length} courses`);
//     }
// }
// profile.getCourseCount()
// profile.buyCourse("Javascript")
// console.log(profile.courseList)
// profile.getCourseCount()
// profile.courseList[1]='React'
// console.log(profile.courseList)
// profile.getCourseCount()

// 58.Function reference

// var a = function(){
//     return 'Hi'
// }
// var b = a;
// console.log(b())

// 59.For loops

// const states = ['Tamilnadu','Karnataka','Rajasthan','Bengal','Assam',1947,2001,'Mumbai','Uttar']
// for(let i = 0 ; i <states.length;i++){
//     if(typeof states[i]!=='string')
//     continue;
//     console.log(states[i]);
// }

// 60. While loops

// const states = ['Tamilnadu','Karnataka','Rajasthan','Bengal','Assam',1947,2001,'Mumbai','Uttar']
// let i =0;
// while(i<states.length){
//     if(typeof states[i]!=='string'){
//         i++
//     continue;
//     }
//     console.log(states[i]);
//     i++

// }

// 61. do while loop

// const states = ['Tamilnadu','Karnataka','Rajasthan','Bengal','Assam',1947,2001,'Mumbai','Uttar']

// let i =0;
// do{
//     if(typeof states[i]!=='string'){
//         i++;
//         continue;
//     }
//     console.log(states[i]);
//     i++
// }

// while(i<states.length)

// 62. ForEach

// const states = ['Tamilnadu','Assam',1947,'Bengal']
// states.forEach(item =>console.log(item));

// 63.for of loop

// const num = [1,2,3,4,5]
// for(const final of num){
//     console.log(final);
// }

//64. for in loop

// const profile = {
//     1 : 'Logesh',
//     2 : 'Kousik',
//     3 : 'SreeRam',
//     4 : 'Hari',
//     5 : 'Harish'
// }
// for(let final in profile){
//     console.log(profile[final]);
// }

// let a = function(b){
//     return b;
// }
// a(function b(){
//     console.log("Hello");
// })()

// 1.Concat method

// let str1 = 'Js';
// let str2 = 'React';
// let str3 = 'React Native';
// let result = `${str1} ${str2} ${str3}`;
// console.log(result);

// 2.Reverse method

// const reverse = (str)=>{
//   let wordReverse ='';
//   for(let i = str.length-1; i >= 0; i--){
//       if (i === 0) {
//           wordReverse += str[i];
//       } else {
//           wordReverse += str[i]+",";
//       }
//   }
//   return wordReverse
//   ;
// }

// console.log(reverse('Javascript'))

// 3. Fill Method

// let array = ["hi", "hello", "JS", "React"];
// for (let i = 0; i < array.length; i++) {
//     if(array[i] === "JS" || array[i] === 'React')
//     array[i] = 'filled';
// }
// console.log(array);

// 4.indexOf method

// let index = 0;
// let target = 'c';
// let str = ['a', 'b', 'c', 'd'];

// const findIndex = ()=>{
//   for(let val of str) {
//     if(val === target){
//     return index;
//   }
//   index++;
//  }
// }

// console.log(findIndex());

// 5. Filter method

// const arr = [1,2,3,4,5]

// const filter = (arr, cb) => {
//     let res = [];
//     for (let i=0; i< arr.length; i++) {
//       if(cb(arr[i])) {
//           res.push(arr[i])
//       }
//     }
//     return res;
// }

// console.log(filter(arr, function(item) {
//     return item % 2 === 0
//     }))

//6.Number pattern

// const pattern = (n,fn)=>{
//     let count =1;
//     for(let i =1;i<=n;i++){
//         let string =''
//         for(let j=1;j<=i;j++){
//             string+=count;
//             count = fn(n,count)
//         }
//         console.log(string)
//     }
// }
// pattern(4,function(n,count){
//     return count +2;
// })

// 7.Reduce and reduceRight pattern

// const num = [1,2,3,4,5]
// const reduce = (x,type,cb,acc) => {
//     for(let i = (type === 'left' ? 0 : x.length - 1);
//     (type === 'left' ? i < x.length : i>=0);
//     (type === 'left' ? i++ : i--)){
//         if(parseInt(x[i]))
//             acc= cb(acc,x[i])
//     }
//     return acc
// }
// console.log(reduce(num,"left",function(acc,curr){
//     return  acc + curr;
// },1))

//Median of array

// let findMedianSortedArrays = function (nums1, nums2) {
//   let sortedArray = nums1.concat(nums2).sort((a, b) => a - b);
//   let middle = Math.floor(sortedArray.length / 2);
//   if (sortedArray.length % 2 === 0) {
//     return ((sortedArray[middle - 1] + sortedArray[middle]) / 2).toFixed(5);
//   }
//   return sortedArray[middle].toFixed(5);
// };
// console.log(findMedianSortedArrays([1,3],[2,4]));

// Using callback in median

// const median = (num1,num2,cb) => {
//      let sortArray = num1.concat(num2).sort((a,b) => a-b )
//      let middle = Math.floor(sortArray.length/2)
//      if( cb(sortArray) ){
//           return ((sortArray[ middle - 1] + sortArray [middle])/2) .toFixed(5)
//      }
//      return sortArray[middle].toFixed(5)
// }
// console.log(median([1,3],[2],function(sortArray){
//     return sortArray.length % 2 === 0
// }))

// let regExpMat = function(str, pattern) {
//     if (!pattern || !pattern.length)
//         return !Boolean(str.length);
//     const firstMatch = str.length && (pattern[0] === str[0] || pattern[0] === '.');
//     if (pattern.length > 1 && pattern[1] === '*') {
// 		const condition1 = regExpMat(str, pattern.substring(2));
// 		 const condition2 = firstMatch && regExpMat(str.substring(1), pattern);

//          return condition1 || condition2
//     }
//      else {
//         return firstMatch && regExp(str.substring(1), pattern.substring(1));
//     }
// };
// console.log(regExpMat('ab','.*'));

// let regExpMat = (str,pattern) => {
//     if(!pattern)
//     return !Boolean(str.length)
//     const fstMatch = str.length && (pattern[0] === str[0] || pattern[0] === '.')
//     if(pattern.length>1 && pattern[1] === '*'){
//         const condition1 = regExpMat(str, pattern.substring(2));
//         const condition2 = fstMatch && regExpMat(str.substring(1),pattern)
//         return condition1 || condition2
//     }
//     else
//     return fstMatch && regExpMat(str.substring(1), pattern.substring(1))

// }
// console.log(regExpMat('a',''))

// localStorage.clear;

let listener = () => {
  let count = 0;
  document.getElementById("Click").addEventListener("mouseover", function () {
    count++;
    console.log(count);
  });
};

listener();

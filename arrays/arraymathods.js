// var a =new function(ka){};
// var b = typeof(a);
// console.log(Array.isArray(a));//false
// console.log(typeof(a));//object
// console.log(b);//object


// const a=[5,7,3,9,36];
// let res=a.forEach((item,index)=>index)//undefinde because foreatch wont return anything we can do operations on eatch elemnt in arry
// console.log(res);


// sorting array elemnts 

// var point = [30, 200, 2, 3, 15, 10];
// var b=point.sort((a,b)=>{return b-a});
// console.log(b);
// var a=[3,45,767,5,4];
// console.log(a.sort(function(a,b){
//   return a-b;
// }));

// console.log(x===undefined);
//  var x=3;

// console.log(x===undefined);//throw errors let variable not hoisted 
//  let x=3;


//  baz(); // TypeError: baz is not a function
//  var a="u"
//  var b=NaN;
//  var c=8
//  var d=b+c;
//  console.log(d);
//  console.log(typeof c);
//  // console.log();


// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700','p','8','a',40, 'p',79,1, 5, 200];

// // console.log('stringArray:', stringArray.sort());//[ 'Beluga', 'Blue', 'Humpback' ]
// // console.log('numberArray:', numberArray.sort((a,b) =>{return b-a}));

// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('mixedNumericArray:', mixedNumericArray.sort((a,b) =>{return a-b}));

// var a=[4,4,5,7];
//  let b=a.forEach((item,index)=>{console.log(item*index)});//0 4 10 21
//  let c=a.forEach((item,index)=>{return (item*index)});
// console.log(b);//undefined
// console.log(c);//undefined


// [7,9,3,2].forEach((i,k,l)=>{console.log(i,k,l)})
// 7 0 [ 7, 9, 3, 2 ]
// 9 1 [ 7, 9, 3, 2 ]
// 3 2 [ 7, 9, 3, 2 ]
// 2 3 [ 7, 9, 3, 2 ]


// let b= "i ama ";
// console.log(typeof(b));


// const c ={a:"e",b:"c",v:"j",9:"o"};
// console.log(Object.keys(c)); //[ '9', 'a', 'b', 'v' ]



// const a=["sesha" , "sai" , "kumar"];
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }


// var emp=new Object();
// emp.id=33;
// emp.name="sai";
// emp.salary=10000;
// console.log(emp.id+" "+emp.name);//33 sai
// console.log(emp);//{ id: 33, name: 'sai', salary: 10000 }




// var a =9;
// var b =45;
// var s=a+b;
// console.log(s);


// even and odd numbers finding using for loop

// let num=18;
// for(i=1; i<=num; i++){
//   if(i%2 == 0){
//     console.log(i +" is even number ");
//   } else {
//     // console.log(i +" is not  a odd number ");
//   }
// }
//  cheking number is even or odd 
    //  let data = 18;
    //  let res = data % 2 == 0 ? `${data} is even ` : `${data} is odd `;
    //  console.log(res);


// var a=10;
// var p=0,s=0;
// for (i=0 ; i<=a ;i++){
//   if(i%2==0){
//     p=p+1;
//     console.log( i + "is prime number ");
//   }else {
//     s=s+1;
//     console.log( i+  " is odd number ");
//   }
// }
// console.log("total prime numbers "+p);
// console.log("total odd numners" +s);


// let  a=10;
// let p=0,s=0;
// for (i =0; i<=a ; i++){
//  if(i%2==0){
//   console.log( i  +"  is even number");
//   p++;
// }
// else {
//   console.log(i +"  odd number ");
//   s++;
// }
// }
// console.log("\n");
// console.log(p);
// console.log("\n");
// console.log(s);

//  var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'ContentType': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


// var b=10;
// var a=5;
// for (i=0; i<=b; i++){
//   if(i%2==0){
//     console.log("sai babai ==> i love you anvitha");
// }
//   else
//   {
//   console.log("anvitha ==> thank you  babai ");

// }
// }



// var a =10
// for(i=0;i<=a; i++){
//   if (i%2==0){
//   console.log("i love you anvitha");
// } else {
//   console.log(" sai babai i love you tooo");
// }
// }


// var s=0;
// var t =0;
// for (i=0 ; i<=10 ;i++){
//   if((i%2)==0){
//     s=s+1;
//     console.log( i + " - even");
//   }
//   else
//   {
//     t=t+1;
//   console.log(i+" - odd");

// }}

// console.log("therer r total "+ s +" even numbers");
// console.log("there r total "+ t + " odd numbers");



// findniig total of all numbers until given number 
// var a=10;
// var s=0;
// for (var i = 0; i<=a; i++){
// s+=i;
// }
// console.log(s);


//  finding total of array numbers 
// usingtreditional for loop

// let a=[3,7,8,4,2];
// var s=0;
//    for(i=0; i<a.length; i++){
//        s += a[i]
//    }
//    console.log(s);


// using reduce method 

// let a=[3,7,8,4,2];
// let res=a.reduce((acc,cuurentvalue)=>acc+cuurentvalue,0);
// console.log(res);


// old method 
//  var s=0;
//  var i =0;
//  var a=[3,7,8,4,2];
//  var p=i+1;
//  for(i=0; i<a[p]; i++){
//    console.log(a[i]);
//   s=s+a[i];
//  }
//  console.log(s);





// // array mathods


// var a=[1,2,3];
// var b=[ 3,3,7];
// var c = a.concat(b);
// console.log(c);


//  // copyWithin    **********//
// copies elemnts with in the array 

// var e=[83,72,98,45,97,67,89];
// let p=e.copyWithin(1,4,6)
// // f=e.copyWithin(2,3,5);
// // console.log(f);
// console.log(p);


// b=[11,12,38,4,4,6,8];
// var d=b.copyWithin(3);//[ 11, 12, 38, 11,12, 38,  4]
// console.log(d);

// // ***********     **********
// entries
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();
// console.log(f); //Array Iterator {} ->empty obj
// for (i of f) {
// console.log(i); //[0, 'Banana'],..like this key value pair using fo of loop
// }

// for ([index,item] of f) {
//   console.log(index); //0 1 2 3..-> line by line comes..like this key value pair using fo of loop
//   console.log(item); //bananna ,orange ,...-> line by line comes..like this key value pair using fo of loop
//   }



// check every elment in array pases a test or not 
// var e=[5,3,99,91];
// function myfunction(e) {
//   return e%2!=0;
// }
// f=e.every(myfunction);
// console.log(e.every(myfunction)); //true
 
// // in single line we can do this 
// let res=[5,3,99,91].every(i=>(i%2)!=0) //true 
// console.log(res);//true

// var isEven = Num =>  Num % 2 === 0 ;
//  var a = [6,2,5,8,3];
//  var b = a.every(isEven);
//  console.log(b);    //true

// var a=[19, 50, 89, 130, 44].every(x =>(x >= 10));
// console.log(a); //true


//  var d=[54,63,92,57,87]
//  var e=[83,72,72,97,null,"h","lk"];
//  console.log(d.fill ("mackbook",2,3));


//  ***********     **********//

// fill
// var a=[2,3,9,36];
// // console.log(a.fill()); //undefined
// console.log(a.fill(6,1)); // [ 2, 3, 6, 6 ]
// var arr = [5,8];
// console.log(arr.fill(4));

// var arr = [1];
// console.log(arr.fill.call({ length: 4 }, 8));

// var arr=[3,4];
// var b= arr.fill(99);
// arr[0]=77;
// console.log(arr);

// let arr = Array(4).fill({name:"sai"})
// console.log(arr);
// arr[0].name="sesha"; //once chaneg name total array values wil change
// console.log(arr);
// filter
//  var age=[83,5,8,6,9,45,97]
//  function even(age) {
//    return age%2==0;
//  }
// console.log(age.filter(even));

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, name) {
//   return arr.filter(function(item) {
//     console.log(item);
//     console.log(item.toLowerCase().indexOf(name.toLowerCase()));
//       return item.toLowerCase().indexOf(name.toLowerCase()) !== -1
//   })
// }

// console.log(filterItems(fruits, 'ap'))
// const words = ['sai', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word === "sai");

// console.log(result);
// console.log(words);
// console.log('apple'.toLowerCase().indexOf('ap'.toLowerCase()));


// ***********     **********//

// finde
// var age=[7,72,12,5,2,45,97];
// function myfunction(age){
// return age<4;
// }
// console.log(age.find(myfunction));
// console.log([7,2,3,5,79,2].find((age)=>{return(age<4);}));
// var a=([7,2,3,5,,21,79,2].find((age)=> (age>18)));
// console.log(a);

// ***********     **********//

// findIndex
// var age=[3,8,72,98,5,9,45,97];
// function myfunction(age) {
//  return age>=7;
// }
// console.log(age.findIndex(myfunction));

// *********** flat()    **********//
// The flat method removes empty slots in arrays:

// const arr = [1, 2, [3,,[[5]], 4]];
// var b=arr.flat(Infinity);
// console.log(b);
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));
// // /
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat());
// const arr5 = [1, 2,,5,,7,,8,,,9 , 4, 5];
// console.log(arr5.flat());


// var fruits = ["apple",6,3,,"orange", "cherry"];
// var a=[2,3,4,5];
// fruits.forEach(function(i,k,a){console.log(i*2,k)});

// function myFunction(item, index) {
//   console.log(item+":"+index);

// [7,9,3,2].forEach((i,k,l)=>{console.log(i,k,l)})


// var  a =[3,4,5,1,99];
// var c = a.includes(9);
//  console.log(c);

//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  var n = fruits.includes("Mango");
// console.log(n);

// var a=[8,9,3,73,2,82];
// var s=a.indexOf(82);
// console.log(s);


// var age=[8,72,98,5,9,6,98,8,45,97];
// var n=(function (value,index,age) {
//    console.log(age.indexOf(value)== index);
// return 1;
// });
// console.log(n);
// console.log(age.indexOf(98));


//  var a= [3,4,7,98,03,56,27];
// var b=a.indexOf(98);
// console.log(b);


// var a= [8,3,7983,8,"",'@',"/", , 0];
// var b=Array.isArray(a);
// console.log(b);
// console.log(a.constructor);
// console.log(typeof(a));


// var array=['s','a','i','k','k','u','m','a','r'];
// // var s=[3,9,6,7,7,8,5,3,7,2];
// // console.log(s.lastIndexOf(3,9));
// // console.log(array.length);
// console.log(array.join());

//  var array=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha'];
// console.log(array.lastIndexOf('sai',7));

// let a=[4,6,8,4,2,5,7,4];
// console.log(a.lastIndexOf(2,3));


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join();
// console.log(energy);
//  var x=[8,5,8,9,3];
//  console.log(x.constructor);
//  console.log(typeof(x));
//  var a=x.join("-");
//  console.log(a);
//  console.log(typeof(a));
//  console.log(a.constructor);

// var a=['s','a','i','k','k','u','m','a','r'];
// var b=a.pop();
// console.log(b);
// console.log(a);
// console.log(a.push("p"));
// console.log(a);
// var b = ["Audi", "Mazda", "BMW", "Toyota"];
// var a=[3,4,5,6];
// console.log(b.valueOf());
// console.log(b.join(","));
// console.log(b.toString());

// var  array1 = [1, 4, 9, 16,98,8];
// // pass a function to map
// var a=array1.map((s)=>{return (s*2);});
// console.log(a);

// // expected output: Array [2, 8, 18, 32]

// //forEach
// let a=[7,92,638];
// let b=a.forEach((e)=>{console.log(e+"hi")})
// console.log(b);
// console.log(typeof(a));
// console.log(a);

// filter
// [7,3,4,6,7,9,3].filter((g)=>{if(g%2==0){console.log(g);}})
// var a=[7,3,4,6,7,9,3].filter((g)=>{return (g%2==0)});
// console.log(a);

// find
// var a=[{name:"A"},
//       {name:"B",age:23, fullname :function(){return this.name}},
//        {name:"C"}];

// var b=a.find((item)=>{return item.name=="B" } )
// console.log(b);

// reduce
// var h=[1,2,6].reduce(((i,j)=>{return i+j }),6)//firstitem,lastitem,arraylength-1,totalarry
// console.log(h);

//  var a=['s','a','i'];
//  var b=a.push('u',98);
//  console.log(b);
//  console.log(a);
//  var c=a.pop();
//  console.log(c);
//  console.log(a.pop());
//  console.log(a);


//  var array=['sai','kumar','sesha',4,"@","&","|","1!"];
//  console.log(array);
// console.log(array.reverse());
// console.log(array[2]);
// console.log(array);


// var  array1 = [1, 2, 3, 4];
// var  adding = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(adding,2));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

// var numbers = [175, 50, 25];
// var a= numbers.reduceRight(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(a);


// var array=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha'];
// var b=array.shift();
// console.log(array);
// console.log(b);


// var a=[9,4,2,36,3,2];
// var b= a.shift();
// console.log(b);
// console.log(a);


// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(-2,-1);
// console.log(citrus);
// var a=[9,4,2,36,3,2];
// var b= a.slice(1,2);
// console.log(b);
// console.log(a);
// //
// var a=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha1'];
// var b=(a.slice(1,2));
// console.log(a);
// console.log(b);


// var a=[9,4,2,36,3,2];
// var b= a.splice(-4,1);
// console.log(b);
// console.log(a);

//  var age=[3,7,9,,2,77,31,5];
//  function myfunction(age) {
//    return age%2==0;
//  }
// console.log(age.some(myfunction));


// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // expected output: Array [1, 100000, 21, 30, 4]



// let a=[9,4,5,3,2];
// console.log(a.sort());

// var array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// console.log(array.sort());

//  var array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// var b=(array.splice(2,4));
// console.log(b);

// var a=[33,44,55,66,77];
// // var b =a.splice(2,3);
// // console.log(b);
// // console.log(a);
// function mynumbers(){
//   a.splice(2,0,99,66);
//   console.log(a);
// }
// mynumbers()
// var b = a.splice(2,0,6,9);
// console.log(b);


// console.log(b);
// console.log(array);
// d= array.pop();
// console.log(array);
// console.log(array);



// var b=[];
// var a=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// var b=a.sort();
// console.log(b);

// var a= ["a","b","c","d","f","sailuamau"]
// var f =a.toString()
// console.log(f);


// var array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// var b=array.unshift("p");
// console.log(array),console.log(array.sort());
// console.log(b);

// var array=['s','f','g','e'];
// console.log(array.unshift('i'));


// function Counter(){
//     var counter =0;
//     setTimeout(() => {
//         var innerc=0;
//         counter +=1;
//        console.log("couter: "+counter);
//        setTimeout(() => {
//            counter =+1;
//            innerc +=1;
//            console.log("counter: "+counter+" inner c: "+innerc);
//        }, 2000);

        
//     }, 5000);
// }

// Counter();
// var users={id:"1",name:"sesha1",city:"hyd",state:"ap"};
// console.log(users.constructor);
// console.log(typeof(users));
//  var b= Object.keys(users);
//  console.log(b);


// var a=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// var v= a.valueOf();
// console.log(v);

// var a=[3,5,7,8,"h"];
// console.log(a.valueOf());

// var a=[3,5,7,8];
// console.log(a[2]);

// var fruits = [6,9,2,3];
// var f = fruits.keys();
// for (var s of f) {
//   console.log(s);
// }



// var sum=0;
// var age=[8,72,98,5,9,45,97];
// function myfunction(age) {
//   return sum+=age;
// }
// console.log(age.forEach(sum));


// var sai=[
//       {name :'sesha',
//          hight : 5.6,
//          age: 25,
//           weight: 60,
//         colour: "whight"
//       },
//         {
//         name :"sesha",
//         hight: 5,
//         age: 26,
//         weight:65,
//         colour:"blue"
//         },
//         {
//   name:"sai",
//   hight:6,
//   age:27,
//   weight:66,
//   colour:"skyblur"
// }]
//       for ( i = 0; i < sai.length; i++) {
//       // if (sai[i].colour=="skyblur") {
//         console.log(sai[i].hight+","+sai[i].age);
//       }
//       }

// var d= new Date();
// // var n= d.getHours();
// // var c=d.getFullYear();
// // console.log(n,c);
// console.log(d.getHours());


// var sai="ivanika is coming from the us and she is look damn";
// console.log(sai.replace((/is/gi,"hai")));


// function mul(n){
// var x=0;
//  for(i=1;i<=n;i++){
//   var y=n*(n+1);
//     x=y+x;
// }
//   console.log(y);
//   return "";
// }
// mul(4)
// function num(n){
//   var s=[];
//   for(i=1; i<=n; i++){
//    var y=s.reduce((a,b)=>{return a+b});
//     }
//   }
// }

// var a=[2,4,3,8,9,10];
// function even(a){
//   return a%2==0;
// }
// var b=a.filter(even);
// console.log(b);


// var a=[1,2,3,4,5];
// var b=a.join("111");
// console.log(b);
// console.log(a.splice());


// var a=[3,2,4,5,7,8,1,9];
// var b=a.toString();
// var b= a.fill(6,0,1);
// var b=a.slice(1,3);
// console.log();


// var a=["a","b","c","d"];
// var b=a.reduce((a,b)=>{
//   return a+b;
// });
// var t= typeof(b)
// console.log(b);

// Array.prototype.myUcase = function() {
//   var i;
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// function myFunction() {
//   var fruits = ["hyd","bangalore","ap","tn"]
//   fruits.myUcase();
//   console.log(fruits);
// }
// myFunction()


// var arr=new Array ("sai","kumar","super");
// for(i=0; i<arr.length;i++){
//   console.log(arr[i]);
// }


// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

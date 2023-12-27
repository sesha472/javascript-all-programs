// let a =new function(ka){};
// let b = typeof(a);
// console.log(Array.isArray(a));//false
// console.log(typeof(a));//object
// console.log(b);//object




// const a=[5,7,3,9,36];
// let res=a.forEach((item,index)=>index)//undefinde because foreatch wont return anything we can do operations on eatch elemnt in arry
// console.log(res);


// sorting array elemnts 

// let point = [30, 200, 2, 3, 15, 10];
// let b=point.sort((a,b)=>{return b-a});
// console.log(b);
// let a=[3,45,767,5,4];
// console.log(a.sort(function(a,b){
//   return a-b;
// }));

// console.log(x===undefined);
//  let x=3;

// console.log(x===undefined);//throw errors let letiable not hoisted 
//  let x=3;


//  baz(); // TypeError: baz is not a function
//  let a="u"
//  let b=NaN;
//  let c=8
//  let d=b+c;
//  console.log(d);
//  console.log(typeof c);
//  // console.log();


// let stringArray = ['Blue', 'Humpback', 'Beluga'];
// let numericStringArray = ['80', '9', '700'];
// let numberArray = [40, 1, 5, 200];
// let mixedNumericArray = ['80', '9', '700','p','8','a',40, 'p',79,1, 5, 200];

// // console.log('stringArray:', stringArray.sort());//[ 'Beluga', 'Blue', 'Humpback' ]
// // console.log('numberArray:', numberArray.sort((a,b) =>{return b-a}));

// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('mixedNumericArray:', mixedNumericArray.sort((a,b) =>{return a-b}));

// let a=[4,4,5,7];
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
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }


// let emp=new Object();
// emp.id=33;
// emp.name="sai";
// emp.salary=10000;
// console.log(emp.id+" "+emp.name);//33 sai
// console.log(emp);//{ id: 33, name: 'sai', salary: 10000 }




// let a =9;
// let b =45;
// let s=a+b;
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


// let a=10;
// let p=0,s=0;
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

//  let http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'ContentType': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);


// let b=10;
// let a=5;
// for (i=0; i<=b; i++){
//   if(i%2==0){
//     console.log("sai babai ==> i love you anvitha");
// }
//   else
//   {
//   console.log("anvitha ==> thank you  babai ");

// }
// }



// let a =10
// for(i=0;i<=a; i++){
//   if (i%2==0){
//   console.log("i love you anvitha");
// } else {
//   console.log(" sai babai i love you tooo");
// }
// }


// let s=0;
// let t =0;
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
// let a=10;
// let s=0;
// for (let i = 0; i<=a; i++){
// s+=i;
// }
// console.log(s);


//  finding total of array numbers 
// usingtreditional for loop

// let a=[3,7,8,4,2];
// let s=0;
//    for(i=0; i<a.length; i++){
//        s += a[i]
//    }
//    console.log(s);


// using reduce method 

// let a=[3,7,8,4,2];
// let res=a.reduce((acc,cuurentvalue)=>acc+cuurentvalue,0);
// console.log(res);


// old method 
//  let s=0;
//  let i =0;
//  let a=[3,7,8,4,2];
//  let p=i+1;
//  for(i=0; i<a[p]; i++){
//    console.log(a[i]);
//   s=s+a[i];
//  }
//  console.log(s);





// // array mathods


// let a=[1,2,3];
// let b=[ 3,3,7];
// let c = a.concat(b);
// console.log(c);


//  // copyWithin    **********//
// copies elemnts with in the array 

// let e=[83,72,98,45,97,67,89];
// let p=e.copyWithin(1,4,6)
// // f=e.copyWithin(2,3,5);
// // console.log(f);
// console.log(p);


// b=[11,12,38,4,4,6,8];
// let d=b.copyWithin(3);//[ 11, 12, 38, 11,12, 38,  4]
// console.log(d);

// // ***********     **********
// entries
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let f = fruits.entries();
// console.log(f); //Array Iterator {} ->empty obj
// for (i of f) {
// console.log(i); //[0, 'Banana'],..like this key value pair using fo of loop
// }

// for ([index,item] of f) {
//   console.log(index); //0 1 2 3..-> line by line comes..like this key value pair using fo of loop
//   console.log(item); //bananna ,orange ,...-> line by line comes..like this key value pair using fo of loop
//   }

// check every elment in array pases a test or not 
// let e=[5,3,99,91];
// function myfunction(e) {
//   return e%2!=0;
// }
// f=e.every(myfunction);
// console.log(e.every(myfunction)); //true
 


// // in single line we can do this 
// let res=[5,3,99,91].every(i=>(i%2)!=0) //true 
// console.log(res);//true


// let isEven = Num =>  Num % 2 === 0 ;
//  let a = [6,2,5,8,3];
//  let b = a.every(isEven);
//  console.log(b);    //true

// let a=[19, 50, 89, 130, 44].every(x =>(x >= 10));
// console.log(a); //true


//  let d=[54,63,92,57,87]
//  let e=[83,72,72,97,null,"h","lk"];
//  console.log(d.fill ("mackbook",2,3));


//  ***********  fill()   **********//

// fill
// let a=[24,33,9,36];
// // console.log(a.fill()); //undefined

// console.log(a.fill(6,1)); // [ 2, 6, 6, 6 ]
// let arr = [5,8];
// console.log(arr.fill(4));

// creating object with index as keys fill value as properties 
// let arr = [1];
// console.log(arr.fill.call({ length: 4 }, 8));
//{0: 8, 1: 8, 2: 8, 3: 8, length: 4}

// let arr=[3,4];
// let b= arr.fill(99);
// arr[0]=77;
// console.log(arr);


// let arr = Array(4).fill({name:"sai"})
// console.log(arr);//array of 4 objects  [{…same key value pairs}, {…}, {…}, {…}]
// arr[0].name="sesha"; //if one value changed  total array object values wil change
// console.log(arr);//all values become sesha 
// filter
//  let age=[83,5,8,6,9,45,97]
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


// ***********  finde   **********//

// finde first elemnt in arry that pases a test return that elemnt 
// let age=[7,1,72,12,5,2,45,97];
// function myfunction(age){
// return age<4;
// }
// console.log(age.find(myfunction));//1

// console.log([7,2,3,5,79,2].find((age)=>{return(age<4);}));
// let a=([7,2,3,5,,21,79,2].find((age)=> (age>18)));
// console.log(a);

// ***********     **********//

// findIndex
// let age=[3,8,72,98,5,9,45,97];
// function myfunction(age) {
//  return age>=7;
// }
// console.log(age.findIndex(myfunction));

// *********** flat()    **********//
// The flat method removes empty slots in arrays:

// const arr = [1, 2, [3,,[[5]], 4]];
// let b=arr.flat(Infinity);
// console.log(b);
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));
// // /
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat());
// const arr5 = [1, 2,,5,,7,,8,,,9 , 4, 5];
// console.log(arr5.flat());


// let fruits = ["apple",6,3,,"orange", "cherry"];
// let a=[2,3,4,5];
// fruits.forEach(function(i,k,a){console.log(i*2,k)});

// function myFunction(item, index) {
//   console.log(item+":"+index);

// [7,9,3,2].forEach((i,k,l)=>{console.log(i,k,l)})


// let  a =[3,4,5,1,99];
// let c = a.includes(9);
//  console.log(c);

//  let fruits = ["Banana", "Orange", "Apple", "Mango"];
//  let n = fruits.includes("Mango");
// console.log(n);

// let a=[8,9,3,73,2,82];
// let s=a.indexOf(82);
// console.log(s);


// let age=[8,72,98,5,9,6,98,8,45,97];
// let n=(function (value,index,age) {
//    console.log(age.indexOf(value)== index);
// return 1;
// });
// console.log(n);
// console.log(age.indexOf(98));


//  let a= [3,4,7,98,03,56,27];
// let b=a.indexOf(98);
// console.log(b);


// let a= [8,3,7983,8,"",'@',"/", , 0];
// let b=Array.isArray(a);
// console.log(b);
// console.log(a.constructor);
// console.log(typeof(a));


// let array=['s','a','i','k','k','u','m','a','r'];
// // let s=[3,9,6,7,7,8,5,3,7,2];
// // console.log(s.lastIndexOf(3,9));
// // console.log(array.length);
// console.log(array.join());

//  let array=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha'];
// console.log(array.lastIndexOf('sai',7));

// let a=[4,6,8,4,2,5,7,4];
// console.log(a.lastIndexOf(2,3));


// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let energy = fruits.join();
// console.log(energy);
//  let x=[8,5,8,9,3];
//  console.log(x.constructor);
//  console.log(typeof(x));
//  let a=x.join("-");
//  console.log(a);
//  console.log(typeof(a));
//  console.log(a.constructor);

// let a=['s','a','i','k','k','u','m','a','r'];
// let b=a.pop();
// console.log(b);
// console.log(a);
// console.log(a.push("p"));
// console.log(a);
// let b = ["Audi", "Mazda", "BMW", "Toyota"];
// let a=[3,4,5,6];
// console.log(b.valueOf());
// console.log(b.join(","));
// console.log(b.toString());

// let  array1 = [1, 4, 9, 16,98,8];
// // pass a function to map
// let a=array1.map((s)=>{return (s*2);});
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
// let a=[7,3,4,6,7,9,3].filter((g)=>{return (g%2==0)});
// console.log(a);

// find
// let a=[{name:"A"},
//       {name:"B",age:23, fullname :function(){return this.name}},
//        {name:"C"}];

// let b=a.find((item)=>{return item.name=="B" } )
// console.log(b);

// reduce
// let h=[1,2,6].reduce(((i,j)=>{return i+j }),6)//firstitem,lastitem,arraylength-1,totalarry
// console.log(h);

//  let a=['s','a','i'];
//  let b=a.push('u',98);
//  console.log(b);
//  console.log(a);
//  let c=a.pop();
//  console.log(c);
//  console.log(a.pop());
//  console.log(a);


//  let array=['sai','kumar','sesha',4,"@","&","|","1!"];
//  console.log(array);
// console.log(array.reverse());
// console.log(array[2]);
// console.log(array);


// let  array1 = [1, 2, 3, 4];
// let  adding = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(adding,2));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// expected output: 15

// let numbers = [175, 50, 25];
// let a= numbers.reduceRight(myFunc);
// function myFunc(total, num) {
//   return total - num;
// }
// console.log(a);


// let array=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha'];
// let b=array.shift();
// console.log(array);
// console.log(b);


// let a=[9,4,2,36,3,2];
// let b= a.shift();
// console.log(b);
// console.log(a);


// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(-2,-1);
// console.log(citrus);
// let a=[9,4,2,36,3,2];
// let b= a.slice(1,2);
// console.log(b);
// console.log(a);
// //
// let a=['sai','kumar','sesha','venkata','sai','hai','hello','sai','sesha1'];
// let b=(a.slice(1,2));
// console.log(a);
// console.log(b);


// let a=[9,4,2,36,3,2];
// let b= a.splice(-4,1);
// console.log(b);
// console.log(a);

//  let age=[3,7,9,,2,77,31,5];
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

// let array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// console.log(array.sort());

//  let array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// let b=(array.splice(2,4));
// console.log(b);

// let a=[33,44,55,66,77];
// // let b =a.splice(2,3);
// // console.log(b);
// // console.log(a);
// function mynumbers(){
//   a.splice(2,0,99,66);
//   console.log(a);
// }
// mynumbers()
// let b = a.splice(2,0,6,9);
// console.log(b);


// console.log(b);
// console.log(array);
// d= array.pop();
// console.log(array);
// console.log(array);



// let b=[];
// let a=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// let b=a.sort();
// console.log(b);

// let a= ["a","b","c","d","f","sailuamau"]
// let f =a.toString()
// console.log(f);


// let array=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// let b=array.unshift("p");
// console.log(array),console.log(array.sort());
// console.log(b);

// let array=['s','f','g','e'];
// console.log(array.unshift('i'));


// function Counter(){
//     let counter =0;
//     setTimeout(() => {
//         let innerc=0;
//         counter +=1;
//        console.log("couter: "+counter);
//        setTimeout(() => {
//            counter +=1;
//            innerc +=1;
//            console.log("counter: "+counter+" inner c: "+innerc);
//        }, 2000);

        
//     }, 2000);
// }

// Counter();



// let users={id:"1",name:"sesha1",city:"hyd",state:"ap"};
// // console.log(users.constructor());
// console.log(typeof(users));
//  let b= Object.keys(users);
//  console.log(b);//['id', 'name', 'city', 'state']


// let a=['sai','kumar','sesha','venkata','sujatah','hai','hello','usha','sesha'];
// console.log(typeof a); //object
// console.log(Array.isArray(a));//true

// let v= Array.valueOf(a);
// console.log(v);
// console.log(typeof v);

// let a=[3,5,7,8,"h"];
// console.log(a.valueOf());

// let a=[3,5,7,8];
// console.log(a[2]);

// let fruits = [6,9,2,3];
// let f = fruits.keys();
// console.log(f);
// for (let s of f) {
//   console.log(s); //0,1,2,3
// }

// let fruits = [6,9,2,3];
// let f = fruits.values();
// console.log(f);
// for (let s of f) {
//   console.log(s); //6,9,2,3
// }


// let sum=0;
// let age=[8,72,98,5,9,45,97];
// function myfunction(age) {
//   return sum+=age;
// }
// console.log(age.forEach(sum));





// let sai = [
//   { name: "sesha", hight: 5.6, age: 25, weight: 60, colour: "whight" },
//   {
//     name: "sesha",
//     hight: 5,
//     age: 26,
//     weight: 65,
//     colour: "blue",
//   },
//   {
//     name: "sai",
//     hight: 6,
//     age: 27,
//     weight: 66,
//     colour: "skyblue",
//   },
// ];
      // for ( i = 0; i < sai.length; i++) {
      // // if (sai[i].colour=="skyblue") {
      //   console.log("height :"+sai[i].hight+" ; "+"age is :"+sai[i].age);
      // }

      // // new way 
      // let res=sai.filter((item)=>item.colour =="blue");
      //        console.log("height :"+res[0].hight+" ; "+"age is :"+res[0].age);

      

// let d= new Date();
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());



// let sai="ivanika is coming from the us and she is look damn";
// console.log(sai.replace((/is/gi,"hai")));


// function mul(n){
// let x=0;
//  for(i=1;i<=n;i++){
//   let y=n*(n+1);
//     x=y+x;
// }
//   console.log(y);
//   return "";
// }
// mul(4)
// function num(n){
//   let s=[];
//   for(i=1; i<=n; i++){
//    let y=s.reduce((a,b)=>{return a+b});
//     }
//   }
// }


// let a=[1,2,3,4,5];
// let b=a.join("");
// console.log( b);
// console.log( typeof b);
// console.log(a.splice(2,1,4)); //3
// console.log(a);//[1, 2, 4, 4, 5]


// let a=[3,2,4,5,7,8,1,9];
// let b=a.toString();
// console.log(b);
// let c= a.fill(6,0,1);
// console.log(c);
// let d=a.slice(3,6);
// console.log(d);




// let a=["a","b","c","d"];
// let b=a.reducer((a,b)=>{
//   return a+b;
// });

// console.log(b);

// Array.prototype.myUcase = function() {
//   let i;
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// function myFunction() {
//   let fruits = ["hyd","bangalore","ap","tn"]
//   fruits.myUcase();
//   console.log(fruits);
// }
// myFunction()


// let arr=new Array ("sai","kumar","super");
// for(i=0; i<arr.length;i++){
//   console.log(arr[i]);
// }


// let http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(8080);

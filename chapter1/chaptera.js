

//
// var s="hello  sai";
// function name(s){
// var s="hai darling el agunnao bagunnava";
// console.log(s.indexOf("g",14,11,14));
// return 1;
// }
// name();
//

//
// function name(s){
// var s="hai darling el agunnao bagunnava";
// console.log(s.charAt(10));
// return 1;
// }
// name();

//
// function name(s){
// var s="Hai darlings hai ela unnao hai ra bagunnava hai";
// var k=s.replace(/hai/gi,"bat");
// console.log(k);
// return 1;
// }
// name();


//
// function name(s){
// var s="Hai darlings hai ela unnao hAi ra  bagunnava hai ";
// console.log(s.replace(/hai/gi,function name(s){return s.toUpperCase()}))
// return 1;
// }
// name();

//
// function name(s){
// var s="Hai darlings hai elaunnao hai ra  bagunnava hai ";
// console.log(s.toUpperCase());
// return 1;
// }
// name();
//
//
// function name(s){
// var s="Hai darlings GUDDUTHA hai elaunnao hai ra  bagunnava hai ";
// console.log(s.toLowerCase());
// return 1;
// }
// name();


//
// function name(s){
// var s="Hai darlings hai elaunnao hai ra bagunnava hai";
// console.log(s.split(" "));
// return 1;
// }
// name();

//
//
// function name(s){
// var s="Hai darlings hai elaunnao hai ra  bagunnava hai ";
// console.log(s.slice(1,7));
// return 1;
// }
// name();
// var x="10";
// var y="apple";
// var z=x/y;
// console.log(z);
// var s=Array;
// var l= typeof s
// console.log(l);
// console.log(isNaN(z));
// var g=z+5;
// console.log(g);
// var h=-x/0;
// console.log(h);
//
// var s="12";
// var n="9";
// console.log(s+n);


// var s=Math.PI;
// console.log(s);
//
//
// var s=(-9,383,-9,7,0);
// var k=Math.max(s);
// // console.log("the maximum value of the s variable is "+ Math.max(s));
// // console.log(" tteh minimum value ofthe s variable is "+ Math.min(s));
// var j=Math.max(9,0,7,5);
// console.log(k);


//
// var arry=[1,2,3,4,5,6,7];
// var s=arry.reduce(function(a,b){
//   a[b]=b*b;
//   return b;
// },{})
// console.log(s);
//



function sqr(n){
  var s=0;
  for(i=1; i<=n; i++){
    sq=i*i;
    console.log("the square ofthe "+ i+ " is"+ sq);
    s=sq+s;
  }
  console.log("toatal sum ofthe squares    from 1 to "+ n+"is "+ s );
    return sq;
  }
(sqr(4));
//
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj));




//
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
//
// var s= Object.values(obj);
// console.log(s);

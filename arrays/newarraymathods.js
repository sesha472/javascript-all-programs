// var a=[85,93,27,51,90,25,37,92];
// var b=[88,95,33,52,97,48];
// var s=a.concat(b);
// console.log(s);
// console.log("\n");
// const num1 = [[1]];
// const num2 = [2, [3]];
//
// const numbers = num1.concat(num2);
//
// console.log(numbers);
// results in [[1], 2, [3]]

// modify the first element of num1
// num1[0].push(4);
// numbers[2].push(6);
// console.log(numbers);
// console.log(num2);
// results in [[1, 4], 2, [3]]
// console.log(typeof(NaN));






//2.copyWithin
//
// var a=[92,45,59,62,89,58,92];
// s=a.copyWithin(0,5,3);
// console.log(s);
// //



// 3.entries
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var d=fruits.entries(9);
// console.log(d);


// 4.every
// var e=[92,80,78,74];
// function myfunction(i) {
//   return i%2==0;
// }
// f=e.every(myfunction);
// console.log(f);


// var a=[2,2,4,8,6];
// var b= a.every((i)=>{ return i%2==0;});
// console.log(b);

// function checkPositive(arr) {
//   // Add your code below this line
//
//   return arr.every((curr)=> {return curr%2==0;});
//   // Add your code above this line
// }
// console.log(checkPositive([2, 2, 2, 4, 50]));

 // some
// var a=[1,2,34,45,8];
// function even(x) {
//   return x%2==0;
// }
// console.log(a.some(even));
// console.log(a.some((x)=> x%2===0));


// var a=[10,25,44,98,78,80,10];
// var s=a.fill(9,2,5);
// console.log(s);

//
// var a=[45,89,98,70,48];
// function adult(age) {
//   return a>=18;
// }
// function myfunctionName() {
//   console.log(a.filter(adult));
// }


// filter

// var a=[1,2,3,4,20,45,37,55];
// function big(x) {
//   return  (x<10 & x>1)
// }
// console.log(a.filter(big));
// var a=[1,2,3,4,,20,45,37,55];
// var b= a.filter(x=>x>10);
// console.log(b);
// var a=[1,2,3,4,5,6,7,9,8];
// var b= a.filter( item =>{
//   if(item%2==0){
//     return false;
//   }else {
//     return item>3;
//   }
// });
// console.log(b);


// map
// var a=[1,2,4,5];
//
// function sqr(x) {
//   return x*x;
// }
// // var b=a.map(x=>x*2);
//
// console.log(a.map(sqr));



// var a=[2,3,4,5];
// var b=a.reduce((x,y)=>x+y,10);
// console.log(b);

// let initialValue = 1;
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator * currentValue.x
// }, initialValue)
// console.log(sum);


// let people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 }
// ];

// function groupBy(objectArray, property) {
//   return objectArray.reduce(function (acc, obj) {
//     let key = obj[property]
//     if (!acc[key]) {
//       acc[key] = []
//     }
//     acc[key].push(obj)
//     return acc
//   }, {})
// }

// let groupedPeople = groupBy(people, "name")
// console.log(groupedPeople);


// var a=[9,5,3,53,45,23,78];
// function even(a) {
//   return a!=9;
// }
// console.log(a.findIndex(even));
// var a = Array.from("saikumar is manchi boy and he is doing manchi pani")
// console.log(a);

const names = ['German', 'Nicolas', 'Martin', 'Micaela', 'Mateo', 'Matias', 'John', 'Gonzalo', 'Esteban', 'Paula', 'Victoria', 'Bautista', 'Carolina', 'Analia', 'Edward', 'Mirtha'];
const foo = names.filter((name) => name.toUpperCase().startsWith('M'));
console.log(foo);
const name = 'German Cutraro',
    birthday = '15-09-1999'
    country = 'Argentina',
    favSong = 'I Wish you were here, Pink Floyd',
    favLang = 'Javascript';

const me = {
  
  birthday,
  country,
  favSong,
  favLang
};

for (let index in me) {
    console.log(me[index]);
}
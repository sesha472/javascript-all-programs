// var input = [
//   [
//     "name",
//     "age",
//     "gender"
//   ],
//   [
//     "mahesh",
//     25,
//     "male"
//   ],
//   [
//     "simhi",
//     24,
//     "female"
//   ],
//   [
//     "sai",
//     30,
//     "male"
//   ]
// ];
//
// var keys = input.shift();
//
// var output = input.map((person) => {
//   var obj = {};
//   person.forEach((detail,  i) => {
//     obj[keys[i]] = detail;
//   });
//   return obj;
// })
// console.log(output);
//


//
// var d=[54,63,92,57];
// var e=[83,72,98,45,97,67,89];
// f=d.filter();
// console.log(f);
// console.log(e);
// b=[11,12,3,4,15];
// var d=b.copyWithin(2,0,1);
// console.log(d);







// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 5000);
// }

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}
//
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 2000);
// }





//
//
// function sqr(n){
//   var s=0;
//   for(i=1; i<=n; i++){
//     sq=i*i;
//     console.log("the square ofthe "+ i+ " is"+ sq);
//     s=sq+s;
//   }
//   console.log("toatal sum ofthe squares    from 1 to "+ n+"is "+ s );
//     return sq;
//   }
// (sqr(4));

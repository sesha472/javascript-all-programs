

function fact(n) {
if (n == 0) {
  return 1;
}
return n * fact(n-1);
}

function permitation(arry){
var s,sum=0;
for(var i=0; i<=arry.length; i++){
  s=sum+i;
}
console.log(fact(s));
return fact(s);
}
permitation([1,2,3,4,5,'h']);
//
// function swap(x,y){
// var temp;
// temp=x;
// x=y;
// y=temp;
// console.log(x,y);
// }
// function permitation(arry){
//   if(i==n){
//     console.log(str(i));
//   }
//   else {
//     for (var j=i; i <= n; j++){
//       swap ssrry[j,i);
//       permitation(str,i+1,n)
//       swap str(j,i);
//     }
//     }
// }
// permitation("ma");

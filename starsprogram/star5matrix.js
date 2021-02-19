//
// function matrix(r,c){
// var k=r;
// var count=0;
// for(i=1; i<=r; i++){
//   p=" ";
//   for(j=1; j<=c; j++){
//     count++;
//     if(j==i && r==c ){
//
//       p=p+"***"+"\t";
//     }
//     else{
//     p=p+count+"\t";
//   }
// }
// console.log("\n");
// console.log(p);
// k--;
// }
// return " ";
// }
//
// console.log (matrix(4,4))
var a=18,b=10;
var c=(a+b)/4;
for(i=1; i<=a; i++){
var p="";
  for(j=1; j<=b; j++){
    if(i==1||j==1|j==b||i==c){
    p=p+"*";
  }
  else {
    p=p+" ";
  }
  }
  console.log(p);
}

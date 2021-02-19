//
// for(i=1;i<=7;i++){
//  var  p="*"+"\t";
//   for(j=1; j<=4;j++){
//     if((i==1||i==4)){
//       p=p+"*"+"\t";
//     }else if(i==4 && j==3){
//       p=p+" ";
//     }
//   }console.log("\n");
//     console.log(p);
//
// }
//



var a=18,b=18;
var c=(a+b)/4;
for(i=1; i<=a; i++){
var p="";
for (var j=1; j<=b; j++){
if(i==1||i==a||j==1||((i==c)&&(j>c))||((j==b)&&(i>c))){
  p=p+"*";
}
else {
  p=p+" ";
}
}
console.log(p);
}

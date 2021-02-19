var a=[1,0,5,8,3,86376,-3,9,2,5,7,9,3,4,7,2,34,78,55,1,44,98];
var swap;
for(i=0; i<a.length; i++){
  for(j=0;j<a.length; j++){
    if(a[j]>a[j+1]){
      swap=a[j];
      a[j]=a[j+1];
      a[j+1]=swap;
    }
  }
}
for(i=0; i<=a.length; i++){
  b=a[i];
  console.log(b);

}




//
// function bubble(a){
// var swap;
// for(i=0; i<a.length; i++){
//   for(j=0;j<a.length; j++){
//     if(a[j]>a[j+1]){
//       swap=a[j];
//       a[j]=a[j+1];
//       a[j+1]=swap;
//     }
//   }
// }
// for(i=0;i<=a.length; i++){
//   console.log(a[i]);
// }
// return 1;
// }
// bubble([4,5,8,2,9,1,0,3,0]);





























function matrix(r,c){
var k=r;
var count=0;
for(i=1; i<=r; i++){
  p=" ";
  for(j=1; j<=c; j++){
    count++;
    if(j==k && r==c ){

      p=p+"*"+"\t";
    }
    else{
    p=p+count+"\t";
  }
}
console.log(p);
k--;
}
return " ";
}

console.log (matrix(6,6))









for(i=1;i<=7;i++){
 var  p="* ";
  for(j=1; j<=5;j++){
    if(i==1||i==4){
      p=p+"*"+"\t";
    }else {
      p=p+" ";
    }
  }console.log("\n");
    console.log(p);

}

for(i=1; i<=5; i++){
  var c=" ";

for(j=1; j<=i; j++){
  c=c+"*";
}
  console.log(c);
}

//*********************


for(var i=1; i<=5; i++){
  var p=" ";
  for(s=1; s<=i-1; s++){
    p=p+"  "
  }
for(var j=i; j<=5; j++){
  p=p+"*";
}
  console.log(p);
}

//************************

for(i=1; i<=5; i++){
  var p="";
  for(s=1; s<=5-i; s++){
    p=" "+p;
  }
for(j=1; j<=i; j++){
  p=p+"*";
}
console.log(p);
}


//*******************




// for(i=1;i<=5; i++){
//   var p= "";
//   for (var s=5; s<=i-1; s++){
//     p=p+"-";
// }
//   for(j=5; j>=i; j--){
//     p=p+"*";
// }
//   console.log(p);
// }



// a=[1,0,5,8,3,4,9,2,5,7,9,3,4,7,2,34,78,55,1,44,98];
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



// ******************

//a=[1,0,5,8,3,4,9,2,5,7,9,3,4,7,2,34,78,55,1,44,98];
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




// ******************


// for(var i=1; i<=5; i++){
//   var p=" ";
//   for(s=1; s<=i-1; s++){
//     p=p+"  ";
//   }
// for(var j=5; j>=i; j--){
//   if(j==5&&i==4){
//     p=p+" ";
//   }
//   else{
//   p=p+"*";
// }
// }
//   console.log(p);
// }


// ******************

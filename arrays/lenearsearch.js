




var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function linearSearch(arr, elToFind) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == elToFind) {
      console.log(i+1);
      return i;
    }
  }
  console.log("there is no item");
  return null;
}

linearSearch(rainbow, "greem");

//
// var a=[7,87,4,9,6,2,3];
// var s=4;
// var b;
// for(i=0; i<=a.length; i++){
//   if (s==a[i]) {
//     b=i;
//     // console.log(b);
//   }
// }
// console.log(b);
// var a = [4,8,13,17,19,22,25,35,39,41,49,53,59,67,69,75,78,83,90,99]
// function Search( theArray, key )
// {
// for ( var n = 0; n < theArray.length; ++n )
// if ( theArray[ n ] == key )
// return n;
//
// return -1;
// }
//
// function mul(number){
//   console.log(number*number*3);
// }
// mul(3);


// function sayHi() {
//   console.log('Hello');
// }
//
// setTimeout(sayHi,2000);



// var rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//
// function linearSearch(arr, elToFind) {
//   for (var i=0; i<arr.length; i++) {
//     if (arr[i] == elToFind) {
//       return i;
//     }
//   } return null;
// }
//
// linearSearch(rainbow, "green");


// ***************old code************
//   function linearsearch(array,search){
// var c=0;
// for(i=0; i<=array.length; i++){
//   if(array[i]==search){
//        c++;
// console.log("elementi is in the "+ i + " possition");
//   }
// }
// console.log("\n");
// console.log("search elment is present at " +c+"   possitions");
// return 1;
// }
//  (linearsearch([6,9,8,7,78,65,54,8,7,54],9));

//
// var  a=[3,4,6,7,9,4,2];
// var s=5;
// var c=0;
// for(i=0; i<a.length; i++){
//   if(a[i]==s){
// c++;
//     console.log(" element is present t the poosition "+i);
// break;
//   }
// }
// if(c==0){
//   console.log("there is no element");
// }
//
//
//
//

//
// var a=['say','jai','kumar','sesha','sai','hero'];
// a.sort();
// console.log(a);

// var a=[4,3,5,6,7,89,8];
// var b=[];
// function sort(a);
// for(i=0; i<a.length; i++){
//  for(j=0; j<a.length; j++){
//     if(a[i]<a[j]){
//       b=a[j];
//       a[j]=b;
//       b=a;
//
//     }
//   }
// console.log(a[i]);
// }
//
//
// console.log(b);
//
//
//
//
// var a=[2,3,4,8,1,9,6];
// b=[];
// for(i=0; i<a.length; i++){
//   if(a[i]){
//     b=a[i];
//     console.log(b);
//   }
// }


/*var up=10;

// function
// for(i=1; i<= up; i++){
//
//   square=i*i;
//   console.log(square);
// }

 */
//
//
// function square(up){
// // for(i=1; i<= up; i++){
//
//   square=up*up;
//   return square;
//   // console.log(up+" square is "+square);
//
// }
//   console.log(square(3));


cube//
var c=0;
var t=5;
var sum=0;
for(i=1; i<=t; i++){   //cube toatl cubes betwen first 10 natural numbers//
var  cube = i*i*i;
   console.log(cube);
   sum=sum+cube;
}
console.log("\n");
console.log(sum);

console.log("\n");



/*Write a program in C to display the n terms of square natural number and their sum. Go to the editor
1 4 9 16 ... n Terms */


function sumsquare(n){
var square;
  var sum=0;
  for(i=1; i<=n; i++){
    square=i*i;
    console.log(square);
    sum=square+sum;
  }
  console.log("\n");
  console.log(sum);
  console.log("\n");
  return sum;
}

sumsquare(5);

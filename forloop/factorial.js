var n=0;
var fact=1;
for(var i=1; i<=n; i++){
 fact= fact*i;
}
console.log(fact);

function fact(n){
  var fact=1;
  for(var i=1; i<=n; i++){
   fact= fact*i;
  }
  return fact;

}
console.log(fact(6))



function fact(n){
if(n==0){
  return 1;
}
return n*fact(n-1);

}
console.log(fact(5))

// var m=78,p = 90,c=50;
// console.log("totalmarks in m:"+m);
// console.log("total marks in p:"+p);
// console.log("total marks in c:"+c);
// console.log(" AVERAGE MARKS IN ALL SUBJETS:" +(m+p));
// if(m>=65 && p>=55 && c>=50){
//   //if((m+p)>=140||(m+p+c)>=180){
//
//   console.log("elizible for thr test");
//
// }
// else {
//   console.log("not elizible");
// }



var rool=45;
var name = "jamse";
var m=70,p=80,cs=8;
total=(m+p+cs);
per=(total/3.0);
console.log("NAME OF THE STUDENT:" +name);
console.log("ROOL NUMBER IF THE STUDENT:"+ rool);
console.log("TOTAL MARKS IN MATHAMTICS :"+m);
console.log("TOTAL MARKS IN computer scince:"+cs);
console.log("TOTAL MARKS IN physics :"+p);
//console.log("AVERSGE MARKS IN ALL SUBJECTS :"+ avg);
console.log("TOTAL PERCENTAGE IN ALL SUBjects :" + per);

if(per>60){
  console.log("FIRST CLASS");
}
else if (per<=60&&per>=45){
  console.log("second");
}
else {
  console.log("fail");
}

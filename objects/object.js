//
var s=[
      {name :'sesha',
         hight : 5.6,
         age: 25,
          weight: 60,
        colour: "whight"
      },
        {
        name :"sesha",
        hight: 5,
        age: 26,
        weight:65,
        colour:"blue"
        },
        {
  name:"sai",
  hight:6,
  age:27,
  weight:66,
  colour:"skyblur"
}];


for(i=0;i<s.length;i++){
  console.log(Object.keys(s[i]));
}



var arr = {100:'a',63: 'b',872: 'c'};
console.log(Object.keys(arr));


// console.log(Object.keys(sai[1]));
// //
//       for ( i = 0; i < sai.length; i++) {
//        if (sai[i].colour=="skyblur") {
//         console.log(sai[i].age);
//        }
//       }
// //
//

// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'avengers',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];
//
// for (var i = 0; i < library.length; i++)
//    {
//     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus==true) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("You still need to read " + book);
//     }
//    }
   //







//
//

//
// var s= [
//             {
//              "name",
//               "age",
//               "gender"
//             },
//             {
//               "sai",
//               25,
//               "male"
//             },
//             {
//               "mahi",
//               26,
//               "male"
//             },
//             {
//             "vijay",
//               28,
//             "male"
//             }
//           ];
//
//
// for(i=0;i<sai.length;i++){
//   console.log(object.keys(sai[i]);
// }

// var arr = {100:'a',63: 'b',872: 'c'};
// console.log(Object.keys(arr));
//

//
//
//
//























//
// var arry=[1,9,3,4,5,6,7];
// var s=arry.reduce(function(a,b){
//   a[b]=b*b;
//   return a;
// },{})
// console.log(s);


//
//
// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
//
// var myfather = new person("John", "Doe", 50, "blue");
// var myMother = new person("Sally", "Rally", 48, "green");
// console.log(myfather.age);






//
// var g= [{ a: 1},{h:8},{ b: 2},{ c: 3}].reduce(function(result, item) {
//   var key = Object.keys(item)[0]; //first property: a, b, c
//   result[key] = item[key];
//   return result;
// }, {});
//
// console.log(g);
//
//






//
//
// function girl(name,colour,age,hight,weight,eyes){
//   this.name=name;
//   this.colour=colour;
//   this.age=age;
//   this.hight=hight;
//   this.weight=weight;
//   this.mesurements=eyes;
// };
// var f1=new girl("sujatha","wight",34,5.3,66,'blue');
// console.log(f1);
//
//
//
//
// var sai={
//   name:"sesha",
//   lastname:"sai",
//   colour:"wight",
//   hight:5.4,
//   weight:63,
//   age:25,
//   fullname :  function(){
//    return this.name+" "+this.lastname;
//  }
// };
// // console.log(sai["name"]+" is "+sai.weight+" weight"+" and "+sai.hight+"  hight");
// console.log(sai.fullname());

//
//
//
// is_array = function(input) {
//   if (toString.call(input) === "[object Array]")
//     return true;
//   return false;
//     };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


//
//
// function isarray(a){
// console.log(Array.isArray(a));
// return "";
// }
// console.log(isarray(["d",]));

//
// function sai(){
// var car = sai;
//
// console.log("the type of cal name is "+ car);
// console.log(typeof car);
// }
// sai();
//
//
//
// var a=["sai","kumar","pogula","venkata","sesha","sai","kumar"];
// var f=[4,5,7,5,2,4,6,8,6,4,3];
// var j=function(value,index,f){
//   return f.indexOf(value)==index;
// }
//
// console.log((f.filter(j)).lastIndexOf(4,8);
// ));
//

// var k=f.filter(j);
//   console.log(k);
// console.log(k.sort());



// var num  =prompt("enter the number!!!");
// if(num>0){
//   alert("is positive");
// }
// else if(num<0){
//   alert("nagative");
// }else{
//   alert("zero");
// // }
//
// var test=new Array(4,5,8,98,9,6,"l","d","p","f","y");
// console.log(test.concat("k","h","z").sort());

//
// var str =("sai is a good boy");
// // var n=str.lastIndexOf("s");
// // console.log(n);
//
// var n= str.charAt(str.length-1);
// console.log(n);

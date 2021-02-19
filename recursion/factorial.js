



function permutator(inputArr) {
  var results = [];

  function permute(arr,memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}
console.log(permutator(['a','b','k']));
























// 	function fact(n) {
// 	if (n == 0) {
// 		return 1;
// 	}
// 	return n * fact(n-1);
// }
// function per(arry){
// var sum=0;
// 	for(var i=0; i<=arry.length; i++){
// 		s=sum+i;
// 	}
// 	return (fact(s));
// }
// console.log(per(["a","s",'4',9]));






// function swap(x,y){
// 	var temp;
// 	temp=x;
// 	x=y;
// 	y=temp;
// 	console.log(x,y);
// }
// (swap("c","h"))
//
// var a=[1,3,4,7];
// var b=[];
//
// for(var i=0;i<=a.length;i++){
// 	b[j]  =  a[i];
//
// 		console.log(b[j]);c
// 	}
//
// }

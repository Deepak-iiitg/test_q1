var a=prompt("enter first term");
var r=prompt("enter common ratio");
var n=parseInt(prompt("enter nth number"));
var nth_term=a*(Math.pow(r,n-1));
console.log(nth_term);
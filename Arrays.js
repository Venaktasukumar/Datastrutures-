//concat
let arr=["mango","Apple"];
let arr1=["strawberry","Guava"];
let arr2=arr.concat(arr1);
console.log(arr2);
//constructor
function Age() {
  this.age = 21;
}
let ag = new Age()
console.log(ag.age);
//copyWithin
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2,0));
let fruits1= ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits1.copyWithin(2,0,2))
//entries
fruits = ["Banana", "Orange", "Apple", "Mango"];
let p=fruits.entries();
for(let i of p){
    console.log(i);
};
//every
let a=[1,2,3,4,5];
function check(k){
    return k>0;
};
console.log(a.every(check));
//fill
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("kiwi"));
e=["a","b","c","d","e","f"]
console.log(e.fill("v",1,3));
//filter
a=[1,2,3,4,5];
function checknumber(num){
    return num>2;
};
console.log(a.filter(checknumber));
//find
a=[1,2,3,4,5];

function checking(n) {
  return n > 2;
}
console.log(a.find(checking));
//findIndex
a=[1,2,3,4,5];

function checkin(n) {
  return n > 2;
}
console.log(a.findIndex(checkin));
//forEach
a=[1,2,3,4,5];

function checkforeach(it,n) {
  console.log(it+": "+n)
};
a.forEach(checkforeach);
//from()
console.log(Array.from("sukumar"));
//includes()
a=[1,2,3,4,5];
console.log(a.includes(4));
console.log(a.includes(2,2));
//indexOf()
a=[1,2,3,4,5];
console.log(a.indexOf(4));
console.log(a.indexOf(2,2));
//isArray()
a=[1,2,3,4,5];
console.log(Array.isArray(a));
console.log(Array.isArray("sukumar"));
//join()
let b=["a","b","c","d"];
console.log(b.join());
console.log(b.join("--"));
//keys()
b=["a","b","c","d"];
let k=b.keys();
for(let i of k){
  console.log(i);
};
//lastindexOf()
let q=[1,2,3,4,5,6,5];
console.log(q.lastIndexOf(4));
console.log(q.lastIndexOf(5));
//length
q=[1,2,3,4,5,6,5];
console.log(q.length);
q.length=2;
console.log(q);
//Map()
let numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));
q=[1,2,3,4,5,6,5];
function Mapp(value){
  return value*10;
};
console.log(q.map(Mapp));
//pop()
q=[1,2,3,4,5,6,5];
console.log(q.pop())
console.log(q)
//push
let B=[3,5,6,7,9,0];
B.push(2);
console.log(B);
B.push(4,5);
console.log(B);
//reverse()
B=[3,5,6,7,9,0];
B.reverse();
console.log(B);
//shift()
let Z=[7,6,7,7];
console.log(Z.shift());
console.log(Z);
//unshift()
Z=[7,6,7,7];
Z.unshift(8,8);
console.log(Z);
Z.unshift(9);
console.log(Z);
//sort()
//ascending
Z=[7,6,7,7];
Z.sort()
console.log(Z);
//descending
Z.reverse();
console.log(Z);
//reduce()
a=[1,2,3,4,5];
function checknumber1(a,b){
    return a+b;
};
console.log(a.reduce(checknumber1));
//reduceRight
a=[1,2,3,4,5];
function checknumber2(a,b){
    return a-b;
};
console.log(a.reduceRight(checknumber2));
//toString()
let K=["ab","abc","abcd"];
console.log(K.toString());
//valueOf()
K=["ab","abc","abcd"];
console.log(K.valueOf());
let N=K
console.log(N);
//some
a=[1,2,3,4,5]
function check3(k){
    return k>3;
};
console.log(a.some(check3));
//slice
a=[1,2,3,4,5]
console.log(a.slice(1,3));
//splice
let fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);
fruit= ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
fruit.splice(2, 2);
console.log(fruit);



















console.log("hello");
console.log('hi ' + 'hello');

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

//const = constant 바뀌지 않는 값
const a = 5;
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a / b);

//let 값 변경 가능
let myName = "sori";
console.log("My name is " + myName);
myName = "sound";
console.log("My nickname is " + myName);

//var -> const, let 이전의 변수 선언시 사용
//변수 값 변경 가능 
//항상 const 사용, 필요할 때만 let을 사용하고, var은 사용하지 않기

//boolean -> true, false의 형식으로 써야함
//text 형식인 "true", "false"로 쓰면 안됨
const amIFat = true; 
console.log(amIFat);

//null -> 아무것도 없음 != false
//test 형식인 "null"이 아닌 null
const pocket = null;
let something;

console.log(pocket);
console.log(something);
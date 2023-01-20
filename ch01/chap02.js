/*var intNumber = 10;
var floatNumber = 20.5;

var string1 = "문자'형' 변수";
var string2 = '문자형  "변수"';

console.log(intNumber);
console.log(floatNumber);
console.log(string1);
console.log(string2);
*/
//var num; //초기화하지않아 undefined
//var str = null; //object 타입의 null값
//typeof num2; //정의되지않은 변수 undefined
//동등연산자 ==, 일치 연산자 ===
//null == undefined; //true
//null === undefined; //false
/*
var printString = 10+"문자열";
var printString2 = "3" * "5";
var printString3 = 10 - "문자";
console.log(printString);
console.log(printString2);
console.log(printString3);
*/
/*
var arLit = [1, true, "JavaScript"]; // 배열 리터럴
var arrObj = Array(1, true, "JavaScript") // Array 객체의 생성자 이용
var arrNewObj = new Array(1,true,"JavaScript")
*/
/*
var arr = [1, true, "Java"];
arr.push("Script"); // push() 메소드 이용
arr[arr.length] = 100; // length 프로퍼티 이용
arr[10] = "자바스크립트"; //특정 인덱스를 지정하여 추가
console.log(arr);

var str = "안녕하세요!";
console.log(str.charAt(2));
console.log(str[2]);
*/
/*function multiNum(x,y){
    return x*yield;
}
var num = multiNum(3,4);
*/
/*
function sqr(x){
    return x*x;
}
var sqrNum = sqr;
document.write(sqr(4)+"<br>");
document.write(sqrNum(4));
*/
/**
 * 두 수의 곱을 출력하는 함수이지만, 1개만 보낼 경우
 * NAN을 출력
 * @param {number} a 변수1
 * @param {number} b 변수2
 * @returns 두 수의 곱
 */
/*function mul(a,b){
    return a*b;
}
console.log(mul(3,4));
console.log(mul(3));*/
/**
 * 두 수의 곱을 출력하는 함수이지만, 1개만 보낼 경우
 * 자기 자신을 출력
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
/*
function mul2(a,b=1){
    return a*b;
}
console.log(mul2(3,4));
console.log(mul2(3));
*/
/*var string1 = "한국공학대";
var string6 = `우리학교는 ${string1} 입니다.
개행도 가능합니다`;
console.log(string1);
console.log(string6);*/
//var 선언, 재선언, 변수변경가능
//let 선언,변수변경 가능, 재선언 불가
//const 선언만 가능, 재선언, 변수변경 불가
/*var name = 'tukorea';
console.log(name);
var name = 'kpu';
console.log(name);*/

var mySquare = function(x){
    return x*x;
}
var mySquare2 = (x) => {
    return x*x;
}
var mySquare3 = (x) => x*x;
console.log(mySquare(10));
console.log(mySquare2(5));
console.log(mySquare3(2));

var person = {
    name: "홍길동",
    birthday: "030219",
    pId: "1234567",
    fullId:function(){
        return this.birthday + this.pId;
    }
}

console.log(person.name);
console.log(person["name"]);

function Dog(color, name, age){
    this.color = color;
    this.name = name;
    this.age=age;
}
Dog.prototype.family = "시베리안 허스키";
Dog.prototype.breed = function(){
    this.breed = this.color + this.family;
}

console.log(Dog.breed);

/*정규식
/검색패턴/플래그*/
var regStr = /a+bc/;
var regObj = new RegExp("a+bc")
regStr;
regObj; 
console.log(regStr);
console.log(regObj);
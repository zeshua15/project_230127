// 간단하게 콘솔에 Hello world 문자열 출력
//console.log("Hello world");

//let으로 선언 가능
//let index_of_student;
//let indexOfStudent; //camel case 소문자시작,단어변환시 대문자사용

// http 모듈을 불러와 상수 http에 할당
const http = require('http'); //require == import , const =상수

//서버를 생성
http.createServer((req,res)=>{ 
    res.statusCode = 200; // 상태값200(정상동작)
    res.setHeader("Content-Type","text/plain"); // 일반 텍스트를 출력한다고 알려줌
    res.end("Hello TU Korea world"); // 서버에 표시할 텍스트의 내용
}).listen(3000);  //port 3000
//터미널 죽이기 ctrl+c

//var 로 변수 선언
//var string1 = "문자열1";
//var string2 = '문자열2';
//var intNumber = 10;
//var floatNumber = 20.3;
//var string3 = "문자'열'3";
//var bool1 = true;
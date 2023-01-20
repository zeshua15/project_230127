/*

var x=1;
var y=1;

for(x=1;x<=9;x++)
{
    for(y=1; y<=9; y++)
    {
        console.log(x+"*"+y+"="+x*y);
    }
}
/*
for (let dan = 0; dan <= 9; dan++) {
    for (let i = 0; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan*i}`)
    }
    
}*//*
var com, user;
com = Math.floor(Math.random()*3);
user = Math.floor(Math.random()*3);

console.log("컴퓨터의 입력 : " +com);
console.log("사용자의 입력 : " +user);
*/
/**
 * 0~2 사이의 랜덤값을 리턴
 * @returns 
 */
function rsp(){
    return Math.floor(Math.random()*3);
}
com = (rsp());
user = (rsp());
/**
 * 받은 0~2 값을 가위, 바위, 보로 변환하여 리턴
 * @param {number} x 
 * @returns 
 */
function rspPrint(x){
    if(x==0){
        return "가위";
    }
    else if(x==1){
        return "바위";
    }
    else{
        return "보";
    }
}
comCh=rspPrint(com);
userCh=rspPrint(user);

console.log("컴퓨터의 입력 : " +comCh);
console.log("사용자의 입력 : " +userCh);
/**
 * 숫자 두 개를 받아서 유저가 이길 경우 win을
 * 비기면 draw, 지면 lose를 출력
 * @param {number} com 
 * @param {number} user 
 */
function winneris(com,user){
    if(com==user){
        console.log("Draw");
    }
    else if((user>com)&&(user-com==1)||(user==0)&&(com==2)) // (com-user)==-1||(com-user)==2 // ((com-user+1)%3)==0 // !(com=user+1)%3
    {
        console.log("win");
    }
    else{
        console.log("lose");
    }
}
winneris(com,user);

let mail1 = "abc@tukorea.ac.kr";


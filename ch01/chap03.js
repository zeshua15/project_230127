/*
let noodle = () => {
    for (let i=1; i<= 100; i++){
        console.log(`라면 ${i}개 끓임`);
    }
}

console.log("가게 오픈");
noodle();
console.log("가게 종료");
*/
/*
const noodle = (message, time) => {
    setTimeout(() => {
        console.log(message);
    }, time);
}

noodle("신라면", 1000);
noodle("불닭", 500);
noodle("짜파게티", 200);
*//*
/**
 * message에 해당하는 라면을 끓이는 중이라고 출력 및 리턴
 * @param {string} message 
 * @returns 
 */
/*
function noodle(message){
    console.log(`${message} 라면 끓이는 중..`);
    return `${message}라면`;
}
/**
 * number에 해당하는 테이블에 서빙한다고 출력
 * @param {number} number 
 *//*
function serve(number){
    console.log(`{$number}테이블에 서빙`);
}
serve(noodle("살안찌는"));*/
// let result = noodle("살안찌는");
// serve(result);
/*
function noodle(message, callback, time){
    setTimeout(() => {
        console.log(`${message} 라면 끓이는중..`);
        callback(`${message}라면`)
    }, time);
    
}
function serve(number){
    console.log(`${number} 테이블에 서빙`);
}
noodle("살안찌는",serve,2000);
*/
/*
let loading = (path,done) => {
    console.log("경로:"+path);
    done(path+"text.png");
}
loading("/Users/home/",(path)=>{
    console.log("완료:"+path);
})
*/
/*
let fileSave = (path,callback) => {
    return new Promise((resolve,reject)=> {
        console.log("경로:"+path);
        resolve(path+"text.png");
    })
}

fileSave("/Users/home/").then((path)=>{
    console.log("완료:"+path);
}).catch((err)=>{
    console.log("error:"+err);
})
*/
/*
async function myFunction(){
    let data = await secondFunction();
}
*//*
let asyncLoading = async (path)=>{
    console.log("경로:"+path);
    return path + "text.png";
}
let path = await asyncLoading("/Users/home/");
console.log("완료:"+path);
*/
async function sendNoti(message,userId){
    console.log("1:"+message+userId);
}
async function saveFile(image){
    console.log("2:"+image);
}
async function storeDatabase(message){
    console.log("3:"+message);
}
async function createFeed(message, image){
    await saveFile(image);
    await storeDatabase(message);
    await sendNoti(message,3535);
}
createFeed("abcd","1234");
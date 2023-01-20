const sendNoti = require('./noti');
const saveFile = require('./file');
const db = require('./db');
//const {storeDatabase} = require('./db'); //object 형태로 가져옴


async function createFeed(message, image,userId){
    await saveFile(image);
    await db.storeDatabase(message);
    //await storeDatabse(message); //object로 가져와서 바로사용가능
    await db.deleteDatabase(userId);
    await sendNoti(message,userId);
}
createFeed("abcd","text.png","USER");
/*
function storeDatabase(message){
    console.log("3:"+message);
}


function deleteDatabase(id){
    console.log(id+" deleted");
}

function updateDatabase(id, msg){
    console.log(id+"updated:"+msg);
}
module.exports = {
    storeDatabase: storeDatabase,
    delete: deleteDatabase,
    update:updateDatabase
}*/
exports.storeDatabase = (message)=> {
    console.log("3:"+message);
}

exports.deleteDatabase = (id)=>{
    console.log(id+" deleted");
}

exports. updateDatabase = (id, msg)=> {
    console.log(id+"updated:"+msg);
}

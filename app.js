let users=[];
function addUser(){
    users.push({
        name:"Ajay khanal"
    });
    console.log(users,"<br>");
    if(users.length > 10){
        users=[]; //clear memory
    }
}

setInterval(addUser,1000);
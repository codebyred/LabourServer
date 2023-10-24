import users from "../Config/workers.json" assert {type:"json"}

function getWorkers(start,end){
    return users.slice(start,end);
}

function getWorker(email){

    return users.find((user)=> user.email === email);

}

function addWorker(user){

    if(user.email !== "" && user.password !== "")
        users.push(user);

}

export default {
    getWorkers,
    getWorker,
    addWorker
}
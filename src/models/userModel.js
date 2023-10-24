import users from "../Config/users.json" assert {type:"json"}

function getUser(email){

    return users.find((user)=> user.email === email);

}

function addUser(user){

    if(user.email !== "" && user.password !== "")
        users.push(user);

}

export default {
    getUser,
    addUser
}

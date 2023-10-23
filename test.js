const fun = (name) =>{
    return  (option) => {
        if(option) return console.log(`${name}  valid`);
        return console.log(`${name} not valid`);
    }
}



const partialFunc = fun("kamal");

partialFunc(true);
partialFunc(false);
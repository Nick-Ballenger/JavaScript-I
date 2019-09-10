let add = function(a,b){
    return a+b
}


let multiply =function(a,b){
    return a*b
}

let divide =function(a,b){
    return a/b
}

let subtract =function(a,b){
    return a-b
}

let math = function(number1, number2, callback){
    return callback(number1, number2)
}
console.log()
console.log(math(add, 1,2))
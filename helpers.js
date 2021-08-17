function sum(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

function factorial(n){
    let f = 1;
    let i = 1;
    while(i <= n) {
        f = f * i;
        i++;
    }
    return f;
}

function sumOfOdd(n){
    let s = 0;
    let i = 1;
    while(i <= n){
        s = s + i;
        i += 2;
    }
    return s
}

function sayHello (){
    return 'Hello!'
}

module.exports = {
    sum,
    div,
    factorial,
    sumOfOdd,
    sayHello
};
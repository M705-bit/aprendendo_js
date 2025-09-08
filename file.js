var createCounter = function(n){
    var x = 0;
    return function(){
        n += (1 ** x);
        console.log(x);
        x++;
        return n;
    }
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
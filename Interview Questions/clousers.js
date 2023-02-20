function x(){
    var a=7;
    console.log(b)
    function y(){
        console.log(a)
        const b =10;
    }
    return y;
}

var z = x();
console.log(z)
z();
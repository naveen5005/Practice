getName();
console.log(x);
var x=7;
function getName(){
    console.log("Hoisting in javascript");
}

function reverseString(){
    var name="naveen";
    // for(var i=0;i<name.length;i++){
    //     console.log(name.charAt(i))
    // }
    for(var j=name.length;j>=0;j--){
        console.log(name.charAt(j))
    }
}
reverseString()
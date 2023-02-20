function Sum(a,b,...rest){
    console.log(rest)
}
Sum(1,2,3,4,5); // converts the list of items into an array

let spread = [1,2,3,4,5,0];
console.log(Math.min(...spread)); // converts an array into the list of items
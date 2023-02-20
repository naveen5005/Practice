setTimeout(()=>{
    console.log("Hello")
},2000)

let count=0
const countInterval = setInterval(()=>{
    console.log(count++);
    if(count >=10){
        clearInterval(countInterval)
    }
},2000)


// let ab =[1,2,3,4,8,9];
// // ab.push(5);
// // ab.pop();
// // ab.unshift(0);
// // ab.shift();
// // ab.splice(2,2,100)
// // ab.splice(6,1,99)
// ab.slice(0,4)
// console.log(ab)

// let fruits = ['apple','banana','mango','grapes','guava'];
// fruits.slice(0,3);
// console.log(fruits)
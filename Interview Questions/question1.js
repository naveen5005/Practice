/*
 5431 => 5+4+3+1 = 13 
 => 1+3 = 4
*/

function addData(data){
    console.log(x);
    console.log(y);
    console.log(z);
    var x;
    let y;
    const z=10;
    let dataArray = String(data).split('').map((data)=>{
        return parseInt(data)
    });
    let result = dataArray.reduce((a,b) => a+b)
    console.log(result)
    if(String(result).length >1){
        addData(result);
    }
    // else{
    //     console.log(result)
    // }
}
addData(094)
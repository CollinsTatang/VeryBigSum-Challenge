
//  Complete the 'aVeryBigSum' function below.
//  
//  The function is expected to return a LONG_INTEGER.
//  The function accepts LONG_INTEGER_ARRAY ar as parameter.
//  

function aVeryBigSum(ar){

    let sum = 0;

    for(let i=0; i < ar.length;  i++){

        sum += ar[i];
    }
    return sum;

}
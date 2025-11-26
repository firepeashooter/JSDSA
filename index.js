

function sumRange(n){

    if (n <= 1){
        return n
    }

    return n + sumRange(n-1);

}

function power(num, exp){

    if (exp == 0){
        return 1;
    }

    return num * power(num, exp - 1);

}


function factorial(n){

    if (n <= 1){
        return 1;
    }

    return n * factorial(n-1);

}

function all(arr, callback){

    if (arr.length <= 0){
        return true;
    }


    let value = callback(arr[0]);

    if (value == true){
        return all(arr.slice(1, arr.length), callback);
    } else {
        return false;
    }


}

function productOfArray(arr){


    if (arr.length == 1){
        return arr[0]
    }

    return arr[0] * productOfArray(arr.slice(1, arr.length));


}
//crazy shit but I think this is a depth first search
function contains(obj, value){

    

    for (key in obj){

        if (typeof(obj[key]) == "object"){
            return contains(obj[key], value);
        } else {
            if (obj[key] == value){
                return true;
            }
        }

    }

    return false;


}


let testObject = {

    data: {
        info: {
            stuff: {
                thing: {
                   randomNumber: 14 
                }
            }
        }
    }
}



//Basically a depth first search where we look for any numbers and add them to the total.

function count(arr){

    let total = 0;

    for (let i = 0; i < arr.length; i++){

        if (Number.isInteger(arr[i])){
            total += 1;
        } else if (Array.isArray(arr[i])){
            total += count(arr[i]);
        }
    }

    return total;


}


function sumSquares(arr){

    let total = 0;

    for (let i = 0; i < arr.length; i++){

        if (Number.isInteger(arr[i])){
            let square = arr[i] * arr[i];
            total += square;
        } else if (Array.isArray(arr[i])){
            total += sumSquares(arr[i]);
        }
    }

    return total;
}


function replicate(times, num){

    if (times <= 0){
        return [];
    } else {
        return [num].concat(replicate(times-1, num));
        
    }
    
}

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []


function fibs(n){

    let result = [0, 1];
    if (n == 1){
        return [0];
    }else if (n == 2){
        return [0, 1];
    }
    
    //we start at two cause we have the first entries already
    for (let i = 2; i < n; i++){
        result.push(result[result.length -1] + result[result.length -2]);
    }

    return result;

}

function fibsRecurs(n){

    result = [];

    if (n == 1){
        return [0];
    }else if (n == 2){
        return [0, 1];
    }

    //this returns the previous list
    let seq = fibsRecurs(n-1);

    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

    return seq;


}



function merge(arr1, arr2){

    let sortedArray = [];

    let p1 = 0;
    let p2 = 0;

    while(p1 < arr1.length && p2 < arr2.length){

        if (arr1[p1] < arr2[p2]){
            sortedArray.push(arr1[p1]);
            p1 += 1;

        }else{
            sortedArray.push(arr2[p2]);
            p2 += 1;

        }
    }

    if (p1 < arr1.length){
        sortedArray.push(...arr1.slice(p1));
    }else if(p2 < arr2.length){
        sortedArray.push(...arr2.slice(p2));
    }


    return sortedArray;

}


function mergeSort(arr){

    if (arr.length <= 1){
        return arr;
    }else{

        let mid = Math.floor(arr.length / 2);

        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        let sortedLeft = mergeSort(left);
        let sortedRight = mergeSort(right);
        return merge(sortedLeft, sortedRight);

        

    }

}


console.log(mergeSort([105, 79, 100, 110]));



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

console.log(contains(testObject, 14));
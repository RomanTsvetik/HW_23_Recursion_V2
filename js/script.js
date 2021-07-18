function getPalidrome(num, x) {

    let obj = {
        finalResult: num,
        counter: x,
    };

    let palidrome = true;    
    
    // getting sum of initial number & reverse number:
    
    let sum = num + getReverseNumber(num);

    // converting of sum to string for getting its lenghth :
    let sumString = sum.toString();

    //comparison of first el with last one, then 2nd and last-1 and so on
    for (let i = 0; i < sumString.length; i++) {
        let elem = sumString[i];
        if (elem !== sumString[sumString.length - 1 - i]) palidrome = false;
    }  

    if (palidrome === false) {
        num = sum;
        return getPalidrome (num, ++obj.counter);
    }        
    
    obj.finalResult = sumString;
    return obj;
}

console.log(getPalidrome(96, x = 1));

function getReverseNumber(num) {

    let reverseNumber = 0;

    while (num) {   
            reverseNumber *= 10;
            reverseNumber += num % 10;
            num = Math.floor (num / 10);
        }

    return reverseNumber;
}


// 1. 

// 1. A parameter is what the uncalled function will receive. 
// An argument is the actual input a function receives when it's called.
// 2. return actually delivers what a function needs to do. Console.log is just for the developer.
// 3. A function needs to return a value for the function to have any real programming value!

// 2.

const checkPalindrome = (str) => {
    const readyString = str.toLowerCase();
    const splitString = readyString.split("");
    splitString.reverse();
    // console.log(splitString.join(""));
    if(readyString === splitString.join("")){
        return true;
    }
    else return false;
}

// 3.

const sumDigits = (num) => {
    const digitString = num.toString().split("");
    // console.log(digitString);
    let newArray = [];
    for(let i=0; i<digitString.length; i++){
        newArray.push(Number(digitString[i]));
    }
    // const digits = digitString.forEach(function(element){
    //     Number(element);
    // });
    let sum = 0;
    for(let j=0; j<newArray.length; j++){
        sum = sum + newArray[j];
    }
    return sum;
}

// 4. Pythagoras

const calculateSide = (sideA, sideB) => {
    const sideC =  Math.sqrt((sideA*sideA) + (sideB*sideB));
    return sideC;
}

// 5. Sum Array

const sumArray = (array) => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}


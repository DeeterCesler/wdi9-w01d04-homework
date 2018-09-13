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


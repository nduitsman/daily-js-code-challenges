// var isValid = function (s) {
//     // Stack to store left symbols
//     const leftSymbols = [];
//     // Loop for each character of the string
//     for (let i = 0; i < s.length; i++) {
//         // If left symbol is encountered
//         if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//             leftSymbols.push(s[i]);
//         }
//         // If right symbol is encountered
//         else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
//             leftSymbols.pop();
//         } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
//             leftSymbols.pop();
//         } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
//             leftSymbols.pop();
//         }
//         // If none of the valid symbols is encountered
//         else {
//             return false;
//         }
//     }
//     return leftSymbols.length === 0;
// };

// nums = [0,0,1,1,1,2,2,3,3,4];
// let k = 0;
// for(let i = 0; i<nums.length; i++){
//     if(nums[i] == nums[i+1]){
//         continue;
//     }
//     nums[k] = nums[i];
//     k++;
// }
// console.log(k,nums);

// nums = [3,2,2,3];
// val = 3;
// let k = 0;
// for(let i = 0; i<nums.length; i++){
//     if(nums[i] === val){
//         continue;

//     }
//     nums[k] = nums[i];
//     k++;
// }
// console.log(nums)

// var lengthOfLastWord = function(s){
//     k = 0;
//     split = s.split(' ');
//     for(let i = split.length-1; i >= 0; i--){
//         console.log(split[i])
//         if(split[i].length > 0){
//             k = split[i].length;
//             break;
//         }
//     }
//     return k;
// }
// console.log(lengthOfLastWord('a'))


// var lengthOfLastWord = function(s){
//     let k = 0;
//     s = s.trim();

//     for(let i = s.length-1; i >= 0; i--){
//         if(s[i] === ' '){
//             break;
//         }
//         k++;
//     }
//     return k;
// }
// console.log(lengthOfLastWord('a'))

// var plusOne = function(digits) {
//     end = digits.length-1;
//     digits[end]++;

//     for(let i = end; i >= 0; i--){
//         if(digits[i] === 10){
//             digits[i] = 0;
//             if(digits[i-1]){
//                 digits[i-1]++;
//             }
//             if(digits[i-1] === undefined){
//                     digits.unshift(1);
//                 }
//             }

//     }
//     return digits
// };
// console.log(plusOne([1,2,3]))

// var nearestExit = function(maze, entrance) {
//     let absDimensions = [maze.length-1, maze[0].length-1];
//     let steps = 0;
//     let tempSteps = 0;
//     let currentPos = entrance;
//     let north = [currentPos[0]-1,currentPos[1]];
//     let east = [currentPos[0],currentPos[1]+1];
//     let south = [currentPos[0]+1,currentPos[1]];
//     let west = [currentPos[0],currentPos[1]-1];
//     console.log(maze[north[0]][north[1]])
// while condition here
    // if(maze[currentPos[0]-1][currentPos[1]] === '.') {
    //     currentPos = [currentPos[0]-1,currentPos[1]];
    //     steps += 1;
    // }
    // if(maze[currentPos[0]][currentPos[1]+1] === '.') {
    //     currentPos = [currentPos[0],currentPos[1]+1];
    //     steps += 1;
    // }
    // if(maze[currentPos[0]+1][currentPos[1]] === '.') {
    //     currentPos = [currentPos[0]+1,currentPos[1]];
    //     steps += 1;
    // }
    // if(maze[currentPos[0]][currentPos[1]-1] === '.') {
    //     currentPos = [currentPos[0],currentPos[1]-1];
    //     steps += 1;
    // }
// }
// let maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]];
// let entrance = [1,2];
// nearestExit(maze, entrance);

var addBinary = function(a, b) {
    let carry = 0;
    let size = 0;
    value = '';
    if(a.length > b.length){ size = a.length }
    else {size = b.length}
    for(i = 0; i < size; i++){
        tmpA = parseInt(a[a.length-1-i]);
        tmpB = parseInt(b[b.length-1-i]);
        tmpResult = (tmpA || 0)+(tmpB || 0) + carry;
        if(tmpResult === 2) {
            tmpResult = 0;
            carry = 1;
        }
        else if(tmpResult === 3){
            tmpResult = 1;
            carry = 1;
        }
        else if(tmpResult === 0 || tmpResult === 1){ 
            carry = 0;
        }
        value += tmpResult;
    }
    if(carry){value += carry}
    value = value.split('').reverse().join('');
    console.log(value)
    return value;
};
addBinary('0','0');
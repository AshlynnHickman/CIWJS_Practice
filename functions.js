// const langOne = document.querySelector(".langOne");
// const langTwo = document.querySelector(".langTwo");
// const langthree = document.querySelector(".langThree");
// const multLang = document.querySelector(".multLang");

// langOne.addEventListener('mouseover', () => {
//     langOne.classList.add("progress-bar-striped");
// })  

// langOne.addEventListener('mouseout', () => {
//     langOne.classList.remove("progress-bar-striped")
// })
    
// langTwo.addEventListener('mouseover', () => {
//     langTwo.classList.add("progress-bar-striped");
// })

// langTwo.addEventListener('mouseout', () => {
//     langTwo.classList.remove("progress-bar-striped");
// })

// // LeetCode Problem 66
// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         } else {
//             digits[i] = 0;
//         }
//     }
    
//     digits.unshift(1);
//     return digits;

// };

// Arrays 
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

const linear = (arr, target ) => {
    let steps = 0; 
    
    for (let i = 0; i < arr.length; i++){
        steps++;
        if (arr[i] === target)return `Found: ${arr[i]} in ${steps} steps`; 
    };

} 
console.log(linear(unsortedArr, 40));
console.log(linear(sortedArr, 40));

// Binary Array 
const binary = (arr, target) => {
    let start = 0; 
    let end = arr.length; 
    let pivot = Math.floor((start + end)/2); 
    let steps = 0; 

    for (let i = 0; i < arr.length; i++){
        if (arr[pivot] !== target){
            if (target < arr[pivot]) end = pivot;
            else start = pivot; 
            pivot = Math.floor((start+end) /2 );
            steps++; 
        }
        if(arr[pivot] === target) return `Found: ${target} in ${steps} steps`;
    }
}

// Problem 9

// @param {number} x
// @return {boolean}
 
 var isPalindrome = function(x) {
    if (x < 0) return false;
	
    // reverse the string representation of x
    const reverse = `${x}`.split('').reverse().join('');
    // compare the value regardless of types
    return x == reverse;
};

// Problem 34
//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}

 var searchRange = function(nums, target) {
    tarStart = -1;
    tarend = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            if(tarStart == -1){
                tarStart = i;
                tarend = i;
            }else{
                tarend++;
            }
        }
    }
    return [tarStart,tarend];
};

// Problem 412

// @param {number} n
// @return {string[]}

 var fizzBuzz = function(n) {
    var result = []
for (var i = 1 ; i < n+1; i++) {
  if(!(i % 3) && !(i % 5)) {
    result.push('FizzBuzz')
  } else if(!(i % 3)) {
    result.push('Fizz')
  } else if(!(i % 5)) {
    result.push('Buzz')
  } else {
    result.push(i.toString())
  }
}
    return result
};
/*
Two integer sum 11
Given an array of integers numbers that is sorted in non-decreasing order

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given number target, and index1 < index2. Note that index1 and index2 cannot be equal,therefore you may not use the same element twice.
There will always be exactly one valid solution.

Example 1:
Input: numbers = [1,2,3,4] target = 3
output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index = 1, index2 = 2. We return [1,2].
*/




// function addition(){
//     console.log(numbers.n + numbers[m])
// }


numbers = [1,2,3,4]
target = 5;

let inputNumber = function numberAdd( numbers, target){
     for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i + 1, j + 1];
            }
        }
    }
    return[];
};

console.log(inputNumber(numbers, target))

let twosum2 = function twoSum(numbers, target){
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        sum = numbers[left] + numbers[right];
        if(sum > target){
            right--;
        } else if(sum < target){
            left++;
        }else{
            return [left + 1, right + 1]
        };
    };
    return[];
};

console.log(twosum2(numbers, target));
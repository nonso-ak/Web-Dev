/*
3sum
Given an integer array nums, return all the triplets nums[i]], nums[j], nums[k] where nums[i] + nums[j] + nums[k] === 0, and the indices i, j and k are all distincts. The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
-1,0,-4
Example 2:
input: nums = [0,1,1]
output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
output: [[0,0,0]]
Explanation: The only possible triplets to sum up to 0.
*/

function threesum(numbers){
    numbers.sort((a, b) => a - b);
    const result = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0)break; //If the first number in the sorted array is positive, no triplet can not sum up to 0
    if(i > 0 && numbers[i - 1]) continue;//if its not on the first number in the array and if the previous number is positive 

        let left = i + 1; right = numbers.length - 1;//The numbers should be going higher from the beginning for left(e.g from -1 to 0) and the numbers should be going lower from the end for right (e.g from -4 to -1)
        while(left < right){
            const sum = numbers[i] + numbers[left] + numbers[right];
            if(sum === 0){
                result.push([numbers[i], numbers[left], numbers[rights]]);
                right--;
                left++;
                while(left < right && numbers[left] === numbers[left - 1]) left++;//while left is less than right and numbers left (which is initially the second number(1)) is equal to the previous index thats the first number(0) the left should increase
                while(left < right && numbers[right] === numbers[right]) right--;//while left is less than right and numbers right (which is equal to the position of the number at the end minus 1 that is right = the second to last number) is equal to
          }else if(sum < 0){
            left++;//since the array was sorted in ascending order, if the sum is less than 0 then the left has to be increased because it contains the numbers with the lower values
          }else{
            right--;//since the array was sorted in ascending order, if the sum is greater than zero, then the right has to be reduced since it will contain the numbers with higher values
          }
        }
    }

    return result;
}

let numbers = [-1,0,1,2,-1,-4]
console.log(threesum(numbers));
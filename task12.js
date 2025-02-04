/*
Container with most water #leetcode Q11
You are given an integer array heights[i] represents the height of the ith bar.

You may choose any two bars to form a container. Return the maximum amount of water container can store.

Example 1:
Input: height = [1,7,2,5,4,7,3,6]
index -- These specify the position of an item in an array, starting from 0 - (length-1)
lenght -- 8
[] -- array
{} -- Specifies a block of Code or used to create an object.
output: 36

Example 2:
Input: height = [2,2,2]
output: 4
*/

function maxWater(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = Math.min(height[i], height[j]) * (j - i);
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

const height = [1,7,2,5,4,7,3,6]
console.log(maxWater(height))

//Two Pointers Approach
function WaterContainer2(height){
    let l = 0;
    let r = height.length-1;
    let result = 0;

    while(l < r){
        const area = math.min(height[l], height[r] * (r-1));
        result = Math.max(result, area);
        if(height[l] <= height[r]){
            1++;
        }else{
            r--;
        }
        return result;
    }
}

function hasSubarrayWithTargetSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    const sumMap = new Map();

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        if (currentSum === target) {
            return true;
        }

        if (sumMap.has(currentSum - target)) {
            return true;
        }

        sumMap.set(currentSum, end);
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true

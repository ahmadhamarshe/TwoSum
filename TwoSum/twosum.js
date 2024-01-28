function twoSum(nums, target) {
    const numIndicesMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndicesMap) {
            return [numIndicesMap[complement], i];
        }

        numIndicesMap[nums[i]] = i;
    }

    return [];
}

// 215
// 第k个最大元素，冒泡排序的变种

export default (nums, k) => {
    const length = nums.length

    for (let i = length; i > length - k; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                const tempt = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = tempt
            }
        }
    }

    return nums[length - k]
}

// 41
export default (nums) => {
    for(let i = 0; i < nums.length; i++) {
        let index = i
        let min = nums[i]

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j]
                index = j
            }
        }

        if (index !== i) {
            nums[index] = nums[i]
            nums[i] = min
        }

        if (nums[i] < 1) {
            nums.shift()
            i--
        } else if (!nums[i - 1] && nums[i] !== 1) {
            return 1
        } else {
            if (nums[i - 1] && (nums[i] - nums[i - 1] > 1)) {
                return nums[i - 1] + 1
            }
        }
    }

    if (!nums.length) return 1

    if (nums.length === 1) return nums[0] === 1 ? 2 : 1

    return nums.pop() + 1
}

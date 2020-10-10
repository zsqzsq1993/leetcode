export function byBubbleSort(nums) {
    const length = nums.length

    if (length < 2) return 0

    let gap = 0

    for(let i = length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const prev = nums[j]
            const next = nums[j + 1]
            if (prev > next) {
                nums[j] = next
                nums[j + 1] = prev
            }
        }

        if(i < length - 1) {
            const newGap = nums[i + 1] - nums[i]
            if (newGap > gap) gap = newGap
        }
    }

    const initGap = nums[1] - nums[0]

    return gap > initGap ? gap : initGap
}

export function bySelectionSort(nums) {
    const length = nums.length

    if (length < 2) return 0

    let gap = 0

    for (let i = 0; i < length - 1; i++) {
        let min = nums[i]

        let index = i

        for (let j = i + 1; j < length; j++) {
            if (nums[j] < min) {
                index = j
                min = nums[j]
            }
        }

        if (index !== i) {
            nums[index] = nums[i]
            nums[i] = min
        }

        if (i > 0) {
            const newGap = nums[i] - nums[i - 1]
            if (newGap > gap) gap = newGap
        }
    }

    const finalGap = nums[length - 1] - nums[length - 2]

    return gap > finalGap ? gap : finalGap
}

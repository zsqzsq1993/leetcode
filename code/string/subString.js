// 696

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”

export default  (str) => {
    const length = str.length

    const results = []

    const match = (str) => {
        const before = str.match(/^(0+|1+)/)[0]

        const after = (before[0] ^ 1).toString().repeat(before.length)

        return new RegExp(`^(${before}${after})`).test(str)
            ? RegExp.$1
            : ''
    }

    for (let i = 0; i < length - 1; i++) {
        const sub = match(str.slice(i))

        if (sub) {
            results.push(sub)
        }
    }

    return results.length
}

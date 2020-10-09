// 914
// 给定一副牌，每张牌上都写着一个整数。
//
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
//
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 输入：[1,2,3,4,4,3,2,1]
// 输出：true
// 解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

export function gcd(a, b) {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}

export default (array) => {
    const arrayStr = array.sort((a, b) => {
        return a - b
    }).join('')

    const matches = arrayStr.match(/(\d)\1+|\d/g)

    const result = matches.map(item => item.length).reduce((prev, next) => {
        return gcd(prev, next)
    })

    return result >= 2
}

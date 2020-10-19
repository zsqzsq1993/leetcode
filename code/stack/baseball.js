export default (ops) => {
    const result = []

    ops.forEach(item => {
        switch (item) {
            case 'D':
                const baseNum = result[result.length - 1]
                if (baseNum) {
                    result.push(baseNum * 2)
                }
                break
            case 'C':
                result.pop()
                break
            case '+':
                const baseNum1 = result[result.length - 1]
                const baseNum2 = result[result.length - 2]
                if (baseNum1 && baseNum2) {
                    result.push(baseNum1 + baseNum2)
                }
                break
            default:
                result.push(item * 1)
        }
    })

    return result.reduce((total, next) => total + next)
}

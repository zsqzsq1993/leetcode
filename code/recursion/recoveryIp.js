export default (s) => {
    const result = []

    const search = (groups, substr) => {
        if (groups.length === 4) {
            if (groups.join('') === s) {
                result.push(groups.join('.'))
            }
        } else {
            for (let i = 1; i <= Math.min(3, substr.length); i++) {
                const newStr = parseInt(substr.substr(0, i))

                if (newStr >=0 && newStr <= 255) {
                    search([].concat(groups, [newStr]), substr.substr(i))
                }
            }
        }
    }

    search([], s)

    return result
}

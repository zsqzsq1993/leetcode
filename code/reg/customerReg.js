// 10

export default (string, pattern) => {
    const match = (string, pattern) => {
        // 边界条件，结束递归
        if (pattern.length <= 0) {
            return string.length <= 0
        }

        // 字符串匹配
        if (pattern[1] !== '*') {
            if (string[0] !== pattern[0] &&
                pattern[0] !== '.') return false
            else return match(string.slice(1), pattern.slice(1))
        }

        // 模式匹配
        else {
            // 匹配0次
            return match(string, pattern.slice(2)) ||
            // 匹配n次
            ((string[0] === pattern[0] || pattern[0] === '.') &&
                match(string.slice(1), pattern))
        }
    }

    return match(string, pattern)
}

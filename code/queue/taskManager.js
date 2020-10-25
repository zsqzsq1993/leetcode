// 621
export default (tasks, n) => {
    const map = Object.create(null)

    let result = ''

    tasks.forEach(item => {
        if (map[item]) map[item]++
        else  map[item] = 1
    })

    while (true) {
        const keys = Object.keys(map)

        if (!keys[0]) break

        let group = []

        for (let i = 0; i < n + 1; i++) {
            let max = 0, key, index;

            keys.forEach((item, idx) => {
                if (map[item] > max) {
                    max = map[item]
                    index = idx
                    key = item
                }
            })

            if (key) {
                group.push(key)
                keys.splice(index, 1)
                map[key]--

                if (map[key] === 0) delete map[key]
            } else break
        }

        group = group.join('').padEnd(n + 1, '-')

        result += group
    }

    return result.replace(/-+$/g, '').length
}

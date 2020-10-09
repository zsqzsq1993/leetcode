export default (n) => {
    const make = (n) => {
        if (n === 0) return [0]
        else if (n === 1) return ['0', '1']
        else {
            const length = Math.pow(2, n) - 1

            const prev = make(n - 1)

            const current = []

            prev.forEach((item, index) => {
                current[index] = `0${item}`
                current[length - index] = `1${item}`
            })

            return current
        }
    }

    return make(n).map(item => Number.parseInt(item, 2))
}


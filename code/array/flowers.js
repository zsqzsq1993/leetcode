// 605
export default (flowerbed, n) => {
    const {length} = flowerbed

    if (
        length < 1 ||
        length > 20000 ||
        n > length ||
        n < 0) {
        throw new Error('disobey rules')
    }

    if (n === 0) {
       return true
    }

    const plant = (flowerbed, i) => {
        const prev = flowerbed[i-1]

        const next = flowerbed[i + 1]

        if (!prev && !next) {
            flowerbed[i] = 1

            return true
        }
    }

    for (let i = 0; i < length; i++) {
        if (!flowerbed[i]) {
            const result = plant(flowerbed, i)

            if (result) {
                n--
                i++
            }

            if (!n) return true
        }
    }

    return false
}

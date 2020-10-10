// 922

export default (array) => {
    array.sort()

    const retArray = []

    let even = 0

    let odd = 1

    array.forEach(item => {
        if (item % 2 === 0) {
            retArray[even] = item
            even += 2
        } else {
            retArray[odd] = item
            odd += 2
        }
    })

    return retArray
}

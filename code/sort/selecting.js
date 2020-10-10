export default (array) => {
    const length = array.length

    for (let i = 0; i < length - 1; i++) {
        let min = array[i]

        let index = i

        for (let j = i + 1; j < length; j++) {
            if (array[j] < min) {
                min = array[j]
                index = j
            }
        }

        if (index !== i) {
            const tempt = array[i]
            array[i] = array[index]
            array[index] = tempt
        }
    }

    return array
}

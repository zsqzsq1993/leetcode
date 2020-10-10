export default (array) => {
    const length = array.length

    let tempt

    for (let i = length - 1; i > 0; i--) {
        for (let index = 0; index < i; index++) {
            if (array[index] > array[index + 1]) {
                tempt = array[index + 1]
                array[index + 1] = array[index]
                array[index] = tempt
            }
        }
    }

    return array
}

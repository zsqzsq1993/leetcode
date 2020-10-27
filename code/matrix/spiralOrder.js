export default (matrix) => {
    let result = []

    const oneCircle = (subMatrix) => {
        if (subMatrix.length) result = result.concat(subMatrix.shift())

        for (let row = 0; row < subMatrix.length - 1 && subMatrix[row].length; row++) {
            result.push(subMatrix[row].pop())
        }

        if (subMatrix.length) {
            result = result.concat(subMatrix.pop().reverse())
        }

        for (let row = subMatrix.length - 1; row > -1 && subMatrix[row].length; row--) {
            result.push(subMatrix[row].shift())
        }

        subMatrix.filter(item => {
            return item.length
        })

        if (subMatrix.length) {
            oneCircle(subMatrix)
        }
    }

    oneCircle(matrix)

    return result
}

export default (matrix) => {
    let result = []

    const oneCircle = (subMatrix) => {
        result = result.concat(subMatrix.shift())

        for (let row = 0; row < subMatrix.length - 1; row++) result.push(subMatrix[row].pop())

        if (subMatrix.length) result = result.concat( subMatrix.pop().reverse())

        for (let row = subMatrix.length - 1; row > -1; row--) result.push(subMatrix[row].shift())

        if (subMatrix.length) oneCircle(subMatrix)
    }

    oneCircle(matrix)

    return result
}

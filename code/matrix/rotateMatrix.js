// 48

export default (matrix) => {
    const n = matrix.length

    if (!n) return []

    const swap = (matrix, row, col) => {
        const tempt = matrix[row][col]

        matrix[row][col] = matrix[col][row]

        matrix[col][row] = tempt
    }

    // flip (up-and-down)
    matrix.reverse()

    // flip diagonal
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            swap(matrix, row, col)
        }
    }

    return matrix
}

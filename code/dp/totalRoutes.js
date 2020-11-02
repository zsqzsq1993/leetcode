// 63
export default (obstacleGrid) => {
    if (obstacleGrid[0][0] === 1) return 0

    const m = obstacleGrid.length

    const n = obstacleGrid[0].length

    const dp = (m, n) => {
        if (obstacleGrid[m - 1][n - 1] === 1) return 0

        if (m ===2 && n === 2) {
            if (obstacleGrid[1][1] === 1) return 0

            const tempt = obstacleGrid[0][1] + obstacleGrid[1][0]

            if (tempt === 1) return 1

            else if (tempt === 2) return 0

            else return 2
        }

        if (m === 1 || n === 1) {
            if (m === 1) return obstacleGrid[0].includes(1) ? 0 : 1
            if (n === 1) return obstacleGrid.every(array => array[0] !== 1) ? 1 : 0
        }

        else return dp(m-1, n) + dp(m, n-1)
    }

    return dp(m, n)
}

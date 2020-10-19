// 85

export default (matrix) => {
    if (!matrix.length) return 0

    let maxArea = 1

    const totalLength = matrix.length

    matrix.forEach((row, rowIndex) => {
        let result

        const matches = []

        const reg = /1{2,}/g

        while((result = reg.exec(row.join('')))) {
            matches.push([
                result.index,
                result.index + result[0].length
            ])

            reg.lastIndex--
        }

        matches.forEach(match => {
            const [start, end] = match

            const width = end - start + 1

            let height = 1

            const callback = (i) => {
                const subMatrix = matrix[i]

                let success = true

                for (let i = start; i <= end; i++) {
                    if (subMatrix[i] !== '1') {
                        success = false
                        break
                    }
                }

                if (success) {
                    height++
                }
            }

            for (let i = rowIndex + 1; i < totalLength; i++) {
                callback(i)
            }

            for (let i = rowIndex - 1; i > -1; i--) {
                callback(i)
            }

            const area = width * height

            if (area > maxArea) maxArea = area
        })
    })

    return maxArea
}

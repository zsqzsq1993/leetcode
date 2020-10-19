// 84
export default (heights) => {
    let max = 0

    heights.forEach((height, index) => {
        let width = 1

        for (let i = index + 1; i < heights.length; i++) {
            if (heights[i] >= height) width++
            else break
        }

        for (let i = index - 1; i > -1; i--) {
            if (heights[i] >= height) width++
            else break
        }

        const area = width * height

        if ( area > max) max = area
    })

    return max
}

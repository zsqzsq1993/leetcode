export function simpleQuickSort(array) {
    const quickSort = (array) => {
        const length = array.length

        if (length < 2) return array

        const flag = array[0]

        const left = []

        const right = []

        for (let i = 1; i < length; i++) {
            if (array[i] < flag) {
                left.push(array[i])
            } else {
                right.push(array[i])
            }
        }

        return [].concat(quickSort(left), [flag], quickSort(right))
    }

    return quickSort(array)
}

export function inPlaceQuickSort(array) {
    const swap = (array, i, j) => {
        const tempt = array[i]
        array[i] = array[j]
        array[j] = tempt
    }

    const findCenter = (array, left, right) => {
        const flag = array[left]

        let arrow = left + 1

        for (let i = arrow; i <= right; i++) {
            if (array[i] < flag) {
                swap(array, arrow, i)
                arrow++
            }
        }

        swap(array, left, arrow - 1)
        return arrow - 1
    }

    const quickSort = (array, left, right) => {
        if (left < right) {
            const center = findCenter(array, left, right)
            quickSort(array, left, center - 1)
            quickSort(array, center + 1, right)
        }
    }

    quickSort(array, 0, array.length - 1)

    return array
}

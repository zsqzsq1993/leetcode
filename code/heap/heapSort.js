// 451

const heapSort = (() => {
    const swap = (array, i, j) => {
        const tempt = array[i]

        array[i] = array[j]

        array[j] = tempt
    }

    const findLargestAndSwap = (array, index, maxIndex) => {
        const nodeValue = array[index]

        const leftIndex = index * 2 + 1

        const rightIndex = index * 2 + 2

        let largest = index

        if (leftIndex < maxIndex && array[leftIndex] > array[index])
            largest = leftIndex

        if (rightIndex < maxIndex && array[rightIndex] > array[index])
            largest = rightIndex

        if (largest !== index) swap(array, index, largest)

        return array[index]
    }

    const walkFromNode = (array, index, maxIndex) => {
        if (index < maxIndex && index > -1) {
            const before = array[index]

            const after = findLargestAndSwap(array, index, maxIndex)

            if (before !== after) {
                walkFromNode(array, index * 2 + 1, maxIndex)
                walkFromNode(array, index * 2 + 2, maxIndex)
            }

            walkFromNode(array, index - 1, maxIndex)
        }
    }

    return function (array) {
        let maxIndex = array.length

        const layer = Math.floor(Math.log2(maxIndex))

        const lastParentNode = Math.pow(2, layer) - 2

        walkFromNode(array, lastParentNode, maxIndex)
        swap(array, 0, --maxIndex)

        while (maxIndex > 0) {
            walkFromNode(array, 0, maxIndex)
            swap(array, 0, --maxIndex)
        }

        return array
    }
})()

const sortString = (s) => {
    let result = ''

    const map = ((string) => {
        const map = new Map()

        string.split('').forEach(character => {
            if (map.get(character)) map.set(character, map.get(character) + 1)
            else map.set(character, 1)
        })

        return map
    })(s)

    let array = Array.from(map.values())

    array = heapSort(array)

    while(array.length) {
        const max = array.pop()

        for (const [key, value] of map) {
            if (value === max) {
                result += key.repeat(value)
                map.delete(key)
                break
            }
        }
    }

    return result
}

export {
    heapSort,
    sortString
}

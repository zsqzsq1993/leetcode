// 313 SuperUgly
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

// 找到一个数的质因数
function getPrimes(number) {
    const primes = []

    const maxPosiblePrime = Math.floor(number / 2)

    for (let value = 2; value <= maxPosiblePrime; value++) {
        if (number % value === 0 && !getPrimes(value).length) {
            primes.push(value)
        }
    }

    return primes
}

function findByHeapSort(array, value) {
    const maxIndex = array.length - 1

    const find = (fromIndex) => {
        if (value > array[fromIndex] || fromIndex > maxIndex) return false
        else if (value === array[fromIndex]) return true
        else return find(fromIndex * 2 + 1) ||
                find(fromIndex * 2 + 2)
    }

    return find(0)
}

function nthSuperUglyNumber(n, primes) {
    let count = 1, number = 2

    let target = 1

    primes = heapSort(primes).reverse()

    while (count < n) {
        const nprimes = getPrimes(number)

        if (!nprimes.length) {
            // primes.find(item => item === number)
            if (findByHeapSort(primes, number)) {
                target = number
                count++
            }
        } else {
            let success = true

            for (let prime of nprimes) {
                // primes.find(item => item === prime)
                if (!findByHeapSort(primes, prime)) {
                    success = false
                    break
                }
            }

            if (success) {
                target = number
                count++
            }
        }

        number++
    }

    return target
}

export {
    getPrimes,
    nthSuperUglyNumber
}

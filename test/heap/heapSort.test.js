import {heapSort, sortString} from "../../code/heap/heapSort"

test('testing heapSort', () => {
    expect(heapSort([2,4,5,1,3,7,9])).toEqual([1,2,3,4,5,7,9])

    expect(heapSort([0,0,2,1,9,5,4])).toEqual([0,0,1,2,4,5,9])
})

test('testing sortString', () => {
    expect(sortString('tree')).toMatch(/eetr|eert/)

    expect(sortString('cccaaa')).toMatch(/cccaaa|aaaccc/)
})

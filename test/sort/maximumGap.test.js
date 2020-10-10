import {byBubbleSort, bySelectionSort} from "../../code/sort/maximumGap"

test('maximum gap by bubbleSort', () => {
    expect(byBubbleSort([3,6,9,1])).toBe(3)
    expect(byBubbleSort([10])).toBe(0)

    expect(bySelectionSort([3,6,9,1])).toBe(3)
    expect(bySelectionSort([10])).toBe(0)
})

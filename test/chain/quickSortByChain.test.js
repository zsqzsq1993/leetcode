import quickSortByChain from "../../code/chain/quickSortByChain"

test('testing quickSortByChain', () => {
    expect(quickSortByChain([4, 1, 3, 2, 7, 9, 10, 12, 6])).toEqual([1, 2, 3, 4, 6, 7, 9, 10, 12])
})

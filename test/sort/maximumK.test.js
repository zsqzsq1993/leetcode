import maximumK from "../../code/sort/maximumK"

test('test maximum k', () => {
    expect(maximumK([3,2,1,5,6,4], 2)).toBe(5)
    expect(maximumK([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
})

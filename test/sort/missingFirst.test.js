import missingFirst from "../../code/sort/missingFirst"

test('test missingFirst', () => {
    expect(missingFirst([1,2,0])).toBe(3)
    expect(missingFirst([3,4,-1,1])).toBe(2)
    expect(missingFirst([7,8,9,11,12])).toBe(1)
    expect(missingFirst([2])).toBe(1)
    expect(missingFirst([1000, -1])).toBe(1)
    expect(missingFirst([1, 1000])).toBe(2)
})

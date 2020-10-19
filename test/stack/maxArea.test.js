import maxArea from "../../code/stack/maxArea"

test('max area', () => {
    expect(maxArea([2,1,5,6,2,3])).toBe(10)
    expect(maxArea([3,6,5,7,4,8,1,0])).toBe(20)
})

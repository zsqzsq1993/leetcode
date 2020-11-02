import sellStock from "../../code/greed/sellStock"

test('sellStock', () => {
    expect(sellStock([7,1,5,3,6,4])).toBe(7)

    expect(sellStock([1,2,3,4,5])).toBe(4)

    expect(sellStock([7,6,4,3,1])).toBe(0)
})

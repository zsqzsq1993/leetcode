import flowers from "../../code/array/flowers"

test('plant flowers', () => {
    expect(flowers([1,0,0,0,1], 1)).toBeTruthy()
    expect(flowers([1,0,0,0,1], 2)).toBeFalsy()
})

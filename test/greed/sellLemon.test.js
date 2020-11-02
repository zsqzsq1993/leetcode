import sellLemon from "../../code/greed/sellLemon"

test('sell lemonade', () => {
    expect(sellLemon([5,5,5,10,20])).toBeTruthy()

    expect(sellLemon([5,5,10])).toBeTruthy()

    expect(sellLemon([10,10])).toBeFalsy()

    expect(sellLemon([5,5,10,10,20])).toBeFalsy()

    expect(sellLemon([5,5,5,10,5,20,5,10,5,20])).toBeTruthy()
})

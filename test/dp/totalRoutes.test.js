import totalRoutes from "../../code/dp/totalRoutes"

test('test totalRoutes', () => {
    expect(totalRoutes([
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ])).toBe(2)
})

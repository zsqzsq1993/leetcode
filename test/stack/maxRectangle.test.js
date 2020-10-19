import maxRectangle from "../../code/stack/maxRectangle"

const matrix = [
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]

test('test max rectangle area', () => {
    expect(maxRectangle(matrix)).toBe(6)
})

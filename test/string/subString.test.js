import subString from "../../code/string/subString"

const str1 = "00110011"
const str2 = "10101"

test('test subString', () => {
    expect(subString(str1)).toBe(6)
    expect(subString(str2)).toBe(4)
})

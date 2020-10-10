import repeatSubString from "../../code/reg/repeatSubString"

test('testing repeatSubString', () => {
    expect(repeatSubString('ababab')).toBeTruthy()
    expect(repeatSubString('aba')).toBeFalsy()
    expect(repeatSubString('abcabcabcabc')).toBeTruthy()
})

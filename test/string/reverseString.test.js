import reverseString from "../../code/string/reverseString"

const origin = 'Let\'s go and move'

const reversed = 's\'teL og dna evom'

test('reverse string "Let\'s go and move"', () => {
    expect(reverseString(origin)).toBe(reversed)
})

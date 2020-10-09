import {gcd} from "../../code/array/card"
import card from "../../code/array/card"

describe('card', () => {
    test('test gcd', () => {
        expect(gcd(6, 3)).toBe(3)
        expect(gcd(9, 6)).toBe(3)
        expect(gcd(3, 6)).toBe(3)
    })

    test('test card', function () {
        expect(card([1,2,3,4,4,3,2,1])).toBeTruthy()
        expect(card([1,1,1,2,2,2,3,3])).toBeFalsy()
        expect(card([1])).toBeFalsy()
        expect(card([1,1])).toBeTruthy()
        expect(card([1,1,2,2,2,2])).toBeTruthy()
    })
})

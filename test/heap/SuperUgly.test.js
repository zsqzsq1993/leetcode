import {getPrimes, nthSuperUglyNumber} from "../../code/heap/SuperUgly"

test('getPrimes', () => {
    expect(getPrimes(6)).toEqual([2,3])
    expect(getPrimes(16)).toEqual([2])
    expect(getPrimes(18)).toEqual([2,3])
})

test('SuperUgly', () => {
    expect(nthSuperUglyNumber(12,[2,7,13,19])).toBe(32)
})

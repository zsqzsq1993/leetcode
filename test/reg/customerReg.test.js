import customerReg from "../../code/reg/customerReg"

test('testing customerReg', () => {
    expect(customerReg('aa', 'a')).toBeFalsy()

    expect(customerReg('aa', 'a*')).toBeTruthy()

    expect(customerReg('ab', '.*')).toBeTruthy()

    expect(customerReg('aab', 'c*a*b')).toBeTruthy()

    expect(customerReg('mississippi', 'mis*is*p*.')).toBeFalsy()
})

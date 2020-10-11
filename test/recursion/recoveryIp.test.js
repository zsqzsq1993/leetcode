import recoveryIp from "../../code/recursion/recoveryIp"

test('recoveryIp', () => {
    expect(recoveryIp('25525511135')).toEqual(["255.255.11.135","255.255.111.35"])

    expect(recoveryIp('0000')).toEqual(["0.0.0.0"])

    expect(recoveryIp('1111')).toEqual(["1.1.1.1"])

    expect(recoveryIp('010010')).toEqual(["0.10.0.10","0.100.1.0"])

    expect(recoveryIp('101023')).toEqual(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"])
})

import oddAndEven from "../../code/sort/oddAndEven"

test('test odd and even sorting', () => {
    expect(oddAndEven([1,3,2,6,5,8])).toEqual([2,1,6,3,8,5])

    expect(oddAndEven([3,2,5,1,4,2])).toEqual([2,1,2,3,4,5])
})

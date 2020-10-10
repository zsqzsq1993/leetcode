import selecting from "../../code/sort/selecting"

test('test selecting sorting', () => {
    expect(selecting([1,3,2,1,5,7])).toEqual([1,1,2,3,5,7])

    expect(selecting([3,2,5,1,4,2])).toEqual([1,2,2,3,4,5])
})

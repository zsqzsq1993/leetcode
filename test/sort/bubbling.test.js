import bubbling from "../../code/sort/bubbling"

test('test bubbling sorting', () => {
    expect(bubbling([1,3,2,1,5,7])).toEqual([1,1,2,3,5,7])

    expect(bubbling([3,2,5,1,4,2])).toEqual([1,2,2,3,4,5])
})

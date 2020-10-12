import findSubString from "../../code/recursion/findSubString"

test('findSubString', () => {
    // expect(findSubString('barfoothefoobarman', ["foo","bar"])).toEqual([9, 0])
    //
    // expect(findSubString('wordgoodgoodgoodbestword', ["word","good","best","word"])).toEqual([])

    expect(findSubString('foobarfoobar',['foo','bar'])).toEqual([0,6,3])
})

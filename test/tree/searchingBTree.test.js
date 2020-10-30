import SearchingTree from "../../code/tree/searchingBTree"

import Tree from "../../code/tree/bTree"

const root = new Tree([5,1,4,null,null,3,6])

test('testing searchingTree', () => {
    expect(SearchingTree.isSearchingTree(root)).toBeFalsy()
})

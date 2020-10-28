import Tree from "../../code/tree/bTree"

const root1 = new Tree([1,2,2,3,4,4,3])

const root2 = new Tree([1,2,2,null,3,null,3])

const root3 = new Tree([1,2,3])

test('testing bTree', () => {
    expect(Tree.isSymmetric(root1)).toBeTruthy()

    expect(Tree.isSymmetric(root2)).toBeFalsy()

    expect(Tree.isSymmetric(root3)).toBeFalsy()
})

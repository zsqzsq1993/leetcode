import {CircularNodeList, NodeList} from "../../code/chain/circularChain"

const circularNodeList = new CircularNodeList([3,2,0,-4], 1)

const nodeList = new NodeList([3,2,0,-4])

test('test circularChain', () => {
    expect(CircularNodeList.isCircular(circularNodeList)).toBeTruthy()
    expect(CircularNodeList.isCircular(nodeList)).toBeFalsy()
})

import minCost from "../../code/dp/minCost"

test('test minCost by dp', () => {
    expect(minCost(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)).toBe(200)
    expect(minCost(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)).toBe(500)
})

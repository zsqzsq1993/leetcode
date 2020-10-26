import taskManager from "../../code/queue/taskManager"

test('test taskManager', () => {
    expect(taskManager(["A","A","A","B","B","B"], 2)).toBe(8)
})

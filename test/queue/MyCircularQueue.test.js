import MyCircularQueue from "../../code/queue/MyCircularQueue"

test('test MyCircularQueue', () => {
    const myQueue = new MyCircularQueue(3)

    expect(myQueue.enQueue(1)).toBeTruthy()

    expect(myQueue.enQueue(2)).toBeTruthy()

    expect(myQueue.enQueue(3)).toBeTruthy()

    expect(myQueue.enQueue(4)).toBeFalsy()

    expect(myQueue.Rear()).toBe(3)

    expect(myQueue.isFull()).toBeTruthy()

    expect(myQueue.deQueue()).toBeTruthy()

    expect(myQueue.enQueue(4)).toBeTruthy()

    expect(myQueue.Rear()).toBe(4)
})

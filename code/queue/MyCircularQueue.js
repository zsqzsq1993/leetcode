export default class {
    constructor(k) {
        this.length = k

        this.queue = Array(k)

        this.font = 0

        this.rear = 0
    }

    Front() {
        return this.queue[this.font]
    }

    Rear() {
        const index = this.rear - 1

        return this.queue[index < 0 ? this.length - 1 : index]
    }

    enQueue(value) {
        if (this.isFull()) {
            return false
        } else {
            this.queue[this.rear] = value

            this.rear = (this.rear + 1) % this.length

            return true
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            return false
        } else {
            this.queue[this.font] = undefined

            this.font = (this.font + 1) % this.length

            return true
        }
    }

    isEmpty() {
        return (this.font === this.rear) && !this.queue[this.font]
    }

    isFull() {
        return (this.font === this.rear) && this.queue[this.font]
    }
}

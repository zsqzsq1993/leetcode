class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class NodeList {
    constructor (array) {
        const head = new Node(array.shift())

        let before = head

        while (array.length) {
            const next = new Node(array.shift())

            before.next = next

            before = next
        }

        return head
    }
}

class CircularNodeList extends NodeList {
    constructor(array, pos) {
        const head = super(array)

        let before = head

        let count = 0, backTarget

        while (before.next) {
            if (count === pos) backTarget = before
            count++
            before = before.next
        }

        before.next = backTarget

        return head
    }

    static isCircular (head) {
        let quick = head.next
        let slow = head

        while (true) {
            if (!quick.next) return false
            else if (quick === slow || quick.next === slow) return true
            else {
                quick = quick.next.next
                slow = slow.next
            }
        }
    }
}

export {CircularNodeList, NodeList}

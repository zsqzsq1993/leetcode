// 利用单向链表进行快速排序

class Node {
    constructor(value) {
        this.value = value
        this.next = undefined
    }
}

class NodeList {
    constructor(array) {
        const head = new Node(array.shift())

        let before = head

        array.forEach(value => {
            const next = new Node(value)
            before.next = next
            before = next
        })

        return head
    }
}

export default function quickSort (array) {
    const head = new NodeList(array)

    const swapValue = (one, two) => {
        const value = one.value

        one.value = two.value

        two.value = value
    }

    const findCenter = (begin, end) => {
        const centerValue = begin.value

        let arrow1 = begin

        let arrow2 = begin.next

        while(arrow2 !== end) {
            if (arrow2.value < centerValue) {
                arrow1 = arrow1.next
                swapValue(arrow1, arrow2)
            }

            arrow2 = arrow2.next
        }

        swapValue(arrow1, begin)

        return arrow1
    }

    const sort = (begin, end) => {
        if (begin !== end) {
            const center = findCenter(begin, end)
            sort(begin, center)
            sort(center.next,end)
        }
    }

    sort(head)

    return (function () {
        let current = head

        const result = []

        while(current) {
            result.push(current.value)

            current = current.next
        }

        return result
    })()
}

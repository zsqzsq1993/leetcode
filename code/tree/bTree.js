class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor (array) {
        const nodeList = []

        array.forEach(item => {
            nodeList.push(new Node(item))

            const currentIndex = nodeList.length

            if (currentIndex > 1) {
                const layer = Math.floor(Math.log2(currentIndex))

                const currentLayerStarter = Math.pow(2, layer)

                const prevLayerStarter = Math.pow(2, layer - 1)

                const group = Math.floor((currentIndex - currentLayerStarter) / 2)

                const parent = nodeList[(prevLayerStarter - 1) + group]

                if (!parent.left) {
                    parent.left = nodeList[currentIndex - 1]
                } else {
                    parent.right = nodeList[currentIndex - 1]
                }
            }
        })

        const root = nodeList.shift()

        nodeList.length = 0

        return root
    }

    static isSymmetric (root) {
        if (!root || (!root.left && !root.right)) return true

        if (!root.left || !root.right) return false

        const walk = (left, right) => {
            if (!left && !right) return true

            if (
                (left && !right) ||
                (right && !left) ||
                (left.value !== right.value)
            ) return false

            else return walk(left.left, right.right) && walk(left.right, right.left)
        }

        return walk(root.left, root.right)
    }
}

export default Tree

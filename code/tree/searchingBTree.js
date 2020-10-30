// 98

function Node (value) {
    this.value = value
}

function SearchingTree (array) {
    const root = new Node(array.shift())

    const walk = (node, value) => {
        if (!value && value !== 0) return

        if (value < node.value) {
            if (node.left) walk(node.left, value)
            else node.left = new Node(value)
        } else {
            if (node.right) walk(node.right, value)
            else node.right = new Node(value)
        }
    }

    while (array.length) {
        walk(root, array.shift())
    }

    return root
}

SearchingTree.isSearchingTree = function (root) {
    const walk = (node) => {
        if (!node) return true

        if (!node.left && !node.right) return true

        if ((node.left && node.left.value > node.value) ||
            (node.right && node.right.value < node.value)) {
            return false
        }

        else return walk(node.left) && walk(node.right)
    }

    return walk(root)
}

export default SearchingTree

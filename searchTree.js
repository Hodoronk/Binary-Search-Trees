class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(root){
        this.root = root
    }
}

const removeDuplicates = (array) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}


const treeArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const sortArray = (array) => {
    const noDuplicates = removeDuplicates(array);
    return noDuplicates.sort((a, b) => a - b)
}
const newArray = sortArray(treeArray)
console.log(newArray) 


const buildTree = (array) => {
    array = sortArray(array) ;
    if(array.length === 0) {
        return null
    } else {
        const middleNode = Math.floor(array.length / 2) ;
        const root = new Node(array[middleNode])

        root.right = buildTree(array.slice(0, middleNode))
        root.left = buildTree(array.slice(middleNode + 1))

        return root;
    }
}

console.log(buildTree(treeArray)) ;



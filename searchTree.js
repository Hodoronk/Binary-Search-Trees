class Node {
    constructor (data = null, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor(root){
        this.root = root
    }
}

const treeArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const buildTree = (array, n = 0) => {

    




    if(n == array.length - 1) {

    } else {

        if(array[n+1] > array[n+2]) {
            array[n].right = array[n+1]
            array[n].left = array[n+2]
        } else {
            array[n].right = array[n+2]
            array[n].left = array[n+1]
        }
    }
}

const removeDuplicates = (array) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}
console.log(treeArray) ;
console.log(removeDuplicates(treeArray)) ;
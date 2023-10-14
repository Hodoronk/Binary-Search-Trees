const removeDuplicates = (array) => {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })
}
const sortArray = (array) => {
    const noDuplicates = removeDuplicates(array);
    return noDuplicates.sort((a, b) => a - b)
}
class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(array){
        this.root = this.buildTree(array)
    }

    buildTree (array) {
        array = sortArray(array) ;
        if(array.length === 0) {
            return null
        } else {
            const middleNode = Math.floor(array.length / 2) ;
            const root = new Node(array[middleNode])
    
            root.right = this.buildTree(array.slice(0, middleNode))
            root.left = this.buildTree(array.slice(middleNode + 1))
    
            return root;
        }
    }
    insert(value, root) {
        if(root === null) {
            return new Node(value);
        }else if(value == root.value) {
            console.log("Value already exists inside Binary Search Tree")
            return root
        }
        if(value < root.value){
            root.right = this.insert(value, root.right)
        }else{
            root.left = this.insert(value, root.left)
        }
        return root
    }
    delete(value, root, parentNode, direction) {
        if(value === root.value && root.right !== null && root.left !== null) {
           if(direction === 'right') {
            parentNode.right = root.left
            root.left.left = root.right
            root.right = null
            root.left = null
           } else {
            parentNode.left = root.right
            root.right.left = root.left
            root.right = null
            root.left = null
           }

            } else if (value === root.value && root.right !== null && root.left === null || root.right === null && root.left !== null) {
            if(parentNode && root.right && parentNode.value > root.right.value) {
                parentNode.left = root.right
            } else {
                parentNode.right = root.left
            }

        } else if (value === root.value && root.right === null && root.left === null) {
                if(direction === 'right') {
                    parentNode.right = null
                } else {
                    parentNode.left = null
                }
                return null;
        } else {
            if(value < root.value) {
                this.delete(value, root.right, root, 'right')
            } else {
                this.delete(value, root.left, root, 'left')
            }
        }
    }
    }



const myArray = [42, 17, 68, 23, 55, 8, 37, 91, 13, 62];
const myTree = new Tree(myArray);
myTree.buildTree(myArray);


myTree.delete(68, myTree.root)
myTree.delete(91, myTree.root)
myTree.delete(62, myTree.root)
// myTree.delete(2001, myTree.root) THIS does not work
// myTree.delete(55, myTree.root) works as expected, has 1 child



function prettyPrint(root, prefix = "", isLeft = true) {
    if (root) {
        prettyPrint(root.right, prefix + (isLeft ? "│   " : "    "), false);
        console.log(prefix + (isLeft ? "└── " : "┌── ") + root.value);
        prettyPrint(root.left, prefix + (isLeft ? "    " : "│   "), true);
    }
}


  prettyPrint(myTree.root)



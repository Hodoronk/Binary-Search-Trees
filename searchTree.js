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
    
            root.left = this.buildTree(array.slice(0, middleNode))
            root.right = this.buildTree(array.slice(middleNode + 1))
    
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
        if(value > root.value){
            root.right = this.insert(value, root.right)
        }else if (value < root.value){
            root.left = this.insert(value, root.left)
        }
        return root
    }
    delete(value, root) {
        if (root === null) {
            console.log("Node was not found")
            return root
        }

        if (value > root.value) {
            root.right = this.delete(value, root.right)
        } else if (value < root.value) {
            root.left = this.delete(value, root.left)
        } else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            } else {                                               
                root.value = this.findMin(root.right)
                root.right = this.delete(root.value, root.right)
            }
        }
        return root
    }

    findMin(root) {                        
        if (root.left === null) {
            return root.value
        } else {
            return this.findMin(root.left)
        }
    }

    find(root, value){
        if(root.value === value) {
            return root
        } else {
            if(value > root.value) {
                return this.find(root.right, value)
            } else  {
               return this.find(root.left, value)
            }
        }
    }
    levelOrder(){
        let queue = [this.root]
        const elements = []

        while(queue.length > 0) {
            let current = queue.shift()
            elements.push(current.value)

            if(current.left) {
                queue.push(current.left)
            }
            if(current.right) {
                queue.push(current.right)
            }
        }
       
        return console.log(elements)
    }
    depth(root, value) {
        let depth
        function finder(root, value, depth = 0) {
            if(value === root.value) {
                return depth
            } else {
                if(value > root.value) {
                    return finder (root.right, value , depth + 1)
                } else {
                    return finder (root.left , value, depth + 1)
                }
            }
        }
        depth = finder(this.root, value, depth = 0)
        return console.log(`Depth is : ${depth}`) ;
    }
}



const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTree = new Tree(myArray);
myTree.buildTree(myArray);


function prettyPrint(root, prefix = "", isLeft = true) {
    if (root) {
        prettyPrint(root.right, prefix + (isLeft ? "│   " : "    "), false);
        console.log(prefix + (isLeft ? "└── " : "┌── ") + root.value);
        prettyPrint(root.left, prefix + (isLeft ? "    " : "│   "), true);
    }
}


myTree.levelOrder()
    myTree.depth(myTree.root, 6)
  prettyPrint(myTree.root)
  myTree.find(myTree.root, 2)





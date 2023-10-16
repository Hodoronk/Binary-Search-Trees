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
    goDeep(node, target, height) {
        if (node === null) {
            return false;
        }
        if (node.value === target) {
            return height;
        } else {
            if (target > node.value) {
                return this.goDeep(node.right, target, height + 1);
            } else {
                return this.goDeep(node.left, target, height + 1);
            }
        }
    }
    findMin(root) {                        
        if (root.left === null) {
            return root.value
        } else {
            return this.findMin(root.left)
        }
    }
    findMax(root) {
        if(root.right === null) {
            return root.value
        } else {
            return this.findMax(root.right)
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
    levelOrder(root){

        let queue = [root]
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
       
        return elements
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
        return console.log(`The depth of ${value} is : ${depth}`) ;
    }
    height(value) {
        const foundNode = this.find(this.root, value);
        
        if (foundNode) {
            const levelOrderResult = this.levelOrder(foundNode);
            let deepest = levelOrderResult[levelOrderResult.length - 1]
            let height =  this.goDeep(foundNode, deepest, 0)
            return height
        } else {
            console.log('Node not found');
        }
        return height
    }
    inorder(root) { 
        const visited = []
        const traverse = (root) => {
            if(root !== null) {
                traverse(root.left)
                visited.push(root.value)
                traverse(root.right)
            }
        }
       traverse(this.root)
       return visited

    }
    preorder(root){ // root left right
        const visited = []
        const traverse = (root) => {
            if(root !== null) {
                visited.push(root.value)
                traverse(root.left)
                traverse(root.right)
            }
        }
        traverse(this.root)
        return visited

    }
    postorder() { // left right root
        const visited = []
        const traverse = (root) => {
            if(root !== null) {
                traverse(root.left)
                traverse(root.right)
                visited.push(root.value)
            }
        }
        traverse(this.root)
        return visited
    }
    isBalanced(root){
        let heightL = this.height(this.root.left.value)
        let heightR = this.height(this.root.right.value)
         if (Math.abs(heightL - heightR) > 1) {
            return false
         } else {
            return true
         }
    }
    rebalance(root) {
        let isBalanced = this.isBalanced(this.root)
        if(isBalanced === false) {
            const unsorted = this.inorder(root)
            const sorted = sortArray(unsorted);
            this.root = this.buildTree(sorted)

        } else {
            return console.log('Tree is already balanced')
        }

    }


}

const myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];



function prettyPrint(root, prefix = "", isLeft = true) {
    if (root) {
        prettyPrint(root.right, prefix + (isLeft ? "│   " : "    "), false);
        console.log(prefix + (isLeft ? "└── " : "┌── ") + root.value);
        prettyPrint(root.left, prefix + (isLeft ? "    " : "│   "), true);
    }
}



const randomArray = [
    56, 78, 92, 12, 44, 3, 19, 67, 35, 88, 7, 60, 25, 53, 30, 98, 41, 87, 9, 63,
    71, 16, 50, 86, 11, 76, 72, 14, 80, 48, 2, 28, 68, 37, 59, 26, 49, 22, 85, 64,
    4, 97, 8, 69, 45, 31, 75, 5, 99, 29, 61, 38, 91, 74, 17, 51, 18, 83, 23, 55,
    47, 27, 70, 15, 43, 90, 33, 66, 6, 77, 58, 1, 39, 82, 24, 46, 73, 13, 32, 81,
    54, 21, 42, 95, 20, 62, 36, 84, 10, 52, 89, 34, 57, 40, 65, 94, 70
  ]
  const myTree = new Tree(randomArray)
  myTree.buildTree(randomArray)

  console.log(`Is it balanced? ${myTree.isBalanced(myTree.root)}`)
  console.log(`Inorder: ${myTree.inorder(myTree.root)}`)
  console.log(`Preorder: ${myTree.preorder(myTree.root)}`)
  console.log(`Postorder: ${myTree.postorder(myTree.root)}`)

  // Unbalancing
  myTree.insert(101, myTree.root)
  myTree.insert(102, myTree.root)
  myTree.insert(103, myTree.root)
  myTree.insert(104, myTree.root)
  myTree.insert(105, myTree.root)
  console.log(`Is it balanced? ${myTree.isBalanced(myTree.root)}`) //returns false
  prettyPrint(myTree.root)

  console.log(`REBALANCING IS DONE HERE`)

  myTree.rebalance(myTree.root)
  console.log(`Is it balanced? ${myTree.isBalanced(myTree.root)}`) //returns true

  // printing all elements again in all 3 orders

  console.log(`Inorder: ${myTree.inorder(myTree.root)}`)
  console.log(`Preorder: ${myTree.preorder(myTree.root)}`)
  console.log(`Postorder: ${myTree.postorder(myTree.root)}`)
  prettyPrint(myTree.root)








  


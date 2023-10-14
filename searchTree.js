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
        }if(value === root.value) {
            console.log("Value already exists inside Binary Search Tree")
            return root
        }
        if(value > root.value){
            root.right = this.insert(value, root.right)
        }else{
            root.right = this.insert(value, root.left)
        }
        return root
    }
}


const myArray = [42, 17, 68, 23, 55, 8, 37, 91, 13, 62];
const myTree = new Tree(myArray);
myTree.buildTree(myArray);
myTree.insert(23, myTree.root)


// const prettyPrint = (node, prefix = "", isLeft = true) => { prettyPrint function from the Odin Project
//     if (node === null) {
//       return;
//     }
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//     }
//     console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//     }
//   };

  prettyPrint(myTree.root)



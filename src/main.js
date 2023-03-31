"use strict";

import { linkedList} from "./linkedList";
import {balancedTree} from "./binaryTree";

const tree = balancedTree([1,4, 6, 7, 8, 12, 2, 123]);
tree.prettyPrint();
console.log(tree.postOrder())
tree.postOrder(print)
console.log("height of 6 is " + tree.getHeight(tree.find(6)))
console.log("depth of 6 is " + tree.getDepth(tree.find(623)))

function print(node)
{
    if (node === null) return
    console.log(node.data)
}
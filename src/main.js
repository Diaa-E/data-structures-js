"use strict";

import { linkedList } from "./linkedList";
import { balancedTree } from "./binaryTree";
import { getRandomArray, getRandomNumber } from "./utility";

let tree = balancedTree(getRandomArray(500, 10))
tree.prettyPrint()

for (let i = 0; i <= 10 ; i++)
{
    tree.insert(getRandomNumber(100))
}
tree.prettyPrint()
console.log(tree.isBalanced())

tree.rebalance()
tree.prettyPrint()
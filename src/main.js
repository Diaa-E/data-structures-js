"use strict";

import { linkedList } from "./linkedList";
import { balancedTree } from "./binaryTree";
import { listGraph } from "./graph";
import { getRandomArray, getRandomNumber } from "./utility";

// let tree = balancedTree(getRandomArray(500, 10))
// tree.prettyPrint()

// for (let i = 0; i <= 10 ; i++)
// {
//     tree.insert(getRandomNumber(100))
// }
// tree.prettyPrint()
// console.log(tree.isBalanced())

// tree.rebalance()
// tree.prettyPrint()

const nodes = [15, 23, 24, 99, 10]
const edges = [
    [15, 23],
    [24, 23],
    [15, 24],
    [99, 24],
    [10, 24],
    [10, 99],
] 

const graph = listGraph();

nodes.forEach(node => {
    
    graph.addNode(node);
});

edges.forEach( edge => {

    graph.addEdge(...edge)
})

console.log(graph.graph);
graph.bfs(10, 23)
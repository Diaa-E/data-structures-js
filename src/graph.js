"use strict";

//based on fireship's (youtube) implementation
export function listGraph()
{
    let graph = new Map();

    function addNode(nodeValue)
    {
        graph.set(nodeValue, []);
    };

    function addEdge(node, destination)
    {
        graph.get(node).push(destination);
        graph.get(destination).push(node);
    };

    return {graph: graph, addNode, addEdge};
}
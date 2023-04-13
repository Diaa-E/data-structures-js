"use strict";

export function listDiGraph()
{
    let graph = new Map();

    function addNode(nodeValue)
    {
        graph.set(nodeValue, []);
    };

    function addEdge(node, destination)
    {
        graph.get(node).push(destination);
    };

    return {graph: graph, addNode, addEdge};
}
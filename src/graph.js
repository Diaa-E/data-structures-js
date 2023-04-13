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

    
    function bfs(start, target)
    {
        if (graph.keys().length = 0) return; //empty graph

        const q = [start];
        const visited = new Set();
        visited.add(start);

        while (q.length > 0)
        {
            const currentNode = q.shift();
            const currentEdges = graph.get(currentNode);

            for (const edge of currentEdges) {

                if (edge === target)
                {
                    console.log(`found ${target}`)
                }
                
                if (!visited.has(edge))
                {
                    visited.add(edge);
                    q.push(edge);
                    console.log(edge);
                }

            }

            console.log("--------")

        }

    }

    return {graph: graph, addNode, addEdge, bfs};
}
"use strict";

function treeNode()
{
    let data = null;
    let left = null;
    let right = null;

    return {data: data, right: right, left: left};
}

export function balancedTree(array)
{
    array.sort((a,b) => a - b) //sort without callback sorts strings only
    array = [...new Set(array)]; //remove duplicates
    
    let root = buildTree(array, 0, array.length - 1);

    function buildTree(sortedArray, start, end)
    {
        //base case
        if (start > end) return null;

        let mid = parseInt((start + end) / 2);

        let node = treeNode();
        node.data = array[mid];

        node.left = buildTree(sortedArray, start, mid - 1);
        node.right = buildTree(sortedArray, mid + 1, end);

        return node;
    }

    const getRoot = () => {

        return root.data;
    }

    const insert = (newData, node = root) => {

        if (node.data === null)
        {
            node = treeNode().data = newData;
            return;
        }
        else if (node.data === newData)
        {
            return;
        }
        else if (node.data > newData)
        {
            if (node.right === null)
            {
                node.right = treeNode().data = newData;
                return;
            }
            else
            {
                insert(newData, node.right);
            }
        }
        else if (node.data < newData)
        {
            if (node.right === null)
            {
                node.setLeft(treeNode().data = newData);
                return;
            }
            else
            {
                insert(newData, node.left);
            }
        }
    }

    //copied from The Odin Project, refitted for my code
    const prettyPrint = (node = root, prefix = '', isLeft = true) => {
        if (node === null) {
           return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    return {getRoot, prettyPrint, insert}
}
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

        if (node === null)
        {
            node = treeNode();
            node.data = newData;
            root = node
            return;
        }
        else if (node.data === newData)
        {
            return;
        }
        else if (newData > node.data)
        {
            if (node.right === null)
            {
                node.right = treeNode();
                node.right.data = newData; 
                return;
            }
            else
            {
                insert(newData, node.right);
            }
        }
        else if (newData < node.data)
        {
            if (node.left === null)
            {
                node.left = treeNode()
                node.left.data = newData; 
                return;
            }
            else
            {
                insert(newData, node.left);
            }
        }
    }

    const find = (targetData, node = root) => {

        if (node === null)
        {
            return null;
        }
        else if (node.data === targetData)
        {
            return node;
        }
        else if (targetData > node.data)
        {
            if (node.right === null)
            {
                return null;
            }
            else
            {
                return find(targetData, node.right);
            }
        }
        else if (targetData < node.data)
        {
            if (node.left === null)
            {
                return null;
            }
            else
            {
                return find(targetData, node.left);
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

    return {getRoot, prettyPrint, insert, find}
}
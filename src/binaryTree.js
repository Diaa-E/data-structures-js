"use strict";

function treeNode()
{
    let data = null;
    let left = null;
    let right = null;

    const getData = () => {

        return data;
    }

    const setData = (newData) => {

        data = newData;
    }

    const getLeft = () => {

        return left;
    }

    const setLeft = (newLeft) => {

        left = newLeft;
    }

    const getRight = () => {

        return right;
    }

    const setRight = (newRight) => {

        right = newRight;
    }

    return {getRight, setRight, setLeft, getLeft, setData, getData};
}

export function balancedTree(array)
{
    array.sort( (a,b) => a - b) //sort without callback sorts strings only
    array = [...new Set(array)]; //remove duplicates
    console.log(array)
    
    let root = buildTree(array, 0, array.length - 1);

    function buildTree(sortedArray, start, end)
    {
        //base case
        if (start > end) return null;

        let mid = parseInt((start + end) / 2);

        let node = treeNode();
        node.setLeft(buildTree(sortedArray, start, mid - 1));
        node.setRight(buildTree(sortedArray, mid + 1, end));

        return node;
    }

    const getRoot = () => {

        return root.getData();
    }

    //copied from The Odin Project, refitted for my code
    const prettyPrint = (node = root, prefix = '', isLeft = true) => {
        if (node === null) {
           return;
        }
        if (node.getRight() !== null) {
          prettyPrint(node.getRight(), `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.getData()}`);
        if (node.getLeft() !== null) {
          prettyPrint(node.getLeft(), `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }

    return {getRoot, prettyPrint}
}
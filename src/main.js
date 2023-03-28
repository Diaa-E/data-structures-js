"use strict";

import { linkedList} from "./linkedList";

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

function balancedTree(array)
{
    array.sort();
    array = [...new Set(array)]; //remove duplicates
    
    let root = buildTree(array, 0, array.length - 1);

    const buildTree = (sortedArray, start, end) => {

        //base vase
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

    return {getRoot}
}
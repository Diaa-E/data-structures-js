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

    //since javascript has no pointers there is no way to delete an
    //object by setting it to null with a function
    //instead the tree is reconstructed while replacing the target node
    const remove = (targetData) =>
    {
        root = removeRecursive(targetData, root)
    }

    const removeRecursive = (targetData, node = root) => {

        if (node === null)
        {
            return node;
        }
        else if (targetData === node.data)
        {
            if (node.right === null && node.left === null) //leaf
            {
                return null;
            }
            else if (node.right === null) //left child
            {
                return node.left;
            }
            else if (node.left === null) //right child
            {
                return node.right;
            }
            else if (node.right !== null && node.left !== null) //2 children
            {
                node.data = minValue(node.right); //replace node value with inorder successor
                node.right = removeRecursive(node.data, node.right); //delete inorder successor
            }
        }
        else if (targetData > node.data)
        {
            node.right = removeRecursive(targetData, node.right);
        }
        else if (targetData < node.data)
        {
            node.left = removeRecursive(targetData, node.left);
        }

        return node;
    }

    const minValue = (node) => {

        let min = node.data;

        while (node.left !== null)
        {
            min = node.left.data;
            node = node.left;
        }

        return min;
    }

    const levelOrder = (callback) => {

        const q = [];
        const data = [];
        q.push(root)

        while (q.length > 0)
        {
            let cursor = q[0];
            
            if (typeof callback === 'function') 
            {
                callback(q[0]);
            }
            else
            {
                data.push(cursor.data);
            }

            if (cursor.left !== null) q.push(cursor.left);
            if (cursor.right !== null) q.push(cursor.right);

            q.shift();
        }

        return typeof callback === 'function'? undefined : data //check if a function is passed as an argument
    }

    const preOrder = (callback) => {

        return preOrderRecursive(root, callback);
    }

    const preOrderRecursive = (node, callback) => {

        if (typeof callback === 'function')
        {
            if (node === null) return node;
            
            callback(node);
            preOrderRecursive(node.left, callback);
            preOrderRecursive(node.right, callback);
        }
        else
        {
            if (node === null) return [];

            return [node.data, ...preOrderRecursive(node.left), ...preOrderRecursive(node.right)];
        }
    }

    const inOrder = (callback) => {

        return inOrderRecursive(root, callback);
    }

    const inOrderRecursive = (node, callback) => {

        if (typeof callback === 'function')
        {
            if (node === null) return node;
            
            inOrderRecursive(node.left, callback);
            callback(node);
            inOrderRecursive(node.right, callback);
        }
        else
        {
            if (node === null) return [];

            return [... inOrderRecursive(node.left), node.data, ... inOrderRecursive(node.right)];
        }
    }

    const postOrder = (callback) => {

        return postOrderRecursive(root, callback)
    }

    const postOrderRecursive = (node, callback) => {

        if (typeof callback === 'function')
        {
            if (node === null) return node;
            
            postOrderRecursive(node.left, callback);
            postOrderRecursive(node.right, callback);
            callback(node);
        }
        else
        {
            if (node === null) return [];

            return [... postOrderRecursive(node.left), ... postOrderRecursive(node.right), node.data];
        }
    }

    const getHeight = (node) => {

        if (node === null) return -1;

        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }

    const isBalanced = () => {

        return Math.abs(getHeight(root.right) - getHeight(root.left)) > 1 ? false : true;
    }

    const rebalance = () => {

        array = inOrder()
        root = buildTree(array, 0, array.length - 1);
    }

    //getting a node;s depth is basically finding the node while counting steps
    const getDepth = (node, cursor = root) => {

        //if the target node doesn't exit or the tree is empty
        if (cursor === null || node === null) return -1;

        let depth = -1;

        //depth is update with each call
        if (node.data === cursor.data ||
            (depth = getDepth(node, cursor.left) >= 0) ||
            (depth = getDepth(node, cursor.right) >= 0))
        {
            return depth + 1;
        }

        return depth;
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

    return {
        getRoot,
        prettyPrint, 
        insert, 
        find, 
        remove, 
        levelOrder, 
        preOrder, 
        inOrder, 
        postOrder,
        getHeight,
        getDepth,
        isBalanced,
        rebalance
    };
}
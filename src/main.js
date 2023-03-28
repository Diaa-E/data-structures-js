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
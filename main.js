"use strict";

function linkedListNode()
{
    let value = null;
    let next = null;

    const getValue = () => {

        return value;
    };

    const setValue = (newValue) => {

        value = newValue;
    };

    const setNext = (newNext) => {

        next = newNext;
    };

    const getNext = () => {

        return next;
    };

    return {getValue, getNext, setNext, setValue};
}

function linkedList()
{
    let head = null;

    const append = (newValue) => {

        //create first element in the list
        if (head === null)
        {
            head = linkedListNode();
            head.setValue = newValue;
        }
        else
        {
            getTail().setNext(linkedListNode());
            getTail().setValue(newValue);
        }
    }

    const getTail = () => {

        let tail = null;

        while (head !== null && head.getNext() !== null)
        {
            tail = head.getNext().getValue();
        }

        return tail;
    }

    const getHead = () => {

        if (head === null) return null;

        return head.getValue();
    }

    return {append, getTail, getHead}
}
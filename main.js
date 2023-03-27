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
            head.setValue(newValue)
        }
        else
        {
            getTail().setNext(linkedListNode());
            getTail().setValue(newValue);
        }
    }

    const getTailValue = () => {

        let tail = head.getValue();

        while (head !== null && tail.getNext() !== null)
        {
            tail = tail.getNext().getValue();
        }

        return tail;
    }

    const getTail = () => {

        let tail = head

        while (head !== null && tail.getNext() !== null)
        {
            tail = tail.getNext()
        }

        return tail;
    }

    const getHeadValue = () => {

        if (head === null) return null;

        return head.getValue();
    }

    const getHead = () => {

        if (head === null) return null;

        return head.getValue();
    }

    return {append, getTailValue, getHeadValue}
}

const list = linkedList();
console.log(list.getHeadValue())

list.append(15)
list.append(90)
console.log(list.getHeadValue())
console.log(list.getTailValue())
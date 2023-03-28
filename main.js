"use strict";

function linkedListNode()
{
    let value = null;
    let next = null;
    const INDEX_ERROR = "Index out of list bounds"

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

    const prepend = (newValue) => {

        if (head === null)
        {
            head = linkedListNode();
            head.setValue(newValue)
        }
        else
        {
            let newHead = linkedListNode();
            newHead.setValue(newValue);
            newHead.setNext(head);
            head = newHead
        }
    }

    const getTailValue = () => {

        return getTail().getValue();
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

    const getSize = () => {

        if (head === null) return 0;
        
        let size = 1; //if head is not null then there is at least 1 node
        let tail = head;

        while (tail.getNext() !== null)
        {
            size++;
            tail = tail.getNext();
        }

        return size;
    }

    const pop = () => {

        //empty list
        if (head === null) throw new Error(INDEX_ERROR);

        //single node list
        if (head.getNext() === null)
        {
            let value = head.getValue();
            head = null;
            return value;
        }

        let newTail = head;
        let tail = head.getNext();

        while (tail.getNext() !== null)
        {
            newTail = tail;
            tail = tail.getNext();
        }

        newTail.setNext(null); //remove last element
        return newTail.getValue(); //return last element
    }

    return {append, getTailValue, getHeadValue, prepend, getSize, pop}
}

const list = linkedList();
console.log(list.getHeadValue())

console.log(list.getSize())
list.append(15)
console.log(list.getSize())
console.log(list.getHeadValue());
list.prepend(7);
list.prepend(112);
console.log(list.getHeadValue());
console.log(list.getTailValue());
console.log(list.getSize())
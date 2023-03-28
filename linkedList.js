"use strict";

export {linkedList, linkedListNode};

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
    const INDEX_ERROR = "Index out of list bounds"

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

        if (head === null) return null;

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
        return tail.getValue(); //return last element
    }

    const contains = (value) => {

        if (head === null) return false;

        let cursor = head;

        //run at least once for single node lists
        do
        {
            if (cursor.getValue() === value) return true;
            cursor = cursor.getNext();
        }
        while (cursor !== null)

        return false;
    }

    const getIndex = (value) => {

        if (head === null) return -1;

        let cursor = head;
        let index = 0

        do
        {
            if (cursor.getValue() === value) return index;
            cursor = cursor.getNext();
            index++;
        }
        while (cursor !== null)

        return -1;
    }

    const toString = () => {

        if (head === null) return "null";

        let listString = "";
        let cursor = head;

        do
        {
            listString += `( ${cursor.getValue()} ) -> `;
            cursor = cursor.getNext();
        }
        while (cursor !== null)

        return listString + "null"
    }

    const remove = (index) => {

        if (head === null || index > getSize() - 1 || index < 0) throw new Error(INDEX_ERROR);

        let prev = null;
        let cursor = head;
        let next = head.getNext();
        let counter = 0;

        do
        {
            if (counter === index)
            {
                //single node list
                if (prev === null && next === null)
                {
                    head = null;
                    return
                }
                //remove head
                else if (prev === null)
                {
                    head = head.getNext();
                    return
                }
                //remove tail
                else if (next === null)
                {
                    prev.setNext(null);
                    return
                }

                prev.setNext(cursor.getNext());
                return
            }

            prev = cursor;
            cursor = cursor.getNext();
            next = cursor.getNext();
            counter++;
        }
        while (cursor !== null)
    }

    const insert = (value, index) => {

        if (head === null || index > getSize() - 1 || index < 0) throw new Error(INDEX_ERROR);

        let prev = null;
        let cursor = head;
        let next = head.getNext();
        let counter = 0;

        do
        {
            if (counter === index)
            {
                //insert head
                if (prev === null)
                {
                    let newHead = linkedListNode();
                    newHead.setValue(value);
                    newHead.setNext(head);
                    head = newHead;
                    return
                }
                //insert tail
                else if (next === null)
                {
                    let newTail = linkedListNode();
                    newTail.setValue(value);
                    newTail.setNext(head);
                    prev.setNext(newTail);
                    newTail.setNext(cursor);
                    return
                }

                let newNode = linkedListNode();
                newNode.setValue(value);
                newNode.setNext(cursor);
                prev.setNext(newNode);
                return
            }

            prev = cursor;
            cursor = cursor.getNext();
            next = cursor.getNext();
            counter++;
        }
        while (cursor !== null)
    }

    return {
        append,
        getTailValue, 
        getHeadValue, 
        prepend, 
        getSize, 
        pop, 
        contains, 
        getIndex, 
        toString,
        remove,
        insert
    }
}
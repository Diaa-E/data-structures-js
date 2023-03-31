"use strict";

export function getRandomNumber(upperBound = 1)
{
    return Math.floor(Math.random() * upperBound);
}

export function getRandomArray(upperBound, arrayLength)
{
    let array = [];

    for (let i = 0; i <= arrayLength; i++)
    {
        array.push(getRandomNumber(upperBound));
    }

    return array;
}
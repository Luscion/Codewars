/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

// My solution

function swapValues(args) {
    args.reverse((a,b) => a - b)
};
/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/


function getAverage(marks){
    
  };



//My solution

function getAverage(marks){
    return Math.floor(marks.reduce((a,b) => a + b) / marks.length)
  };


/*
1.Function getAverage(marks){: This line defines a function named getAverage that takes one parameter marks, which is an array of numbers.

2.Marks.reduce((a,b) => a + b): This part of the code uses the reduce method on the marks array. The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. In this case, the function (a, b) => a + b is used, which simply adds up all the elements of the array.

3.Math.floor(): This function returns the largest integer less than or equal to a given number. It's used here to ensure that the average is rounded down to the nearest integer.

4.(marks.reduce((a,b) => a + b) / marks.length): This part calculates the average of the marks array by dividing the sum of all the marks by the total number of marks in the array (marks.length).

5.Finally, the function returns the result, which is the average of the marks rounded down to the nearest integer.

So, in summary, the getAverage function takes an array of marks, sums them up, calculates the average, and returns the average rounded down to the nearest integer.
*/
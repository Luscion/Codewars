//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My solution

function mergeArrays(a, b) {
    return [...new Set(a.concat(b).sort((a,b) => a - b))]
  }

  /* ...new Set removes duplicates from the array

    Now that we've gotten rid of the duplicates we join both arrays (a,b) using concat

    we then use the sort() method to sort the concatented array

    */
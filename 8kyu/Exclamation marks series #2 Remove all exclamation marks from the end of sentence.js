/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/


function remove (string) {  
    
};


//My solution

function remove (string) {  
    return string.replace(/!+$/g, '');
};





function fizzBuzz() {
    for(let i = 0; i <= 100; i++)

    if(i % 3 === 0 && i % 5 === 0) {
       console.log('Fizz');
    }else if(i % 5 === 0) {
        console.log('Buzz');
    }else if(i % 3 === 0) {
        console.log('FizzBuzz');
    }else {
        console.log(i);
    };
};

function arrayIntersection(arr1, arr2) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) && newArr.includes(arr1[i])) {
            return newArr.push(arr1[i]);
        }
    }
};


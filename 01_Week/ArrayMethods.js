
//  MAP METHOD
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 5);
// console.log(doubled); // [2, 4, 6]


// let arr=[1,'mohd',"amer",];
// let arr2=arr.map(name => "Hello "+name);   // here name is a variable of arr
// console.log(arr2);



// FILTERED METHOD
// const score=[10,30,20,40,50];
// const filtered=score.filter(i=>i>20);

// console.log(filtered);      //[30,40,50]


// REDUCE METHOD

let prices=[3,4,5,10];
let sum=prices.reduce((total,num)=> total+num,0);                    // total initialize to 0, we can add any value here 
console.log(sum);

//You might use it to sum cart items, ratings, or scores.
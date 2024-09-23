
// console.log('Hello world!');


// variable declaration in JS 

// java 
// int num = 10;

// javascript 

// num = 10; // do not use this 
// var num2 = 20; // do not use this 
// const num3 = 30; // preferred choice for constants  
// let num4 = 40; // use for variables 

// const num = 10;
// console.log(num);
// num = 20;
// console.log(num);

// dynamically typed language 

// let myVar;
// console.log(myVar);
// console.log(typeof (myVar));
// myVar = 10;
// console.log(myVar);
// console.log(typeof (myVar));
// myVar = 20;
// console.log(myVar);
// console.log(typeof (myVar));
// myVar = "abc";
// console.log(myVar);
// console.log(typeof (myVar));
// myVar = false;
// console.log(myVar);
// console.log(typeof (myVar));

// string literals 

// let firstName = 'Sonu';
// let lastName = "Reddy";
// let fullName = `Sonu Reddy`;

// arrays in JS 

const myArray = [10, 20.25, 'abc', false];
console.log(myArray);

for (let elem of myArray) {
    console.log(elem);
}

// object in JS 

const employee = {
    id: 101,
    name: 'Sonu',
    salary: 10.25,
    phones: [9876543210, 7894561230],
    address: {
        street: 'Bank street',
        city: 'Hyderabad',
        pin: 500001
    },
    bio: '/sonu',
    isMarried: false
};

console.log(employee);

console.log(employee.name);
console.log(employee.address.city);

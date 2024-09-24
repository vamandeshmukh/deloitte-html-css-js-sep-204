
// callback 

// // number value 
// const fun = (a) => {
//     console.log(a * 2);
// }; 

// fun(10); // anonymous value 

// const num = 11; // named value 
// fun(num);

// // object value 
// const fun = (a) => {
//     console.log(a.city);
// };
// fun({ city: 'Pune' });

// // FUNCTION value 
const fun = (arg) => {
    arg(); // function call 
    console.log('fun function invoked');
};

fun(() => { console.log('anonymous function invoked.'); });

// const callbackFun = () => {
//     console.log('named function called.');
// }
// fun(callbackFun);



// // FUNCTION value 
const fun2 = (arg) => {
    arg({ city: 'Pune' }); // function call 
    console.log('fun function invoked');
};

fun2(() => {
    console.log('anonymous function invoked.');
});

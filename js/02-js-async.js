
console.log('start');

// // Problem of asynchronous JavaScript 
// const getData = () => {
//     console.log('getData called.');
//     setTimeout(() => {
//         return { city: 'Pune' };
//     }, 300);
// };

// const data = getData();
// console.log(data.city); // ? 

// solution 1 - callback 
// const getData = (arg) => {
//     console.log('getData called.');
//     setTimeout(() => {
//         arg({ city: 'Pune' });
//     }, 300);
// };

// getData((data) => {
//     console.log(data.city);
// });

// solution 2 - Promise 

const getData = () => {
    console.log('getData called.');
    return new Promise((resolve, reject) => {
        const isDataAvailable = false; // true false 
        if (isDataAvailable)
            resolve({ city: 'Pune' });
        else
            reject({ error: 'Data unavailable' });
    });
};

// getData()
// .then(() => {})
// .catch(() => {});

getData()
    .then((response) => {
        console.log(response.city);
    })
    .catch((error) => {
        console.log(error.error);
    });



// solution 3 - async await  


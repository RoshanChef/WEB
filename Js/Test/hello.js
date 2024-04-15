// function getData(data){
//     setTimeout(()=>{
//         console.log('data 1');
//         setTimeout(()=>{
//             console.log('data 2');
//             setTimeout(()=>{
//                 console.log('Data 3');
//             },2000)
//         },2000)
//     },2000)
// }

// function getData(data, getNextData) {
//     setTimeout(() => {
//         console.log('data ', data);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// //callback hell
// getData(1, () => {
//     console.log('getting data 2 ...');
//     getData(2, () => {
//         console.log('getting data 3 ...');
//         getData(3)
//     })
// }) 


// solution : promise
let promise = new Promise((resolve, reject) => {
console.log('promise is running');
// resolve('successfully done');
reject('rejection done');
});


console.log('end promise');
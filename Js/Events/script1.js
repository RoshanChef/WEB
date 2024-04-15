let target = document.querySelector('.box');

// //node.event();
// target.onclick = (evt) => {
//     console.log("enternal js handles ");
//     console.log('It has a higher priority ... ');
//     console.log("event object ", evt);
//     console.log(evt.type);
//     console.log(evt.target);
// }


//do multiple thing using same event

//  //node.addEventListener(event , callback);
// target.addEventListener('click' , (event)=>{
//     console.log('click first');
//     console.log(event);
//     console.log(event.type);
// })

// target.addEventListener('click' , ()=>{
//     console.log('click second');
// })


//remove events

target.addEventListener('click', () => {
    console.log('first');
})
target.addEventListener('click', () => {
    console.log('second');
})

let third = ()=>{
    console.log('third');
}
target.addEventListener('click', third)
target.addEventListener('click', () => {
    console.log('fourth');
})

target.removeEventListener('click',third)
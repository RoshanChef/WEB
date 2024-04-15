// // single object
// let val = document.getElementById('name'); 
// console.dir(val);

// // name HTMLCollection

// val = document.getElementsByClassName('box'); 
// console.dir(val);

// val = document.getElementsByTagName('p'); 
// console.dir(val);

// //single object
// val = document.querySelector('p');
// console.dir(val);

// //NodeList
// let val = document.querySelectorAll('p');
// console.dir(val);

// val = document.querySelector('.head');
// console.dir(val);

// val = document.querySelectorAll('.head');
// console.dir(val);

// val = document.querySelector('#name');
// console.dir(val);
// console.log(val);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);



let target = document.querySelector(".head");
target.innerText = target.innerText + " from roshan kalmathe";


let divs = document.querySelectorAll(".item");
divs.forEach((val , index)=>{
   divs[index].innerText = `value is : ${index+1}`; 
});
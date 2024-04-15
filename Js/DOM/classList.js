//create
// let newOne = document.createElement('button');
// newOne.innerText = 'Click Here !!';
// newOne.style.backgroundColor = '#333';
// newOne.style.color = '#ff5';
// newOne.style.padding = '30px';

// let parent = document.querySelector('body');
// parent.prepend(newOne); 

let target = document.querySelector('.content');  //create
// let newOne = document.createElement('button');
// newOne.innerText = 'Click Here !!';
// newOne.style.backgroundColor = '#333';
// newOne.style.color = '#ff5';
// newOne.style.padding = '30px';

// let parent = document.querySelector('body');
// parent.prepend(newOne); 

// target.setAttribute('class','text');

console.log(target.classList);
// target.setAttribute('class','text');

target.classList.add('text');
target.classList.remove('text');

console.log(target.classList);
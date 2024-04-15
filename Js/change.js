let target = document.querySelector('#change');
let body = document.querySelector('body');
let mode = body.getAttribute('class');

target.addEventListener('click',()=>{
    if(mode==='light'){
        mode = 'dark';
        body.setAttribute('class' , 'dark');
        console.log(mode);
    }else if(mode==='dark'){
        mode = 'light';
        body.setAttribute('class' , 'light');
        console.log(mode);
    }
})

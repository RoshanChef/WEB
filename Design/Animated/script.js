let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let slider = document.querySelector('.slider');
let list = document.querySelector('.slider .list');
let thumb = document.querySelector('.slider .thumbnail');


nextDom.onclick = function () {
    showSlider('next');
}
prevDom.onclick = function () {
    showSlider('prev');
}

let timeRunning = 2000;
let timeAutoNext = 6000; 
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
},timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.slider .list .item ');
    let itemThumb = document.querySelectorAll('.slider .thumbnail .item');

    if (type === "next") {
        list.appendChild(itemSlider[0]);
        thumb.appendChild(itemThumb[0]);
        slider.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        list.prepend(itemSlider[positionLastItem]);
        thumb.prepend(itemThumb[positionLastItem]);
        slider.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, timeRunning)
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    },timeAutoNext);
}

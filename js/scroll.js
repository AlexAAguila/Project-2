'use strict';
console.log('JavaScript is Running. YAAAAAY');


const htmlTag= document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('.row-100-footer');


let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
    console.log('Event is listening');

    myNav.style.setProperty('background', scrolled()>50 ?
    "var(--color1)" : "var(--color2)");
})
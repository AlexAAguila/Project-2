'use strict';
console.log('JavaScript is Running. YAAAAAY');


const htmlTag= document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('header');
const myElem = document.querySelector('.row-100-yellow');
const nav = document.querySelector('a');



let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 1000);
}

addEventListener('scroll', () => {
    console.log('Event is listening');

    myElem.style.setProperty('background', scrolled()>50 ?
    "var(--color1)" : "var(--color2)");

    myNav.style.setProperty('color', scrolled()>50 ?
    "var(--colorb)" : "var(--colorw)");
})
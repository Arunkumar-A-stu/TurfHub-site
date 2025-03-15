const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-login');
const closeIcon = document.querySelector('.icon-close');
const bgcontent = document.querySelector('.background-content');
const olay = document.querySelector('.overlay');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    bgcontent.classList.add('blur');
    olay.style.display = "block";
    
});

closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    bgcontent.classList.remove('blur');
    olay.style.display = "none";
});

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
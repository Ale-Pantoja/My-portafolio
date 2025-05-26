const nav =  document.querySelector('.nav-phone');
const table = document.querySelector('#table-body');
const btn = document.querySelector('#nav-button');

btn.addEventListener('click', e => {
    nav.classList.toggle('show-car');
});

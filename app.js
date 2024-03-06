'use strict';

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('light-theme')) {
        btn.textContent = "Dark";
    } else {
        btn.textContent = "Light";
    }
    console.log('current class name: ' + document.body.className);
});

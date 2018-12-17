var app = new Vue({
    el: '#contact',
    data: {
        firstName: 'Podaj swoje imię...',
        email: 'Podaj swój adres e-mail...'
    }
})

var header = new Vue({
    el: 'header',
    data: {
        lists: ['Home Page','About','Services','Contact']
    }
});

const showForm = document.querySelector('header nav ul li:last-child');
const hideForm = document.querySelector('#contact #hide button');
var contact = document.querySelector('#contact');

showForm.onclick = function(){
    contact.classList.add('showForm');
}

hideForm.onclick = function(){
    contact.classList.remove('showForm');
}
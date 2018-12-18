Vue.component('logo',{
    template: `
        <h1><span class="green">Soft</span><span class="red">Hard</span></h1>
    `
});

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

!function(d,s,id){
    var js,
        fjs=d.getElementsByTagName(s)[0];
        
        if(!d.getElementById(id)){
            js=d.createElement(s);
            js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js,fjs);
        }
}(document,'script','weatherwidget-io-js');
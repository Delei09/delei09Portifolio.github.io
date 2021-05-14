/*botao*/
function mostra(){
    let menu = document.querySelector('.nav-header');
    if(menu.classList.contains('esconder')){
        menu.classList.remove('esconder')
        menu.classList.add('mostra');
    }
    else{
        menu.classList.remove('mostrar');
        menu.classList.add('esconder'); 
    }
}

/*Maquina*/
const titulo = document.querySelectorAll('[data-animacao]');
const classeAnimacaoAparece = 'animacao';
const classeItemAparecer = "p-item";
const frase = document.getElementById('texto-maquina');

escrever(frase)// Chamando Maquina 
window.addEventListener('scroll',function (){ 
    aparecer()
})

function escrever(elemento){
const textoArray = elemento.innerHTML.split("");
setInterval(function(){
    elemento.innerHTML = '';
    textoArray.forEach((texto, indice) => {
        setTimeout(function(){
            elemento.innerHTML += texto;
        },170 * indice)
    })},5000 )
}

/*Fade*/
function aparecer(){
    const top = window.pageYOffset  + ( (window.innerHeight * 3) / 4 );
    titulo.forEach(function(elemento){
        if ( (top) > elemento.offsetTop){
            elemento.classList.add(classeAnimacaoAparece)
        } else {
            elemento.classList.remove(classeAnimacaoAparece)
        }
    })
}

/*slide*/
const scrollWheel = event => {
    if(event.deltaY < 0){
        event.target.scrollBy(300, 0)
    }
    else{
        event.target.scrollBy(-300, 0)
    }
}
let count = 0
setInterval(function(){
    count += 60
    if(count > 1200) count = 0
    document.querySelector("#items").scrollTo(count, 0)
}, 1000)
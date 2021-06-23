let fundo = document.querySelector('.background');


function turnBackgroud(){
    fundo.style.transform="rotate(370deg)";
}

fundo.addEventListener('scroll', turnBackgroud);
fundo.onscroll = function turnBackgroud(){
    fundo.style.transform="rotate(370deg)"
}
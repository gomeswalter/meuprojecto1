let fundo = document.querySelector(".ad");
let body = document.querySelector("html");
let cores = ["blue", "lightblue", "babyblue", "lime", "pink", "yellow", "red"];
let texto = "FAÇA AQUI A SUA PUBLICIDADE";

setInterval( function banner(){
    fundo.style.backgroundColor=cores [i++];
    fundo.style.borderRadius="10px";
    fundo.innerText=texto;
    fundo.style.color="white";
    

    if([i]>6){
        [i=0];
    }
    

},100);
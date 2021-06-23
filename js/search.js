let barradeprocura = document.querySelector(".inputBar");
let searchIcon = document.querySelector(".fa-search");
var i=0;

function showSearch(){
    for(i=0; i<1; i++){
    barradeprocura.style.width="100%";
    
   
}

    if(i>1){
        barradeprocura.style.width="0%";
    
    }i--;
    
}

searchIcon.addEventListener("click",showSearch);


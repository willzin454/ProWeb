document.addEventListener("DOMContentLoaded", ()=>{
    verificarTema();
});

function localizacao(){
    if(navigator.geolocation){
        (position=>{
            console.log(position);
        })
    }
};

function verificarTema(){
    const temaArmazenado = localStorage.getItem('tema');
    if(temaArmazenado){
        document.body.setAttribute("data-tema", temaArmazenado);
    }
};

function alterarTema(){
    const tema = document.body.getAttribute("data-tema");
    const novoTema = tema == "dark" ? "ligth" : "dark";
    document.body.setAttribute("data-tema", novoTema);
    localStorage.setItem("tema", novoTema);
};
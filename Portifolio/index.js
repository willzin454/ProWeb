document.addEventListener("DOMContentLoaded", ()=>{
    verificarTema();
});

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

function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(function() {
        alert("Conteudo copiado para area de transferencia");
    }).catch(function(error) {
        console.error("Erro ao copiar", error);
        alert("Erro ao copiar o conteudo");
    });
}

document.getElementById('email').addEventListener('click', function() {
    copyToClipboard(this.innerText);
});

document.getElementById('celular').addEventListener('click', function() {
    copyToClipboard(this.innerText);
});
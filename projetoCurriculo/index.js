document.addEventListener("DOMContentLoaded", ()=>{
    verificarTema();
    localizacao();
    verificarLocalizcao();
});

function localizacao(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position=>{
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            fetch(`https://geocode.xyz/${lat},${long}?geoit=json`).then(response=>response.json())
            .then(data=>{
                const localizacao = data.region || data.city || `${lat}, ${long}`;
                document.getElementById("localizacao").value=localizacao;
            }).catch(error=>console.error("Algo de errado não esta certo!", error));
        });
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

function verificarLocalizcao(){
    const local = document.body.getAttribute("local");
    document.body.setAttribute("local", local);
    localStorage.setItem("local", local);
}
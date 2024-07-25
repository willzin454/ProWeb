document.addEventListener("DOMContentLoaded", ()=>{
    verificarTema();
    buscarRepositorios();
    fechar();
});

function fechar(){
    const toggle = document.getElementById('toggle');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.checked = false;
        });
    });
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

function copiar(text){
    navigator.clipboard.writeText(text).then(function() {
        alert("Conteudo copiado para area de transferencia");
    }).catch(function(error) {
        console.error("Erro ao copiar", error);
        alert("Erro ao copiar o conteudo");
    });
}

document.getElementById('email').addEventListener('click', function() {
    copiar(this.innerText);
});

document.getElementById('celular').addEventListener('click', function() {
    copiar(this.innerText);
});

async function buscarRepositorios() {
    try {
        const response = await fetch('https://api.github.com/users/willzin454/repos');
        const repos = await response.json();
        const reposTable = document.getElementById('repos-table').getElementsByTagName('tbody')[0];

        repos.forEach(repo => {
            const row = reposTable.insertRow();
            row.insertCell(0).textContent = repo.name;
            row.insertCell(1).textContent = repo.description || 'Sem descrição';
            row.insertCell(2).textContent = repo.language || 'N/A';

            const linkCell = row.insertCell(3);
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.textContent = 'Visitar';
            link.target = '_blank';
            linkCell.appendChild(link);
        });
    } catch (error) {
        console.error('Erro ao buscar repositórios', error);
        alert('Erro ao buscar repositórios do GitHub');
    }
}
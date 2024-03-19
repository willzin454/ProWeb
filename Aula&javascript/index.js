//var nome = "William";

//var nome = "Will";

//console.log(nome);

//let sobrenome = "William";

//sobrenome = "Carvalho";

//const idade = 20;

//const pessoa = {nome:"Will", idade:30}
//console.log(pessoa);
//pessoa.nome = "Gaber";
//console.log(nome);

//console.log(typeof nome);
//console.log(typeof idade);
//let salario = 1500.50
//console.log(salario);


//console.log(nome);
//let nome = "William";

//console.log("2" == 2);  // so compara o valor
//console.log("2" === 2); // compara valor e tipo

//for (let x = 0, y = 9; x<10; x++, y--){
//    console.log("x: "+x+"y: "+y);
//}

//function somar(valor1, valor2){
//    return valor1+valor2;
//}

//console.log(somar(10, 10));

//const somarArrow = (valor1, valor2)=>valor1+valor2;
//const somarArrow = (valor1, valor2) => {
//    valor1+= 10;
//    return valor1 + valor2;
//};

//console.log(somarArrow(10, 20));

//let frutas = ["Maça", "Banana", "Batata"];
//console.log(frutas[1]);

//frutas.forEach(frutas=>{console.log(frutas)});  //printa o vetor inteiro
//frutas.map(frutas, idx=>console.log(idx+""+frutas));

//console.log(window.location);
//console.log(document.body); //pega todo conteudo de um elemento expecifico

//let titulo = document.getElementById("titulo1")
//console.log(titulo.id);
//titulo.innerText="Modificando o texto";

let inputValor1 = document.getElementById("valor1");
inputValor1.addEventListener("mouseover", function(){
    //while(0 == 0){
        alert("Ola");
    //}
});

function somar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").valor2;

    let resultado = parseFloat(valor1) + parseFloat(valor2);document.getElementById("resultado").innerText=resultado;
}
let input = document.querySelector("#display")
let numero=document.querySelector(".button");
let operacao=document.getElementById(".button gray")
function limpar(){

}
function add_numero(numero) {
    let calculo="";
    calculo+=numero
    document.querySelector("#history").innerHTML = calculo;
}
function add_operador(operador){
    calculo+=operador
    document.querySelector("#history").innerHTML = calculo;
}
function total() {
    
}
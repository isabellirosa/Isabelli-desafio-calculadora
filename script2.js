let input = document.querySelector("#display");
let operador="";
function limpar(){
    document.querySelector("#history").innerHTML="";
    input.value="";
    operador="";
}
function add_numero(numero) {
    let operacao=document.querySelector("#history").innerHTML;
    document.querySelector("#history").innerHTML = operacao+=numero;
    input.value=operacao;
}
function add_operador(opr){
    if(operador==""){
        let operacao=document.querySelector("#history").innerHTML;
        document.querySelector("#history").innerHTML= operacao+opr;
    }
}
function total() {
    resultado=document.querySelector("#history").innerHTML;
    document.querySelector("#history").innerHTML=eval(resultado);
}
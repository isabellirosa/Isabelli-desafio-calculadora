let input = document.querySelector("#display");
function limpar(){
    document.querySelector("#history").innerHTML="";
    input.value="";
    operador="";
}
function add_numero(numero) {
    let operacao=input.value;
    input.value=operacao+=numero;
}
function add_operador(opr){
        let operacao=input.value;
        input.value=operacao+=opr;
}
function total() {
    document.querySelector("#history").innerHTML=input.value;
    let resultado=input.value;
    input.value=eval(resultado);
    
}
function raiz_quadrada(){
    document.querySelector("#history").innerHTML=input.value;
    let resultado=input.value;
    input.value=Math.sqrt(resultado);
}
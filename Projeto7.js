
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numeros)
for(numero of numeros){
console.log(numero)

}

function arredondar (valor)  {
     return Math.round(valor*100)/100


}

function calcularJuros (valor) {
    juros = arredondar (valor * 0.1)
    return juros
}


function carcularRendimentos (valor){
       rendimentos = arredondar(valor * 0.005)
       console.log(rendimentos)
       return rendimentos
}

function calcularSaldo (mes,saldoInicial, lancamentos) {
console.log(mes, saldoInicial,lancamentos)
saldo = saldoInicial
for(lancamento of lancamentos){
saldo = saldo + lancamento
}

estaNegativo = saldo < 0 
if (estaNegativo) {
 juros = calcularJuros (saldo)
 saldo = arredondar (saldo + juros)

} else {

    rendimentos = calcularRendimentos(saldo)
    saldo = arredondar(saldo + rendimentos)

}

return saldo 

}


saldoInicial = 0 
lancamentoJaneiro = [0 - 12000, - 1000, - 200, - 100, - 100, - 300, - 300, - 500, - 300]


saldo1= calcularSaldo( "janeiro", saldoInicial, lancamentoJaneiro);
console.log(saldo1)



lancamentoFevereiro = [0 - 20000, - 1000, - 200, - 100, - 300, - 500, - 300 - 100 - 100]
saldo2 = calcularSaldo("fevereiro", saldo1, lancamentoFevereiro);
console.log(saldo2)


lancamentoMarco = [ 0 - 15000, - 1000, - 200, - 100, - 100, - 300, - 300, - 500, - 300]
saldo3 = calcularSaldo("marco",saldo2, lancamentoMarco);
console.log(saldo3)
acumuladoAno = saldo3
console.log("ano")
console.log(acumuladoAno)
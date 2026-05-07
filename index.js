const {lojaA, lojaB} = require('./arrays');

function juntaListas(lista1,lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0 ;
    let posicaoAtualLista2 = 0;
    let atual = 0;
//enquanto ainda tem elemento nas duas listas
    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

            if(produtoAtualLista1.preco < produtoAtualLista2.preco){
                listaFinal[atual] = produtoAtualLista1;
                posicaoAtualLista1++;
            }else{
                listaFinal[atual] = produtoAtualLista2;
                posicaoAtualLista2++;
            }
            atual++;
    }
    //adiciona o restante da lista1(se sobrar)
    while(posicaoAtualLista1 < lista1.lenght){
        listaFinal[atual= lista1[posicaoAtualLista1]];
        posicaoAtualLista1++;
        atual++;
    }
    //adiciona o restante da lista2(se sobrar)
    while(posicaoAtualLista2 < lista2.lenght){
        listaFinal[atual= lista2[posicaoAtualLista2]];
        posicaoAtualLista2++;
        atual++;
    }
    return listaFinal;
}

console.log(juntaListas(lojaA,lojaB));
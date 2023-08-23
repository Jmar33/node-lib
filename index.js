import fs from 'fs'
import chalk from 'chalk'


const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    //Para podemos usar o valor de item[posicao] como uma chave de um objeto, devemos envolver dentro de colchetes
    // da seguinte forma [item[posicao]]
    const resultado = capturas.map(captura => ({[captura[1]]: captura[2]}))
    console.log(resultado)
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo nesse diretório'))
}

//async/await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        extraiLinks(texto)
    }catch(erro){
        trataErro(erro)
    }finally{
        console.log(chalk.yellow('operação concluída'));
    }

}



//then
/* 
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}*/

/*
function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}*/

pegaArquivo('./arquivos/texto.md')

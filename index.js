import fs from 'fs'
import chalk from 'chalk'

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo nesse diretório'))
}

//async/await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const enconding = 'utf-8'
        const resultado = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(chalk.green(resultado))
    }catch(erro){
        trataErro(erro)
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
pegaArquivo('./arquivos/')
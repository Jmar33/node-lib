import chalk from "chalk"

function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus(listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map(async(url) => {
            try{
                const response = await fetch(url)
                return response.status
            }catch(erro){
                manejaErros(erro)
            }

        })
    )
    return arrStatus
}

function manejaErros(erro){
    console.log(chalk.red('algo deu errado'), erro)
}


export default function listaValidada(listaDeLinks){
    const links = extraiLinks(listaDeLinks)
    const status = checaStatus(links)
    return status
}

//
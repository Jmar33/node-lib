function extraiLinks(listaDeLinks){
    return listaDeLinks.map((link) => Object.values(link).join())
}

export default function listaValidada(listaDeLinks){
    console.log(extraiLinks(listaDeLinks))
}
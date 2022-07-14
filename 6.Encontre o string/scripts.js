const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: "Joss Whedon",
    duracao: "2 hrs"
}

exibirPropiedades(filme);

function exibirPropiedades(obj) {
    for (prop in obj) {
        if(typeof obj[prop] == "string"){
            console.log(prop, obj[prop]);
        }
    }
}
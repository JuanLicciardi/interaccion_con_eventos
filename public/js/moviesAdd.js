window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let tittle = document.querySelector('#titulo');

    let estado = 0
    let estadoSecreto = 0
    let vista = ""

    
    function generarNuevoColor(){                           // No es de mi propiedad pero me parecio buena usarla
        let simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for(let i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
        return color
    }
    
    tittle.focus()
    titulo.addEventListener('mouseover', function(){
        titulo.style.color = generarNuevoColor()
    })

    tittle.addEventListener('keyup',async function(event){
        if (event.key == "s" && estado == 0){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "e" && estado == 1){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "c" && estado == 2){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "r" && estado == 3){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "e" && estado == 4){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "t" && estado == 5){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else if(event.key == "o" && estado == 6){
            estadoSecreto += 1
            estado ++
            vista += "*"
        }else {
            estadoSecreto = 0
            estado = 0
            vista = ""
        }

        if (estadoSecreto > 6 ){
            vista = "SECRETO MAGICO"
            estadoSecreto = 0
            estado = 0
            setTimeout(function(){
                vista=""
                tittle.value = ""
            }, 5000);

        }
        tittle.value = vista 
    })
}
window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    function generarNuevoColor(){                           // No es de mi propiedad pero me parecio buena usarla
        let simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
        for(let i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
            console.log(color)
        }
        return color
    }
    

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = generarNuevoColor()
    })






}
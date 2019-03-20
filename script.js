var nombre, desc, imagen;
var i = 1; //Index del numero de post

function post() {
    nombre = document.getElementById("etxtUsu").value;
    desc = document.getElementById("etxtDesc").value;
    imagen = document.getElementById("etxtImg").value;
    createDiv();
}

function createDiv() {
    document.body.innerHTML += "<div id='card"+ (i++) +"' class='post'><div class='izquierda'><img src='" + imagen + 
    "'></div><div class='centro'><b>Usuario: </b>" + nombre + 
    "<br><br><b>Descripción: </b>" + desc + 
    "<br><br><b>Fecha: </b> 19 de marzo de 2019 <br><br></div><div class='derecha'><button>Comentar</button></div></div><hr>";
}
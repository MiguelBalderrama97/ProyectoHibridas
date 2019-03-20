var nombre, desc, imagen;
var i = 1; //Index del numero de post
var today;

function post() {
    nombre = document.getElementById("etxtUsu").value;
    desc = document.getElementById("etxtDesc").value;
    imagen = document.getElementById("etxtImg").value;
    var date = new Date();
    today = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    createDiv();
}

function createDiv() {
    document.body.innerHTML += "<div id='card"+ (i++) +"' class='post'><div class='izquierda'><img src='" + imagen + 
    "'></div><div class='centro'><b>Usuario: </b>" + nombre + 
    "<br><br><b>Descripción: </b>" + desc + 
    "<br><br><b>Fecha: </b>"+ today +"<br><br></div><div class='derecha'><button>Comentar</button></div></div><hr>";
}
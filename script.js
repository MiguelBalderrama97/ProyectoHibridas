var nombre, desc, imagen;
var i = 1; //Index del numero de post
var j;
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
    document.body.innerHTML += "<div id='card"+ (i) +"' class='post'><div class='izquierda'><img src='" + imagen + 
    "'></div><div class='centro'><b>Usuario: </b>" + nombre + 
    "<br><br><b>Descripción: </b>" + desc + 
    "<br><br><b>Fecha: </b>"+ today +"<br><br></div><div class='derecha'><button id='buttonsPost"+(i)+
    "'onclick=showComentsSection('coment"+i+"')>Comentarios(0)</button>"+
    "</div></div><div id='coment"+i+"' class='divComents'><b>Comentar: </b>"+
    "<input id='etxtComent"+(i)+"' class='etxtComents' type='text'>"+
    "<button onclick=addComent('especificComents"+i+"','etxtComent"+(i)+"','buttonsPost"+(i)+"') id='btnComent"+(i)+"'>Comentar</button><div class='especificComents' id='especificComents"+(i++)+"'"+
    "></div></div><hr>";

}

function showComentsSection(id){
    var divsToHide = document.getElementsByClassName("divComents"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){// or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    document.getElementById(id).style.display = "initial";
}

function addComent(id, idetxt,idbtn){
    var coment = document.getElementById(idetxt).value;
    var node = document.createElement("p");
    var textnode = document.createTextNode("Comentario: " + coment);
    node.appendChild(textnode);
    document.getElementById(id).appendChild(node);
    obj = document.getElementById(id);
    numero = obj.getElementsByTagName('p').length;
    document.getElementById(idbtn).innerHTML = "Comentarios("+numero+")";
    document.getElementById(idetxt).value = "";
}
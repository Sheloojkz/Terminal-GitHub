function alerta(){
    alert("Cargando Reporte de Clima");
}
setTimeout(alerta,10);
let buenosair=document.getElementById("BuenosAires");
buenosair.addEventListener("click", function(){
    document.getElementById("contenedorBA").style.display="block";
    document.getElementById("contenedorCDM").style.display="none";
    document.getElementById("contenedorSantiago").style.display="none";
    document.getElementById("contenedorSaoPaulo").style.display="none";
    document.getElementById("contenedorQuito").style.display="none";
});
let cdm=document.getElementById("CiudadDeMexico");
cdm.addEventListener("click", function(){
    document.getElementById("contenedorBA").style.display="none";
    document.getElementById("contenedorCDM").style.display="block";
    document.getElementById("contenedorSantiago").style.display="none";
    document.getElementById("contenedorSaoPaulo").style.display="none";
    document.getElementById("contenedorQuito").style.display="none";
});
let santiago=document.getElementById("Santiago");
santiago.addEventListener("click", function(){
    document.getElementById("contenedorBA").style.display="none";
    document.getElementById("contenedorCDM").style.display="none";
    document.getElementById("contenedorSantiago").style.display="block";
    document.getElementById("contenedorSaoPaulo").style.display="none";
    document.getElementById("contenedorQuito").style.display="none";
});
let saopaulo=document.getElementById("SaoPaulo");
saopaulo.addEventListener("click", function(){
    document.getElementById("contenedorBA").style.display="none";
    document.getElementById("contenedorCDM").style.display="none";
    document.getElementById("contenedorSantiago").style.display="none";
    document.getElementById("contenedorSaoPaulo").style.display="block";
    document.getElementById("contenedorQuito").style.display="none";
});
let quito=document.getElementById("Quito");
quito.addEventListener("click", function(){
    document.getElementById("contenedorBA").style.display="none";
    document.getElementById("contenedorCDM").style.display="none";
    document.getElementById("contenedorSantiago").style.display="none";
    document.getElementById("contenedorSaoPaulo").style.display="none";
    document.getElementById("contenedorQuito").style.display="block";
});
let eliminar = document.getElementById("btncok");
eliminar.addEventListener("click",function(){
    eliminar.parentElement.remove();
});
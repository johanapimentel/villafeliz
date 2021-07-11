// Iniciando en canvas

var villa = document.getElementById("villaHtml");
var area = villa.getContext("2d");
var largo = parseInt(villa.height);
var ancho = parseInt(villa.width);

// pixeles de las imagenes establecidos en constantes

const anchoVaca = 71;
const largoVaca = 44;
const anchoLobo = 61;
const largoLobo = 41;
const anchoCerdo = 55;
const largoCerdo = 30;
const anchoPollo = 32;
const largoPollo = 29;

var mapa = {
    url:"tile.png",
    cargaOk: false
}    

var cerdo = {
    url:"cerdo.png",
    cargaOk: false
}    

var vaca = {
    url:"vaca.png",
    cargaOk: false
}    

var pollo = {
    url:"pollo.png",
    cargaOk: false
}    

var lobo = {
    url:"lobo.png",
    cargaOk: false
}    

// dibujar fondo de la villa
mapa.imagen = new Image();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

// dibujar cerdo en la villa
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

// dibujar la vaca de la villa
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

// dibujar el pollo de la villa
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

// dibujar el lobo de la villa
lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarMapa() {
    mapa.cargaOk = true;
    dibujarTodo();
}    

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujarTodo();
}    

function cargarVaca() {
    vaca.cargaOk = true;
    dibujarTodo();
}    

function cargarPollo() {
    pollo.cargaOk = true;
    dibujarTodo();
}    

function cargarLobo() {
    lobo.cargaOk = true;
    dibujarTodo();
}    

function dibujarTodo() {
    var x = numAleatorio(0, ancho);
    var y = numAleatorio(0, largo);    
    if (mapa.cargaOk){
        area.drawImage(mapa.imagen, 0,0);
    }
    if (vaca.cargaOk){
        var cantidad  = numAleatorio(1,25);
        console.log('cant vaca' , cantidad);
        for(var vacas=0;vacas<cantidad;vacas++){
            x = parseInt(ancho/anchoVaca);
            x = numAleatorio(0,x);
            x = x * anchoVaca;
            y = parseInt(largo/largoVaca);
            y = numAleatorio(0,y);
            y = y * largoVaca;
            area.drawImage(vaca.imagen, x,y);
        }
    }
    if (lobo.cargaOk){
        var cantidad  = numAleatorio(1,25);
        console.log('cant lobo' , cantidad);
        for(var lobos=0;lobos<cantidad;lobos++){
            x = parseInt(ancho/anchoLobo);
            x = numAleatorio(0,x);
            x = x * anchoLobo;
            y = parseInt(largo/largoLobo);
            y = numAleatorio(0,y);
            y = y * largoLobo;
            area.drawImage(lobo.imagen, x,y);
        }
    }
    if (cerdo.cargaOk){
        var cantidad  = numAleatorio(1,25);
        console.log('cant cerdo' , cantidad);
        for(var cerdos=0;cerdos<cantidad;cerdos++){
            x = parseInt(ancho/anchoCerdo);
            x = numAleatorio(0,x);
            x = x * anchoCerdo;
            y = parseInt(largo/largoCerdo);
            y = numAleatorio(0,y);
            y = y * largoCerdo;
            area.drawImage(cerdo.imagen, x,y);
        }
    }    
    if (pollo.cargaOk){
        var cantidad  = numAleatorio(1,25);
        console.log('cant pollo' , cantidad);
        for(var pollos=0;pollos<cantidad;pollos++){
            x = parseInt(ancho/anchoPollo);
            x = numAleatorio(0,x);
            x = x * anchoPollo;
            y = parseInt(largo/largoPollo);
            y = numAleatorio(0,y);
            y = y * largoPollo;
            area.drawImage(pollo.imagen, x,y);
        }
    }
}

// funcion que crea numeros aleatorios entre un rango de 
// min para minimo y max para el maximo
function numAleatorio(min, max)
{
    var resulta;
    resulta = Math.ceil(Math.random() * (max - min + 1)) + min;
    return resulta;
}

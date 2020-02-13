var mazo=[];
var cont=0;
var puntajeJugardor=[];
var puntajeCPU=[];
var juego;
var suma=0;
var suma1=0;

document.getElementById('ingresar').addEventListener('click', function() {
    let bara = new Baraja();
    bara.crearBaraja();
    mazo=bara.baraja;
    let nom = document.getElementById('Jugador').value;
    if (nom==="") {
        alert('Debe ingresar nombre del Jugador');
    } else {
        let juga=new Jugador(nom);
        console.log(juga);
        document.getElementById('nombre').innerHTML='Jugador: '+ juga.nombre;
        document.getElementById('vista1').style="display:none";         
        document.getElementById('vista2').style="display:block";
        document.getElementById('vista3').style="display:none";

        juego= new Juego();
        juego.mezclar();
    }
});
document.getElementById('pedirCarta').addEventListener('click', function() {
  juego.pedirCartaJugador();
});
document.getElementById('validar').addEventListener('click', function() {
    console.log('joasd');
juego.pedirCartaCpu();
juego.validar();
document.getElementById('vista1').style="display:none";         
document.getElementById('vista2').style="display:none";
document.getElementById('vista3').style="display:block";

});
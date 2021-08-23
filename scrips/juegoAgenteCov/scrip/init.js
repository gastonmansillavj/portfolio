var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
        width:800, //1920///ancho de la pantalla.
        height:600, //1080///alto de la pantalla.
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene:[Scena1,Scena2,Scena3,Creditos,Ayuda,NivelGanado,NivelPerdido] //,Scena2,Scena3,Opciones,Ayuda
};

var game = new Phaser.Game(config)
/////////personajes//////////
var jugador;
var animacionPlayer;
var vidaJugador;
var Atacando=false;/// controla la animacion de ataque
var tempAnimAtaque;
var Anciana;
var animacionAnciana;
var vidaAnciana;
var covidRojo;
var enemigoCivil;
var civil;/// civil
//////////// verde////
var covidVerde;
var disparoCovidVerde;
var tempDisparoCovidVerde;
var activaDisparoVerde;
var anguloCovidVerde;
////////////////

///////////// power ups////////
var jeringa;
var barbijo;
////////////// armas/////////
var rociador;
var items;
//escenario
var platforms;
var Piso;
// controles
var cursors;
var btnAtaque;
var btnPowerUp
var botonDer;
var botonMueveDer;
var botonIzq;
var botonMueveIzq;
var botonSalto;
var botonMueveArriba;
var botonAtaque;
var botonEspecial;
var btnBarbijo;
// control de datos
var saltoAct=false;
var tiempo =0;
var Textos;
var TiempoJuego;
var temporizadorDeJuego = 120;
var tiempoBarbijo=0;
//puntos
var textoVidaJugador;
var textoVidaAnciana;
// opciones de juegos
var nivel ="juego";
var camaraPringipal;
var gameOver = false;
var FxJuntaEstrella;
var FxJuntaEstrellaChica;
var FxExplosion;
var generaCovidRojo=0;
/// fondo///
var sonido;
var tiled;
var calle;
var casas;
var numCasas;
var faro;
var Letrero;
var BocaIncendio;
var SonidoMouse;


var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
        width: 800, //ancho de la pantalla.
        height: 600, //alto de la pantalla.
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene:[Scena1,Scena2,Scena3]
};

var game = new Phaser.Game(config)

var player;

var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var saltoAct=true;
var starsRosa;
var gameOverButton;
var Piso;
var KeyR;
var indicaciones;
var FxJuntaEstrella;
var FxJuntaEstrellaChica;
var FxExplosion;
var estrella3d;

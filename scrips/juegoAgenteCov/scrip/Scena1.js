class Scena1 extends Phaser.Scene {
    constructor(){
        super('menu')
    }


     preload ()

{
    // personajes 
    this.load.spritesheet('animacionAnciana', 'src/assets/spritesheet/spriteAnciana.png', { frameWidth: 252, frameHeight:250 });
    this.load.spritesheet('animacionJugador', 'src/assets/spritesheet/player.png', { frameWidth: 48.25, frameHeight: 50 });
    this.load.spritesheet('covidRojo', 'src/assets/spritesheet/CovidRojo.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('CovidVerde', 'src/assets/spritesheet/Verde.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('civilSinBarbijo', 'src/assets/spritesheet/civil.png', { frameWidth: 84, frameHeight: 200 });
    this.load.spritesheet('civilConBarbijo', 'src/assets/spritesheet/civilConBarbijo.png', { frameWidth: 84, frameHeight: 200 });
    this.load.image('disparoVerde', 'src/assets/spritesheet/disparoCovidVerde.png');
    this.load.image('BotonPlay', 'src/assets/spritesheet/botones.png');
    this.load.image('playerHitbox', 'src/assets/spritesheet/box.png');
    this.load.image('ancianHitbox', 'src/assets/spritesheet/boxAnciana.png');
    this.load.image('logo', 'src/assets/imagenes/phaser3.png');
    this.load.image('suelo', 'src/assets/spritesheet/suelo.png');
    this.load.image('fondoParalax', 'src/assets/imagenes/tiledAgentecov1600x600.png');
    this.load.image('calle', 'src/assets/imagenes/calleAgenteCov800x600.png');
    this.load.image('casaAmarilla', 'src/assets/imagenes/casaAmarilla.png');
    this.load.image('casaRoja', 'src/assets/imagenes/casaRoja.png');
    this.load.image('casaVerde', 'src/assets/imagenes/casaVerde.png');
    this.load.image('kiosko', 'src/assets/imagenes/kiosko.png');
    this.load.image('edificioVerde', 'src/assets/imagenes/edificioVerde.png');
    this.load.image('edificioRojo', 'src/assets/imagenes/edificioRojo.png');
    this.load.image('edificioAmarillo', 'src/assets/imagenes/edificioAmarillo.png');
    this.load.image('edificio2PisosRojo', 'src/assets/imagenes/EdificioRojoConToldo.png');
    this.load.image('hitBoxPlataforma', 'src/assets/imagenes/plataformasHitbox.png');
    this.load.image('faro', 'src/assets/imagenes/faro.png');
    this.load.image('letrero', 'src/assets/imagenes/letrero.png');
    this.load.image('flecha', 'src/assets/imagenes/flecha.png');
    this.load.image('bocaIncendio', 'src/assets/imagenes/bocaIncendio.png');
    this.load.image('boton', 'src/assets/imagenes/boton.png');
    this.load.image('moneda10', 'src/assets/imagenes/moneda10.png');
    this.load.image('moneda5', 'src/assets/imagenes/moneda5.png');
    this.load.image('moneda1', 'src/assets/imagenes/moneda1.png');
    this.load.image('disparoRociador', 'src/assets/imagenes/disparoRociador.png');
    this.load.image('Corazon', 'src/assets/imagenes/corazon.png');
    this.load.image('AncianaFoto', 'src/assets/imagenes/barraPuntos.png');
    this.load.image('reloj', 'src/assets/imagenes/reloj.png');
    this.load.image('Barbijo', 'src/assets/imagenes/barbijo.png');
    this.load.image('FondoMenu', 'src/assets/imagenes/fondoMenuPrincipal.png');
    this.load.image('FondoPerdidoGanado', 'src/assets/imagenes/fondoPerdidoGanado.png');
    this.load.image('jeringa', 'src/assets/imagenes/jeringa.png');
    this.load.image('ayuda', 'src/assets/imagenes/fondoAyuda.png');
    this.load.image('creditos', 'src/assets/imagenes/fondoCreditos.png');
    this.load.image('escudo', 'src/assets/imagenes/escudo.png');
    this.load.audio('musica', ['src/assets/sonido/musicaJuego.mp3']);
    this.load.audio('explosionCovidRojo', ['src/assets/sonido/covidRojoExplota.mp3']);
    this.load.audio('choqueDisparoVerde', ['src/assets/sonido/disparoVerdeChoca.mp3']);
    this.load.audio('juntaJeringa', ['src/assets/sonido/juntaJeringa.mp3']);
    this.load.audio('juntaMonedas', ['src/assets/sonido/juntaMonedas.mp3']);
    this.load.audio('rociador', ['src/assets/sonido/rociador.mp3']);
    this.load.audio('salto', ['src/assets/sonido/salto.mp3']);
    this.load.audio('Mouse', ['src/assets/sonido/sonidoMouse.mp3']);
    
    

 
}

create ()

{   this.add.image(400, 300, 'FondoMenu')
SonidoMouse = this.sound.add('Mouse');


 
// ANIMACION DE JUGADOR


    this.anims.create({
        key: 'caminar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 80, end: 85 }),
        frameRate: 15,
        repeat: 0
    });


    this.anims.create({
        key: 'atacar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 16, end: 23 }),
        frameRate: 20,
        repeat: 0
    });

    this.anims.create({
        key: 'parado',
        frames: [ { key: 'animacionJugador', frame: 1 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'saltar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 40, end:45 }),
        frameRate: 4,
        repeat: 0
    });
/////////////Anciana ///////////
    this.anims.create({
        key: 'ancianaCamina',
        frames: this.anims.generateFrameNumbers('animacionAnciana', { start: 0, end:10 }),
        frameRate: 1,
        repeat: -1
    });

    this.anims.create({
        key: 'ancianaParada',
        frames: this.anims.generateFrameNumbers('animacionAnciana', { start: 0, end:0 }),
        frameRate: 1,
        repeat: -1
    });
//////////// covid//////
this.anims.create({
    key: 'reboteCovidArriba',
    frames: this.anims.generateFrameNumbers('covidRojo', { start: 0, end:0 }),
    frameRate: 10,
    repeat: -1
});


this.anims.create({
    key: 'reboteCovidAbajo',
    frames: this.anims.generateFrameNumbers('covidRojo', { start: 1, end:1 }),
    frameRate: 10,
    repeat: 1
});

this.anims.create({
    key: 'civilSinBarbijo',
    frames: this.anims.generateFrameNumbers('civilSinBarbijo', { start: 0, end:3 }),
    frameRate: 5,
    repeat: -1
});

this.anims.create({
    key: 'civilConBarbijo',
    frames: this.anims.generateFrameNumbers('civilConBarbijo', { start: 0, end:3 }),
    frameRate: 5,
    repeat: -1
});

    
    //  Input Events
    Textos=this.add.text();
   
    
    var logo = this.add.image(400, 380, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start(nivel) );
     
      

      logo.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
        
    });

    Textos.Jugar= this.add.text(360,360, 'Jugar', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 

    logo.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()
      

    });

    var btnOpciones = this.add.image(400, 450, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      btnOpciones.setInteractive();
      btnOpciones.on('pointerdown', () => this.scene.start('Creditos') );
     

      btnOpciones.on('pointerout', function (event) {

        this.setTint(0xff0000);
       
        
    });

    btnOpciones.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()
        
    });

    Textos.Creditos= this.add.text(350,430, 'Creditos', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 

    var btnAyuda = this.add.image(400, 520, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
    btnAyuda.setInteractive()
    btnAyuda.on('pointerdown', () => this.scene.start('Ayuda') );
      

    btnAyuda.on('pointerout', function (event) {

        this.setTint(0xff0000);
      
        
    });

    btnAyuda.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()
        

    });

    Textos.Ayuda= this.add.text(360,500, 'Ayuda', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 
    
}
   

   
}
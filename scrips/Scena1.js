class Scena1 extends Phaser.Scene {
    constructor(){
        super('menu')
    }


     preload ()

{
    this.load.image('sky', '../src/assets/BG.png');
    this.load.image('reset', '../src/assets/botonReset.png');
    this.load.image('logo', '../src/assets/phaser3.png');
    this.load.image('ground', '../src/assets/Tile/plataformaUnida.png');
    this.load.image('star', '../src/assets/star.png');
    this.load.image('starRosa', '../src/assets/StarRosa.png');
    this.load.image('bomb', '../src/assets/bomb.png');
    this.load.spritesheet('knigtRed', '../src/assets/dark_soldier-overlord.png', { frameWidth: 48, frameHeight: 64 });
    this.load.image('puntaIzq', '../src/assets/Tile/1.png');
    this.load.image('medio', '../src/assets/Tile/2.png');
    this.load.image('puntaDer', '../src/assets/Tile/3.png');
    this.load.spritesheet('EstrellaRoja', '../src/assets/estrella3d.png', { frameWidth: 128, frameHeight: 128 });
    

    this.load.audio('juntaEstrellas', ['../src/audio/estrellas.mp3']);
    this.load.audio('juntaEstrellasChica', ['../src/audio/estrellaChica.mp3']);
    this.load.audio('Explosion', ['../src/audio/Explosion.mp3']);

}

create ()

{   
    var element = document.createElement('style');
    document.head.appendChild(element);
    var sheet = element.sheet;
    var styles = '@font-face { font-family: "Mandhor-ALEmp"; src: url("../src/assets/fuente/Mandhor-ALEmp.otf") format("opentype"); }';
   
    sheet.insertRule(styles, 0);
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');


// knigt red

    this.anims.create({
        key: 'rightKnigt',
        frames: this.anims.generateFrameNumbers('knigtRed', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'estrellaConAnimacion',
        frames: this.anims.generateFrameNumbers('EstrellaRoja', { start: 0, end: 22 }),
        frameRate: 40,
        repeat: -1
    });

    this.anims.create({
        key: 'leftKnigt',
        frames: this.anims.generateFrameNumbers('knigtRed', { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'idleKnigt',
        frames: [ { key: 'knigtRed', frame: 7 } ],
        frameRate: 20
    });



    //  Input Events
    
    var logo = this.add.image(400, 300, 'logo').setScale(0.5).setTint(0xff0000);;
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );
      

      logo.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    logo.on('pointerover', function (event) {

        this.clearTint();

    });
    
}

   
}
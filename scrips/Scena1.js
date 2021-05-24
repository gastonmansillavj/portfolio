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
    this.load.spritesheet('dude', '../src/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('puntaIzq', '../src/assets/Tile/1.png');
    this.load.image('medio', '../src/assets/Tile/2.png');
    this.load.image('puntaDer', '../src/assets/Tile/3.png');



}

create ()

{   
    var element = document.createElement('style');
    document.head.appendChild(element);
    var sheet = element.sheet;
    var styles = '@font-face { font-family: "Mandhor-ALEmp"; src: url("../src/assets/fuente/Mandhor-ALEmp.otf") format("opentype"); }';
   
    sheet.insertRule(styles, 0);
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

    //  animaciones
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    
    var logo = this.add.image(400, 300, 'logo').setScale(0.5)
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );
    
}
   
}
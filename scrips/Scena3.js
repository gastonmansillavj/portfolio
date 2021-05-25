class Scena3 extends Phaser.Scene {
    constructor(){
        super('fin')
    }

    create()
    {
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'reset').setInteractive().on('pointerdown', () => this.reiniciar() );

       
    }


    reiniciar() {
        score = 0;
        this.scene.start('juego');
      }
    
 
    
}
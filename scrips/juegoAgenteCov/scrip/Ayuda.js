class Ayuda extends Phaser.Scene {
    constructor(){
        super('Ayuda')
    }


create ()

{   

    this.add.image(400, 300, 'ayuda')
    SonidoMouse = this.sound.add('Mouse');
 
// ANIMACION DE JUGADOR
    //  Input Events
    
    Textos=this.add.text();
    var Salir = this.add.image(650, 560, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
    Salir.setInteractive()
    Salir.on('pointerdown', () => this.scene.start('menu') );
      

    Salir.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    Salir.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()

    });


    Textos.Salir= this.add.text(620,540, 'Salir', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 
    
}


   
}
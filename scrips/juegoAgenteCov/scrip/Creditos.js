class Creditos extends Phaser.Scene {
    constructor(){
        super('Creditos')
    }


create ()


{   
    this.add.image(400, 300, 'creditos')
    SonidoMouse = this.sound.add('Mouse');

    Textos=this.add.text();
    var Salir = this.add.image(400, 520, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
    Salir.setInteractive()
    Salir.on('pointerdown', () => this.scene.start('menu') );
      

    Salir.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    Salir.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()

    });

    Textos.Salir= this.add.text(370,500, 'Salir', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 
    
}

   
}
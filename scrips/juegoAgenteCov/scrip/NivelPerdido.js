class NivelPerdido extends Phaser.Scene {
    constructor(){
        super('NivelPerdido')
    }
 
create ()

{   
    this.add.image(400, 300, 'FondoPerdidoGanado')
    SonidoMouse = this.sound.add('Mouse');
    //  Input Events
    Textos=this.add.text();
   
    Textos.Siguiente= this.add.text(200,150, 'Perdiste', {

        font: "100px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 40

    });


    var logo = this.add.image(400, 450, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start(nivel));
      temporizadorDeJuego = 120;
      

      logo.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    Textos.Jugar= this.add.text(360,430, 'Reiniciar', {
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

    var btnOpciones = this.add.image(400, 520, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      btnOpciones.setInteractive();
      btnOpciones.on('pointerdown', () => this.scene.start('menu') );
      

      btnOpciones.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    btnOpciones.on('pointerover', function (event) {

        this.clearTint();
        SonidoMouse.play()

    });

    Textos.Creditos= this.add.text(360,500, 'Menu', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 
   
}

   
}
class Scena2 extends Phaser.Scene {
    constructor(){

        super('juego')
    }
    
        create(){
            /////////// sonidos/////////
            
            sonido = this.add.group();
            sonido.rociador = this.sound.add('rociador');
            sonido.juntaMonedas = this.sound.add('juntaMonedas');
            sonido.juntaJeringas = this.sound.add('juntaJeringa');
            sonido.choqueDisparoVerde= this.sound.add('choqueDisparoVerde');
            sonido.explosionCovidRojo = this.sound.add('explosionCovidRojo');
            sonido.musica = this.sound.add('musica')
            sonido.musica.setVolume(0.5);
            sonido.musica.setLoop(true).play(); /// asi se acceden a las propiedades de los grupos
            console.log(sonido)
           
           
            
            
          
            sonido.salto = this.sound.add('salto');
            

        ///// escenario///////
        tiled = this.add.tileSprite(800,300,2700,600,'fondoParalax')
        /////prueba pantalla completa
        

        /*
            platforms = this.physics.add.staticGroup();
            platforms.create(600, 400, 'ground');
            platforms.create(750, 220, 'ground');
            platforms.create(100, 250, 'ground');
            platforms.create(200,400, 'ground');
            platforms.create(400,250, 'ground');
            // plataformas
            
*/
        // piso//////////
            Piso = this.physics.add.staticGroup({
                key: 'suelo',
                repeat: 25,
                setXY: { x: 0, y: 500, stepX: 128 }
            });
            /////////calle////////
            calle = this.physics.add.staticGroup({
                key: 'calle',
                repeat: 10,
                setXY: { x: 0, y: 500, stepX: 800 }
            });

            ///grupo plataformas///

            platforms = this.physics.add.staticGroup();

            

            ///// edificios//////
           casas = this.physics.add.staticGroup();
           
           let PosCasa = 100;

            for (let index = 0; index < 7; index++) {

                numCasas = Phaser.Math.Between(1, 6);

                if( index == 6){
                    numCasas=0;
                   
                }
                
                if (numCasas===0) {
                    platforms.create(PosCasa+12,330,'hitBoxPlataforma').body.setSize(188, 20,0);
                    casas.create(PosCasa,285, 'edificio2PisosRojo');
                    PosCasa= PosCasa+ Phaser.Math.Between(250,350);

               
                }
               else if (numCasas===1) { 
              
                

                platforms.create(PosCasa+5,300,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 310, 'casaRoja');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

               }

               else if (numCasas===2) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 315, 'casaAmarilla');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===3) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioAmarillo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===4) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioRojo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }
            else if (numCasas===5) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }

            else{
                
                platforms.create(PosCasa+5,315,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 320, 'casaVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
        


            }
            ///////oculto las plataformas/////

            platforms.children.iterate(function (child) {
               
               child.visible = false ;

            });
            
            //////////////////////////////////////////////  items////////////////////////////////////////////////
            

            items = this.physics.add.group();
           
           
        
            items.moneda10 = this.physics.add.group({
                key: 'moneda10',
                repeat: 10,
                setXY: { x: 0, y: 800, stepX: 128, 
                },
                
            });

            items.moneda10.children.iterate(function (child) {
                child.setScale(0.3);
                child.setBounce(0.5);
             });


             //// moneda5/////
             items.moneda5 = this.physics.add.group({
                key: 'moneda5',
                repeat: 10,
                setXY: { x: 0, y: 800, stepX: 128, 
                },
                
            });

            items.moneda5.children.iterate(function (child) {
                child.setScale(0.3);
                child.setBounce(0.5);
             });

              //// moneda1/////
              items.moneda1 = this.physics.add.group({
                key: 'moneda1',
                repeat: 10,
                setXY: { x: 0, y: 800, stepX: 128, 
                },
                
            });

            items.moneda1.children.iterate(function (child) {
                child.setScale(0.3);
                child.setBounce(0.5);
             });

             ///////////////////////////power ups /////////////////////



             items.reloj = this.physics.add.group()
             items.reloj.create(-1700,110,'reloj')
             items.jeringa = this.physics.add.group()
             items.jeringa.create(-1500,310,'jeringa')
             items.jeringaLanzar = this.physics.add.group()
             items.jeringaLanzar.create(-1500,310,'jeringa')
            
             
             
             items.corazon = this.physics.add.group()
             items.corazon.create(-1400,310,'Corazon')


            ///////////hitbox player///////////////////
            jugador = this.physics.add.sprite(100, 200, 'playerHitbox');
            jugador.score=0;
            jugador.powerUpJeringa=false;
            jugador.powerUpEscudo=false;
            //jugador.setBounce(0.2);
            /////// desaparecer hit box personaje///// 
            jugador.visible = false ;
            //jugador.setCollideWorldBounds(true);
            jugador.setScale(0.2,0.5);
            //jugador.body.setSize(15, 35,0,0);
            vidaJugador= 5
            //textoVidaJugador =this.add.text(350, 16, 'Vida jugador 5', { fontSize: '15px', fill: '#994500' });


            //////////// hitbox abuela///////////
            Anciana = this.physics.add.sprite(100, 200, 'ancianHitbox');
            Anciana.jeringa=this.add.sprite(380, 100, 'jeringa');
            Anciana.velocidad=0;
            Anciana.velocidadActivada=false;
            
             
            //jugador.setCollideWorldBounds(true);
            Anciana.setScale(0.6,0.7);
            //jugador.body.setSize(15, 35,0,0);

            /////// desaparecer hit box personaje///// 
            Anciana.visible = false ;
            Anciana.foto=this.add.sprite(100, 50, 'AncianaFoto');;
            //////////////
            
            vidaAnciana = this.add.group({
                key: 'Corazon',
                repeat: 4,
                setXY: { x: 150, y: 50, stepX:26 },
                   
            });

            let id=0
            vidaAnciana.vida = 4;
           vidaAnciana.children.iterate(function (child) {     
            child.setScale(0.25);
            child.id=id
            id=child.id+1      
            });
            
           // textoVidaAnciana = this.add.text(350, 35, 'Vida anciana 5', { fontSize: '15px', fill: '#994500' });
            animacionAnciana = this.add.sprite(400, 450, 'animacionAnciana').setScale(0.4,0.4);
            

            ////////// animaciones player/////////////////////////
            animacionPlayer = this.add.sprite(100, 450, 'animacionJugador');
            animacionPlayer.setScale(2)
            // camara 
            camaraPringipal = this.cameras.main.setBounds(0,0,2000,600);
            camaraPringipal.startFollow(Anciana);

            animacionPlayer.on('animationcomplete', ()=>{ 
                Atacando=false
                jugador.Rociador.disableBody(true, true);
                
            });


            /////////// rociador player/////////
         jugador.Rociador=this.physics.add.sprite(500, 1000, 'disparoRociador').setScale(0.7);
        // jugador.Rociador.visible = false ;
         jugador.Rociador.body.allowGravity = false;
         jugador.Rociador.body.setSize(120, 50,1,0);

        //////////////////////////covidEnemigos////////////////////////
      

        covidRojo = this.physics.add.group({
            key: 'covidRojo',
            repeat: 8,
            setXY: { x: 500, y: 350, stepX:Phaser.Math.Between(140,300) }        
        });
        var PosicionXR=400;
        covidRojo.children.iterate(function (child) { 
            
            child.x=PosicionXR +Phaser.Math.Between(140,300);
            PosicionXR=child.x;
            child.setBounceY(1);
            child.setScale(0.4);

            child.on('animationcomplete', ()=>{           
                child.anims.play('reboteCovidArriba', true);
                
            });

        });







        ////////////grupo covid verde/////////////////////////////////////

        

        covidVerde = this.physics.add.group({
            key: 'CovidVerde',
            repeat: 8,
            setXY: { x: 650, y: 150, stepX:Phaser.Math.Between(180,350) }        
        });


        covidVerde.children.iterate(function (child) { 
            child.setScale(0.4);
            child.disparoListo=false;
        });

        disparoCovidVerde = this.physics.add.group();
 
        
            //////////////// items de la calle//////////////////
            
            faro = this.physics.add.staticGroup({
                key: 'faro',
                repeat: 10,
                setXY: { x: 50, y: 390, stepX:400 }
            });

            Letrero = this.physics.add.staticGroup({
                key: 'letrero',
                repeat: 10,
                setXY: { x: 300, y: 450, stepX: 600 }
            });
            BocaIncendio = this.physics.add.staticGroup({
                key: 'bocaIncendio',
                repeat: 10,
                setXY: { x: 200, y: 470, stepX:430 }
            });


              ///////// botones///////////////////////////////// 
              btnAtaque=this.input.keyboard.addKey('A');
              btnPowerUp=this.input.keyboard.addKey('S');
            
              if (cursors =! undefined){
                  
                  cursors = this.input.keyboard.createCursorKeys();
              }
             /*   
            botonDer= this.add.sprite(200, 500, 'flecha');
            botonDer.setInteractive();
            botonDer.on('pointerover', function (event) {
               botonMueveDer=true;
            });
            botonDer.on('pointerout', function (event) {
                botonMueveDer=false;
            });

            botonIzq= this.add.sprite(90, 500, 'flecha');
            botonIzq.flipX=true;
            botonIzq.setInteractive();
            botonIzq.on('pointerover', function (event) {
               botonMueveIzq=true;
            });
            botonIzq.on('pointerout', function (event) {
                botonMueveIzq=false;
             });

            botonSalto= this.add.sprite(600, 500, 'boton');
            botonSalto.setScale(0.6);
            botonSalto.setInteractive();
            botonSalto.on('pointerover', function (event) {
                botonMueveArriba=true;
             });
             botonSalto.on('pointerout', function (event) {
                 botonMueveArriba=false;
              });
*/
              //////////////////////////////////////////
              
              
  
           /*
            //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
            stars = this.physics.add.group({
                key: 'star',
                repeat: 11,
                setXY: { x: 12, y: 0, stepX: 70 }
            });

            stars.children.iterate(function (child) {

                //  Give each star a slightly different bounce
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

            });

            // nuevas estrellas 
            starsRosa = this.physics.add.group({
                key: 'EstrellaRoja',
                repeat: 4,
                setXY: { x: 12, y: 0, stepX: 200 }
            });

            starsRosa.children.iterate(function (child) {

                //  Give each star a slightly different bounce
            // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            
            child.setScale(0.32)
            //child.setBounceY(1);
            child.body.bounce.setTo(1, 1);
            child.setCollideWorldBounds(true);
            child.setVelocity(Phaser.Math.Between(-200, 200), 20);
            child.anims.play('estrellaConAnimacion', true);
            
            });

            ///////////// bomba

            bombs = this.physics.add.group();

            //  The score
        
            scoreText = this.add.text(350, 16, 'Score: 0', {fontFamily:'Mandhor-ALEmp', fontSize: '32px', fill: '#994500' });
            indicaciones = this.add.text(10,10, 'Presiona la tecla R para reiniciar', {fontFamily:'Mandhor-ALEmp', fontSize: '15px', fill: '#994500' });
            // efecto sonido 
            this.FxJuntaEstrella = this.sound.add('juntaEstrellas');
            this.FxJuntaEstrellaChica = this.sound.add('juntaEstrellasChica');
            this.FxExplosion = this.sound.add('Explosion');
            
            //  Collide the player and the stars with the platforms
            
            this.physics.add.collider(stars, platforms);
            this.physics.add.collider(stars, Piso);
            this.physics.add.collider(starsRosa, platforms);
            this.physics.add.collider(starsRosa, starsRosa);
            this.physics.add.collider(bombs, platforms);

            //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
            this.physics.add.overlap(player,stars,this.collectStar, null, this);
            this.physics.add.overlap(player,starsRosa,this.collectStarRosa, null, this);
            this.physics.add.collider(player,bombs,this.hitBomb, null, this);
            this.physics.add.collider(player,platforms,this.activaSalto, null, this);
            */


            // pantalla completa 
            //this.scale.startFullscreen();
           
            /// gui/////
            Textos=this.add.text();
            Textos.Score= this.add.text(600,25, "Score: 0", {
                font: "25px Arial",
                fill: "#FFFFFF",
                align: "center",
                stroke: "#de77ae",
                strokeThickness: 10
            });
            Textos.Tiempo = this.add.text(350,25, "tiempo: 1", {
                font: "25px Arial",
                fill: "#FFFFFF",
                align: "center",
                stroke: "#de77ae",
                strokeThickness: 10
            }); 

            
        TiempoJuego = this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });


            //colision monedas 
            this.physics.add.overlap(jugador,items.moneda10,this.sumaPuntos10, null, this);
            this.physics.add.overlap(jugador,items.moneda5,this.sumaPuntos5, null, this);
            this.physics.add.overlap(jugador,items.moneda1,this.sumaPuntos1, null, this);
        
            this.physics.add.collider(Piso,items.moneda10,this.detieneMonedas, null, this);
            this.physics.add.collider(Piso,items.moneda5,this.detieneMonedas, null, this);
            this.physics.add.collider(Piso,items.moneda1,this.detieneMonedas, null, this);

           
           
            
          /// colision power ups//////

            this.physics.add.collider(items.reloj,Piso);
            this.physics.add.collider(items.corazon,Piso);
            this.physics.add.collider(items.jeringa,Piso);
            this.physics.add.overlap (jugador,items.corazon,this.destruyepowerUpsCorazon, null, this);
            this.physics.add.overlap (jugador,items.jeringa,this.destruyepowerUpsJeringa, null, this);
            this.physics.add.overlap (jugador,items.reloj,this.destruyepowerUpsReloj, null, this);
           
            
         
          console.log(items.reloj)
            
            // colision disparo covid
            this.physics.add.overlap(disparoCovidVerde,Piso,this.destruyeCovidVerde, null, this);
   
            

           //colisiones Anciana
           this.physics.add.collider(Anciana,Piso);
           this.physics.add.overlap(Anciana,covidRojo,this.quitaVida, null, this);
           this.physics.add.overlap(Anciana,disparoCovidVerde,this.quitaVida, null, this);
           this.physics.add.overlap(Anciana,items.jeringaLanzar,this.destruyeJeringaLanzar, null, this);
           
           
           
           

           // colisiones jugador
            this.physics.add.collider(jugador,Piso,this.activaSalto, null, this);
            this.physics.add.collider(jugador,platforms,this.activaSalto, null, this);
            this.physics.add.overlap(jugador.Rociador,covidRojo,this.destruyeEnemigos, null, this);
            this.physics.add.overlap(jugador.Rociador,covidVerde,this.destruyeEnemigos, null, this);
            // colisiones covid
            this.physics.add.collider(covidRojo,covidRojo);
            this.physics.add.collider(covidRojo,platforms,this.activaAnimacionCovRojo, null, this);
            this.physics.add.collider(covidRojo,Piso,this.activaAnimacionCovRojo, null, this);
            
            this.physics.add.collider(covidVerde,platforms);
            this.physics.add.collider(covidVerde,Piso);
   
       
        }
      update ()
    {
        
        
                  
            
       
       /////////controles/////////
      // botonDer.setScrollFactor (0);
      // botonIzq.setScrollFactor (0);
      // botonSalto.setScrollFactor (0);


      ///////////  gui/////
      Textos.Tiempo.text= "tiempo : " + temporizadorDeJuego
      Textos.Score.text= "Score :  " + jugador.score
      Textos.Tiempo.setScrollFactor (0);
      Textos.Score.setScrollFactor (0);
      Anciana.foto.setScrollFactor (0);
      Anciana.jeringa.setScrollFactor (0);
     // vidaAnciana.setScrollFactor (0);
      vidaAnciana.children.iterate(function (child) { 
        child.setScrollFactor (0);  
    });

      if (temporizadorDeJuego == 0||vidaAnciana.vida<0) {
        TiempoJuego.paused = true;
        sonido.musica.pause()
        this.scene.start('NivelPerdido');
      }
      

        ///////////// personaje principal/////////////////////////////////////////
        
        if (jugador.powerUpJeringa==true){

            Anciana.jeringa.visible = true ;

            if (btnPowerUp.isDown) {

                jugador.powerUpJeringa=false;
            
               
                if (animacionPlayer.flipX==false) {

                    items.jeringaLanzar.create(jugador.x+20,jugador.y,'jeringa').setFlipX(false).setScale(0.6).setVelocityX(400).body.allowGravity = false;
                    
               
                } else {

        
                  items.jeringaLanzar.create(jugador.x-20,jugador.y,'jeringa').setFlipX(true).setScale(0.6).setVelocityX(-400).body.allowGravity = false;
                  
                    
                    
                    
                }
                
            }
   

        }
        else{
            Anciana.jeringa.visible = false ;
        }


        if (btnAtaque.isDown&&saltoAct === true&&jugador.body.touching.down)
        {   
            jugador.setVelocityX(0);

            if (animacionPlayer.flipX==false) {
                jugador.Rociador.flipX=false;
                jugador.Rociador.enableBody(true, jugador.x+60,jugador.y-10, true, true);
                
               
               
            } else {
    
                jugador.Rociador.flipX=true;
                jugador.Rociador.enableBody(true, jugador.x-60,jugador.y-10, true, true);
                
                
                
            }
            animacionPlayer.anims.play('atacar', true);
            Atacando=true;
            sonido.rociador.play()

            
        }

         if (cursors.left.isDown)
        {
            if(Atacando === false &&(Anciana.x-jugador.x<=400)){

                jugador.setVelocityX(-160);
                animacionPlayer.flipX=true;
    
                if (jugador.body.touching.down) {
                   
                    animacionPlayer.anims.play('caminar', true);
                }

            }
            else{

                jugador.setVelocityX(0);
                animacionPlayer.anims.play('parado', true);


            }         
        }
        else if (cursors.right.isDown)
        {
                    if(Atacando === false && (Anciana.x-jugador.x>=-400)){

                    jugador.setVelocityX(160);
                    animacionPlayer.flipX=false;
            
                            if (jugador.body.touching.down) {
                            animacionPlayer.anims.play('caminar', true);     

                            }

                    }
                    else{

                        jugador.setVelocityX(0);
                        animacionPlayer.anims.play('parado', true);

                    }
            
      
        }

        
        else
        {   
            if( jugador.body.touching.down && Atacando === false){
                jugador.setVelocityX(0);
                animacionPlayer.anims.play('parado');                
            }
           
        }

        if (cursors.up.isDown&& saltoAct === true && Atacando===false &&jugador.body.touching.down )
        {
            jugador.setVelocityY(-600);    
            animacionPlayer.anims.play('saltar');
            saltoAct=false; 
            sonido.salto.play()
            

        }

        if (animacionPlayer.flipX===false) {
            animacionPlayer.x=jugador.x+17;
            animacionPlayer.y=jugador.y-15;
            
        } else {

            animacionPlayer.x=jugador.x-17;
            animacionPlayer.y=jugador.y-15;
            
        }

        
        //// covid rojo ia //


        covidRojo.children.iterate(function (child) { 
            
          
           
            if (Phaser.Math.Distance.BetweenPoints(Anciana, child)<=350 ) {
               
                child.setTint(0xff0000);

                if (Anciana.x<child.x) {
                    child.setVelocityX (-100)
                    
                } else {
                    child.setVelocityX (100)
                }
                
            } else {
                child.setVelocityX (0)
                
            }
        });

      

       tiempo =tiempo+1;
       

       covidVerde.children.iterate(function (child) { 

        
            if ((Phaser.Math.Distance.BetweenPoints(Anciana,child)<=350 ) ) {
                child.setTint(0xff0000);
                child.disparoListo = true;
                
                    if(tiempo >= 150 ) { 

                        covidVerde.children.iterate(function (child) { 
                           
                            if (child.disparoListo=== true){
                                
                                disparoCovidVerde.create(child.x,child.y, 'disparoVerde')

                                disparoCovidVerde.children.iterate(function (child) {
      
                                        if (Anciana.x<child.x) {

                                            child.setVelocity((Anciana.x-child.x)+70,-450);
                                            //child.setVelocity((jugador.x-child.x),-800+(jugador.x-child.x)*-1)

                                        } 
                                        
                                        else {
                                             child.setVelocity((Anciana.x-child.x)-70,-450);

                                        
                                        }

                                       
                                    });

                                
                            
                                child.disparoListo=false;

                            }

                             

                        });
                        
                        

                        tiempo=0;
                    }

                

            }
            else {

                child.clearTint();
            
            }

        });
        

     
        /////////////// anciana//////////////
        if (Anciana.x>=1800  ) {
            sonido.musica.pause()
            this.scene.start('NivelGanado');

        }

        if(Anciana.velocidad-temporizadorDeJuego>5)
            {
                Anciana.velocidadActivada=false
                animacionAnciana.clearTint();
            }

         
            

        if(Anciana.velocidadActivada==true ){
            Anciana.setVelocityX(50);
            animacionAnciana.anims.play('ancianaCamina', true)

        }
        else{
            Anciana.setVelocityX(30); 
            animacionAnciana.anims.play('ancianaCamina', true)
        }
        



        if (Phaser.Math.Distance.BetweenPoints(jugador,Anciana)<=150 ) {
           
  
            console.log(Anciana.velocidad-temporizadorDeJuego)
            let monedasAleatorio=Phaser.Math.Between(0,1500)
            if (monedasAleatorio== 10) {

                for (let index = 0; index <5; index++) {

                    items.moneda10.create(Anciana.x,Anciana.y, 'moneda10').setVelocity(Phaser.Math.Between(-100,100),Phaser.Math.Between(-650,-850)).setScale(0.3).setBounce(0.5);
                   
                }
                
            }
            else if (monedasAleatorio==200) {

                for (let index = 0; index <5; index++) {

                    items.moneda5.create(Anciana.x,Anciana.y, 'moneda5').setVelocity(Phaser.Math.Between(-100,100),Phaser.Math.Between(-650,-850)).setScale(0.3).setBounce(0.5);
                   
                }
                
            }
            else {
                if(monedasAleatorio==300) {

                    for (let index = 0; index <5; index++) {

                        items.moneda1.create(Anciana.x,Anciana.y, 'moneda1').setVelocity(Phaser.Math.Between(-100,100),Phaser.Math.Between(-650,-850)).setScale(0.3).setBounce(0.5);
                       
                    }

                }


            }
         
            

           
        } else {
           

            
        }
 
        //// animacion anciana
        animacionAnciana.x=Anciana.x+10;
        animacionAnciana.y=Anciana.y;


        }
               
        activaSalto(player,platform) {
            
            saltoAct = true;
        }

        activaAnimacionCovRojo(covidRojo){
            if(covidRojo.body.touching.down)
            {
                covidRojo.anims.play('reboteCovidAbajo', true);
            }
            

        }
        destruyeCovidVerde(disparoCovidVerde,Piso){

            disparoCovidVerde.destroy();
            sonido.explosionCovidRojo.play()

        }
        cadaSegundo( ){

            temporizadorDeJuego = temporizadorDeJuego - 1
            
        }

        sumaPuntos10 (jugador,item){
            
            jugador.score = jugador.score + 10;
            sonido.juntaMonedas.play()
            item.destroy()
            

        }
        sumaPuntos5 (jugador,item){
            
            jugador.score = jugador.score + 5;
            sonido.juntaMonedas.play()
            item.destroy()
            

        }
        sumaPuntos1 (jugador,item){
            
            jugador.score = jugador.score + 1;
            sonido.juntaMonedas.play()
            item.destroy()
            

        }
        detieneMonedas (Piso,moneda){
            
         moneda.setVelocityX(0);

        }

        destruyeEnemigos(rociador,enemigos){
            
            enemigos.destroy();
            sonido.explosionCovidRojo.play()
            this.creaPowerUps(enemigos)
            
            
          

        }

        quitaVida(Anciana,covidRojo){
            
            covidRojo.destroy();
            sonido.choqueDisparoVerde.play()
            vidaAnciana.children.iterate(function (child) { 

                if (vidaAnciana.vida==child.id) {
                    child.destroy() ;
                    
                }

            });
            vidaAnciana.vida=vidaAnciana.vida-1;


        }
       
       creaPowerUps(enemigos){
           let aleatorio = Phaser.Math.Between(0,4);
            if(aleatorio==0 ){
                items.reloj.create(enemigos.x,enemigos.y-100,'reloj').setScale(0.5)
            }
            else if(aleatorio==1){
                items.jeringa.create(enemigos.x,enemigos.y-100,'jeringa').setScale(0.8)
               
            }
            else if(aleatorio==2){
                items.corazon.create(enemigos.x,enemigos.y-100,'Corazon').setScale(0.5)
            }
            else{

            }

       }

          
       destruyepowerUpsCorazon(player,corazon){
        console.log(vidaAnciana.countActive())
        corazon.destroy();
        sonido.juntaJeringas.play()
        vidaAnciana.vida=vidaAnciana.vida+1
        vidaAnciana.create(150+(26*vidaAnciana.countActive()),50,'Corazon').setScale(0.25).id=vidaAnciana.vida


       }

       destruyepowerUpsJeringa(player,jeringa){


        //console.log(vidaAnciana.countActive())
        jeringa.destroy();
        jugador.powerUpJeringa=true;
        sonido.juntaJeringas.play()
        //vidaAnciana.vida=vidaAnciana.vida+1
       // vidaAnciana.create(150+(26*vidaAnciana.countActive()),50,'Corazon').setScale(0.25).id=vidaAnciana.vida


       }

       destruyeJeringaLanzar(anciana,Jeringa){

           Jeringa.destroy();
           Anciana.velocidad=temporizadorDeJuego
           Anciana.velocidadActivada=true
           animacionAnciana.setTint(0xE7F24E);

       }


       destruyepowerUpsReloj(player,Reloj){

        Reloj.destroy();
        jugador.powerUpEscudo=true;
        temporizadorDeJuego+=5
        sonido.juntaJeringas.play()
        
       }
      

        
     
        

/*
        collectStarRosa (player, starRosa)
        {   this.FxJuntaEstrella.play()
            starRosa.disableBody(true, true);
            score += 15;
            scoreText.setText('Score: ' + score);
            if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
            {
                //  A new batch of stars to collect
                this.activaEstrellas()
                this.crearBombas()
            }
    }
        collectStar (player, star)
        {   this.FxJuntaEstrellaChica.play()
            star.disableBody(true, true);
            //  Add and update the score
            score += 10;
            scoreText.setText('Score: ' + score);
            if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
            {
                this.activaEstrellas()
                this.crearBombas()
            }
        }
        hitBomb (player, bomb)
        {   this.FxExplosion.play()
            this.gameOver()
        }

        gameOver (){

            this.physics.pause();
            player.setTint(0xff0000);
            player.anims.play('idleKnigt');
            var gameOverButton = this.add.text(700, 500, 'Game Over', {fontFamily:'Mandhor-ALEmp', fontSize: '100px', fill: '#000' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('fin'));
            Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));
        }

        crearBombas(){
            
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }

    activaEstrellas(){
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        starsRosa.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);
            child.setVelocity(Phaser.Math.Between(-200, 200), 20);

        });
   }
   */

}  

class Scena2 extends Phaser.Scene {
    constructor(){

        super('juego')
    }
    
    create(){
    this.add.image(400, 300, 'sky').setScale(0.65);

    
    platforms = this.physics.add.staticGroup();
    platforms.create(600, 400, 'ground');
    platforms.create(750, 220, 'ground');
    platforms.create(100, 250, 'ground');
    platforms.create(200,400, 'ground');
    platforms.create(400,250, 'ground');
    // plataformas
    

// piso
    Piso = this.physics.add.staticGroup({
        key: 'medio',
        repeat: 25,
        setXY: { x: 0, y: 630, stepX: 128 }
    });

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    // botones 
    KeyR=this.input.keyboard.addKey('R')
    
    if (cursors =! undefined){
        
        cursors = this.input.keyboard.createCursorKeys();
    }

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
        key: 'starRosa',
        repeat: 4,
        setXY: { x: 12, y: 0, stepX: 200 }
    });

    starsRosa.children.iterate(function (child) {

        //  Give each star a slightly different bounce
       // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
       
       child.setScale(0.3)
       //child.setBounceY(1);
       child.body.bounce.setTo(1, 1);
       child.setCollideWorldBounds(true);
       child.setVelocity(Phaser.Math.Between(-200, 200), 20);
       
       

    });


    bombs = this.physics.add.group();

    //  The score
 
    scoreText = this.add.text(350, 16, 'Score: 0', {fontFamily:'Mandhor-ALEmp', fontSize: '32px', fill: '#994500' });
    indicaciones = this.add.text(10,10, 'Presiona la tecla R para reiniciar', {fontFamily:'Mandhor-ALEmp', fontSize: '15px', fill: '#994500' });
    
    
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
    this.physics.add.collider(player,Piso,this.activaSalto, null, this);
    
    }


        update ()
    {
        

        if (KeyR.isDown)
        {
            this.scene.restart()
        }

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }
            
        if (cursors.up.isDown && player.body.touching.down && saltoAct === true)
        {
            player.setVelocityY(-600);
            saltoAct =false;
            
        }
    
    }

    activaSalto(player,platform) {
        saltoAct = true;
        
        
    }

    collectStarRosa (player, starRosa)
    {

        starRosa.disableBody(true, true);
        score += 15;
        scoreText.setText('Score: ' + score);
        if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            starsRosa.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);
                child.setVelocity(Phaser.Math.Between(-200, 200), 20);

            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;

        }


    }



     collectStar (player, star)
    {
        star.disableBody(true, true);

        //  Add and update the score
        score += 10;
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

            starsRosa.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);
                child.setVelocity(Phaser.Math.Between(-200, 200), 20);

            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;

        }
    }

    hitBomb (player, bomb)
    {
        this.gameOver()
        


    }

    gameOver (){

        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        var gameOverButton = this.add.text(700, 500, 'Game Over', {fontFamily:'Mandhor-ALEmp', fontSize: '100px', fill: '#000' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start('fin'));
        Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));
        


    }

   

}  

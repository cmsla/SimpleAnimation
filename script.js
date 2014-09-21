var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var parasol3
var bg

function preload() {
	game.load.spritesheet('parasol3', 'assets/parasol3.png', 300, 300);
	game.load.image('bg', 'assets/bg.jpg');
}

function create() {
	bg= game.add.sprite(0,0, 'bg');

	parasol3= game.add.sprite(100, 100, 'parasol3');
	parasol3.animations.add('walk');
	parasol3.inputEnabled = true;
	parasol3.events.onInputDown.add(parsil5Click, this);


}

function parsil5Click() {
  parasol3.animations.play('walk', 10, false);
}
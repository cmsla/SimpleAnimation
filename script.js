var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var parasol4

function preload() {
	game.load.spritesheet('parasol3', 'assets/parasol4.png', 300, 300);
}

function create() {
	parasol4= game.add.sprite(100, 100, 'parasol3');
	parasol4.animations.add('walk');
	parasol4.inputEnabled = true;
	parasol4.events.onInputDown.add(cowClick, this);
}

function cowClick() {
  parasol4.animations.play('walk', 10, false);
}
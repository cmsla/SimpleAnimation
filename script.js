var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var parasol3

function preload() {
	game.load.spritesheet('parasol3', 'assets/parasol3.png', 300, 300);
}

function create() {
	parasol3= game.add.sprite(100, 100, 'parasol3');
	parasol3.animations.add('walk');
	parasol3.animations.play('walk', 15, true);
}
import 'pixi';
import 'p2';

import Phaser from 'phaser';
import CoreGame from './states/CoreGame';


class Game extends Phaser.Game {
    constructor() {
        super(1024, 768, Phaser.AUTO, 'content');
        this.state.add('coreGame', CoreGame, false);
        //this.state.add('menu', menuState, false);
        //this.state.add('gameOver', gameOverState, false);

        this.state.start('coreGame');
    }
}

window.game = new Game();

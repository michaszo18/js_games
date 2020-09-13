import {Game} from './Game.js';

const game = new Game({
    outputWr: document.getElementById('output'),
    wordWr: document.getElementById('word'),
    categoryWr: document.getElementById('category'),
    lettersWr: document.getElementById('letters')
})
game.start()
// const PIXI = require('pixi.js');

let app = new PIXI.Application({ width: 640, height: 360 }); // create application helper class

document.body.appendChild(app.view); // add canvas to the dom

// Magically load the PNG asynchronously
let coin = PIXI.Sprite.from('assets/coin.png');

app.stage.addChild(coin);
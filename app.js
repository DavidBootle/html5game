// const PIXI = require('pixi.js');

let app = new PIXI.Application({ width: 640, height: 360 }); // create application helper class

document.body.appendChild(app.view); // add canvas to the dom

// Magically load the PNG asynchronously
let coin = PIXI.Sprite.from('assets/coin.png');

app.stage.addChild(coin);

// add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// tell the application ticker to run a new callback every frame, passing in the amount of time that has passed since the last tick.
app.ticker.add((delta) => {
    elapsed += delta;
    // update the sprite's X position based on the cosine of our elapsed time. We divide by 50 to slow down the animation a bit
    coin.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});
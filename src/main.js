// Name: Toby Pang
// Mod Title: Rocket Patrol: Comet Clash
// Approximate time: 7 hours
/* Mods:
Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1)
Create 4 new explosion sound effects and randomize which one plays on impact (3)
Display the time remaining (in seconds) on the screen (3)
Implement parallax scrolling for the background (3)
Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)

1 + 3 + 3 + 3 + 5 + 5 = 20 points
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

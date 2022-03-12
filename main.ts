controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 . . . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    music.knock.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(10)
    music.smallCrash.play()
})
let asteroid1: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    b b b . . . . . . . . . . . . . 
    . b b b . . . . . . . . . . . . 
    . b 6 6 b b . . . . . . . . . . 
    . b 6 7 6 6 b b . . . . . . . . 
    . . b 6 7 6 6 6 b b . . . . . . 
    . . . b 6 6 7 6 6 6 b b . . . . 
    . . 2 b 6 6 6 6 6 b 7 b b b . . 
    . 2 2 b 6 6 6 6 b b 7 7 b b b b 
    . . 2 b 6 6 6 6 6 b 7 b b b . . 
    . . . b 6 6 7 6 6 6 b b . . . . 
    . . b 6 7 6 6 6 b b . . . . . . 
    . b 6 7 6 6 b b . . . . . . . . 
    . b 6 6 b b . . . . . . . . . . 
    . b b b . . . . . . . . . . . . 
    b b b . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    asteroid1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 c 4 a 4 b . . . 
        . . . . . . 4 c 4 a 4 b 4 b . . 
        . . . . . 4 4 4 4 a a b b b . . 
        . . . . a 4 a a 4 a 4 b b 4 . . 
        . . . . 4 a a 4 4 4 a 4 b . . . 
        . . . . . 4 4 a a 4 4 b 4 . . . 
        . . . . . . . . 4 4 . . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    asteroid1.x = scene.screenWidth()
    asteroid1.setVelocity(-15, 0)
    asteroid1.y = randint(scene.screenWidth(), -10)
})
forever(function () {
    effects.starField.startScreenEffect()
})

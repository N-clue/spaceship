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
})
let asteroid1: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . 2 . . . . . . . . . . . . . 2 
    . 2 . . . . d d d d d . . . . 2 
    . . 2 . . d d 8 8 8 d d d . 2 . 
    . . . 2 . d 8 8 8 8 8 8 d 2 . . 
    . . . d d 8 8 8 8 8 8 8 8 d d . 
    . . d d 8 8 8 8 8 8 8 8 8 8 d d 
    . 1 d 1 8 1 8 8 1 8 1 8 8 1 8 1 
    d 1 8 1 8 1 8 8 1 8 1 8 8 1 8 1 
    d 8 8 8 8 8 8 8 8 8 8 8 8 8 8 d 
    d d 8 8 8 8 8 8 8 8 8 8 8 8 d d 
    . d d d 8 8 8 8 8 8 8 8 8 d d . 
    . . . d d d 8 8 8 8 8 d d d . . 
    . . . . . d d d d d d d . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
        . . . . . . . 4 4 . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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

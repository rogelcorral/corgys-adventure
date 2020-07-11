namespace SpriteKind {
    export const Object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile1 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
function create_enemy1 () {
    bouncingKitty = sprites.create(img`
        e e e . . . . e e e . . . .
        c d d c . . c d d c . . . .
        c b d d f f d d b c . . . .
        c 3 b d d b d b 3 c . . . .
        f b 3 d d d d 3 b f . . . .
        e d d d d d d d d e . . . .
        e d f d d d d f d e . b f b
        f d d f d d f d d f . f d f
        f b d d b b d d 2 f . f d f
        . f 2 2 2 2 2 2 b b f f d f
        . f b d d d d d d b b d b f
        . f d d d d d b d d f f f .
        . f d f f f d f f d f . . .
        . f f . . f f . . f f . . .
    `, SpriteKind.Enemy)
    bouncingKitty.setVelocity(100, 100)
    bouncingKitty.setFlag(SpriteFlag.BounceOnWall, true)
    bouncingKitty.y = Math.randomRange(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    game.over(true)
})
function create_enemy2 () {
    flyingRubberDucky = sprites.create(img`
        . . . . . . . . . b 5 b . . . .
        . . . . . . . . . b 5 b . . . .
        . . . . . . b b b b b b . . . .
        . . . . . b b 5 5 5 5 5 b . . .
        . . . . b b 5 b c 5 5 d 4 c . .
        . b b b b 5 5 5 b f d d 4 4 4 b
        . b d 5 b 5 5 b c b 4 4 4 4 b .
        . . b 5 5 b 5 5 5 4 4 4 4 b . .
        . . b d 5 5 b 5 5 5 5 5 5 b . .
        . b d b 5 5 5 d 5 5 5 5 5 5 b .
        b d d c d 5 5 b 5 5 5 5 5 5 b .
        c d d d c c b 5 5 5 5 5 5 5 b .
        c b d d d d d 5 5 5 5 5 5 5 b .
        . c d d d d d d 5 5 5 5 5 d b .
        . . c b d d d d d 5 5 5 b b . .
        . . . c c c c c c c c b b . . .
    `, SpriteKind.Enemy)
    flyingRubberDucky.setVelocity(100, 100)
    flyingRubberDucky.setFlag(SpriteFlag.BounceOnWall, true)
    flyingRubberDucky.y = Math.randomRange(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.jumpUp.play()
})
let flyingRubberDucky: Sprite = null
let bouncingKitty: Sprite = null
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
let corgysHouse = sprites.create(img`
    . . . . . . . . . . 2 . . . . . . . . . .
    . . . . . . . . . 2 2 2 . . . . . . . . .
    . . . . . . . . 2 2 1 2 2 . . . . . . . .
    . . . . . . . 2 2 1 1 1 2 2 . . . . . . .
    . . . . . . 2 2 1 1 1 1 1 2 2 . . . . . .
    . . . . . 2 2 1 1 1 1 1 1 1 2 2 . . . . .
    . . . . 2 2 1 1 1 1 1 1 1 1 1 2 2 . . . .
    . . . 2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . . .
    . . 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 . .
    . 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 .
    2 2 2 1 1 1 1 1 f f f f f 1 1 1 1 1 2 2 2
    . . . 1 1 1 1 f f f f f f f 1 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
    . . . 1 1 1 f f f f f f f f f 1 1 1 . . .
`, SpriteKind.Object)
corgysHouse.setPosition(470, 110)
tiles.setTilemap(tiles.createTilemap(
            hex`1e000800040000000000000000000000000000000000000000000004000000000000000000000004000000000004040404000000000000000004000004040404000000000004000000000000000000000000000000000000000000000000000000000000000404000000000000000404000004040404000000040400000004040400000000000000040404000000000000000000000000000000000000000000000000000000000000000004040404000000000400000000000000000000040000040000040000000000000000000400000000000000010100040000040000040000040000040000000000040400000000000000`,
            img`
                2 . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . .
                . . . . . 2 . . . . . 2 2 2 2 . . . . . . . . 2 . . 2 2 2 2
                . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 . . . . . . . 2 2 . . 2 2 2 2 . . . 2 2 .
                . . 2 2 2 . . . . . . . 2 2 2 . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 2 . . . .
                . . . . . . 2 . . 2 . . 2 . . . . . . . . . 2 . . . . . . .
                2 2 . 2 . . 2 . . 2 . . 2 . . 2 . . . . . 2 2 . . . . . . .
            `,
            [myTiles.tile0,sprites.builtin.brick,sprites.castle.tilePath3,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.shrub,sprites.builtin.coral5,myTiles.tile1,sprites.castle.tileGrass2,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
game.onUpdateInterval(3000, function () {
    create_enemy1()
    create_enemy2()
})

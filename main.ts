enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Main_Car.y += -8
    animation.runImageAnimation(
    Main_Car,
    [img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `],
    500,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Person.y += 8
    animation.runImageAnimation(
    Person,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 . 2 2 2 2 2 . 2 2 . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Main_Car.x += -8
    animation.runImageAnimation(
    Main_Car,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Person.y += -8
    animation.runImageAnimation(
    Person,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 . 2 2 2 2 2 . 2 2 . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Main_Car.x += 8
    animation.runImageAnimation(
    Main_Car,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Person.x += 8
    animation.runImageAnimation(
    Person,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 . 2 2 2 2 2 . 2 2 . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Main_Car.y += 8
    animation.runImageAnimation(
    Main_Car,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `],
    500,
    false
    )
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Person.x += -8
    animation.runImageAnimation(
    Person,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 . 2 2 2 2 2 . 2 2 . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    Person = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 . 2 2 2 2 2 . 2 2 . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . d d . 2 2 2 2 2 . d d . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . 8 8 f 8 8 . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . e e f e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Person.setPosition(8, 16)
    music.playMelody("C D E G A C5 C5 C5 ", 960)
})
let Car_1: Sprite = null
let Car_3: Sprite = null
let Car_2: Sprite = null
let Person: Sprite = null
let Main_Car: Sprite = null
Main_Car = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`400040000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102050202020202020202020202020202020202020202020202020202020202020303030303030303030303030303030303030303030303030303030303030303020502020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020205020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050209080808080808080c020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020206010a070707070707070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210111111111111070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210070707070707070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210071111111111110d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210070707070707070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210111111111111070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210070707070707070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210071111111111110d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210070707070707070d0202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202050210111111111111070d020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020206010a070707070707070d020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020f0b0b0b0b0b0b0b0e020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ...222222222....................................................
    ...........2....................................................
    2222222222.2....................................................
    2222.......2....................................................
    2222.2222222....................................................
    2222.......2....................................................
    2222222222.2....................................................
    2222.......2....................................................
    2222.2222222....................................................
    2222.......2....................................................
    2222222222.2....................................................
    ...........2....................................................
    ...222222222....................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.vehicle.roadIntersection3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.builtin.forestTiles0], TileScale.Sixteen))
Main_Car.setPosition(8, 8)
scene.centerCameraAt(0, 0)
scene.cameraFollowSprite(Main_Car)
controller.player2.moveSprite(Person)
game.onUpdateInterval(2500, function () {
    Car_2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    Car_2.y = 40
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
game.onUpdateInterval(2500, function () {
    Car_3 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c d d . . c d d . . . . . 
        . . . c d d . . c d d . . . . . 
        . . . c 6 6 . . c 6 6 6 d d . . 
        . . . c 6 6 . e c 6 6 . . c . . 
        . . . c 8 8 8 e c 8 8 . . c . . 
        . . . c c c c c c 8 8 c c c . . 
        . . . . . . c . . c e e b . . . 
        . . . . . c . . . . c b b . . . 
        . . . . c . . . . . . c . . . . 
        . . f f f f . . . . f f f . . . 
        . . f f f f f . . f f f f f . . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    Car_3.y = 72
    music.playTone(100, music.beat(BeatFraction.Quarter))
})
game.onUpdateInterval(1000, function () {
    Car_1 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    Car_1.y = 55
    music.playTone(131, music.beat(BeatFraction.Quarter))
})

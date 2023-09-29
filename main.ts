namespace SpriteKind {
    export const Spell = SpriteKind.create()
    export const Skeleton = SpriteKind.create()
    export const Test = SpriteKind.create()
}
namespace StatusBarKind {
    export const scel_helth = StatusBarKind.create()
    export const Mush_manHP = StatusBarKind.create()
}
function initializeHeroVariables () {
    HeroImageBackward = assets.image`WizBackward`
    HeroImageForward = assets.image`WizForward`
    HeroImageForwardCrouch = assets.image`WizCrouchForward`
    HeroImageBackwardCrouch = assets.image`WizCrouchBackward`
    HeroIsForward = true
    Hero = sprites.create(HeroImageForward, SpriteKind.Player)
}
function topAlign (mySprite: Sprite, mySprite2: Sprite) {
    if (mySprite.vy < 0) {
        if (mySprite.bottom <= mySprite2.y + 4) {
            mySprite.setVelocity(0, 0)
            mySprite.bottom = mySprite2.y + 4
        }
    } else {
        if (mySprite.vy > 0) {
            if (mySprite.top >= mySprite2.y + -4) {
                mySprite.setVelocity(0, 0)
                mySprite.top = mySprite2.y + -4
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    HeroIsAbleToCrouch = true
    tiles.setTileAt(location, assets.tile`transparency16`)
    game.showLongText("Crouch Power togel down to crouch!", DialogLayout.Bottom)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Dragon_Head.setVelocity(0, -10)
    animation.runImageAnimation(
    Dragon_Neck,
    assets.animation`N_Up_Middle`,
    100,
    false
    )
    pause(1700)
    Dragon_Head.vx = 5
    pause(300)
    animation.runImageAnimation(
    Dragon_Neck,
    assets.animation`N_Up_Top`,
    100,
    false
    )
    pause(1700)
    Dragon_Head.setVelocity(0, 0)
})
function initializeHeroHealth () {
    HP = statusbars.create(20, 4, StatusBarKind.Health)
    HP.attachToSprite(Hero, 1, 0)
    HP.max = 99
    HP.value = 99
    HP.setColor(7, 2)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Coin`, function (sprite3, location3) {
    info.changeScoreBy(1)
    tiles.setTileAt(location3, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Dragon_Head,
    assets.animation`Dragon_Mouth_Open`,
    100,
    false
    )
    animation.runImageAnimation(
    Dragon_Head,
    assets.animation`Dragon_Mouth_Open`,
    100,
    false
    )
})
function test3 (Speed: number) {
    Segment5.setVelocity(0, Speed)
    Segment4.setVelocity(0, Speed * 1)
    Segment3.setVelocity(0, Speed * 1)
    Segment2.setVelocity(0, Speed * 1)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HeroIsCrouching == true) {
        Hero.setImage(HeroImageBackwardCrouch)
    } else {
        Hero.setImage(HeroImageBackward)
    }
    HeroIsForward = false
    PP.attachToSprite(Hero, -22, 0)
})
function test4 () {
    Dragon_Neck = sprites.create(assets.image`Seg_0`, SpriteKind.Test)
    tiles.placeOnTile(Dragon_Neck, tiles.getTileLocation(8, 12))
    Dragon_Head = sprites.create(assets.image`Seg_1`, SpriteKind.Test)
    tiles.placeOnTile(Dragon_Head, tiles.getTileLocation(6, 10))
    Dragon_Head.x += 10
    Dragon_Head.y += 18
    Dragon_Body = sprites.create(assets.image`Seg_2`, SpriteKind.Test)
    tiles.placeOnTile(Dragon_Body, tiles.getTileLocation(9, 13))
    Dragon_Body.x += -2
    Dragon_Body.y += -8
}
function test2 (Speed: number) {
    Segment2.setVelocity(0, Speed)
    Segment3.setVelocity(0, Speed * 1.25)
    Segment4.setVelocity(0, Speed * 1.5)
    Segment5.setVelocity(0, Speed * 1.75)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (HeroIsCrouching == true) {
        Hero.setImage(HeroImageForwardCrouch)
    } else {
        Hero.setImage(HeroImageForward)
    }
    HeroIsForward = true
    PP.attachToSprite(Hero, 1, 0)
})
function initializeHeroPower () {
    PP = statusbars.create(4, 20, StatusBarKind.Magic)
    PP.attachToSprite(Hero, 1, 0)
    PP.max = 50
    PP.value = 50
    PP.setColor(8, 15)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    HP.value += 5
    tiles.setTileAt(location2, assets.tile`transparency16`)
})
function test () {
    Segment1 = sprites.create(assets.image`Segment_1`, SpriteKind.Test)
    Segment2 = sprites.create(assets.image`Segment_1`, SpriteKind.Test)
    Segment3 = sprites.create(assets.image`Segment_1`, SpriteKind.Test)
    Segment4 = sprites.create(assets.image`Segment_1`, SpriteKind.Test)
    Segment5 = sprites.create(assets.image`Segment_1`, SpriteKind.Test)
    tiles.placeOnTile(Segment1, tiles.getTileLocation(8, 12))
    tiles.placeOnTile(Segment2, tiles.getTileLocation(8, 12))
    tiles.placeOnTile(Segment3, tiles.getTileLocation(8, 12))
    tiles.placeOnTile(Segment4, tiles.getTileLocation(8, 12))
    tiles.placeOnTile(Segment5, tiles.getTileLocation(8, 12))
    Segment1.x += 16
    Segment1.y += 16
    Segment2.x += 12
    Segment2.y += 12
    Segment3.x += 8
    Segment3.y += 8
    Segment4.x += 4
    Segment4.y += 4
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Dragon_Head.setVelocity(-5, 10)
    animation.runImageAnimation(
    Dragon_Neck,
    assets.animation`N_Down_Middle`,
    100,
    false
    )
    pause(1700)
    Dragon_Head.vx = 0
    pause(300)
    animation.runImageAnimation(
    Dragon_Neck,
    assets.animation`N_Down_Bottom`,
    100,
    false
    )
    pause(1700)
    Dragon_Head.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite4, location4) {
    HP.value += -2
    Hero.sayText("Ouch!", 500, true)
    Hero.vy = -100
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite5, location5) {
    HP.value += -2
    Hero.sayText("Ouch!", 500, true)
    Hero.vy = -100
})
let move_scel = 0
let Segment1: Sprite = null
let Dragon_Body: Sprite = null
let PP: StatusBarSprite = null
let HeroIsCrouching = false
let Segment2: Sprite = null
let Segment3: Sprite = null
let Segment4: Sprite = null
let Segment5: Sprite = null
let HP: StatusBarSprite = null
let Dragon_Neck: Sprite = null
let Dragon_Head: Sprite = null
let HeroIsAbleToCrouch = false
let HeroIsForward = false
let HeroImageBackwardCrouch: Image = null
let HeroImageForwardCrouch: Image = null
let HeroImageForward: Image = null
let HeroImageBackward: Image = null
let Hero: Sprite = null
initializeHeroVariables()
info.setScore(0)
scene.setBackgroundImage(assets.image`Forest`)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(Hero, 100, 0)
tiles.placeOnTile(Hero, tiles.getTileLocation(2, 13))
initializeHeroHealth()
initializeHeroPower()
test4()
scene.cameraFollowSprite(Hero)
Hero.ay = 500
let sceletin = sprites.create(assets.image`Skeleton`, SpriteKind.Skeleton)
tiles.placeOnTile(sceletin, tiles.getTileLocation(34, 14))
let scel_HP = statusbars.create(20, 4, StatusBarKind.scel_helth)
scel_HP.attachToSprite(sceletin, 2, 0)
scel_HP.max = 10
scel_HP.value = 10
scel_HP.setColor(2, 15)
game.onUpdate(function () {
	
})
forever(function () {
    if (HP.value == 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(500, function () {
    move_scel = randint(1, 2)
    if (move_scel == 1) {
        sceletin.setVelocity(-50, 0)
    }
    if (move_scel == 2) {
        sceletin.setVelocity(50, 0)
    }
})

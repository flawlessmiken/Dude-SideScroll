!function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="dist",s(s.s=3)}([function(e,t,s){var i,a;i=[s,t,s(8),s(9),s(10),s(11),s(12)],void 0===(a=function(e,t,s,i,a,h,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LevelManager=class{constructor(e,t,s,i){this.game=e,this.level=t,this.nextLevel=s,this.level.lastCameraPositionX=0,this.soundManager=i}createBasicLevelStuff(e){this.createMap(e),this.createParallax(430),this.game.world.bringToTop(this.level.back),this.game.world.bringToTop(this.level.walls),this.createGreenEnemies(),this.createGems(),this.createRedGems(),this.createItems(),this.createMisc()}updateBasicLevelStuff(e){this.updatePlayer(e),this.updateRedGemsInteraction(e),this.updateGemsInteraction(e),this.updateEnemiesInteraction(e),this.updateItemsInteraction(e),this.updateMiscInteraction(e),this.updateParallax(e.speed)}createMap(e){this.level.map=this.game.add.tilemap(e),this.level.map.addTilesetImage("jungletileset","jungle_tileset"),this.level.map.setCollisionBetween(1,2e3,!0,"walls"),this.level.back=this.level.map.createLayer("back"),this.level.back.setScale(2),this.level.walls=this.level.map.createLayer("walls"),this.level.walls.setScale(2),this.level.walls.resizeWorld()}createParallax(e){this.level.paralax2=this.game.add.tileSprite(0,this.game.world.height-e,this.game.world.width,this.game.world.height+100,"jungle_paralax2"),this.level.paralax2.tileScale.x=2,this.level.paralax2.tileScale.y=2,this.level.paralax3=this.game.add.tileSprite(0,this.game.world.height-e-5,this.game.world.width,this.game.world.height+100,"jungle_paralax3"),this.level.paralax3.tileScale.x=2,this.level.paralax3.tileScale.y=2,this.level.paralax4=this.game.add.tileSprite(0,this.game.world.height-e-20,this.game.world.width,this.game.world.height+100,"jungle_paralax4"),this.level.paralax4.tileScale.x=2,this.level.paralax4.tileScale.y=2,this.level.paralax5=this.game.add.tileSprite(0,this.game.world.height-e-30,this.game.world.width,this.game.world.height+100,"jungle_paralax5"),this.level.paralax5.tileScale.x=2,this.level.paralax5.tileScale.y=2,this.level.paralax5.checkWorldBounds=!0}createGreenEnemies(){this.level.map.objects.enemies.forEach(function(e){this.level.enemies.push(new s.Enemy(this.game,2*e.x,1.7*e.y,this.game.physics.arcade.gravity.y,this.level.enemySpeed))}.bind(this))}createItems(){this.level.map.objects.items.forEach(function(e){"shield"==e.name&&this.level.items.push(new a.Shield(this.game,2*e.x,1.7*e.y,this.game.physics.arcade.gravity.y))}.bind(this))}createBats(e){this.playerRef=e,this.level.map.objects.bats.forEach(function(e){this.level.bats.push(new i.Bat(this.game,2*e.x,1.5*e.y,this.game.physics.arcade.gravity.y,125,this.playerRef))}.bind(this))}createGems(){this.level.gems=this.game.add.physicsGroup(),this.level.map.createFromObjects("gems","gem1","greygem",0,!0,!1,this.level.gems),this.level.gems.forEach(function(e){e=this.gemSetup(e)}.bind(this))}createRedGems(){this.level.redGems=this.game.add.physicsGroup(),this.level.map.createFromObjects("redgems","redgem","redgem",0,!0,!1,this.level.redGems),this.level.redGems.forEach(function(e){e=this.gemSetup(e)}.bind(this))}createMisc(){this.level.misc=this.game.add.physicsGroup(),this.level.map.createFromObjects("misc","lumpofgrass","lumpofgrass",0,!0,!1,this.level.misc),this.level.misc.forEach(function(e){"lumpofgrass"==e.name&&(e=this.miscSetup(e))}.bind(this)),this.level.map.objects.misc.forEach(function(e){"platform"==e.name&&this.level.platforms.push(new h.Platform(this.game,2*e.x,1.9*e.y,this.game.physics.arcade.gravity.y,this.soundManager)),"lever"==e.name&&this.level.levers.push(new l.Lever(this.game,2*e.x,1.9*e.y,this.game.physics.arcade.gravity.y,this.soundManager))}.bind(this))}updatePlayer(e){this.game.physics.arcade.collide(e,this.level.walls),e.position.x+.1>=this.game.world.bounds.bottomRight.x&&this.goNextLevel(e)}updateParallax(e){this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&&this.game.camera.position.x!=this.level.lastCameraPositionX&&(this.level.paralax4.tilePosition.x+=e/1875,this.level.paralax3.tilePosition.x+=e/6e3,this.level.paralax2.tilePosition.x+=e/3e4),this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)&&this.game.camera.position.x!=this.level.lastCameraPositionX&&(this.level.paralax4.tilePosition.x-=e/1875,this.level.paralax3.tilePosition.x-=e/6e3,this.level.paralax2.tilePosition.x-=e/3e4),this.level.lastCameraPositionX=this.game.camera.position.x}updateEnemiesInteraction(e){this.game.physics.arcade.collide(this.level.enemies,this.level.walls),this.game.physics.arcade.overlap(e,this.level.enemies,this.enemyOverlap.bind(this))}updateItemsInteraction(e){this.game.physics.arcade.collide(this.level.items,this.level.walls),this.game.physics.arcade.overlap(e,this.level.items,this.getItem.bind(this))}updateMiscInteraction(e){this.game.physics.arcade.collide(this.level.misc,this.level.walls),this.game.physics.arcade.collide(e,this.level.misc,this.miscOverlap.bind(this)),this.level.platforms.length>0&&(this.game.physics.arcade.collide(this.level.platforms,this.level.walls),this.game.physics.arcade.overlap(e,this.level.platforms,this.platformOverlap.bind(this))),this.level.levers.length>0&&(this.game.physics.arcade.collide(this.level.levers,this.level.walls),this.game.physics.arcade.overlap(e,this.level.levers,this.leverOverlap.bind(this))),this.level.misc.forEach(function(e){e.inCamera||(e.x=e.spawnX,e.y=e.spawnY)}.bind(this))}updateBatsInteraction(e){this.game.physics.arcade.collide(this.level.bats,this.level.walls),this.game.physics.arcade.overlap(e,this.level.bats,this.enemyOverlap.bind(this))}updateGemsInteraction(e){this.game.physics.arcade.collide(this.level.gems,this.level.walls),this.game.physics.arcade.overlap(e,this.level.gems,this.gemsCollect.bind(this),null,this)}updateRedGemsInteraction(e){this.game.physics.arcade.collide(this.level.redGems,this.level.walls),this.game.physics.arcade.overlap(e,this.level.redGems,this.redGemsCollect.bind(this),null,this)}enemyOverlap(e,t){e.body.touching.down&&e.position.y<t.position.y-(t.height-5)?(this.soundManager.enemydamage.play(),t.body.enable=!1,e.jumping=!1,e.pressingUp?e.body.velocity.y=-e.jumpStrength-e.jumpBonus-2:e.body.velocity.y=-e.jumpStrength/2,t.destroy()):e.hasShield||e.playerDamage(this.soundManager)}miscOverlap(e,t){e.position.y<t.position.y-(t.height-28)&&(e.body.blocked.down=!0)}platformOverlap(e,t){t.body.touching.none=!1}leverOverlap(e,t){t.body.touching.none=!1,t.toggle()}getItem(e,t){"shield"==t.name&&(e.hasShield=!0),t.destroy()}gemSetup(e){return e.x=2*e.x,e.y=1.7*e.y,e.scale.setTo(1.8,2),e.body.immovable=!0,e.body.bounce.y=.3,e.animations.add("shine",[0,1,2,3],8,!0),e.animations.play("shine"),e}miscSetup(e){return"lumpofgrass"==e.name&&(e.x=2*e.x,e.y=1.7*e.y,e.spawnX=e.x,e.spawnY=e.y,e.scale.setTo(2,2),e.body.immovable=!1,e.body.bounce.y=0,e.body.drag.x=200,e.body.drag.y=-200,e.body.setSize(32,30,0,0)),e}gemsCollect(e,t){this.soundManager.gemcatch.play(),e.gems++,t.destroy()}redGemsCollect(e,t){this.soundManager.gemcatch.play(),e.redGems++,t.destroy()}goNextLevel(e){this.level.enemies.forEach(function(e){e.destroy()}),this.game.state.start(this.nextLevel,!0,!1,e,this.soundManager,this.level,this)}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i,a;i=[s,t,s(15)],void 0===(a=function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Player=class extends Phaser.Sprite{constructor(e,t,i,a,h,l,o,n,r){super(e,t,i,"dude",0),this.gems=l,this.redGems=o,this.lives=n,this.spawnX=t,this.spawnY=i,this.playingOnDesktop=this.game.device.desktop,this.localGravity=h,this.speedBonus=50,this.jumpBonus=50,this.speed=a,this.jumpStrength=h+.4*h,this.jumping=!1,this.pressingUp=!1,this.dead=!1,this.fadeComplete=!1,this.shieldMaxTime=10,this.shieldSeconds=this.shieldMaxTime,this.lastShieldSeconds=0,this.shieldTimer=this.game.add.bitmapText(this.x,this.y+10,"carrier_command",this.shieldSeconds.toString(),12),this.shieldTimer.visible=!1,this.hasShield=!1,this.shieldSprite=this.game.add.sprite(this.x,this.y+10,"shield"),this.shieldSprite.scale.setTo(2,2),this.shieldSprite.anchor.setTo(.5,0),this.shieldSprite.visible=!1,this.size=1.8,this.scale.setTo(this.size,this.size),this.anchor.setTo(.5,0),this.animations.add("walk",[0,1,2,3],10,!0),this.animations.add("damaged",[4,5,6,7],10,!1),this.animSpeeds=[8,13],this.game.physics.arcade.enableBody(this),this.body.setSize(16,21,0,0),this.body.collideWorldBounds=!1,this.body.gravity.y=h,this.body.bounce.y=.2,this.controller=new s.ControllerManager(this,this.game),this.soundManager=r,e.add.existing(this)}update(){this.body.velocity.x=0,this.dead?this.fadeComplete&&this.playerDamageEffects(this.soundManager):(this.movingRight?this.moveRight():this.movingLeft?this.moveLeft():this.animations.frame=0,this.playingOnDesktop&&this.controller.getKeyboardInput(this),this.jumping&&this.body.blocked.down&&(this.soundManager.fall.volume=.3,this.soundManager.fall.play(),this.jumping=!1),this.y>450&&this.playerDamage(this.soundManager),this.checkShield())}removeShield(){0===this.shieldSeconds?(this.hasShield=!1,this.shieldSprite.visible=!1,this.shieldTimer.visible=!1,this.shieldSeconds=this.shieldMaxTime):(this.shieldSeconds--,this.shieldTimer.setText(this.shieldSeconds.toString()))}playerDamage(e){this.soundManager.damage.play(),this.dead=!0,this.body.enable=!1,this.animations.play("damaged"),this.game.camera.fade(0,500),this.game.camera.onFadeComplete.add(this.fadeCompleted,this)}checkShield(){this.hasShield&&(this.shieldSeconds!==this.lastShieldSeconds?(this.lastShieldSeconds=this.shieldSeconds,this.game.world.bringToTop(this.shieldSprite),this.shieldSprite.visible=!0,this.shieldTimer.visible=!0,this.game.time.events.add(1e3,this.removeShield,this)):(this.shieldSprite.x=this.x-1*this.shieldSprite.scale.x,this.shieldSprite.y=this.y+10,this.shieldTimer.position.x=this.x+22,this.shieldTimer.position.y=this.y+2))}fadeCompleted(){this.fadeComplete=!0}playerDamageEffects(e){this.game.camera.resetFX(),this.body.enable=!0,this.lives--,this.position.x=this.spawnX,this.position.y=this.spawnY,this.dead=!1,this.lives<0&&(this.soundManager.music.stop(),this.soundManager=null,this.game.state.start("MainMenu")),this.fadeComplete=!1}moveRight(){this.position.x<this.game.world.bounds.bottomRight.x?(this.running?(this.animations.play("walk").speed=this.animSpeeds[1],this.body.velocity.x=this.speed+this.speedBonus):(this.animations.play("walk").speed=this.animSpeeds[0],this.body.velocity.x=this.speed),this.scale.x==-this.size&&(this.scale.x=this.size,this.shieldSprite.scale.x=-2)):this.position.x=this.game.world.bounds.bottomRight.x-.1}moveLeft(){this.position.x>4?(this.running?(this.animations.play("walk").speed=this.animSpeeds[1],this.body.velocity.x=-this.speed-this.speedBonus):(this.animations.play("walk").speed=this.animSpeeds[0],this.body.velocity.x=-this.speed),this.scale.x==this.size&&(this.scale.x=-this.size,this.shieldSprite.scale.x=2)):this.position.x=4.1}jump(){this.jumping||(this.running&&0!=this.body.velocity.x?this.body.velocity.y=-this.jumpStrength-this.jumpBonus:this.body.velocity.y=-this.jumpStrength,this.soundManager.jump.play(),this.jumping=!0,this.body.blocked.down=!1,this.movingRight?(this.scale.x=this.size,this.shieldSprite.scale.x=-2):this.movingLeft&&(this.scale.x=-this.size,this.shieldSprite.scale.x=2))}fall(){this.jumping&&this.body.velocity.y<0&&(this.body.velocity.y=-this.body.velocity.y/4)}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Hud=class extends Phaser.Sprite{constructor(e,t){super(e,0,0,"hud",0),this.hearts=[],this.gemsFontSize=16,this.redGemsFontSize=16,this.fixedToCamera=!0,this.player=t,this.lives=t.lives,this.adjustFontSize(),this.hudGemsText=e.add.bitmapText(672,29,"carrier_command",this.player.gems.toString(),this.gemsFontSize),this.hudRedGemsText=e.add.bitmapText(572,29,"carrier_command",this.player.redGems.toString(),this.redGemsFontSize),this.addChild(this.hudGemsText),this.addChild(this.hudRedGemsText),this.fillLives(),e.add.existing(this)}update(){this.hudGemsText.setText(this.player.gems.toString()),this.hudRedGemsText.setText(this.player.redGems.toString()),this.adjustFontSize(),this.lives!=this.player.lives&&(this.lives=this.player.lives,this.fillLives())}fillLives(){this.hearts.forEach(function(e){e.destroy()}),this.hearts=[];for(var e=0;e<this.lives;e++)this.hearts.push(this.game.add.sprite(35*e+30,23,"heart2"));this.hearts.forEach(function(e){e.fixedToCamera=!0})}adjustFontSize(){this.player.gems>=100&&(this.gemsFontSize=12,this.hudGemsText.fontSize=12),this.player.redGems>=100&&(this.redGemsFontSize=12,this.hudRedGemsText.fontSize=12)}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i,a;i=[s,t,s(4),s(5),s(7),s(14),s(16),s(17),s(18)],void 0===(a=function(e,t,s,i,a,h,l,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(){this.game=new Phaser.Game(800,400,Phaser.CANVAS,"content",{preload:this.preload,create:this.create},!1,!1,Phaser.Physics.Arcade),this.game.state.add("Preloader",s.Preloader,!1),this.game.state.add("MainMenu",i.MainMenu,!1),this.game.state.add("Cutscene1",a.Cutscene1,!1),this.game.state.add("Level1",h.Level1,!1),this.game.state.add("Level2",l.Level2,!1),this.game.state.add("Level3",o.Level3,!1),this.game.state.add("Level4",n.Level4,!1)}preload(){this.game.time.advancedTiming=!0}create(){this.game.time.desiredFps=60,this.game.renderer.renderSession.roundPixels=!0,this.game.device.desktop?this.game.scale.pageAlignHorizontally=!0:this.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.physics.arcade.gravity.y=200,this.game.stage.backgroundColor="#aedecb",this.game.state.start("Preloader")}}t.Game=r,window.onload=(()=>{new r})}.apply(t,i))||(e.exports=a)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Preloader=class extends Phaser.State{constructor(){super(...arguments),this.ready=!1}preload(){this.game.load.spritesheet("dude","assets/sprites/dude_spritesheet.png?v=1",16,25,8),this.game.load.image("enemy1","assets/sprites/enemy.png?v=1"),this.game.load.spritesheet("bat","assets/sprites/bat_spritesheet.png?v=1",16,16,10),this.game.load.spritesheet("greygem","assets/sprites/itens/spr_coin_cin.png?v=1",16,16,4),this.game.load.spritesheet("redgem","assets/sprites/itens/spr_coin_ver.png?v=1",16,16,4),this.game.load.spritesheet("torch","assets/sprites/animated_torch.png?v=1",8,26,9),this.game.load.spritesheet("shield","assets/sprites/shield.png?v=1",16,17,6),this.game.load.spritesheet("platform","assets/sprites/platform.png?v=1",32,8,2),this.game.load.spritesheet("lever","assets/sprites/lever.png",16,16,2),this.game.load.image("heart","assets/sprites/itens/heart.png"),this.game.load.image("lumpofgrass","assets/sprites/lumpofgrass.png"),this.game.load.image("logo","assets/images/logo.png"),this.game.load.image("hud","assets/images/hud.png"),this.game.load.image("heart2","assets/images/heart.png"),this.game.load.bitmapFont("carrier_command","assets/fonts/carrier_command.png","assets/fonts/carrier_command.xml"),this.game.load.image("jungle_paralax5","assets/levels/jungle/plx-5.png?v=1"),this.game.load.image("jungle_paralax4","assets/levels/jungle/plx-4.png?v=1"),this.game.load.image("jungle_paralax3","assets/levels/jungle/plx-3.png?v=1"),this.game.load.image("jungle_paralax2","assets/levels/jungle/plx-2.png?v=1"),this.game.load.spritesheet("jungle_tileset","assets/levels/jungle/jungle_tileset.png",16,16),this.game.load.tilemap("tileMap_level1","assets/levels/jungle1.json?v=1",null,Phaser.Tilemap.TILED_JSON),this.game.load.tilemap("tileMap_level2","assets/levels/jungle2.json?v=1",null,Phaser.Tilemap.TILED_JSON),this.game.load.tilemap("tileMap_level3","assets/levels/jungle3.json?v=1",null,Phaser.Tilemap.TILED_JSON),this.game.load.tilemap("tileMap_level4","assets/levels/jungle4.json?v=1",null,Phaser.Tilemap.TILED_JSON),this.game.load.tilemap("cutscene1_tilemap","assets/cutscenes/cutscene1.json?v=1",null,Phaser.Tilemap.TILED_JSON),this.game.load.image("arrowkeys","assets/sprites/arrows.png"),this.game.load.image("shift","assets/sprites/shift.png"),this.game.load.spritesheet("buttonright","assets/buttons/btn_right.png",96,96),this.game.load.spritesheet("buttonleft","assets/buttons/btn_left.png",96,96),this.game.load.spritesheet("buttonfire","assets/buttons/btn_a.png",96,96),this.game.load.spritesheet("buttonjump","assets/buttons/btn_b.png",96,96),this.game.load.spritesheet("buttonglow","assets/buttons/btn_glow.png",144,144),this.game.load.spritesheet("buttonstart","assets/buttons/startbutton.png",48,16),this.game.load.spritesheet("buttonsound","assets/buttons/soundbutton.png",16,16),this.game.load.audio("coincatch","assets/sounds/sfx/coin-catch.mp3"),this.game.load.audio("damage","assets/sounds/sfx/damage.mp3"),this.game.load.audio("enemydamage","assets/sounds/sfx/enemy-damage.mp3"),this.game.load.audio("fall","assets/sounds/sfx/fall.mp3"),this.game.load.audio("jump","assets/sounds/sfx/jump.mp3"),this.game.load.audio("clickin","assets/sounds/sfx/click-in.mp3"),this.game.load.audio("clickout","assets/sounds/sfx/click-out.mp3"),this.game.load.audio("leverpull","assets/sounds/sfx/lever-pull.mp3"),this.game.load.audio("bgmusic","assets/sounds/music/bg.mp3")}create(){this.game.state.start("MainMenu")}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i,a;i=[s,t,s(6)],void 0===(a=function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MainMenu=class extends Phaser.State{constructor(){super(...arguments),this.paralaxSpeed=450,this.mute=!1}create(){this.createParallax(450),this.logo=this.add.sprite(this.game.camera.width/2,-300,"logo"),this.logo.anchor.setTo(.5,.5),this.logo.tint=1415984,this.add.tween(this.logo).to({y:120},1e3,Phaser.Easing.Elastic.Out,!0,1e3),this.startButton=this.game.add.button(this.game.camera.width/2-72,275,"buttonstart",this.fadeOut,this,0,0,1,0),this.startButton.scale.setTo(3),this.startButton.alpha=0,this.add.tween(this.startButton).to({alpha:1},1e3,"Linear",!0),this.soundButton=this.game.add.button(this.game.camera.width/2-this.game.camera.width/2.5,350,"buttonsound",this.toggleMusic,this),this.soundButton.scale.setTo(2),this.soundButton.onInputUp.add(this.btnSoundUp,this),this.soundButton.onInputDown.add(this.btnSoundDown,this),this.soundButton.alpha=0,this.add.tween(this.soundButton).to({alpha:1},1e3,"Linear",!0),this.soundManager=new s.SoundManager(this.game)}update(){this.paralax5.tilePosition.x-=this.paralaxSpeed/1e3,this.paralax4.tilePosition.x-=this.paralaxSpeed/1875,this.paralax3.tilePosition.x-=this.paralaxSpeed/6e3,this.paralax2.tilePosition.x-=this.paralaxSpeed/1e4}fadeOut(){this.game.camera.fade(0,500),this.add.tween(this.logo).to({y:800},2e3,Phaser.Easing.Linear.None,!0),this.game.camera.onFadeComplete.add(this.startGame,this)}btnSoundDown(){this.soundManager.musicMuted?this.soundButton.frame=3:this.soundButton.frame=1}btnSoundUp(){this.soundManager.musicMuted?this.soundButton.frame=2:this.soundButton.frame=0}toggleMusic(){this.soundManager.musicMuted?(this.soundManager.music.volume=1,this.soundManager.musicMuted=!1):(this.soundManager.music.volume=0,this.soundManager.musicMuted=!0)}createParallax(e){this.paralax2=this.game.add.tileSprite(0,this.game.world.height-e,this.game.world.width+50,this.game.world.height+100,"jungle_paralax2"),this.paralax2.tileScale.x=2,this.paralax2.tileScale.y=2,this.paralax3=this.game.add.tileSprite(0,this.game.world.height-e-5,this.game.world.width+50,this.game.world.height+100,"jungle_paralax3"),this.paralax3.tileScale.x=2,this.paralax3.tileScale.y=2,this.paralax4=this.game.add.tileSprite(0,this.game.world.height-e-20,this.game.world.width+50,this.game.world.height+100,"jungle_paralax4"),this.paralax4.tileScale.x=2,this.paralax4.tileScale.y=2,this.paralax5=this.game.add.tileSprite(0,this.game.world.height-e-30,this.game.world.width+50,this.game.world.height+100,"jungle_paralax5"),this.paralax5.tileScale.x=2,this.paralax5.tileScale.y=2,this.paralax5.checkWorldBounds=!0}startGame(){this.game.camera.onFadeComplete.removeAll(),this.game.state.start("Cutscene1",!0,!1,this.soundManager,this)}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SoundManager=class{constructor(e){this.loaded=!1,this.musicMuted=!1,this.game=e,this.gemcatch=this.game.add.audio("coincatch"),this.damage=this.game.add.audio("damage"),this.enemydamage=this.game.add.audio("enemydamage"),this.fall=this.game.add.audio("fall"),this.jump=this.game.add.audio("jump"),this.clickin=this.game.add.audio("clickin"),this.clickout=this.game.add.audio("clickout"),this.leverpull=this.game.add.audio("leverpull"),this.music=this.game.add.audio("bgmusic"),this.game.sound.setDecodedCallback([this.gemcatch,this.damage,this.enemydamage,this.fall,this.jump,this.music],this.loadComplete,this)}loadComplete(){this.music.loop=!0,this.music.play(),this.loaded=!0}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i,a;i=[s,t,s(0),s(13)],void 0===(a=function(e,t,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Cutscene1=class extends Phaser.State{constructor(){super(...arguments),this.skip=!1,this.index=0,this.narratorPhrase="",this.narratorLines=[" ","This is Dude"," ","he has the most generic name ever"," ","yet he is a very happy dude","he lives in a land ruled by a king","and his daughter, the princess... Princess."," ","Yes, the name of the princess is Princess"," ","One day..."," ","Yes she was kidnapped","By an evil goblin!","Immeditially, Dude presented himself to rescue her","and save the kingdom once and for all!"," "],this.dudePhrase="",this.dudeLines=[" "," ","sup"," ","Thanks"," "," "," ","wtf, her name is 'Princess'?!"," ","jesus, you suck at names"," ","Let me guess, she was kidnapped"," "," "," "," ","Let's do this!"]}init(e,t){this.soundManager=e}create(){this.levelBase=new i.LevelBase,this.levelManager=new s.LevelManager(this.game,this.levelBase,"Level1",this.soundManager),this.input.onDown.addOnce(this.fadeOut,this),this.levelManager.createMap("cutscene1_tilemap"),this.levelManager.createParallax(500),this.game.world.bringToTop(this.levelManager.level.back),this.game.world.bringToTop(this.levelManager.level.walls),this.dudeSprite=this.game.add.sprite(230,250,"dude"),this.dudeSprite.scale.setTo(2,2),this.dudeSprite.visible=!1,this.nextLine()}updateLine(){this.dudeSprite.frame=0,this.narratorPhrase=this.narratorLines[this.index],this.dudePhrase=this.dudeLines[this.index],2==this.index&&(this.soundManager.jump.play(),this.dudeSprite.visible=!0),4!=this.index&&8!=this.index&&9!=this.index||(this.dudeSprite.frame=4),10==this.index&&(this.soundManager.damage.play(),this.dudeSprite.frame=6),this.game.time.events.add(2.2*Phaser.Timer.SECOND,this.nextLine,this)}nextLine(){this.game.time.events.removeAll(),this.index++,this.index<this.narratorLines.length?this.game.time.events.repeat(80,this.narratorLines[this.index].length+1,this.updateLine,this):this.fadeOut()}fadeOut(){this.game.camera.fade(0,500),this.game.camera.onFadeComplete.add(this.startGame,this)}render(){this.game.debug.text(this.narratorPhrase,290,370),this.game.debug.text(this.dudePhrase,300,270),this.game.debug.text("Click to skip",350,20)}startGame(){this.index=0,this.game.camera.onFadeComplete.removeAll(),this.game.state.start("Level1",!0,!1,this.soundManager,this.levelBase,this.levelManager,this)}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Enemy=class extends Phaser.Sprite{constructor(e,t,s,i,a){super(e,t,s,"enemy1",0),this.localGravity=200,this.speed=a,this.size=1.8,this.scale.setTo(this.size,this.size),this.anchor.setTo(.5,0),this.game.physics.arcade.enableBody(this),this.body.setSize(23,19,0,0),this.body.collideWorldBounds=!0,this.body.gravity.y=i,this.movingRight=!0,e.add.existing(this)}update(){this.body.velocity.x=0,this.movingRight?this.moveRight():this.movingLeft&&this.moveLeft(),this.body.blocked.right&&(this.movingRight=!1,this.movingLeft=!0),this.body.blocked.left&&(this.movingRight=!0,this.movingLeft=!1)}moveRight(){this.body.velocity.x=this.speed,this.scale.x==-this.size&&(this.scale.x=this.size)}moveLeft(){this.body.velocity.x=-this.speed,this.scale.x==this.size&&(this.scale.x=-this.size)}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Bat=class extends Phaser.Sprite{constructor(e,t,s,i,a,h){super(e,t,s,"bat",0),this.speed=125,this.speed=a,this.player=h,this.fieldOfView=200,this.size=2,this.scale.setTo(this.size,this.size),this.anchor.setTo(.5,0),this.wakeAnim=this.animations.add("wake",[0,1,2,3,4],8,!1),this.flyAnim=this.animations.add("fly",[5,6,7,8,9],8,!0),this.wakeAnim.onComplete.add(this.startFly,this),this.isSleeping=!0,this.isChasing=!1,this.game.physics.arcade.enableBody(this),this.body.setSize(16,16,0,0),this.body.collideWorldBounds=!0,this.body.gravity.y=-i,this.movingRight=!0,e.add.existing(this)}update(){this.body.velocity.x=0,this.isSleeping&&this.checkIfPlayerIsInRange()&&this.wake(),this.isChasing&&this.chase()}wake(){this.wakeAnim.play(),this.fieldOfView+=75,this.isSleeping=!1}startFly(){this.flyAnim.play(),this.isChasing=!0}chase(){this.checkIfPlayerIsInRange()?this.game.physics.arcade.moveToObject(this,this.player,this.speed):(this.body.velocity.x=0,this.body.velocity.y=0),this.body.velocity.x<0?this.scale.x==this.size&&(this.scale.x=-this.size):this.scale.x==-this.size&&(this.scale.x=this.size)}checkIfPlayerIsInRange(){return this.player.position.x>this.position.x-this.fieldOfView&&this.player.position.x<this.position.x+this.fieldOfView&&this.player.position.y<this.position.y+this.fieldOfView}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Shield=class extends Phaser.Sprite{constructor(e,t,s,i){super(e,t,s,"shield",0),this.name="shield",this.game=e,this.size=2,this.scale.setTo(this.size,this.size),this.frame=3,this.animations.add("shine",[0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,4,3,2,1,0],15,!0),this.animations.play("shine"),this.anchor.setTo(.5,0),this.game.physics.arcade.enableBody(this),this.body.setSize(16,12,0,0),this.body.collideWorldBounds=!0,this.body.gravity.y=i,e.add.existing(this)}update(){}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Platform=class extends Phaser.Sprite{constructor(e,t,s,i,a){super(e,t,s,"platform",0),this.game=e,this.initialX=t,this.active=!1,this.size=2,this.scale.setTo(this.size,this.size),this.anchor.setTo(.5,0),this.game.physics.arcade.enableBody(this),this.body.setSize(32,3,0,0),this.body.collideWorldBounds=!0,this.body.gravity.y=i,this.body.bounce.y=0,this.soundManager=a,this.canPlaySound=!0,e.add.existing(this)}update(){this.body.touching.none?this.deactivate():this.activate()}activate(){this.active=!0,this.frame=1,this.canPlaySound&&(this.soundManager.clickin.play(),this.canPlaySound=!1)}deactivate(){this.active=!1,this.frame=0,this.canPlaySound||(this.soundManager.clickout.play(),this.canPlaySound=!0)}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Lever=class extends Phaser.Sprite{constructor(e,t,s,i,a){super(e,t,s,"lever",0),this.game=e,this.size=2,this.scale.setTo(this.size,this.size),this.anchor.setTo(.5,0),this.game.physics.arcade.enableBody(this),this.body.setSize(16,12,0,0),this.body.collideWorldBounds=!0,this.body.gravity.y=i,this.body.bounce.y=0,this.soundManager=a,e.add.existing(this)}update(){this.wasTouching=!this.body.touching.none}toggle(){this.active&&!this.wasTouching?this.deactivate():this.active||this.wasTouching||this.activate()}activate(){this.active=!0,this.frame=1,this.soundManager.leverpull.play()}deactivate(){this.active=!1,this.frame=0,this.soundManager.leverpull.play()}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LevelBase=class{constructor(){this.bats=[],this.enemies=[],this.platforms=[],this.levers=[],this.items=[],this.enemySpeed=100}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i,a;i=[s,t,s(1),s(0),s(2)],void 0===(a=function(e,t,s,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Level1=class extends Phaser.State{init(e,t,s,i){this.soundManager=e,this.levelBase=t,t=null}create(){this.soundManager.musicMuted||(this.soundManager.music.volume=.1),this.levelManager=new i.LevelManager(this.game,this.levelBase,"Level2",this.soundManager),this.levelManager.createBasicLevelStuff("tileMap_level1"),this.arrowKeysSprite=this.game.add.sprite(180,265,"arrowkeys"),this.arrowKeysSprite.scale.setTo(3),this.arrowKeysSprite.alpha=0,this.shiftSprite=this.game.add.sprite(1650,265,"shift"),this.shiftSprite.scale.setTo(2.5),this.shiftSprite.alpha=0,this.glowSpriteB=this.game.add.sprite(180,265,"buttonglow"),this.glowSpriteB.anchor.setTo(.5,.5),this.glowSpriteB.alpha=0,this.glowSpriteA=this.game.add.sprite(180,265,"buttonglow"),this.glowSpriteA.anchor.setTo(.5,.5),this.glowSpriteA.alpha=0,this.player=new s.Player(this.game,10,300,150,this.game.physics.arcade.gravity.y,0,0,3,this.soundManager),this.game.camera.follow(this.player),this.game.device.desktop||(this.glowSpriteB.position.set(this.player.controller.buttonjump.x,this.player.controller.buttonjump.y),this.glowSpriteA.position.set(this.player.controller.buttonfire.x,this.player.controller.buttonfire.y),this.glowSpriteB.fixedToCamera=!0,this.glowSpriteA.fixedToCamera=!0),this.hud=new a.Hud(this.game,this.player),this.game.world.bringToTop(this.hud)}update(){this.game.device.desktop?this.showDesktopButtons():this.showMobileButtons(),this.levelManager.updateBasicLevelStuff(this.player)}showDesktopButtons(){this.checkProximityFirstTutorial()?this.game.add.tween(this.arrowKeysSprite).to({alpha:1},300,Phaser.Easing.Linear.None,!0,0,0,!0):this.game.add.tween(this.arrowKeysSprite).to({alpha:0},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.checkProximitySecondTutorial()?this.game.add.tween(this.shiftSprite).to({alpha:1},300,Phaser.Easing.Linear.None,!0,0,0,!0):this.game.add.tween(this.shiftSprite).to({alpha:0},300,Phaser.Easing.Linear.None,!0,0,0,!0)}showMobileButtons(){this.checkProximityFirstTutorial()?(this.game.add.tween(this.player.controller.buttonjump.scale).to({x:1.2,y:1.2},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteB).to({alpha:1},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteB.scale).to({x:1.2,y:1.2},300,Phaser.Easing.Linear.None,!0,0,0,!0)):(this.game.add.tween(this.player.controller.buttonjump.scale).to({x:1,y:1},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteB).to({alpha:0},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteB.scale).to({x:1,y:1},300,Phaser.Easing.Linear.None,!0,0,0,!0)),this.checkProximitySecondTutorial()?(this.game.add.tween(this.player.controller.buttonfire.scale).to({x:1.2,y:1.2},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteA).to({alpha:1},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteA.scale).to({x:1.2,y:1.2},300,Phaser.Easing.Linear.None,!0,0,0,!0)):(this.game.add.tween(this.player.controller.buttonfire.scale).to({x:1,y:1},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteA).to({alpha:0},300,Phaser.Easing.Linear.None,!0,0,0,!0),this.game.add.tween(this.glowSpriteA.scale).to({x:1,y:1},300,Phaser.Easing.Linear.None,!0,0,0,!0))}checkProximityFirstTutorial(){return this.player.x>this.arrowKeysSprite.x-120&&this.player.x<this.arrowKeysSprite.x+100}checkProximitySecondTutorial(){return this.player.x>this.shiftSprite.x-100&&this.player.x<this.shiftSprite.x+170}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i;void 0===(i=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ControllerManager=class{constructor(e,t){this.game=t,this.game.device.desktop||this.getVirtualButtonsInput(e)}getKeyboardInput(e){this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)?e.running=!0:e.running=!1,this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)?e.movingLeft=!0:e.movingLeft=!1,this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)?e.movingRight=!0:e.movingRight=!1,this.game.input.keyboard.isDown(Phaser.Keyboard.UP)?(e.pressingUp=!0,e.body.blocked.down&&e.jump()):e.pressingUp=!1,this.game.input.keyboard.isDown(Phaser.Keyboard.UP)||e.body.blocked.down||e.fall()}getVirtualButtonsInput(e){this.buttonjump=this.game.add.button(635,355,"buttonjump",null,this,0,1,0,1),this.buttonjump.fixedToCamera=!0,this.buttonjump.events.onInputDown.add(function(){e.pressingUp=!0,e.body.blocked.down&&e.jump()}),this.buttonjump.events.onInputUp.add(function(){e.pressingUp=!1,e.body.blocked.down||e.fall()}),this.buttonjump.anchor.setTo(.5,.5),this.buttonfire=this.game.add.button(748,355,"buttonfire",null,this,0,1,0,1),this.buttonfire.fixedToCamera=!0,this.buttonfire.events.onInputDown.add(function(){e.running=!e.running,e.running?this.buttonfire.setFrames(1,0,1,0):this.buttonfire.setFrames(0,1,0,1)}.bind(this)),this.buttonfire.anchor.setTo(.5,.5),this.buttonleft=this.game.add.button(0,310,"buttonleft",null,this,0,1,0,1),this.buttonleft.fixedToCamera=!0,this.buttonleft.events.onInputDown.add(function(){e.movingLeft=!0}),this.buttonleft.events.onInputUp.add(function(){e.movingLeft=!1}),this.buttonright=this.game.add.button(160,310,"buttonright",null,this,0,1,0,1),this.buttonright.fixedToCamera=!0,this.buttonright.events.onInputDown.add(function(){e.movingRight=!0}),this.buttonright.events.onInputUp.add(function(){e.movingRight=!1})}}}.apply(t,[s,t]))||(e.exports=i)},function(e,t,s){var i,a;i=[s,t,s(1),s(0),s(2)],void 0===(a=function(e,t,s,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Level2=class extends Phaser.State{init(e,t,s,i){this.lastPlayer=e,this.soundManager=t,this.levelBase=s,e.destroy(),s=null}create(){this.levelManager=new i.LevelManager(this.game,this.levelBase,"Level3",this.soundManager),this.levelManager.createBasicLevelStuff("tileMap_level2"),this.player=new s.Player(this.game,10,300,150,this.game.physics.arcade.gravity.y,this.lastPlayer.gems,this.lastPlayer.redGems,this.lastPlayer.lives,this.soundManager),this.game.camera.follow(this.player),this.hud=new a.Hud(this.game,this.player),this.game.world.bringToTop(this.hud)}update(){this.levelManager.updateBasicLevelStuff(this.player)}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i,a;i=[s,t,s(1),s(0),s(2)],void 0===(a=function(e,t,s,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Level3=class extends Phaser.State{init(e,t,s,i){this.lastPlayer=e,this.soundManager=t,this.levelBase=s,e.destroy(),s=null}create(){this.levelManager=new i.LevelManager(this.game,this.levelBase,"Level4",this.soundManager),this.levelManager.createMap("tileMap_level3"),this.game.world.bringToTop(this.levelManager.level.back),this.game.world.bringToTop(this.levelManager.level.walls),this.levelManager.createGreenEnemies(),this.levelManager.createItems(),this.levelManager.createGems(),this.levelManager.createRedGems(),this.player=new s.Player(this.game,80,50,150,this.game.physics.arcade.gravity.y,this.lastPlayer.gems,this.lastPlayer.redGems,this.lastPlayer.lives,this.soundManager),this.game.camera.follow(this.player),this.levelManager.createBats(this.player),this.shadowTexture=this.game.add.bitmapData(this.game.width+100,this.game.height+100),this.lightSprite=this.game.add.image(this.game.camera.x,this.game.camera.y,this.shadowTexture),this.lightSprite.blendMode=Phaser.blendModes.MULTIPLY,this.hud=new a.Hud(this.game,this.player),this.game.world.bringToTop(this.hud)}update(){this.updateShadowTexture(),this.levelManager.updatePlayer(this.player),this.levelManager.updateRedGemsInteraction(this.player),this.levelManager.updateGemsInteraction(this.player),this.levelManager.updateEnemiesInteraction(this.player),this.levelManager.updateItemsInteraction(this.player),this.levelManager.updateBatsInteraction(this.player)}updateShadowTexture(){this.lightSprite.reset(this.game.camera.x,this.game.camera.y),this.shadowTexture.clear(),this.shadowTexture.context.fillStyle="rgb(10, 10, 10, 0.75)",this.shadowTexture.context.fillRect(-25,-25,this.game.width+100,this.game.height+100);var e=150+this.game.rnd.integerInRange(1,20),t=this.player.position.x-this.game.camera.x,s=this.player.position.y-this.game.camera.y,i=this.shadowTexture.context.createRadialGradient(t,s,75,t,s,e);i.addColorStop(0,"rgba(255, 255, 255, 1.0)"),i.addColorStop(1,"rgba(255, 255, 255, 0.0)"),this.shadowTexture.context.beginPath(),this.shadowTexture.context.fillStyle=i,this.shadowTexture.context.arc(t,s,e,0,2*Math.PI,!1),this.shadowTexture.context.fill(),this.shadowTexture.dirty=!0}}}.apply(t,i))||(e.exports=a)},function(e,t,s){var i,a;i=[s,t,s(1),s(0),s(2)],void 0===(a=function(e,t,s,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Level4=class extends Phaser.State{init(e,t,s,i){this.lastPlayer=e,this.soundManager=t,this.levelBase=s,e.destroy(),s=null}create(){this.levelManager=new i.LevelManager(this.game,this.levelBase,"Level5",this.soundManager),this.levelManager.createBasicLevelStuff("tileMap_level4"),this.player=new s.Player(this.game,100,200,150,this.game.physics.arcade.gravity.y,this.lastPlayer.gems,this.lastPlayer.redGems,this.lastPlayer.lives,this.soundManager),this.game.camera.follow(this.player),this.hud=new a.Hud(this.game,this.player),this.game.world.bringToTop(this.hud)}update(){this.levelManager.updateBasicLevelStuff(this.player)}}}.apply(t,i))||(e.exports=a)}]);
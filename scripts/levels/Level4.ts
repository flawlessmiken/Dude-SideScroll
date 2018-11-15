﻿import { Player } from "../Player";
import { SoundManager } from "../SoundManager";
import { LevelManager } from "./LevelManager";
import { LevelBase } from "./LevelBase";
import { Hud } from "../Hud";

export class Level4 extends Phaser.State {

    music: Phaser.Sound;
    player: Player;
    lastPlayer: Player;
    hud: Hud;
    levelManager: LevelManager;
    levelBase: LevelBase;
    soundManager: SoundManager;

    init(player: Player, soundManager: SoundManager,
        previousLevelBase: LevelBase, previousLevelManager: LevelManager) {
        this.lastPlayer = player;
        this.soundManager = soundManager;
        this.levelBase = previousLevelBase;
        player.destroy();

        previousLevelBase = null;
        previousLevelManager = null;
    }

    create() {
        this.levelManager = new LevelManager(this.game, this.levelBase, 'Level5', this.soundManager);

        // ---- level genesis

        this.levelManager.createBasicLevelStuff('tileMap_level4');

        // ---- player
        this.player = new Player(this.game, 100, 200, 150, this.game.physics.arcade.gravity.y, this.lastPlayer.gems, this.lastPlayer.lives, this.soundManager);
        this.game.camera.follow(this.player);

        // ---- hud and game

        this.hud = new Hud(this.game, this.player);
        this.game.world.bringToTop(this.hud);
    }

    update() {
        if (this.player.lives < 0)
            this.game.state.start('MainMenu');
            
        this.game.physics.arcade.collide(this.player, this.levelBase.walls);
        this.levelManager.updateBasicLevelStuff(this.player);
    }

    render() {
        this.game.debug.text(": " + this.player.gems.toString(), 662, 40);
    }

}
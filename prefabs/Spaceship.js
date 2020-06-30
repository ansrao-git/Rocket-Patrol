// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this); // adds the rocket to the exisitng scene (existing, displayList, updateList)
      this.points = pointValue; // stores pointValue
    }

    update(){
        //move spaceship to the left
        this.x -= game.settings.spaceshipSpeed;
        // wraparound from the left to the right edge
        if(this.x <=0-this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}
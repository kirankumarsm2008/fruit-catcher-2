class Form{
  constructor(){
     this.input = createInput("").attribute("placeholder", "Enter Your Name Here...");
     this.titleImg = createImg("./images/jungle.jpg", "game bg");
     this.button = createButton('Play');
     this.greeting = createElement('h3');
     this.title = createElement('h3');
     this.reset = createButton('Reset');
  }
  hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
  }
  display() {
      this.title.html("FRUIT CATCHER");
      this.title.style('font-size', '70px');
      this.title.style('color', 'skyblue');
      this.input.position(550,400);
      this.input.class("customInput");
      this.button.position(560,500);
      this.button.class("customButton");
      this.reset.position(width/2 + 50,height/2 - 300)
      this,this.reset.class("resetButton")
      this.titleImg.class("titleimg")
      

      this.button.mousePressed(() => {
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount += 1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          var message = `
          Hello ${this.input.value()}
          </br>searching for a tough player to join...`;
          this.greeting.html(message);
          this.greeting.position(400,250);
          this.greeting.style('color', 'white');
          this.greeting.style('font-size', '50px');
      });

      this.reset.mousePressed(() => {
           
        database.ref("/").set({
            //set the intial value for carsAtEnd,playerCount,gameState,players
            playerAtEnd: 0,
            playerCount: 0,
            gameState: 0,
            players: {}
          });
          //reload() the window
          window.location.reload();
        });  

  }
}
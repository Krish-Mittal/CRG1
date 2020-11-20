class form
{
    constructor()
    {

    }
    display()
    {
      var title=createElement('h1');
      title.html("CAR RACING GAME");
      title.position(130,0)       
      var input = createInput("name");
      var button= createButton('Play');
      var greet=createElement('h3');
      input.position(130,160);
      button.position(250,200);
      button.mousePressed(function(){
          input.hide();
          button.hide();
          var name=input.value();
          playercount+=1;
          player1.update(name)
          player1.updatecount(playercount)
          greet.html("hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+name)
          greet.position(130,160);
        })
    }
}
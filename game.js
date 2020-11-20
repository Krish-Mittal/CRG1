class game
{
   constructor()
   {

   }

   getState()
   {
    var rg= database.ref('gamestate');
    rg.on("value",function(data)
    {
      gamestate=data.val();
    })
   }
   update(state)
   {
       database.ref('/').update({
           gamestate:state
       })
   }
   start()
   {
      if(gamestate==0)
      {
          form1=new form1();
          form1.display();
          player1=new player();
          player1.getCount();
          
      }
   }
}
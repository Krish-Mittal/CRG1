var form1,game1,player1,database;

function setup(){
    createCanvas(500,500);

    database=firebase.database();
    
}

function draw(){
    background("white");
    
    drawSprites();
}


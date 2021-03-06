var ball;
var myball, database,position;


function setup(){
    database = firebase.database()

    createCanvas(500,500);
    myball = createSprite(250,250,10,10);
    myball.shapeColor = "red";

    var myballPosition = database.ref("ball/position")
    myballPosition.on("value", readposition, showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}



function readposition(data){
    position = data.val()
    myball.x = position.x
    myball.y = position.y
}

function showerror(){
    console.log("error has occured")
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:position.x + x,
        y:position.y + y
    })

    
}
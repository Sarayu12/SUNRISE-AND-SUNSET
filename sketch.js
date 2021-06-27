const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png"
var hour
function preload() {
    
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   
}   

   

    // write code to display time in correct format here






    

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") 
    var responseJSON = await response.json()
    console.log(responseJSON) 
    var datetime = responseJSON.datetime
    var  hour = datetime.slice (11,13)
    console.log(hour)
     
    if (hour>04 && hour<=06){
        bg = "sunrise1.png";
    }else if (hour>=06 && hour<=08){
        bg = "sunrise2.png"

    }else if (hour>=08 && hour<=10){
        bg ="sunrise3.png"
    }else if (hour>=10 && hour<=12){
        bg = "sunrise4.png"
    }else if (hour>=12 && hour<=14){
        bg = "sunrise5.png"
    }else if (hour>=14 && hour<=16){
        bg = "sunrise6.png"
    }else if (hour>=16 && hour<=18){
        bg = "sunrise7.png"
    }else if (hour>=18 && hour<=20){
        bg = "sunrise8.png"
    }else if (hour>=21 && hour<=22){
        bg = "sunrise9.png"
    }else if(hour>=23 && hour == 0){
        bg = "sunset10.png"
    }else if (hour ==0 && hour<=03){
        bg = "sunset11.png"
    }
    backgroundImg = loadImage(bg)
    console.log (backgroundImg)
}


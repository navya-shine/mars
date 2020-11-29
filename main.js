cavas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_img="mars.jpg";
rover_img="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover.width,rover.height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        console.log("up");
        up()
    }
    if(keyPressed=='39'){
        console.log("right");
        right()
    }
    if(keyPressed=='37'){
        console.log("left");
        left()
    }
    if(keyPressed=='40'){
        console.log("down");
        down()
    }
}
function left(){
       if(rover_x >= 0){
           rover_x -= 10;
           uploadBackground();
           uploadrover();
           console.log("when left arrow is pressed, x="+ rover_x + "y=" + rover_y);
       }       
}
function right(){
    if(rover_x <= 600){
        rover_x += 10;
        uploadBackground();
        uploadrover();
        console.log("when right arrow is pressed, x="+ rover_x + "y=" + rover_y);
    }         
}
function top(){
    if(rover_y >= 0){
        rover_y -= 10;
        uploadBackground();
        uploadrover();
        console.log("when top arrow is pressed, x="+ rover_x + "y=" + rover_y);
    }        
}
function down(){
    if(rover_y >= 800){
        rover_y -= 10;
        uploadBackground();
        uploadrover();
        console.log("when down arrow is pressed, x="+ rover_x + "y=" + rover_y);
    }        
}
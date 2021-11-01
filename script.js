leftWrist = 0;
rightWrist = 0;
difference = 0;
noseX = 0;
noseY = 0;
function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(1080, 200);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(10)

    pose_net = ml5.poseNet(video, modelLoaded);
    pose_net.on('pose', gotPoses);
}

function draw(){
    background("grey");
    textSize(difference);
    fill("black");
    text("BTS!", noseX, noseY);
}

function modelLoaded(){
    console.log("pose net model is loaded");
}

function gotPoses(results){
    if(results.length >= 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;

        difference = floor(leftWrist-rightWrist);

        document.getElementById("font_size").innerHTML = "Font Size of the text: " + difference + "px";
    }
}
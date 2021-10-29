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

function modelLoaded(){
    console.log("pose net model is loaded");
}

function gotPoses(results){
    if(results.length >= 0){
        console.log(results);
    }
}
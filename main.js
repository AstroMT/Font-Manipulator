var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup() {
    canvas = createCanvas(350,350);
    canvas.position(560, 175);
    video = createCapture(VIDEO);
    video.size(350, 350);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("The ml5 model is loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
 
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left wrist X coordinate is " + leftWristX + " and the right wrist X coordinate is " + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("lightgrey");

    textSize(difference);
    fill("pink");
    text("Medha", 50, 200);

    document.getElementById("text-font-size").innerHTML = difference;
}

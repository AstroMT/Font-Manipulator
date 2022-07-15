function preload() {};

function setup() {
    canvas = createCanvas(350,350);
    canvas.position(560, 175);
    canvas.hide();
    video = createCapture(VIDEO);
    video.size(350, 350);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("The ml5 model is loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {};
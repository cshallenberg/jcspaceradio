function PlayVideo(videoobj) {
    var thisvideo=document.getElementById(videoobj);
    thisvideo.play();
}

function StopVideo(videoobj) {
    var thisvideo=document.getElementById(videoobj);
    thisvideo.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
}
lefteyeX=0;
lefteyeY=0;
reyex=0;
reyey=0;
function preload(){
filter_image=loadImage("Matrixgoggles(2).png")
}
function setup(){
  canvas=createCanvas(400,400)
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,400)
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotResult);
}
function modelLoaded(){
  console.log("model ready!")
}
function gotResult(results){
  console.log(results)
  if(results.length>0){
reyex=results[0].pose.rightEye.x-65;
reyey=results[0].pose.rightEye.y-10;

  lefteyeX=results[0].pose.leftEye.x+10;
  lefteyeY=results[0].pose.leftEye.y-10

  
  }
}
function draw(){
image(video,0,0,400,400);
width=lefteyeX-reyex;
//image(filter_image,lefteyeX,lefteyeY,width,90);
image(filter_image,reyex,reyey-20,width+50,60);
//image(filter_image,lefteyeX,lefteyeY,20,20);
}
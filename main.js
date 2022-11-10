function preload()
{
}
function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("Model is loaded!");

}

function draw()
{
    image(video, 0, 0, 350, 350);
}
function take_snapshot()
{
    save('my_filter.png');
}
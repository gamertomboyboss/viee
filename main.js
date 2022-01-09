song = "";

function setup()
{
    canvas = createCanvas(900,600);
    canvas.center();

    video = createapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("abc.mp3")
}

function play()
{
    song.play();
}
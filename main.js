Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function Take_Snapshot()
{
Webcam.snap(function(data_URI)
{
    document.getElementById("result").innerHTML = "<img id='captured_image' src='"+ data_URI +"'>";
});

}

console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZYQOxh-5n/model.json",modelloaded)

function modelloaded()
{
    console.log("modelloaded");
}


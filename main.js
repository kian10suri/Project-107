function startClassificattion()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zJ9QbmTvk/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
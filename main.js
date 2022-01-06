function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kPDyVbq4N/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
dog=0;
cat=0;
cow=0;
lion=0;
function gotResults(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+results[0].confidence.toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   
        img_cow=document.getElementById('200.gif');
        img_cat=document.getElementById('giphy.gif');
        img_lion=document.getElementById('lion-king-lion.gif');
        img_dog=document.getElementById('funny-animals-dog.gif');

        if (results[0].label=="Barking") {
            document.getElementById("display").src='dog.jpg';
            dog=dog+1;
        } else if (results[0].label=="Mooing") {
            document.getElementById("display").src='download.jpg';
            cow=cow+1;
        } else if (results[0].label=="Meowing") {
            document.getElementById("display").src='cta.jpg';
            cat=cat+1;
        } else {
            document.getElementById("display").src='lion.jpg';
            lion=lion+1;
        }     
    }
}
function preload() {
}
function setup() {
    createCanvas(720, 400);
    background(0);
  
    
    translate(580, 200);
    noStroke();

    for (let i = 0; i < 10; i ++) {
      ellipse(200, 30, 40, 80);
      rotate(PI/5);
    }

    translate(10, 100);
    noStroke();

    for (let i = 0; i < 10; i ++) {
      ellipse(150, 30, 10, 80);
      rotate(PI/5);
    }


    


    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
  }
  


function draw(){
    image(video,180,50,400,300);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
    
    toSpeak = "Happy          Birthday           To           You";


    speak();
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;

}


function speak(){
  var synth = window.speechSynthesis;

  speak_data = toSpeak;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

}

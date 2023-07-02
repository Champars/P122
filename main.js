x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
to_number = 0;
speak_data = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "started drawing";
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "sorry could not understand";
    }

}

function preload() {
    apple = loadImage(apple);
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(700, 500);
}

function draw() {
    if (draw_apple == "set") {
        for (let index = 1; index <= to_number; index++) {
            x = Math.floor(Math, random() * 600);
            y = Math.floor(Math, random() * 300);
            image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
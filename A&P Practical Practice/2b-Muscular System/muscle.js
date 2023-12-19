let displayImg = document.getElementById("display-img");
let btn = document.getElementsByClassName("musc-btn");
let label = document.getElementsByClassName("num");
let questionSpace = document.getElementById("question-space");
let answerSpace = document.getElementById("answer-space");
let submit = document.getElementById("submit");

let start = 0;

let images = [
  "2b-Images/ant-arm.png",
  "2b-Images/ant-delt.png",
  "2b-Images/pst-arm.png",
  "2b-Images/int-wrist.png",

  "2b-Images/ant-leg.png",
  "2b-Images/int-leg.png",
  "2b-Images/in-leg.png",
  "2b-Images/int-calf.png",
  "2b-Images/out-leg.png",
];



//Questions and answers
let questionLabels = [];
for (let i = 0; i < label.length; i++) {
  questionLabels[i] = label[i].innerText;
}
let answer = [
  "Biceps Brachii",
  "Brachioradialis",
  "Triceps Brachii",
  "Extensor Digitorum",
  "Deltoid",
  "Supraspinatus",
  "Infraspinatus",
  "Subscapularis",
  "Biceps Brachii",
  "Flexor Retinaculum",
  "Flexor digitorum superficialis",
  "Flexor carpi ulnaris",
  "Flexor carpi radialis",
  "Patellar Tendon",
  "Illiotibial tract",
  "Vastus Lateralis",
  "Rectus femoris",
  "Tibialis Anterior",
  "Extensor digitorum longus",
  "Quadriceps tendon",
  "Tensor fascia latae",
  "Vastus intermedius",
  "Vastus medialis",
  "Sartorius",
  "Gastrocnemius",
  "Soleus",
  "Gluteus maximus",
  "Gluteus medius",
  "Achillies tendon",
  "Biceps femorus",
  "Biceps femorus",
  "Peroneus longus",
  "Gesstrocnemius",
];
setAnswer(questionLabels, start);
submit.onclick = function() {
  if(checkAnswer(answerSpace.value, start)) {
    start++;
    setAnswer(questionLabels, start)
  }
}

//Label Buttons
for (let i = 0; i < label.length; i++) {
  //Question select function
  label[i].onclick = function () {
    if (!label[i].innerText.includes("✅")) {
      setAnswer(questionLabels, i)

      //Submission function
      submit.onclick = function () {
        if (checkAnswer(answerSpace.value, i)) {
          i++;
          setAnswer(questionLabels, i)
        }
      };
    }
  };
}

let tags = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];

//Scene Changer
activeScene(btn, tags, images, 0);

for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    activeScene(btn, tags, images, i);
  };
}

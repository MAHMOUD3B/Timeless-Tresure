let questions = [
  {
    quiz: {
      img: "",
      text: "اين كان يتم تحنيط الطيور ؟",
    },
    choise: {
      names: [
        "فرن اسفل الأرض داخل السراديب",
        "فرن فى الغرفة اليمنى فى بادئ السراديب",
        "لا يوجد غرفة للتحنيط فى منطقة السراديب",
        "غرفة فى نهاية السراديب حتى لا يتم سرقه ماده التحنيط",
      ],
      answers: ["flase", "true", "false", "false"],
    },
    answer: {
      img2: "./imgs/tahnit-place.jpg",
      text: "الغرفة اليمنى فى بداية منطقة السراديب أعلى الأرض",
    },
  },
  {
    quiz: {
      img: "",
      text: "ما هى انواع التوابيت التى كانت يوضع بها الطيور المحنطة؟",
    },
    choise: {
      names: [
        "زجاجيه و طوب لبن و فخارية",
        "فخارية و خشبية و حجرية",
        "صخرية و طوب لبن و زجاجيه",
        "من الخشب فقط",
      ],
      answers: ["false", "true", "false", "false"],
    },
    answer: {
      img1: "./imgs/taboot3.jpg",
      img2: "./imgs/taboot1.jpg",
      img3: "./imgs/taboot2.jpg",
      text: "فخارية و خشبية و حجرية",
    },
  },
];
let scoreContainer = document.querySelectorAll(".score span")[1];
let score = localStorage.getItem("score");
let report = document.querySelector("#report");
let reportText = document.querySelector("#report p");
let reportScore = document.querySelector("#report span");
let quizTitle = document.querySelector("#quiz-title");
let quizChoises = document.querySelectorAll("#quiz-choises li");
let choiseNum = 0;
let questionNumber = JSON.parse(localStorage.getItem("bhnasaQuestionNumber"));
let questionsBox = document.querySelector("#questions-box");
let attachBox = document.querySelector("#attach");
let answerBox = document.querySelector("#answer");
let ansImg1 = document.querySelector("#answer #img1");
let ansImg2 = document.querySelector("#answer #img2");
let ansImg3 = document.querySelector("#answer #img3");
let ansText = document.querySelector("#answer p");
let quizImg = document.querySelector("#question-img");
let success = document.querySelector("#success");
let fail = document.querySelector("#fail");
let progW = JSON.parse(localStorage.getItem("progWidth"));

function generateQuestions() {
  creatReport();
  scoreContainer.innerHTML = null;
  scoreContainer.append(localStorage.getItem("score"));
  questionType();
  quizImg.src = questions[questionNumber].quiz.img;
  quizTitle.append(questions[questionNumber].quiz.text);
  quizChoises.forEach((li) => {
    questionsBox.classList.remove("d-none");
    li.append(questions[questionNumber].choise.names[choiseNum]);
    li.dataset.answers = questions[questionNumber].choise.answers[choiseNum];
    li.addEventListener("click", () => {
      if (li.dataset.answers == "true") {
        score++;
        localStorage.setItem("score", score + 9);
        success.play();
      } else {
        fail.play();
      }
      scoreContainer.innerHTML = null;
      scoreContainer.append(localStorage.getItem("score"));
      showAnswer();
    });
    choiseNum++;
  });
}
function attachFile() {
  questionsBox.classList.add("d-none");
  answerBox.classList.add("d-none");
  attachBox.classList.remove("d-none");
}
function showAnswer() {
  ansImg1.src = questions[questionNumber].answer.img1;
  ansImg2.src = questions[questionNumber].answer.img2;
  ansImg3.src = questions[questionNumber].answer.img3;
  ansText.append(questions[questionNumber].answer.text);
  questionsBox.classList.add("d-none");
  attachBox.classList.add("d-none");
  answerBox.classList.remove("d-none");
}
function questionType() {
  if (questions[questionNumber].type === "text") {
    ChoisesBox.classList.add("d-none");
    attachBox.classList.remove("d-none");
    score++;
    localStorage.setItem("score", score + 9);
    success.play();
  }
}
function nextQuestion() {
  if (questionNumber < questions.length) {
    questionNumber++;
    localStorage.setItem("bhnasaQuestionNumber", questionNumber);
    location.reload();
  } else {
    questionsBox.classList.add("d-none");
  }
}
function creatReport() {
  if (questionNumber === questions.length) {
    questionsBox.classList.add("d-none");
    attachBox.classList.add("d-none");
    answerBox.classList.add("d-none");
    report.classList.remove("d-none");
    report.classList.add("d-block");
    reportText.innerHTML = `تهانيا ${localStorage.getItem(
      "username"
    )} لقد حصلت على`;
    reportScore.innerHTML = `${localStorage.getItem("score")}`;
    reportText.appendChild(reportScore);
    reportText.append("نقطة");
    localStorage.setItem("progWidth", progW + 16.6);
    localStorage.setItem("place6", "البهنسا");
  }
}
generateQuestions();

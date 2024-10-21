let questions = [
  {
    type: "",
    quiz: {
      img: "",
      text: "كيف تكونت الجزيره؟",
    },
    choise: {
      names: [
        "عن طريق التيارات الساحلية التي أدت إلى وجود الترسبات",
        "عن طريق الأسماك",
        "بسبب التلوث ",
        "تراكمات الفياضانات",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "",
      text: "عن طريق التيارات الساحلية التي أدت إلى وجود الترسبات",
    },
  },
  {
    type: "",
    quiz: {
      img: "",
      text: "هل تربة الجزيرة قابلة للزراعة؟",
    },
    choise: {
      names: ["لا", "ليس جميع الجزر", "نعم", "لا توجد اجابة من ما سبق ذكرة"],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/kornish1.jpg",
      text: "نعم",
    },
  },
  {
    type: "",
    quiz: {
      img: "",
      text: "ايه هو احسن كورنيش فى مصر؟",
    },
    choise: {
      names: [
        "كورنيش النيل بالمنيا",
        "كورنيش النيل باسيوط",
        "كورنيش النيل ببنى سويف",
        "كورنيش النيل بالقاهرة",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/kornish4.jpg",
      text: "كورنيش النيل بالمنيا",
    },
  },
  {
    type: "",
    quiz: {
      img: "",
      text: "اي هي بدايه و نهايه نهر النيل في العالم؟",
    },
    choise: {
      names: [
        "من السودان الجنوبية الى مصر",
        "من اثيوبيا الى مصر",
        "من الصومال الى مصر",
        "من اثيوبيا الى السودان",
      ],
      answers: ["false", "true", "false", "false"],
    },
    answer: {
      img2: "./imgs/kornish5.jpg",
      text: "من اثيوبيا الى مصر",
    },
  },
  {
    quiz: {
      img: "",
      text: "اين يصب نهر النيل؟",
    },
    choise: {
      names: [
        "من بحيرة ناصر ",
        "من بحيرة قارون",
        "فى البحر المتوسط",
        "فى البحر الاحمر",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/kornish1.jpg",
      text: "فى البحر المتوسط",
    },
  },
  {
    quiz: {
      img: "",
      text: "ما هي البدايه و النهايه في مصر ؟",
    },
    choise: {
      names: [
        "من اسوان لحد الجيزة",
        "من اسوان لحد فرعى دمياط و رشيد",
        "من اسوان لحد بنى سويف",
        "من الاقصر لحد الجيزة",
      ],
      answers: ["false", "true", "false", "false"],
    },
    answer: {
      img2: "./imgs/kornish2.jpg",
      text: "من اسوان لحد فرعى دمياط و رشيد",
    },
  },
  {
    quiz: {
      img: "",
      text: "من ماذا ينبع نهر النيل؟",
    },
    choise: {
      names: [
        "فى السودان من خلال الامطار",
        "من بحيرة تانا فى مرتفعات اثيوبيا",
        "من السد العالى فى مصر",
        "من خلال السيول فى افريقيا",
      ],
      answers: ["false", "true", "false", "false"],
    },
    answer: {
      img2: "./imgs/kornish4.jpg",
      text: "من بحيرة تانا فى مرتفعات اثيوبيا",
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
let ChoisesBox = document.querySelector("#quiz-choises");
let choiseNum = 0;
let questionNumber = JSON.parse(localStorage.getItem("nileQuestionNumber"));
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
      attachFile();
      showAnswer();
    });
    choiseNum++;
  });
}
function attachFile() {
  questionsBox.classList.add("d-none");
  attachBox.classList.add("d-none");
  answerBox.classList.remove("d-none");
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
function nextQuestion() {
  if (questionNumber < questions.length) {
    questionNumber++;
    localStorage.setItem("nileQuestionNumber", questionNumber);
    location.reload();
  } else {
    questionsBox.classList.add("d-none");
  }
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
    localStorage.setItem("place5", "نهر النيل");
  }
}
generateQuestions();

let questions = [
  {
    quiz: {
      img: "",
      text: "ابحث عن انية فخارية ذات طابع مضحك و ارفق صورة لها",
    },
    choise: {
      names: [
        "نية مرسوم عليها عده رسومات متنوعه بالالوان",
        "اوانى ممزوجة بخامات مختلفة الانواع و ليست فخارية فقط",
        "انيه فخارية على شكل قطة ",
        "انية فخارية مثقوبة من الاسفل",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/bsbs.jpg",
      text: "انية فخارية على شكل قط نسبة للاله بس",
    },
  },
  {
    quiz: {
      img: "",
      text: "قم بتصوير مظهر من مظاهر الارتباط الاسرى",
    },
    choise: {
      names: [
        "ختم موضوع على الرساله",
        "الوان الرساله تدل على صاحبها",
        "لكل كاتب خط مميز",
        "وجود تطعيم من مواد اخره",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/family.jpg",
      text: "صورة تعبر عن الترابط الأسري للملك بيبي غنخ وزوجته",
    },
  },
  {
    type: "image",
    quiz: {
      img: "",
      text: "كيف كان يتم تميز صاحب أو كاتب رساله البردية فى عصر مصر القديمة؟",
    },
    choise: {
      names: [
        "ختم موضوع على الرساله",
        "الوان الرساله تدل على صاحبها",
        "لكل كاتب خط مميز",
        "وجود تطعيم من مواد اخره",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/signeture.jpg",
      text: "كان فى العصر القديم يوضع اختام مميزة لكل كاتب على البرديه",
    },
  },
  {
    type: "text",
    quiz: {
      img: "",
      text: "قم بالبحث عن قطعه فنيه مميزة تظهر بها معالم المراسم الجنائزية فى مصر القديمه",
    },
    choise: {
      names: [
        "ختم موضوع على الرساله",
        "الوان الرساله تدل على صاحبها",
        "لكل كاتب خط مميز",
        "وجود تطعيم من مواد اخره",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/funnary.jpg",
      text: "المراسم الجنائزية فى مصر القديمة من الفنان 'حلو'",
    },
  },
  {
    type: "text",
    quiz: {
      img: "./imgs/pottary-dish.jpg",
      text: "فيما كانت تستخدم تلك الأواني الفخارية؟",
    },
    choise: {
      names: [
        "وضع الطيور و الحيوانات المحنطه بها ",
        "كانت تحتوى على الذهب فى المقبره حتى لا يسرق",
        "كان يتم تخزين السوائل بها",
        "كانت تقدم قرابين للالهه",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/pottary-dish.jpg",
      text: "كان يتم تخزين السوائل بها",
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
let questionNumber = JSON.parse(localStorage.getItem("museumQuestionNumber"));
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
function nextQuestion() {
  if (questionNumber < questions.length) {
    questionNumber++;
    localStorage.setItem("museumQuestionNumber", questionNumber);
    location.reload();
  } else {
    questionsBox.classList.add("d-none");
  }
}
function questionType() {
  if (questions[questionNumber].type === "image") {
    ChoisesBox.classList.add("d-none");
    attachBox.classList.remove("d-none");
    score++;
    localStorage.setItem("score", score + 9);
    success.play();
  } else if (questions[questionNumber].type === "text") {
    ChoisesBox.classList.remove("d-none");
    attachBox.classList.add("d-none");
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
    localStorage.setItem("place4", "متحف ملوى");
  }
}
generateQuestions();

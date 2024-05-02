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
      img: "./imgs/tahnit-material.jpg",
      text: "ما هو هذا الشئ الصخري",
    },
    choise: {
      names: [
        "ماده تحنيط الطيور",
        "ماده صناعة الفخار لوضع الطيور المحنطة بها",
        "مجرد صخر متحجر من زمن طويل تغير شكله نتيجة العوامل الجوية",
        "بقايا بناء قديم",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/tahnit-material.jpg",
      text: "ماده تحنيط الطيور",
    },
  },
  {
    quiz: {
      img: "",
      text: "من كان المسؤول عن حراسة جثة القرد داخل مكان عبادة قرد البابون ؟",
    },
    choise: {
      names: [
        "يحرس نفسه",
        "تعويذه مكتوبة على الجدران ",
        "11 ثعبان فى اعلى القبر",
        "9 ثعابين بشكل ورديات على مدار اليوم",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/monkey.jpg",
      text: "11 ثعبان فى اعلى القبر",
    },
  },
  {
    quiz: {
      img: "",
      text: "بجانب قرد البابون يوجد قبر فى الحائط يتميز بشئ ما فما هو ؟",
    },
    choise: {
      names: [
        "كبير جدا و لديه نقوش واضحه و جميلة",
        "يتواجد بيه تابوت كبير",
        "لا يوجد قبر فى الحائط",
        "يوجد فتحات تهوية للقبر",
      ],
      answers: ["false", "false", "false", "true"],
    },
    answer: {
      img2: "./imgs/Slots.jpg",
      text: "قبر محفور أمام القرد المحنط يتميز بوجود فتحات تهوية يمكن النظر منها على الجثمان",
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
  {
    quiz: {
      img: "./imgs/steer.jpg",
      text: "فى سلم بيودى تحت الارض، انزل فيه وقولنا لقيت ايه تحت؟",
    },
    choise: {
      names: ["غرفة فارغة", "طيور محنظة", "مكان للتحنيط", "تابوت حجرى"],
      answers: ["false", "false", "false", "true"],
    },
    answer: {
      img2: "./imgs/steer.jpg",
      text: "تابوت حجرى",
    },
  },
  {
    quiz: {
      img: "./imgs/temple.jpg",
      text: "ما هى المظاهر المرسومه على جدران المعبد ؟",
    },
    choise: {
      names: [
        "الحصاد و جمع و عصر العنب و بقرة تلد",
        "رعى الطيور و الحيوانات فقط",
        "طرق التحنيط فقط",
        "عبادة الالهة",
      ],
      answers: ["true", "false", "false", "false"],
    },
    answer: {
      img2: "./imgs/temple.jpg",
      text: "الحصاد و جمع و عصر العنب و بقرة تلد",
    },
  },
  {
    quiz: {
      img: "./imgs/9Monkies.jpg",
      text: "ابحث عن 9 قرود و 9 ثعابين ؟ ثم اخبرنا ما سبب رسمهم بهذا العدد؟",
    },
    choise: {
      names: [
        "انهم عدد الالهه الذين كانوا يعبدونها",
        "تتمثل فى عدد ساعات الحراسة للتابوت ",
        "تعظيم و تمجيد للالهه",
        "رقم 9 رمز الهى مثل تميمه الحظ",
      ],
      answers: ["false", "true", "false", "false"],
    },
    answer: {
      img2: "./imgs/9Monkies.jpg",
      text: "تتمثل فى عدد ساعات الحراسة للتابوت ",
    },
  },
  {
    quiz: {
      img: "./imgs/womens.jpg",
      text: "منظر السيدات دي بتعبر عن اى ؟",
    },
    choise: {
      names: [
        "خادمات يخدمن المدفون ",
        "يقومون بمراسم العباده",
        "يبكون و ينحبون على الميت",
        "يقومون بتقديم طعام و شراب العزاء",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/womens.jpg",
      text: "يبكون و ينحبون على الميت",
    },
  },
  {
    quiz: {
      img: "./imgs/momia.jpg",
      text: "لما تم وضع ازيدورا فى تابوت زجاجي؟",
    },
    choise: {
      names: [
        "لاظهار روعة التحنيط و عظمة سر التحنيط",
        "تم ايجادها فى النهر بدون تابوت لذا تركها والدها حزنن لانتحارها",
        "عرض التابوت لافه تسببت فى تأكله فتم عدم التابوت",
        "تم سر قة التابوت",
      ],
      answers: ["false", "false", "true", "false"],
    },
    answer: {
      img2: "./imgs/momia.jpg",
      text: "عرض التابوت لافه تسببت فى تأكله فتم عدم التابوت",
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
let questionNumber = JSON.parse(localStorage.getItem("tunaQuestionNumber"));
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
    localStorage.setItem("tunaQuestionNumber", questionNumber);
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
    localStorage.setItem("progWidth", progW + 20);
    localStorage.setItem("place2", "تونة الجبل");
  }
}
generateQuestions();
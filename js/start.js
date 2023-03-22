const mainBtn = document.querySelector("#mainBtn");
const qna = document.querySelector("#qna");

function changeAnswerList(qIndex) {
  const preAnswerList = document.querySelectorAll(".answerList");
  for (let i of preAnswerList) {
    i.style.WebkitAnimation = "fadeOut 0.5s";
    i.style.Animation = "fadeOut 0.5s";
  }
  setTimeout(() => {
    for (let i of preAnswerList) {
      i.remove();
      i.style.display = "none";
    }
    paintQnA(qIndex + 1);
  }, 450);
}

function paintAnswer(answerText, qIndex) {
  const answerBox = document.querySelector(".answerBox");
  const answer = document.createElement("button");
  answer.classList.add("answerList");
  // BootStrap
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  // --
  answer.classList.add("fadeIn");
  answerBox.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", () => {
    changeAnswerList(qIndex);
  });
}

function paintQnA(qIndex) {
  const questions = document.querySelector(".qBox");
  questions.innerHTML = qnaList[qIndex].q;
  for (let i in qnaList[qIndex].a) {
    paintAnswer(qnaList[qIndex].a[i].answer, qIndex);
  }
}

function handleStartButton() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.Animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    const qIndex = 0;
    paintQnA(qIndex);
  }, 450);
}
mainBtn.addEventListener("click", handleStartButton);

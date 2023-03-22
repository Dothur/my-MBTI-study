const mainBtn = document.querySelector("#mainBtn");
const qna = document.querySelector("#qna");

function changeAnswerList(qIndex) {
  const preAnswerList = document.querySelectorAll(".answerList");
  for (let i of preAnswerList) {
    i.remove();
    i.style.display = "none";
  }
  paintQnA(qIndex + 1);
}

function paintAnswer(answerText, qIndex) {
  const answerBox = document.querySelector(".answerBox");
  const answer = document.createElement("button");
  answer.classList.add("answerList");
  answerBox.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    () => {
      changeAnswerList(qIndex);
    },
    false
  );
}

function paintQnA(qIndex) {
  const questions = document.querySelector(".qBox");
  questions.innerHTML = qnaList[qIndex].q;
  for (let i in qnaList[qIndex].a) {
    paintAnswer(qnaList[qIndex].a[i].answer, qIndex);
  }
}

function handleStartButton() {
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.Animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.Animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 200);
    const qIndex = 0;
    paintQnA(qIndex);
  }, 200);
}
mainBtn.addEventListener("click", handleStartButton);

const mainBtn = document.querySelector("#mainBtn");
const qna = document.querySelector("#qna");

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
  }, 200);
}
mainBtn.addEventListener("click", handleStartButton);

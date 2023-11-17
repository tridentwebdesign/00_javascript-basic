const resultBtn = document.querySelector("button");
const resultArea = document.querySelector(".result");
resultBtn.addEventListener("click", function () {
  const num = Math.round(Math.random() * 4);
  if (num === 1) {
    resultArea.textContent = "JavaScript";
  } else {
    resultArea.textContent = "違う言語です";
  };
});

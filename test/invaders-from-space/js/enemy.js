const satan = document.querySelector(".satan img");
console.log("satan");

const satanBtn = document.querySelector(".satansBtn");
console.log("satanBtn");

satanBtn.addEventListener("click", function () {
  satan.classList.toggle("hide");
});

const enemyImg = document.querySelectorAll(".enemy img");
console.log(enemyImg);
const attack = document.querySelectorAll(".enemyBtn");
console.log(attack);

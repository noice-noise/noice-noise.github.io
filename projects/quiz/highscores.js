const highScoreList = document.getElementById("highScoreList");

const highScores = JSON.parse(localStorage.getItem("highScores"));

highScoreList.innerHTML = highScores
  .map((score) => {
    return `<li class="flex justify-between px-[10%]"> <span>${score.name}</span>  <span>${score.score} </span> </li>`;
  })
  .join("");

console.log(highScoreList);
console.log(highScores);

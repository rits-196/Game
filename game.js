const playerContainer = document.getElementById("player-container");
const addPlayerBtn = document.getElementById("add-player-btn");
const nextBtn = document.getElementById("next-btn");
const resultsDiv = document.getElementById("results");

let playerCount = 0;

addPlayerBtn.addEventListener("click", () => {
  playerCount++;
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Player ${playerCount} Name`;
  playerContainer.appendChild(input);
});

nextBtn.addEventListener("click", () => {
  const inputs = playerContainer.querySelectorAll("input");

  const playerNames = Array.from(inputs)
    .map(input => input.value.trim())
    .filter(name => name !== "");

  if (playerNames.length < 2) {
    resultsDiv.innerHTML = "<p>Please enter at least 2 players.</p>";
    return;
  }

  const commonNumber = Math.floor(Math.random() * 10) + 1;
  let imposterNumber;

  do {
    imposterNumber = Math.floor(Math.random() * 10) + 1;
  } while (imposterNumber === commonNumber);

  const imposterIndex = Math.floor(Math.random() * playerNames.length);

  resultsDiv.innerHTML = "<h3>Player Assignments</h3>";

  playerNames.forEach((name, index) => {
    const p = document.createElement("p");

    if (index === imposterIndex) {
      p.textContent = `${name} → ${imposterNumber}`;
    } else {
      p.textContent = `${name} → ${commonNumber}`;
    }

    resultsDiv.appendChild(p);
  });
});
                         
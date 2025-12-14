const playerContainer = document.getElementById("player-container");
const addPlayerBtn = document.getElementById("add-player-btn");
const nextBtn = document.getElementById("next-btn");

let playerCount = 0;

// Add new input field when "Add Player" is clicked
addPlayerBtn.addEventListener("click", () => {
  playerCount++;
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Player ${playerCount} Name`;
  input.name = `player${playerCount}`;
  playerContainer.appendChild(input);    
});           

// Handle "Next" button click  
nextBtn.addEventListener("click", () => {
  const inputs = playerContainer.querySelectorAll("input");
  const playerNames = Array.from(inputs).map(input => input.value.trim()).filter(name => name !== "");

  if (playerNames.length === 0) {
    alert("Please add at least one player.");
    return;      
  }
const numbers = [];
for (let i = 1; i <= playerNames.length; i++) {
  numbers.push(i);
}

numbers.sort(() => Math.random() - 0.5);

const assignments = playerNames.map((name, index) => {
  return `${name} → ${numbers[index]}`;
});

alert("Assignments:\n" + assignments.join("\n"));

  console.log("Player Names:", playerNames);
  alert("Players added: " + playerNames.join(", "));     
});                          
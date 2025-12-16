const playerContainer = document.getElementById("player-container");
const addPlayerBtn = document.getElementById("add-player-btn");
const nextBtn = document.getElementById("next-btn");

let playerCount = 0;

addPlayerBtn.addEventListener("click", () => {            
  playerCount++;
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Player ${playerCount} Name`;
  input.name = `player${playerCount}`;
  playerContainer.appendChild(input);        
});                                                      
                
const resultsDiv = document.getElementById("results");
       
nextBtn.addEventListener("click", () => {
  const inputs = playerContainer.querySelectorAll("input");
               
  const playerNames = Array.from(inputs)      
    .map(input => input.value.trim())      
    .filter(name => name !== "");      
          
  if (playerNames.length === 0) {
    resultsDiv.innerHTML = "<p>Please add at least one player.</p>";
    return;
  }

  const numbers = [];
  for (let i = 1; i <= playerNames.length; i++) {
    numbers.push(i);
  }                  

  numbers.sort(() => Math.random() - 0.5);  

  resultsDiv.innerHTML = "<h3>Player Assignments</h3>";

  playerNames.forEach((name, index) => {                   
    const p = document.createElement("p");  
    p.textContent = `${name} → ${numbers[index]}`;    
    resultsDiv.appendChild(p);
  });
});
                                  
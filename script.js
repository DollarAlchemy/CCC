// Tier 2 Connections
const tier2Mapping = {
  Red: ["Cyan", "Magenta"],
  Blue: ["Cyan", "Yellow"],
  Brown: ["Magenta", "Yellow"]
};

// Tier 3 Connections
const tier3Mapping = {
  Cyan: "Purple",
  Magenta: "Orange",
  Yellow: "Green"
};

// Selected Values
let selectedTier1 = null;
let selectedTier2 = null;

// Handle Tier 1 Selection
document.querySelectorAll(".tier-1 .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTier1 = btn.getAttribute("data-value");
    showTier2Options(tier2Mapping[selectedTier1]);
  });
});

// Show Tier 2 Options
function showTier2Options(options) {
  const tier2Container = document.querySelector(".tier-2 .buttons");
  tier2Container.innerHTML = "";

  options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = option;
    button.style.backgroundColor = getColor(option);
    button.addEventListener("click", () => {
      selectedTier2 = option;
      showTier3Result(tier3Mapping[selectedTier2]);
    });
    tier2Container.appendChild(button);
  });

  switchTier(1, 2);
}

// Show Tier 3 Result
function showTier3Result(finalColor) {
  const resultElement = document.getElementById("final-result");
  resultElement.textContent = `Your final color is ${finalColor}!`;
  resultElement.style.color = getColor(finalColor);

  switchTier(2, 3);
}

// Play Again
document.getElementById("play-again").addEventListener("click", () => {
  selectedTier1 = null;
  selectedTier2 = null;

  switchTier(3, 1);
});

// Switch Between Tiers
function switchTier(currentTier, nextTier) {
  document.querySelector(`.tier-${currentTier}`).classList.remove("active");
  document.querySelector(`.tier-${currentTier}`).classList.add("hidden");

  document.querySelector(`.tier-${nextTier}`).classList.remove("hidden");
  document.querySelector(`.tier-${nextTier}`).classList.add("active");
}

// Get Color for Buttons
function getColor(option) {
  const colors = {
    Cyan: "#00CED1",
    Magenta: "#FF00FF",
    Yellow: "#FFD700",
    Purple: "#800080",
    Orange: "#FF4500",
    Green: "#32CD32"
  };
  return colors[option] || "#ccc";
}

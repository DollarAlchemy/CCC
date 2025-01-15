const tier2Mapping = {
  Earth: ["Metal", "Wood"],
  Water: ["Steam", "Ice"],
  Fire: ["Lava", "Steam"]
};

const tier3Mapping = {
  Metal: "Wind",
  Wood: "Lava",
  Steam: "Ice",
  Lava: "Wind",
  Ice: "Wind"
};

const tier3Logic = {
  Wind: "Lava",
  Lava: "Ice",
  Ice: "Wind"
};

let selectedTier1 = null;
let selectedTier2 = null;

// Handle Tier 1 Selection
document.querySelectorAll(".tier1").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedTier1 = btn.getAttribute("data-value");
    transitionToTier(2, tier2Mapping[selectedTier1]);
  });
});

// Transition to Tier 2
function transitionToTier(tier, options) {
  document.querySelector(".tier.active").classList.remove("active");
  const nextTier = document.querySelector(`.tier-${tier}`);
  nextTier.classList.add("active");

  if (tier === 2) {
    const choices = nextTier.querySelector(".options");
    choices.innerHTML = "";

    options.forEach(option => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = option;
      button.style.background = generateColor(option);
      button.addEventListener("click", () => {
        selectedTier2 = option;
        showTier3Result(tier3Mapping[selectedTier2]);
      });
      choices.appendChild(button);
    });
  }
}

// Show Tier 3 Result
function showTier3Result(finalResult) {
  const resultElement = document.getElementById("final-result");
  resultElement.textContent = `Your destiny is ${finalResult}!`;

  transitionToTier(3);
}

// Play Again
document.getElementById("play-again").addEventListener("click", () => {
  selectedTier1 = null;
  selectedTier2 = null;

  document.querySelector(".tier.active").classList.remove("active");
  document.querySelector(".tier-1").classList.add("active");
});

// Generate Dynamic Colors for Buttons
function generateColor(option) {
  const colors = {
    Metal: "#B0C4DE",
    Wood: "#8FBC8F",
    Steam: "#87CEFA",
    Lava: "#FF4500",
    Ice: "#ADD8E6",
    Wind: "#D8BFD8"
  };
  return colors[option] || "#ccc";
}

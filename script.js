const tier2Options = {
    Earth: ["Metal", "Wood"],
    Water: ["Steam", "Ice"],
    Fire: ["Lava", "Steam"]
};

const tier3Results = {
    Metal: "Wind",
    Wood: "Lava",
    Steam: "Ice",
    Lava: "Ice",
    Ice: "Wind",
    Wind: "Lava"
};

const aiChoices = ["Wind", "Lava", "Ice"]; // AI possible Tier 3 choices

function selectTier1(element) {
    document.getElementById("tier-1").classList.add("hidden");
    document.getElementById("tier-2").classList.remove("hidden");
    document.getElementById("instructions").textContent = `You chose ${element}. Select a Tier 2 pathway.`;
    
    const options = tier2Options[element];
    const tier2Div = document.getElementById("tier-2-options");
    tier2Div.innerHTML = ""; // Clear previous options

    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectTier2(option);
        tier2Div.appendChild(button);
    });
}

function selectTier2(pathway) {
    const playerResult = tier3Results[pathway];
    const aiResult = aiChoices[Math.floor(Math.random() * aiChoices.length)];
    const outcome = determineOutcome(playerResult, aiResult);

    document.getElementById("tier-2").classList.add("hidden");
    document.getElementById("tier-3").classList.remove("hidden");

    document.getElementById("tier-3-result").textContent = `Your final element is: ${playerResult}`;
    document.getElementById("ai-result").textContent = `AI's final element is: ${aiResult}`;
    document.getElementById("game-outcome").textContent = outcome;
}

function determineOutcome(player, ai) {
    if (player === ai) return "It's a draw!";
    if ((player === "Wind" && ai === "Lava") ||
        (player === "Lava" && ai === "Ice") ||
        (player === "Ice" && ai === "Wind")) {
        return "You win!";
    }
    return "AI wins!";
}

function resetGame() {
    document.getElementById("tier-1").classList.remove("hidden");
    document.getElementById("tier-2").classList.add("hidden");
    document.getElementById("tier-3").classList.add("hidden");
    document.getElementById("instructions").textContent = "Start by selecting a Tier 1 element. Navigate through the tiers and see if you can outsmart the AI!";
}

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

function selectTier1(element) {
    document.getElementById("tier-1").classList.add("hidden");
    document.getElementById("tier-2").classList.remove("hidden");
    
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
    const result = tier3Results[pathway];
    document.getElementById("tier-2").classList.add("hidden");
    document.getElementById("tier-3").classList.remove("hidden");
    document.getElementById("tier-3-result").textContent = `Your final element is: ${result}`;
}

function resetGame() {
    document.getElementById("tier-1").classList.remove("hidden");
    document.getElementById("tier-2").classList.add("hidden");
    document.getElementById("tier-3").classList.add("hidden");
}

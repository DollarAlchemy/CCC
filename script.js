const tier2Connections = {
    Red: ["Cyan", "Magenta"],
    Blue: ["Cyan", "Yellow"],
    Brown: ["Magenta", "Yellow"]
};

const tier3Connections = {
    Cyan: "Purple",
    Magenta: "Orange",
    Yellow: "Green"
};

let currentPath = [];

function selectTier1(color) {
    currentPath.push(color);
    highlightButton(`${color.toLowerCase()}-btn`, "selected");
    revealTier2Options(tier2Connections[color]);
}

function revealTier2Options(options) {
    options.forEach(option => {
        const buttonId = `${option.toLowerCase()}-btn`;
        const button = document.getElementById(buttonId);
        button.disabled = false;
        button.classList.remove("greyscale");
        button.classList.add("revealed");
    });
}

function selectTier2(color) {
    currentPath.push(color);
    highlightButton(`${color.toLowerCase()}-btn`, "selected");
    const tier3Result = tier3Connections[color];
    currentPath.push(tier3Result);
    document.getElementById("tier-result").textContent = `Final Element: ${tier3Result}`;
}

function highlightButton(buttonId, className) {
    const button = document.getElementById(buttonId);
    button.classList.add(className);
}

function resetGame() {
    currentPath = [];
    document.querySelectorAll(".color-btn").forEach(button => {
        button.className = "color-btn greyscale";
        button.disabled = true;
    });
    document.getElementById("tier-result").textContent = "";
}

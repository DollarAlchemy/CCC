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

function selectTier1(color, svgId) {
    currentPath.push(color);
    updatePathDisplay();

    // Highlight the selected button and SVG node
    highlightSelection(color.toLowerCase() + "-btn", svgId);

    // Reveal Tier 2 options
    revealTier2Options(tier2Connections[color]);
}

function revealTier2Options(options) {
    options.forEach(option => {
        const buttonId = `${option.toLowerCase()}-btn`;
        const svgId = `rect-${option.toLowerCase()}`;
        const button = document.getElementById(buttonId);
        const svgNode = document.getElementById(svgId);

        button.disabled = false;
        button.classList.remove("greyscale");
        button.classList.add("revealed");

        svgNode.classList.remove("greyscale");
        svgNode.classList.add("revealed");
    });
}

function highlightSelection(buttonId, svgId) {
    // Highlight the button
    document.getElementById(buttonId).classList.add("selected");

    // Highlight the SVG node
    const svgNode = document.getElementById(svgId);
    svgNode.classList.add("selected");
}

function updatePathDisplay() {
    document.getElementById("current-path").textContent = `Current Path: ${currentPath.join(" → ")}`;
}

function resetGame() {
    currentPath = [];
    updatePathDisplay();

    // Reset all buttons and SVG elements
    document.querySelectorAll(".color-btn").forEach(button => {
        button.className = "color-btn greyscale";
        button.disabled = true;
    });

    document.querySelectorAll(".svg-node").forEach(node => {
        node.className = "svg-node greyscale";
    });
}

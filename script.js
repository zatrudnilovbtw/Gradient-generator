const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const preview = document.getElementById("preview");
const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
const alpha1 = document.getElementById("alpha1");
const alpha2 = document.getElementById("alpha2");
const direction = document.getElementById("direction");
const cssOutput = document.getElementById("css-output");
const copyBtn = document.getElementById("copy-btn");
const randomBtn = document.getElementById("random");



function randomGradient() {
   
    let hex1 = Math.floor(Math.random() * 16777215).toString(16);
    while (hex1.length < 6) {
        hex1 = "0" + hex1;
    }
    const color1Value = "#" + hex1;

    
    let hex2 = Math.floor(Math.random() * 16777215).toString(16);
    while (hex2.length < 6) {
        hex2 = "0" + hex2;
    }
    const color2Value = "#" + hex2;

    
    const alpha1Value = Math.random().toFixed(2);
    const alpha2Value = Math.random().toFixed(2);

    
    color1.value = color1Value;
    color2.value = color2Value;
    alpha1.value = alpha1Value;
    alpha2.value = alpha2Value;

    
    updateGradient();
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function updateGradient() {
    const rgb1 = hexToRgb(color1.value);
    const rgb2 = hexToRgb(color2.value);
    const gradient = `linear-gradient(${direction.value}, rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, ${alpha1.value}), rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, ${alpha2.value}))`;
    preview.style.background = gradient;
    hex1.textContent = `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, ${alpha1.value})`;
    hex2.textContent = `rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, ${alpha2.value})`;
    cssOutput.value = gradient;
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
alpha1.addEventListener("input", updateGradient);
alpha2.addEventListener("input", updateGradient);
direction.addEventListener("change", updateGradient);
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssOutput.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy CSS", 2000);
});
randomBtn.addEventListener("click", randomGradient);

updateGradient();
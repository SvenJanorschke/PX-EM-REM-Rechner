const pxInput = document.getElementById("px-value");
const emInput = document.getElementById("em-value");
const remInput = document.getElementById("rem-value");
const emToPxResult = document.getElementById("em-result");
const remToPxResult = document.getElementById("rem-result");
const pxToEmRemResult = document.getElementById("px-result");

pxInput.addEventListener("input", convertUnits);
emInput.addEventListener("input", convertUnits);
remInput.addEventListener("input", convertUnits);

function convertUnits() {
    const pxValue = parseFloat(pxInput.value) || 0;
    const emValue = parseFloat(emInput.value) || 0;
    const remValue = parseFloat(remInput.value) || 0;
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const emToPx = emValue * baseFontSize;
    const remToPx = remValue * baseFontSize;
    const pxToEmRem = pxValue / baseFontSize;

    emToPxResult.textContent = emToPx.toFixed(2) + " px";
    remToPxResult.textContent = remToPx.toFixed(2) + " px";
    pxToEmRemResult.textContent = pxToEmRem.toFixed(2);
}

convertUnits();
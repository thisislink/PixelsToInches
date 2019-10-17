/* Logic to calculate pixels to inches. 

Developer: Daphne Link
*/

// Version 5 is a fully working Pixels to Inches calculator, Inches to Pixels calculator, and DPI Calculator.
let defaultDPI = 300;
let pixelsToInchesForm = document.getElementById("pixelsToInchesForm");
let pixelsField = document.getElementById("pixelsField");
let pixelsToInchesResult = document.getElementById("pixelsToInchesResult");

let inchessToPixelsForm = document.getElementById("inchesToPixelsForm");
let inchesField = document.getElementById("inchesField");
let inchesToPixelsResult = document.getElementById("inchesToPixelsResult");

let dpiForm = document.getElementById("dpiForm");
let dpiInchesField = document.getElementById("dpiInchesField");
let dpiPixelsField = document.getElementById("dpiPixelsField");
let dpiResult = document.getElementById("dpiResult");

pixelsToInchesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("pixelsToInchesResult").innerHTML = "";
  calculatePixelsToInches(pixelsField.value);
})

inchesToPixelsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("inchesToPixelsResult").innerHTML = "";
  calculateInchesToPixels(inchesField.value);
})

dpiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("dpiResult").innerHTML = "";
  calculateDPI(dpiPixelsField.value, dpiInchesField.value);
})

/* future state: unit tests need to test userEntered value is a positive whole number. Any other characters or symbols need to throw an error and let user enter a valid value. */

// How to calculate pixels to inches: Pixels / DPI = inches
function calculatePixelsToInches(enteredPixels) {
  enteredPixels = pixelsField.value;
  pixelsToInchesResult.insertAdjacentHTML("beforeend", `Result: ${(enteredPixels / defaultDPI).toFixed(2)} Inches`);
  pixelsField.value = "";
  pixelsField.focus();
}

// How to calculate inches to pixels: Inches * DPI = pixels
function calculateInchesToPixels(enteredInches) {
  enteredInches = inchesField.value;
  inchesToPixelsResult.insertAdjacentHTML("beforeend", `Result: ${enteredInches * defaultDPI} Pixels`);
  inchesField.value = "";
  inchesField.focus();
}

// How to calculate DPI: Pixels / Inches = DPI
function calculateDPI(enteredPixels, enteredInches) {
  enteredInches = dpiInchesField.value;
  enteredPixels = dpiPixelsField.value;
  dpiResult.insertAdjacentHTML("beforeend", `Result: ${enteredPixels / enteredInches} DPI`);
  dpiInchesField.value = "";
  dpiPixelsField.value = "";
  dpiPixelsField.focus();
}
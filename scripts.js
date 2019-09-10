/* Logic to calculate pixels to inches, inches to pixels, and DPI*/

// declare globals
var userEnteredPixels = 0;
var userEnteredInches = 0;
var defaultDPI = 300;

// Pixels to Inches function
function PixelsToInches(userPixels) {
  return userPixels/defaultDPI;
}

// Inches to Pixels function
function InchesToPixels(userInches) {
  return userInches * defaultDPI;
}

// DPI calculation function
function CalculateDPI(userPixels, userInches) {
  return userPixels/userInches;
}

console.log("Pixels to Inches: " + PixelsToInches(3000) + " inches")

console.log("Inches to Pixels: " + InchesToPixels(3) + " pixels")

console.log("Resolution: " + CalculateDPI(3000,4) + " DPI")

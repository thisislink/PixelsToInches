/* Logic to calculate pixels to inches, inches to pixels, and DPI*/
let albumArtDetails = {
  getPixels: 0,
  getInches: 0,
  defaultDPI: 300,
  resultPixelsToInches: 0,
  resultInchesToPixels: 0,
  resultDPI: 0,
  displayPixelsToInches: function() {
    console.log(this.resultPixelsToInches + ' Inches');
  },
  calculatePixelsToInches: function(enterPixels) {
    this.getPixels = enterPixels;
    let pixelsToInches = this.getPixels / this.defaultDPI;
    this.resultPixelsToInches = pixelsToInches;
    this.displayPixelsToInches();
  },
  displayInchesToPixels: function() {
    console.log(this.resultInchesToPixels + ' Pixels');
  },
  calculateInchesToPixels: function(enterInches) {
    this.getInches = enterInches;
    let inchesToPixels = this.getInches * this.defaultDPI;
    this.resultInchesToPixels = inchesToPixels;
    this.displayInchesToPixels();
  },
  displayDPI: function() {
    console.log(this.resultDPI + ' DPI');
  },
  calculateDPI: function(enterPixels, enterInches) {
    this.getPixels = enterPixels;
    this.getInches = enterInches;
    this.resultDPI = this.getPixels / this.getInches;
    this.displayDPI();
  }
};

//get Pixels, calculate Pixels to Inches and display the result
albumArtDetails.calculatePixelsToInches(500);

//get Inches, calculate Inches to Pixels and display the result
albumArtDetails.calculateInchesToPixels(8);

//get Pixels, get Inches, calculate the DPI and display the result
albumArtDetails.calculateDPI(300, 4)
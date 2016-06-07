'use strict'

var Color = require('color')

module.exports = function processColors (colorOne, colorTwo) {
  colorOne = Color(colorOne).rgb()
  colorTwo = Color(colorTwo).rgb()

  return {
    r1: convertFromRgbVal(colorOne.r),
    r2: convertFromRgbVal(colorTwo.r),
    g1: convertFromRgbVal(colorOne.g),
    g2: convertFromRgbVal(colorTwo.g),
    b1: convertFromRgbVal(colorOne.b),
    b2: convertFromRgbVal(colorTwo.b)
  }
}

function convertFromRgbVal(rgbVal) {
  return rgbVal / 255
}

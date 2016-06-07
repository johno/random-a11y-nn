'use strict'

var fs = require('fs')
var got = require('got')
var brain = require('brain.js')

var processColors = require('./util/process-colors')
var combos = JSON.parse(fs.readFileSync('data.json', 'utf8'))

module.exports = function randomA11yNn (cb) {
  combos = Object.keys(combos).map(function (c) { return combos[c] })

  var trainingData = combos.map(function (combo) {
    var upOut = combo.up / combo.votes_count
    var downOut = combo.down / combo.votes_count

    var input = processColors(combo.color_one, combo.color_two)

    return {
      input: input,
      output: {
        up: upOut,
        down: downOut
      }
    }
  })

  fs.writeFileSync('training-data.json', JSON.stringify(trainingData))
  console.log('Beginning training on ' + trainingData.length + 'total combos')

  var net = new brain.NeuralNetwork()
  net.train(trainingData, {
    log: true,
    logPeriod: 1000,
    errorThresh: 0.1,
    iterations: 100000
  })

  fs.writeFileSync('net.json', JSON.stringify(net.toJSON()))
  console.log('Finished training, net written to file as JSON')

  return net
}

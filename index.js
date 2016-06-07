'use strict'

var got = require('got')
var brain = require('brain.js')

var processColors = require('./util/process-colors')

module.exports = function randomA11yNn (cb) {
  got('http://randoma11y.com/combos?per_page=1000')
    .then(function (response) {
      var body = JSON.parse(response.body)
      var trainingData = body.map(function (combo) {
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

      var net = new brain.NeuralNetwork()
      net.train(trainingData, {
        log: true,
        logPeriod: 10000,
        errorThresh: 0.05,
        iterations: 1000000
      })
      cb(net)
    })
    .catch(function (err) {
      console.log(err)
    })
}

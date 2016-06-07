var got = require('got')
var fs = require('fs')

var page = process.argv.slice(2)[0]

function getVoteData () {
  var combos = JSON.parse(fs.readFileSync('data.json', 'utf8'))

  var promise = got('http://randoma11y.com/combos?per_page=100&page=' + page)
    .then(function (response) {
      var body = JSON.parse(response.body)
      body.forEach(function (combo) {
        combos[combo.id] = combo
      })

      fs.writeFileSync('data.json', JSON.stringify(combos))
      console.log('retrieved ' + page)
    })
    .catch(function (error) {
      console.log(error)
      process.exit(1)
    })
}

getVoteData()

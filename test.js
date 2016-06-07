import test from 'ava'
import isPresent from 'is-present'

import processColors from './util/process-colors'
import randomA11yNn from './'

test.cb('random-a11y-nn returns a trained neural net', t => {
  t.plan(1)

  randomA11yNn(function (net) {
    var output = net.run(processColors('#fff', '#444'))

    console.log(output)
    t.true(isPresent(output))
    t.end()
  })
})

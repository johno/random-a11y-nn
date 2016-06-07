# random-a11y-nn [![Build Status](https://secure.travis-ci.org/johnotander/random-a11y-nn.png?branch=master)](https://travis-ci.org/johnotander/random-a11y-nn) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

__Work in progress__

Random a11y color combination neural network

## Installation

```bash
npm install --save random-a11y-nn
```

## Usage

```javascript
var randomA11yNn = require('random-a11y-nn')

var net = randomA11yNn(
  [
    {
      color_one: '#fff',
      color_two: '#444',
      votes: [...]
    }, ...
  ]
)

net.run('#fafafa', '#555') // => { up: .99, down: 0.004 }
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).

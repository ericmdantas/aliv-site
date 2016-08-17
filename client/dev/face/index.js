import './face.css';

module.exports = {
  data() {
    return {
      badges: [
        {
          icon: "https://badge.fury.io/js/aliv.svg",
          url: "https://github.com/ericmdantas/aliv/"
        },
        {
          icon: "https://travis-ci.org/ericmdantas/aliv.svg?branch=master",
          url: "https://travis-ci.org/ericmdantas/aliv"
        },
        {
          icon: "https://coveralls.io/repos/github/ericmdantas/aliv/badge.svg?branch=master",
          url: "https://coveralls.io/github/ericmdantas/aliv?branch=master"
        }
      ]
    }
  },
  template: require('./face.html')
}

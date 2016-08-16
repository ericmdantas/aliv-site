import './face.css';

module.exports = {
  data() {
    return {
      style: {
        color: this._randColor()
      },
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
  ready() {
    setInterval(() => {
      this.style = this._randColor();
    }, 3000);
  },
  methods: {
    _randColor() {
      return {
        color: '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
      }
    }
  },
  template: require('./face.html')
}

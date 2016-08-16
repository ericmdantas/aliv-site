import './app.css';

module.exports = {
  template: require('./app.html'),
  components: {
    'aliv-header': require('../header/index.js'),
    'aliv-face': require('../face/index.js'),
    'aliv-footer': require('../footer/index.js')
  }
};

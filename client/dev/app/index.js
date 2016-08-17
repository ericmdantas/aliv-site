import './app.css';

module.exports = {
  template: require('./app.html'),
  components: {
    'aliv-header': require('../header/index.js'),
    'aliv-face': require('../face/index.js'),
    'aliv-install': require('../install/index.js'),
    'aliv-explanation': require('../explanation/index.js'),
    'aliv-usage': require('../usage/index.js'),
    'aliv-footer': require('../footer/index.js')
  }
};

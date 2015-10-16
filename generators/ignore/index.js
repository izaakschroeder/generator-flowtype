
var util = require('yeoman-util');
var merge = require('../../lib/merge');

module.exports = util.Base.extend({
  prompting: util.prompt([{
    name: 'path',
    type: 'input',
    message: 'Path to ignore',
  }]),
  writing: util.copy('.flowconfig', 'flowconfig', {
    transform: merge
  }),
});

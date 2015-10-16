
var util = require('yeoman-util');
var merge = require('../../lib/merge');

module.exports = util.Base.extend({
  prompting: util.prompt([{
    name: 'path',
    type: 'input',
    message: 'Path of library',
  }]),
  writing: util.copy('.flowconfig', 'flowconfig', {
    transform: merge
  }),
});

var util = require('yeoman-util');

module.exports = util.Base.extend({
	writing: {
		config: util.copy('.flowconfig', 'flowconfig'),
		manifest: util.manifest(),
	}
});

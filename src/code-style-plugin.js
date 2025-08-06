const jsxPaddingLine = require('./rules/jsx-padding-line');

module.exports = {
	meta: {
		name: '@colditzdev-code-style',
		version: '1.0.0',
	},

	rules: {
		'jsx-padding-line': jsxPaddingLine,
	},
};

const jsxPaddingLine = require('./rules/jsx-padding-line');
const stylistic = require('@stylistic/eslint-plugin');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const unicorn = require('eslint-plugin-unicorn');
const perfectionist = require('eslint-plugin-perfectionist');

module.exports = {
	configs: {
		recommended: {
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
			],

			plugins: {
				'@stylistic': stylistic,
				'@typescript-eslint': typescriptEslint,
				'unused-imports': unusedImports,
				perfectionist,
				unicorn,
			},

			rules: {
				// colditzdev
				'@colditzdev/jsx-padding-line': 'error',

				// eslint core
				'align': 'off',
				'array-callback-return': 'error',
				'complexity': 'error',
				'eofline': 'off',
				'linebreak-style': ['error', 'unix'],
				'max-classes-per-file': ['error', 1],
				'max-depth': ['error', 5],
				'max-lines': ['error', 500],
				'max-lines-per-function': ['error', 150],
				'max-nested-callbacks': 'error',
				'max-params': 'error',
				'no-array-constructor': 'error',
				'no-bitwise': 'off',
				'no-case-declarations': 'warn',
				'no-console': 'off',
				'no-inner-declarations': 'off',
				'no-nested-ternary': 'off',
				'object-literal-sort-keys': 'off',
				'object-shorthand': 'error',
				'ordered-imports': 'off',
				'prefer-const': 'error',
				'prefer-destructuring': 'warn',
				'prefer-template': 'warn',

				'quotes': ['warn', 'single', {
					avoidEscape: true,
					allowTemplateLiterals: true,
				}],

				'radix': 'error',
				'template-curly-spacing': 'warn',

				// Stylistic
				'@stylistic/arrow-spacing': 'warn',
				'@stylistic/eol-last': 'error',
				'@stylistic/indent': 'off',

				'@stylistic/max-len': ['error', {
					code: 170,
					ignoreUrls: true,
					ignoreRegExpLiterals: true,
					ignorePattern: '^(import\\s.+\\sfrom\\s.+|\\} from)',
				}],

				'@stylistic/max-statements-per-line': ['error', {
					max: 1,
				}],

				'@stylistic/member-delimiter-style': 'error',
				'@stylistic/new-parens': 'error',
				'@stylistic/newline-per-chained-call': 'warn',

				'@stylistic/no-extra-parens': ['warn', 'all', {
					ignoreJSX: 'multi-line',
				}],

				'@stylistic/no-mixed-spaces-and-tabs': 'error',
				'@stylistic/no-multi-spaces': 'error',
				'@stylistic/no-multiple-empty-lines': 'error',
				'@stylistic/no-trailing-spaces': 'error',
				'@stylistic/operator-linebreak': ['warn', 'before', {
					overrides: {
						'=': 'after',
					},
				}],
				'@stylistic/spaced-comment': 'warn',

				// typescript-eslint
				'@typescript-eslint/array-type': 'off',
				'@typescript-eslint/ban-types': 'off',
				'@typescript-eslint/camelcase': 'off',
				'@typescript-eslint/consistent-type-definitions': 0,

				'@typescript-eslint/explicit-function-return-type': ['error', {
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
				}],

				'@typescript-eslint/explicit-module-boundary-types': 2,
				'@typescript-eslint/interface-name': 'off',
				'@typescript-eslint/no-deprecated': 'warn',
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/no-empty-object-type': 'off',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-for-in-array': 0,
				'@typescript-eslint/no-inferrable-types': 0,
				'@typescript-eslint/no-namespace': 'off',
				'@typescript-eslint/no-redundant-type-constituents': 0,
				'@typescript-eslint/no-this-alias': 'off',
				'@typescript-eslint/no-unsafe-argument': 0,
				'@typescript-eslint/no-unsafe-assignment': 0,
				'@typescript-eslint/no-unsafe-call': 0,
				'@typescript-eslint/no-unsafe-member-access': 0,
				'@typescript-eslint/no-unsafe-return': 0,
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				'@typescript-eslint/restrict-plus-operands': 0,
				'@typescript-eslint/unbound-method': 0,

				// perfectionist
				'perfectionist/sort-intersection-types': 'error',
				'perfectionist/sort-heritage-clauses': 'error',
				'perfectionist/sort-array-includes': 'error',
				'perfectionist/sort-named-exports': 'error',
				'perfectionist/sort-switch-case': 'error',
				'perfectionist/sort-decorators': 'error',
				'perfectionist/sort-exports': 'error',
				'perfectionist/sort-enums': 'error',
				'perfectionist/sort-sets': 'error',
				'perfectionist/sort-maps': 'error',

				// unused imports
				'unused-imports/no-unused-imports': 'error',

				'unused-imports/no-unused-vars': ['warn', {
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: false,
				}],

				// unicorn
				'unicorn/better-regex': 'error',
				'unicorn/catch-error-name': 'error',
				'unicorn/consistent-function-scoping': 'off',
				'unicorn/custom-error-definition': 'off',
				'unicorn/error-message': 'off',
				'unicorn/escape-case': 'error',
				'unicorn/expiring-todo-comments': 'error',
				'unicorn/explicit-length-check': 'off',
				'unicorn/filename-case': 'error',
				'unicorn/import-style': 'error',
				'unicorn/new-for-builtins': 'error',
				'unicorn/no-abusive-eslint-disable': 'off',
				'unicorn/no-console-spaces': 'error',
				'unicorn/no-fn-reference-in-iterator': 'off',
				'unicorn/no-for-loop': 'off',
				'unicorn/no-hex-escape': 'error',
				'unicorn/no-instanceof-builtins': 'off',
				'unicorn/no-keyword-prefix': 'off',
				'unicorn/no-nested-ternary': 'off',
				'unicorn/no-new-array': 'error',
				'unicorn/no-new-buffer': 'error',
				'unicorn/no-null': 'off',
				'unicorn/no-object-as-default-parameter': 'off',
				'unicorn/no-process-exit': 'error',
				'unicorn/no-unreadable-array-destructuring': 'error',
				'unicorn/no-unsafe-regex': 'off',
				'unicorn/no-unused-properties': 'off',
				'unicorn/no-useless-undefined': 'off',
				'unicorn/no-zero-fractions': 'error',
				'unicorn/number-literal-case': 'error',
				'unicorn/numeric-separators-style': 'off',
				'unicorn/prefer-add-event-listener': 'off',
				'unicorn/prefer-array-find': 'error',
				'unicorn/prefer-array-flat-map': 'error',
				'unicorn/prefer-array-index-of': 'error',
				'unicorn/prefer-array-some': 'error',
				'unicorn/prefer-at': 'off',
				'unicorn/prefer-dom-node-append': 'error',
				'unicorn/prefer-dom-node-dataset': 'error',
				'unicorn/prefer-dom-node-remove': 'error',
				'unicorn/prefer-dom-node-text-content': 'error',
				'unicorn/prefer-includes': 'error',
				'unicorn/prefer-keyboard-event-key': 'error',
				'unicorn/prefer-math-trunc': 'off',
				'unicorn/prefer-modern-dom-apis': 'error',
				'unicorn/prefer-negative-index': 'error',
				'unicorn/prefer-number-properties': 'error',
				'unicorn/prefer-optional-catch-binding': 'error',
				'unicorn/prefer-query-selector': 'error',
				'unicorn/prefer-reflect-apply': 'error',
				'unicorn/prefer-regexp-test': 'error',
				'unicorn/prefer-replace-all': 'off',
				'unicorn/prefer-set-has': 'off',
				'unicorn/prefer-spread': 'off',
				'unicorn/prefer-string-slice': 'error',
				'unicorn/prefer-string-starts-ends-with': 'error',
				'unicorn/prefer-string-trim-start-end': 'error',
				'unicorn/prefer-ternary': 'off',
				'unicorn/prefer-top-level-await': 'error',
				'unicorn/prefer-type-error': 'error',
				'unicorn/prevent-abbreviations': 'off',
				'unicorn/string-content': 'off',
				'unicorn/throw-new-error': 'error',
			},
		},
	},

	meta: {
		name: '@colditzdev-code-style',
		version: '1.0.0',
	},

	rules: {
		'jsx-padding-line': jsxPaddingLine,
	},
};

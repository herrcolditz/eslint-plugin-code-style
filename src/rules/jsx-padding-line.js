module.exports = {
	meta: {
		type: 'layout',

		docs: {
			description: 'Require a blank line between adjacent JSX elements',
			category: 'Stylistic Issues',
		},

		fixable: 'whitespace',

		messages: {
			jsxMissingPaddingLine: 'Expected blank line between adjacent JSX elements.',
		},

		schema: [],
	},

	create: (context) => {
		function checkChildren(children) {
			for (let i = 0; i < children.length - 1; i++) {
				const current = children[i];
				const next = children[i + 1];

				if (
					(current.type === 'JSXElement' || current.type === 'JSXExpressionContainer') &&
					(next.type === 'JSXElement' || next.type === 'JSXExpressionContainer')
				) {
					const currentEnd = current.loc.end.line;
					const nextStart = next.loc.start.line;

					if (nextStart - currentEnd <= 1) {
						context.report({
							node: next,
							messageId: 'jsxMissingPaddingLine',
							fix(fixer) {
								return fixer.insertTextBefore(next, '\n');
							}
						});
					}
				}
			}
		}

		return {
			JSXElement(node) {
				if (node.children && node.children.length > 1) {
					checkChildren(node.children.filter(child => child.type !== 'JSXText' || child.value.trim() !== ''));
				}
			}
		};
	},
};

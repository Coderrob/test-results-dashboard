/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
	root: true,
	settings: {
		'import/resolver': { typescript: { project: ['./tsconfig.json'] } },
	},
	env: {
		browser: true,
		node: true,
	},
	overrides: [
		/**
		 * TS
		 */
		{
			files: ['*.ts', '*.mts', '*.cts'],
			plugins: ['eslint-plugin-tsdoc', '@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: ['./tsconfig.json'],
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			extends: [
				'airbnb-base',
				'airbnb-typescript',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:@typescript-eslint/strict',
				'prettier',
			],
			rules: {
				'tsdoc/syntax': 'warn',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
				'max-lines': [
					'warn',
					{ max: 250, skipComments: true, skipBlankLines: true },
				],
				'react/jsx-filename-extension': 'off',
				'import/prefer-default-export': 'off',
				'import/extensions': 'off',
			},
		},

		/**
		 * JS
		 */
		{
			files: ['*.js', '*.mjs', '*.cjs'],
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
			extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
			rules: { 'import/prefer-default-export': 'off' },
		},

		/**
		 * Astro
		 */
		{
			files: ['*.astro'],
			extends: ['airbnb-base', 'plugin:astro/recommended', 'prettier'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				project: ['./tsconfig.json'],
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'import/extensions': 'off',
				'import/no-absolute-path': 'off',
				'import/no-extraneous-dependencies': 'off',
				'import/no-named-as-default': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-unresolved': [2, { ignore: ['@astrojs/image/components'] }],
				'import/prefer-default-export': 'off',
				'max-lines': [
					'error',
					{ max: 250, skipComments: true, skipBlankLines: true },
				],
				'no-undef': 'off',
				'no-unused-vars': ['error', { varsIgnorePattern: 'Props' }],
			},
			globals: { astroHTML: 'readonly' },
		},
	],
};

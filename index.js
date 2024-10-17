const pkg = require('./package.json');
const braceRules = require('eslint-plugin-brace-rules');
const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = {
    meta: {
        name: pkg.name,
        version: pkg.version
    },
    configs: {
        recommended: [{
            plugins: {
                'brace-rules': braceRules,
                '@stylistic/js': stylisticJs
            },
            rules: {
                '@stylistic/js/array-bracket-spacing': ['error', 'never'],
                '@stylistic/js/arrow-parens': ['error', 'as-needed'],
                // INFO we use "brace-rules/brace-on-same-line" from "eslint-plugin-brace-rules" package instead
                // 'brace-style': [
                //     'error',
                //     'allman',
                //     {
                //         'allowSingleLine': true
                //     }
                // ],
                'brace-rules/brace-on-same-line': [
                    'error',
                    {
                        'ArrowFunctionExpression': 'always',
                        'DoWhileStatement': 'never',
                        'ForInStatement': 'never',
                        'ForOfStatement': 'never',
                        'ForStatement': 'never',
                        'FunctionDeclaration': 'never',
                        'FunctionExpression': 'ignore',
                        'IfStatement': 'never',
                        'SwitchStatement': 'never',
                        'TryStatement': 'never',
                        'WhileStatement': 'never',
                        'WithStatement': 'never',
                    },
                    {
                        'allowSingleLine': true
                    }
                ],
                '@stylistic/js/eol-last': ['error', 'always'],
                '@stylistic/js/func-call-spacing': ['error', 'never'],
                '@stylistic/js/indent': [
                    'error',
                    4,
                    {
                        'SwitchCase': 1
                    }
                ],
                '@stylistic/js/keyword-spacing': [
                    'error',
                    {
                        'after': true,
                        'overrides': {
                            'catch': {'after': false},
                            'do': {'after': false},
                            'for': {'after': false},
                            'function': {'after': false},
                            'if': {'after': false},
                            'switch': {'after': false},
                            'try': {'after': false},
                            'while': {'after': false}
                        }
                    }
                ],
                '@stylistic/js/linebreak-style': ['error', 'unix'],
                'no-cond-assign': 'off',
                'no-else-return': 'error',
                'no-empty': [
                    'error',
                    {
                        'allowEmptyCatch': true
                    }
                ],
                'no-lonely-if': 'error',
                '@stylistic/js/no-multi-spaces': 'error',
                'no-template-curly-in-string': 'off',
                '@stylistic/js/no-trailing-spaces': [
                    'error',
                    {
                        'skipBlankLines': false,
                        'ignoreComments': true
                    }
                ],
                'no-undef': 'off',
                'no-unneeded-ternary': 'warn',
                'no-unused-vars': 'warn',
                'no-var': 'error',
                '@stylistic/js/no-whitespace-before-property': 'error',
                '@stylistic/js/nonblock-statement-body-position': ['error', 'below'],
                '@stylistic/js/object-curly-spacing': ['error', 'never'],
                'object-shorthand': [
                    'error',
                    'always',
                    {
                        'avoidQuotes': true
                    }
                ],
                'prefer-const': [
                    'error',
                    {
                        'destructuring': 'all'
                    }
                ],
                '@stylistic/js/quotes': ['error', 'single'],
                '@stylistic/js/semi': ['error', 'always'],
                '@stylistic/js/semi-spacing': 'error',
                '@stylistic/js/space-before-blocks': [
                    'error',
                    {
                        'classes': 'always',
                        'functions': 'never',
                        'keywords': 'never',
                    }
                ],
                '@stylistic/js/space-before-function-paren': [
                    'error',
                    {
                        'anonymous': 'never',
                        'asyncArrow': 'always',
                        'named': 'never'
                    }
                ],
                '@stylistic/js/space-infix-ops': ['error', {'int32Hint': false}],

                // React specific
                'react/react-in-jsx-scope': 'off', // when using React v17 or later 
                'react/prop-types': 'off'
            }
        }]
    }
};

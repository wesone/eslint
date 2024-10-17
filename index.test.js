const {describe, it} = require('node:test');

const {Linter} = require('eslint');
const plugin = require('./index');

const {configs: {recommended}} = plugin;

describe('Custom ESLint config', async () => {
    const linter = new Linter();
    const cases = [
        {
            name: 'added a trailing newline',
            code: 'console.log(true);',
            expected: 'console.log(true);\n'
        },
        {
            name: 'fixed missing semicolons',
            code: 'console.log(true)\n',
            expected: 'console.log(true);\n'
        },
        {
            name: 'transformed double quotes to single quotes',
            code: 'console.log("Hello")\n',
            expected: 'console.log(\'Hello\');\n'
        },
        {
            name: 'transformed if statements (moved opening bracket, removed spaces, ...)',
            code: `if (x === 42) {
    console.log(true);
}\n`,
            expected: `if(x === 42)
{
    console.log(true);
}\n`
        },
        {
            name: 'transformed arrow functions (removed single param brackets, keeps opening bracket on same line, ...)',
            code: `(num) => {
    console.log(true);
};\n`,
            expected: `num => {
    console.log(true);
};\n`,
        },
        {
            name: 'used 4 spaces for indentation',
            code: `if(x === 42)
{
  console.log(true);
}\n`,
            expected: `if(x === 42)
{
    console.log(true);
}\n`
        },
    ];

    for(const {name, code, expected} of cases)
        await it(name, ({assert}) => {
            const {output} = linter.verifyAndFix(code, recommended, 'mock_code.js');
            assert.equal(output, expected);
        });
});

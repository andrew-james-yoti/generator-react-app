const expect = require('chai').expect;
const utils = require('./utils');

describe('utils', () => {
    it('should convert kebeb case to Pascal case', () => {
        const name = 'my-component-name';
        const expectedName = 'MyComponentName';
        expect(utils.toClassName(name)).to.equal(expectedName);
    });
    it('should convert to kebab case', () => {
        const input = 'My Component Name';
        const expectedName = 'my-component-name';
        expect(utils.toKebabCase(input)).to.equal(expectedName);
    })
});

const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('Styles', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should copy sass files', (done) => {
        helpers.run(path.join(__dirname, '../styles'))
            .inDir(path.join(__dirname, 'tmp'))
            .then((dir) => {
                assert.file(['src/styles/main.scss', 'src/styles/_colors.scss', 'src/styles/_breakpoints.scss']);
                done();
            });
    });
});
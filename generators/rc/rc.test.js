const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('Rc files', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should copy webpack files', (done) => {
        helpers.run(path.join(__dirname, '../rc'))
            .inDir(path.join(__dirname, 'tmp'))
            .then((dir) => {
                assert.file(['.babelrc', '.eslintrc', '.npmrc', '.nvmrc']);
                done();
            });
    });
});
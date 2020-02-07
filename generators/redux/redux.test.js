const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('Redux files', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should copy redux store files', (done) => {
        helpers.run(path.join(__dirname, '../redux'))
            .inDir(path.join(__dirname, 'tmp'))
            .then((dir) => {
                assert.file(['store/index.js', 'store/initialState.js']);
                done();
            });
    });
});
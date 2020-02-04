const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('webpack', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should copy webpack files', (done) => {
        helpers.run(path.join(__dirname, '../webpack'))
            .inDir(path.join(__dirname, 'tmp'))
            .then((dir) => {
                assert.file(['webpack.common.js', 'webpack.dev.js', 'webpack.prod.js']);
                done();
            });
    });
});
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('docker', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should create a docker file', (done) => {
        helpers.run(path.join(__dirname, '../docker'))
            .inDir(path.join(__dirname, 'tmp'))
            .then(() => {
                assert.file(['Dockerfile']);
                done();
            });
    });
});
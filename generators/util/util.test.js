const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('util', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should create a util file', (done) => {
        helpers.run(path.join(__dirname, '../util'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ utilName: 'test-util' })
            .then(() => {
                assert.file([
                    'src/utils/test-util.util.js',
                    'src/utils/test-util.util.test.js'
                ]);
                done();
            });
    });

    it('should create a util in a utils sub dir', (done) => {
        helpers.run(path.join(__dirname, '../util'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ utilName: 'test-util' })
            .withPrompts({ utilPath: 'sub-dir'})
            .then(() => {
                assert.file([
                    'src/utils/sub-dir/test-util.util.js',
                    'src/utils/sub-dir/test-util.util.test.js'
                ]);
                done();
            });
    });
});

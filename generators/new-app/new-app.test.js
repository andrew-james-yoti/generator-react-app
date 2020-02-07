const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('new-app', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });
    
    it('should create a new react app', (done) => {
        helpers.run(path.join(__dirname, '../new-app'))
            .inDir(path.join(__dirname, 'tmp'))
            .withOptions({ new: true })
            .withPrompts({ appName: 'test-app-name' })
            .withOptions({ redux: false })
            .then(() => {
                assert.file([
                    'webpack.common.js'
                ]);
                done();
            });
    });
    
    it.skip('should create a new react-redux app', () => {
        helpers.run(path.join(__dirname, '../new-app'))
            .inDir(path.join(__dirname, 'tmp'))
            .withOptions({ new: true })
            .withPrompts({ appName: 'test-app-name' })
            .withOptions({ redux: true })
            .then(() => {
                assert.file([
                    'webpack.common.js',
                    'store/index.js',
                    'store/initialState.js'
                ]);
                done();
            });
    });
});
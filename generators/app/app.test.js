const expect = require('chai').expect;
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

// https://yeoman.io/authoring/testing.html
describe.skip('app', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    // it('should be true', () => {
    //     expect(true).to.equal(true);
    // });

    it('should create a new project folder', (done) => {
        helpers.run(path.join(__dirname, '../package'))
            .inDir(path.join(__dirname, 'tmp'))
            .withOptions({ new: true })
            .withPrompts({ appName: 'test-app-name' })
            .withPrompts({ newProj: true })
            .then(() => {
                assert.file([
                    // 'test-app-name/webpack.common.js',
                    // 'test-app-name/webpack.dev.js',
                    // 'test-app-name/webpack.prod.js',
                    'tmp/test-app-name/package.json'
                ]);
                done();
            });
    })
});

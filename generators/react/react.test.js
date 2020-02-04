const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('react files', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should create the react files', (done) => {
        helpers.run(path.join(__dirname, '../react'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ appTitle: 'Test App' })
            .then(() => {
                assert.file(['src/index.html', 'src/index.jsx', 'src/components/app/index.jsx', 'src/components/app/app.jsx']);
                done();
            })
    });
});

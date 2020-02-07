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

    it('should not add redux libraires', (done) => {
        helpers.run(path.join(__dirname, '../react'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ appTitle: 'Test App' })
            .withOptions({ redux: false })
            .then(() => {
                assert.noFileContent('src/index.jsx', 'import { Provider } from \'react-redux\';');
                assert.noFileContent('src/index.jsx', 'import initialState from \'./store/initialState\';');
                done();
            });
    })

    it('should add redux libraries', (done) => {
        helpers.run(path.join(__dirname, '../react'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ appTitle: 'Test App' })
            .withOptions({ redux: true })
            .then(() => {
                assert.fileContent('src/index.jsx', 'import { Provider } from \'react-redux\';');
                done();
            });
    })
});

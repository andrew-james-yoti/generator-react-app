const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('new-app', () => {
    before(async () => {
        await helpers.run(path.join(__dirname, '../new-app'))
            .inDir(path.join(__dirname, 'tmp'))
            .withOptions({ new: true })
            .withPrompts({ appName: 'test-app-name' })
            .withPrompts({ appTitle: 'Test Application' })
            .withPrompts({ redux: true });
    });

    after(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should run webpack generator', () => {
        assert.jsonFileContent('.yo-rc.json', {
            'generator-react-app': {
                webpack: 'true'
            }
        });
    });

    it('should run package generator', () => {
        assert.jsonFileContent('.yo-rc.json', {
            'generator-react-app': {
                webpack: 'true'
            }
        });
    });
    
    it('should run the react generator', () => {
        assert.jsonFileContent('.yo-rc.json', {
            'generator-react-app': {
                react: 'true'
            }
        });
    });

    it('should run the redux generator', () => {
        assert.jsonFileContent('.yo-rc.json', {
            'generator-react-app': {
                redux: 'true'
            }
        });
    });
});
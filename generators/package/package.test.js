const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('package.json', () => {
    describe('package.json', () => {
        afterEach(() => {
            rimraf.sync(path.join(__dirname, 'tmp'));
        });

        it('should add the application name', (done) => {
            helpers.run(path.join(__dirname, '../package'))
                .inDir(path.join(__dirname, 'tmp'))
                .withOptions({ appName: 'test-app-name' })
                .withOptions({ redux: false })
                .then(() => {
                    assert.jsonFileContent(path.join(__dirname, 'tmp/package.json'), { name: 'test-app-name' });
                    done();
                });
        });
        
        it('should add redux to the dependencies', (done) => {
            helpers.run(path.join(__dirname, '../package'))
                .inDir(path.join(__dirname, 'tmp'))
                .withOptions({ appName: 'test-app-name' })
                .withOptions({ redux: true })
                .then(() => {
                    assert.jsonFileContent(path.join(__dirname, 'tmp/package.json'), {
                        dependencies: {
                            react: '16.9.0',
                            'react-dom': '16.9.0',
                            'react-responsive': '8.0.1',
                            'react-router-dom': '5.0.1',
                            'react-redux': '7.1.1',
                            redux: '4.0.4',
                            'redux-thunk': '2.3.0'
                        }
                    });
                    done();
                });
        });
        
        it('should not add redux to the dependencies', (done) => {
            helpers.run(path.join(__dirname, '../package'))
                .inDir(path.join(__dirname, 'tmp'))
                .withOptions({ appName: 'test-app-name' })
                .withOptions({ redux: false })
                .then(() => {
                    assert.noJsonFileContent(path.join(__dirname, 'tmp/package.json'), {
                        dependencies: {
                            'react-redux': '7.1.1',
                            redux: '4.0.4',
                            'redux-thunk': '2.3.0'
                        }
                    });
                    done();
                });
        });
    });
});
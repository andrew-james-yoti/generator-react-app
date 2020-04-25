const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('service', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should create a service file', (done) => {
        helpers.run(path.join(__dirname, '../service'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ serviceName: 'test-service' })
            .then(() => {
                assert.file([
                    'src/services/test-service.service.js',
                    'src/services/test-service.service.test.js'
                ]);
                done();
            });
    });

    it('should create a service in a services sub dir', (done) => {
        helpers.run(path.join(__dirname, '../service'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ serviceName: 'test-service' })
            .withPrompts({ servicePath: 'sub-dir'})
            .then(() => {
                assert.file([
                    'src/services/sub-dir/test-service.service.js',
                    'src/services/sub-dir/test-service.service.test.js'
                ]);
                done();
            });
    });
});

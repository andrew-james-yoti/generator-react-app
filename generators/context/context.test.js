const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('context', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should create context and provider', (done) => {
        helpers.run(path.join(__dirname, '../context'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ contextName: 'test' })
            .then(() => {
                assert.file([
                    'src/context/test.context.jsx',
                    'src/components/test-context-provider/index.jsx',
                    'src/components/test-context-provider/test-context-provider.jsx'
                ]);
                done();
            });
    });

    // @TODO - alternative path
});

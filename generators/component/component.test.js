const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const rimraf = require('rimraf');

describe('Component', () => {
    afterEach(() => {
        rimraf.sync(path.join(__dirname, 'tmp'));
    });

    it('should add component files', (done) => {
        helpers.run(path.join(__dirname, '../component'))
            .inDir(path.join(__dirname, 'tmp'))
            .withOptions({ componentName: 'test-component' })
            .then(() => {
                assert.file([
                    'src/components/test-component/index.jsx',
                    'src/components/test-component/test-component.jsx',
                    'src/components/test-component/test-component.test.jsx',
                    'src/components/test-component/test-component.scss'
                ]);
                done();
            });
    });
});
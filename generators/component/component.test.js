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

    it('should copy template files to named dir', (done) => {
        helpers.run(path.join(__dirname, '../component'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ componentName: 'test-component' })
            .withPrompts({ componentPath: 'sub-dir'})
            .then(() => {
                assert.file([
                    'src/components/sub-dir/test-component/index.jsx',
                    'src/components/sub-dir/test-component/test-component.jsx',
                    'src/components/sub-dir/test-component/test-component.test.jsx',
                    'src/components/sub-dir/test-component/test-component.scss'
                ]);
                done();
            });
    });

    it('should not add a component with badly formatted name', (done) => {
        helpers.run(path.join(__dirname, '../component'))
            .inDir(path.join(__dirname, 'tmp'))
            .withPrompts({ componentName: 'te$t-c0mponent' })
            .then(() => {
                // assert.noFile('src/components/te$t-c0mponent/index.jsx')
                // done();
            })
            .catch(() => {
                done();
            });
    })
});
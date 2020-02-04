const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

    }

    prompting() {

    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('__mocks__/fileMock.ejs'),
            this.destinationPath('test/__mocks__/fileMock.js')
        );
        this.fs.copyTpl(
            this.templatePath('__mocks__/styleMock.ejs'),
            this.destinationPath('test/__mocks__/styleMock.js')
        );
        this.fs.copyTpl(
            this.templatePath('config/jest.config.ejs'),
            this.destinationPath('test/config/jest.config.json')
        );
        this.fs.copyTpl(
            this.templatePath('config/setup-globals.config.ejs'),
            this.destinationPath('test/config/setup-globals.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('config/testing-library.config.ejs'),
            this.destinationPath('test/config/testing-library.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('utils/datasets/index.ejs'),
            this.destinationPath('test/utils/datasets/index.js')
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
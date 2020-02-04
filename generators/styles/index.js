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
            this.templatePath('main.scss'),
            this.destinationPath('src/styles/main.scss')
        );
        this.fs.copyTpl(
            this.templatePath('_colors.scss'),
            this.destinationPath('src/styles/_colors.scss')
        );
        this.fs.copyTpl(
            this.templatePath('_breakpoints.scss'),
            this.destinationPath('src/styles/_breakpoints.scss')
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
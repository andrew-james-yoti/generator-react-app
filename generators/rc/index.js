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
            this.templatePath('babelrc.ejs'),
            this.destinationPath('.babelrc')
        );
        this.fs.copyTpl(
            this.templatePath('eslintrc.ejs'),
            this.destinationPath('.eslintrc')
        );
        // this.fs.copyTpl(
        //     this.templatePath('huskyrc.ejs'),
        //     this.destinationPath('.huskyrc')
        // );
        this.fs.copyTpl(
            this.templatePath('npmrc.ejs'),
            this.destinationPath('.npmrc')
        );
        this.fs.copyTpl(
            this.templatePath('nvmrc.ejs'),
            this.destinationPath('.nvmrc')
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
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
            this.templatePath('store/index.ejs'),
            this.destinationPath('store/index.js')
        );
        this.fs.copyTpl(
            this.templatePath('store/initialState.ejs'),
            this.destinationPath('store/initialState.js')
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {
        this.config.set('redux', 'true');
    }
}
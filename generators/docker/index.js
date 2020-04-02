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
            this.templatePath('dockerfile.ejs'),
            this.destinationPath('Dockerfile')
        );
    }

    
    conflicts() {
        
    }

    install() {
        
    }

    end() {
        this.config.set('docker', 'true');
    }
}
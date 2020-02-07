const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.redux = opts.redux;
        this.appTitle = opts.appTitle;
    }

    initializing() {

    }

    async prompting() {

    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.ejs'),
            this.destinationPath('src/index.jsx'),
            {
                redux: this.redux || false
            }
        );
        this.fs.copyTpl(
            this.templatePath('index.html.ejs'),
            this.destinationPath('src/index.html'),
            {
                appTitle: this.appTitle
            }
        );
        this.fs.copyTpl(
            this.templatePath('components/app/index.ejs'),
            this.destinationPath('src/components/app/index.jsx')
        );
        this.fs.copyTpl(
            this.templatePath('components/app/app.jsx.ejs'),
            this.destinationPath('src/components/app/app.jsx'),
            {
                appTitle: this.appTitle
            }
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {
        this.config.set('react', 'true');
    }
}
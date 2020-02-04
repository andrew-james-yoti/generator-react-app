const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

    }

    async prompting() {
        this.reactQuestions = await this.prompt([
            {
                type: "input",
                name: "appTitle",
                message: "What is the application title?"
            }
        ]);
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.ejs'),
            this.destinationPath('src/index.jsx')
        );
        this.fs.copyTpl(
            this.templatePath('index.html.ejs'),
            this.destinationPath('src/index.html'),
            {
                appTitle: this.reactQuestions.appTitle
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
                appTitle: this.reactQuestions.appTitle
            }
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
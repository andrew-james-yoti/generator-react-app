const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

    }

    async prompting() {
        this.newAppQuestions = await this.prompt([
            {
                type: "input",
                name: "appName",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
            {
                type: "input",
                name: "appTitle",
                message: "What is the application title?"
            },
            {
                type: 'confirm',
                name: 'redux',
                message: 'Would you like to include Redux?',
                default: false,
            }
        ]);
    }

    configuring() {
        this.destinationRoot(this.newAppQuestions.appName);
    }

    writing() {
        this.composeWith(require.resolve('../package'), {
            appName: this.newAppQuestions.appName
        });

        this.composeWith(require.resolve('../react'), {
            redux: this.newAppQuestions.redux,
            appTitle: this.newAppQuestions.appTitle,
        });
        
        if (this.newAppQuestions.redux) {
            this.composeWith(require.resolve('../redux'));
        }
        this.composeWith(require.resolve('../webpack'));
        this.composeWith(require.resolve('../rc'));
        this.composeWith(require.resolve('../test'));
        this.composeWith(require.resolve('../styles'));
        this.composeWith(require.resolve('../docker'));
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
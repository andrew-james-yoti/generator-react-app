const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.appName = opts.appName == 'true' ? null : opts.appName;
    }

    initializing() {

    }

    async prompting() {
        const questions = [
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
        ];

        if (!this.appName) {
            questions.splice(0, 0, {
                type: "input",
                name: "appName",
                message: "Your project name",
                default: this.appname // Default to current folder name
            });
        }

        this.newAppQuestions = await this.prompt(questions);
    }

    configuring() {
        const rootPath = this.appName || this.newAppQuestions.appName;
        this.destinationRoot(rootPath);
    }

    writing() {
        this.composeWith(require.resolve('../package'), {
            appName: this.appName || this.newAppQuestions.appName
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
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
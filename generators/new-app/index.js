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
        this.composeWith(require.resolve('../webpack'));
        this.composeWith(require.resolve('../rc'));
        this.composeWith(require.resolve('../test'));
        // this.composeWith(require.resolve('../react'));
        this.composeWith(require.resolve('../styles'));
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
const Generator = require('yeoman-generator');
const utils = require('../../libs/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // this.config.set('utilName', opts.utilName);
    }

    initializing() {

    }

    async prompting() {
        this.utilQuestions = await this.prompt([
            {
                type: "input",
                name: "utilName",
                message: "What is the util name?"
            },
            {
                type: "input",
                name: "utilPath",
                message: "What is the path? (Press enter for default)"
            }
        ])
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        const utilName = this.utilQuestions.utilName;
        const path = this.utilQuestions.utilPath ? `src/utils/${this.utilQuestions.utilPath}/` : 'src/utils/';
        this.fs.copyTpl(
            this.templatePath('util.ejs'),
            this.destinationPath(`${path}${utilName}.util.js`),
            {
                className: utils.toClassName(utilName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('util.test.ejs'),
            this.destinationPath(`${path}${utilName}.util.test.js`),
            {
                className: utils.toClassName(utilName),
                utilName: utilName
            }
        );
    }

    
    conflicts() {
        
    }

    install() {
        
    }

    end() {
        // this.config.set('docker', 'true');
    }
}
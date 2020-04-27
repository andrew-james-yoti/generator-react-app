const Generator = require('yeoman-generator');
const utils = require('../../libs/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

    }

    async prompting() {
        this.contextQuestions = await this.prompt([
            {
                type: 'input',
                name: 'contextName',
                message: 'What is the context name?'
            }
        ]);
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        const contextName = this.contextQuestions.contextName;
        const contextPath = 'src/context/';
        const providerPath = `src/components/${utils.toKebabCase(contextName)}-context-provider/`;
        this.fs.copyTpl(
            this.templatePath('context.ejs'),
            this.destinationPath(`${contextPath}${utils.toKebabCase(contextName)}.context.jsx`),
            {
                className: utils.toClassName(contextName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('index.ejs'),
            this.destinationPath(`${providerPath}index.jsx`),
            {
                contextName: utils.toKebabCase(contextName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('provider.ejs'),
            this.destinationPath(`${providerPath}${utils.toKebabCase(contextName)}-context-provider.jsx`),
            {
                className: utils.toClassName(contextName),
                contextName: utils.toKebabCase(contextName),
                contextPath: contextPath,
                providerPath: providerPath
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

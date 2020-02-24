const Generator = require('yeoman-generator');
const utils = require('../../libs/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.config.set('componentName', opts.componentName);
        // this.option('path', {
        //     description: 'Choose component path',
        //     type: String,
        // });
    }

    initializing() {

    }

    async prompting() {
        if (typeof componentName === 'undefined') {
            this.componentQuestions = await this.prompt([
                {
                    type: "input",
                    name: "componentName",
                    message: "What is the component name?"
                },
                {
                    type: "input",
                    name: "componentPath",
                    message: "What is the path? (Press enter for default)"
                }
            ])
        }
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        const componentName = this.config.get('componentName') || this.componentQuestions.componentName;
        const path = this.componentQuestions.componentPath ? `src/components/${this.componentQuestions.componentPath}/${componentName}/` : `src/components/${componentName}/`;

        if (typeof componentName !== 'undefined') {
            this.fs.copyTpl(
                this.templatePath('index.ejs'),
                this.destinationPath(`${path}index.jsx`),
                {
                    componentName
                }
            );
            this.fs.copyTpl(
                this.templatePath('component.ejs'),
                this.destinationPath(`${path}${componentName}.jsx`),
                {
                    componentName,
                    className: utils.toClassName(componentName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('component.test.ejs'),
                this.destinationPath(`${path}${componentName}.test.jsx`),
                {
                    componentName,
                    className: utils.toClassName(componentName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('style.ejs'),
                this.destinationPath(`${path}${componentName}.scss`)
            );
        }
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {

    }
}
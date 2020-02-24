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
            // @TODO - input error handling
            this.componentQuestions = await this.prompt([
                {
                    type: "input",
                    name: "componentName",
                    message: "What is the component name?"
                    /*,
                    validate: (input) => {
                        const formatRegex = /[^a-zA-Z\s\-]/;
                        console.log('formatRegex.test(input)', formatRegex.test(input));
                        if (formatRegex.test(input)) {
                            return Promise.reject('Component name not correctly formatted.');
                        }
                        // @TODO - check start / end string format
                        return Promise.resolve(input.trim());
                    }
                    */
                },
                {
                    type: "input",
                    name: "componentPath",
                    message: "What is the path? (Press enter for default)"
                }
            ]);
            const nameRegex = /[^a-zA-Z\s\-]/;

            if (nameRegex.test(this.componentQuestions.componentName)) {
                throw new Error('Component name not correctly formatted.');
            }
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
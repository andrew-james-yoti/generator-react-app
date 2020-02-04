const Generator = require('yeoman-generator');
const utils = require('../../libs/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.config.set('componentName', opts.componentName);
    }

    initializing() {

    }

    prompting() {

    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        const componentName = this.config.get('componentName');
        if (typeof componentName !== 'undefined') {
            this.fs.copyTpl(
                this.templatePath('index.ejs'),
                this.destinationPath(`src/components/${componentName}/index.jsx`),
                {
                    componentName
                }
            );
            this.fs.copyTpl(
                this.templatePath('component.ejs'),
                this.destinationPath(`src/components/${componentName}/${componentName}.jsx`),
                {
                    componentName,
                    className: utils.toClassName(componentName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('component.test.ejs'),
                this.destinationPath(`src/components/${componentName}/${componentName}.test.jsx`),
                {
                    componentName,
                    className: utils.toClassName(componentName)
                }
            );
            this.fs.copyTpl(
                this.templatePath('style.ejs'),
                this.destinationPath(`src/components/${componentName}/${componentName}.scss`)
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
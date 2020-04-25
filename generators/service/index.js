const Generator = require('yeoman-generator');
const utils = require('../../libs/utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // this.config.set('serviceName', opts.serviceName);
    }

    initializing() {

    }

    async prompting() {
        this.serviceQuestions = await this.prompt([
            {
                type: "input",
                name: "serviceName",
                message: "What is the service name?"
            },
            {
                type: "input",
                name: "servicePath",
                message: "What is the path? (Press enter for default)"
            }
        ])
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        const serviceName = this.serviceQuestions.serviceName;
        const path = this.serviceQuestions.servicePath ? `src/services/${this.serviceQuestions.servicePath}/` : 'src/services/';
        this.fs.copyTpl(
            this.templatePath('service.ejs'),
            this.destinationPath(`${path}${serviceName}.service.js`),
            {
                className: utils.toClassName(serviceName)
            }
        );
        this.fs.copyTpl(
            this.templatePath('service.test.ejs'),
            this.destinationPath(`${path}${serviceName}.service.test.js`),
            {
                className: utils.toClassName(serviceName),
                serviceName: serviceName
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
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // console.log('Webpack Generator');
    }

    initializing() {
        // console.log('Webpack init');
    }

    prompting() {
        // console.log('Webpack prompting');
    }

    configuring() {
        // console.log('Webpack configuring');
        this.destinationRoot('./');
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('webpack.common.ejs'),
            this.destinationPath('webpack.common.js')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.dev.ejs'),
            this.destinationPath('webpack.dev.js')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.prod.ejs'),
            this.destinationPath('webpack.prod.js')
        );
    }

    conflicts() {
        
    }

    install() {
        
    }

    end() {
        this.config.set('webpack', 'true');
    }
}
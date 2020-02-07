const Generator = require('yeoman-generator');
const fs = require('fs');

const readJson = (path, cb) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err)
      cb(err)
    else
      cb(null, JSON.parse(data))
  })
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.appName = opts.appName;

        readJson('./templates/package.json', (err, conf) => {
            if (err) {
                // handle error
                console.error(err);
            } else {
                this.pkgJson = conf;
            }
        });
        readJson('./templates/redux-dependencies.json', (err, conf) => {
            if (err) {
                // handle error
                console.error(err);
            } else {
                this.reduxDependencies = conf;
            }
        });
    }

    initializing() {

    }

    async prompting() {
        this.packageQuestions = await this.prompt([
            {
                type: 'confirm',
                name: 'redux',
                message: 'Would you like to include Redux?',
                default: false,
            }
        ]);
    }

    configuring() {
        this.destinationRoot('./');
    }

    writing() {
        this.pkgJson = Object.assign({}, this.pkgJson, { name: this.appName });

        const redux = this.packageQuestions.redux;
        
        // console.log('redux question', redux, typeof redux === 'boolean');

        if (typeof redux !== 'undefined' && redux === true) {
            this.pkgJson.dependencies = Object.assign({}, this.pkgJson.dependencies, this.reduxDependencies.dependencies);
            this.pkgJson.devDependencies = Object.assign({}, this.pkgJson.devDependencies, this.reduxDependencies.devDependencies);
        }

        this.fs.extendJSON(this.destinationPath('package.json'), this.pkgJson);
        
        this.composeWith(require.resolve('../react'), {
            redux
        });
        
        if (typeof redux !== 'undefined' && redux === true) {
            this.composeWith(require.resolve('../redux'));
        }
    }

    conflicts() {
        
    }

    install() {
        this.npmInstall();
    }

    end() {

    }
}
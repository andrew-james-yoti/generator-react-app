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
        this.redux = opts.redux || false;

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

    }

    configuring() {
        if (typeof this.appName !== 'undefined') {
            this.destinationRoot(`./${this.appName}`);
        } else {
            this.destinationRoot('./');
        }
    }

    writing() {
        this.pkgJson = Object.assign({}, this.pkgJson, { name: this.appName });

        if (typeof this.redux === 'boolean' && this.redux === true) {
            this.pkgJson.dependencies = Object.assign({}, this.pkgJson.dependencies, this.reduxDependencies.dependencies);
            this.pkgJson.devDependencies = Object.assign({}, this.pkgJson.devDependencies, this.reduxDependencies.devDependencies);
        }

        this.fs.extendJSON(this.destinationPath('package.json'), this.pkgJson);
    }

    conflicts() {
        
    }

    install() {
        this.npmInstall();
    }

    end() {
        this.config.set('package', 'true');
    }
}
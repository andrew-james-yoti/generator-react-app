const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.option("new", {
            description: 'Generate a new react application',
            alias: 'n'
        });
        this.option("component", {
            description: 'Create a new component',
            alias: 'c',
            type: String
        });
    }
    /**
     * The Grouped Queue
     * 1. initializing - Your initialization methods (checking current project state, getting configs, etc)
     * 2. prompting - Where you prompt users for options (where you’d call this.prompt())
     * 3. configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
     * 4. default - If the method name doesn’t match a priority, it will be pushed to this group.
     * 5. writing - Where you write the generator specific files (routes, controllers, etc)
     * 6. conflicts - Where conflicts are handled (used internally)
     * 7. install - Where installations are run (npm, bower)
     * 8. end - Called last, cleanup, say good bye, etc
     */
    initializing() {

    }

    async prompting() {

    }
    
    configuring() {

    }

    default() {
        if (typeof this.options.new !== 'undefined' && this.options.new === true) {
            this.composeWith(require.resolve('../new-app'));
        }
        if (typeof this.options.component !== 'undefined') {
            // @TODO - run test to check that user is within project folder
            this.composeWith(require.resolve('../component'), {
                componentName: this.options.component,
            });
        }
    }

    // writing() {
    // 
    // }
    // 
    // conflicts() {
    // 
    // }
    // 
    // install() {
    // 
    // }

    end() {
        console.log('end Generator');
    }
}
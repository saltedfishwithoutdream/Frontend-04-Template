var Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor (args, opts) {
        super(args, opts)
    }

    async initPackage () {
      const answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname // Default to current folder name
          }
        ]);
        const pkgJson = {
          "name": answers.name,
          "version": "1.0.0",
          "description": "",
          "main": "generators/app/index.js",
          "scripts": {
            "build": "webpack",
            "test": "mocha --require @babel/register",
            "coverage": "nyc mocha"
          },
          "author": "",
          "license": "ISC",
          "devDependencies": {},
          "dependencies": {
          }
        };
      
          // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

        this.npmInstall(['vue'], {'save-dev': false});
        this.npmInstall(['webpack', 'webpack-cli', 'vue-loader', 'vue-style-loader', 'bable-loader',
                  '@babel/core', '@babel/preset-env', '@babel/register',
                  'mocha', 'nyc', '@istanbuljs/nyc-config-babel', 'babel-plugin-istanbul',
                  'css-loader', 'vue-template-compiler', 'copy-webpack-plugin'], {'save-dev': true});
        this.npmInstall(['mocha'], {'save-dev': true});
        this.npmInstall(['nyc'], {'save-dev': true});
        
      this.fs.copyTpl(
        this.templatePath('sample-test.js'),
        this.destinationPath('test/sample-test.js')
      );
      this.fs.copyTpl(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copyTpl(
        this.templatePath('.nycrc'),
        this.destinationPath('.nycrc')
      );
      this.fs.copyTpl(
        this.templatePath('HelloWorld.vue'),
        this.destinationPath('src/HelloWorld.vue')
      );
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('src/webpack.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('main.js'),
        this.destinationPath('src/main.js')
      );
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('src/index.html'),
        {title: answers.name}
      );
    }


}
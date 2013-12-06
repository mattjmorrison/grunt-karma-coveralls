# grunt-karma-coveralls


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-karma-coveralls --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-karma-coveralls');
```

## Grunt Configuration Example:

```js
coveralls: {
    options: {
        debug: true,
        coverage_dir: 'directory name'
    }
}
```

If you haven't used [Karma](http://karma-runner.github.io/) before, check out the video on the homepage.

## Karma Configuration Example:

```js
reporters: ['coverage'],
preprocessors: {
    "**/lib/*js": "coverage"
},
coverageReporter: {
    type: "lcov",
    dir: "coverage/"
},
plugins: [
    'karma-coverage',
]
```

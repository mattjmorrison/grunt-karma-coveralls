[![Build Status](https://travis-ci.org/mattjmorrison/grunt-karma-coveralls.svg)](https://travis-ci.org/mattjmorrison/grunt-karma-coveralls)

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
        coverageDir: 'directory name',
        dryRun: true,
        force: true,
        recursive: true
    }
}
```

## Optional Configuration Options

```js
dryRun: [boolean]
```

Using this option you can run coverage without sending data to the coveralls service and instead writing
the results to coveralls.json.

```js
force: [boolean]
```

Using this option you can ensure that if there is a failure, ie: the coveralls service is down, your grunt tasks will continue to run and not terminate due to the error.

```js
recursive: [boolean]
```

This option defaults to ``true``. If it is set to true ``coverageDir`` will be searched recursively for ``lcov.info``.
Otherwise the subdirectories will be ignored.


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

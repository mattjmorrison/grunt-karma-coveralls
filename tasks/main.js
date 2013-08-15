module.exports = function(grunt){
    var glob = require('glob');
    var fs = require('fs');
    var handleInput = require('coveralls/lib/handleInput');

    grunt.task.registerTask('coveralls', 'Coveralls coverage with Karma', function(){
        var options = grunt.config('coveralls.options');
        lcov_path = glob.sync(options.coverage_dir + "/**/lcov.info")[0];
        process.env.COVERALLS_REPO_TOKEN = options.repo_token;
        process.env.COVERALLS_SERVICE_NAME = options.service_name;
        handleInput(fs.readFileSync(lcov_path).toString());
    });
};

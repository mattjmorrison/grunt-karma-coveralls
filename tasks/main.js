module.exports = function(grunt){
    var fs = require('fs');
    var glob = require('glob');
    var coveralls = require('coveralls/index');

    grunt.task.registerTask('coveralls', 'Coveralls coverage with Karma', function(){
        var done = this.async();
        var gruntOptions = grunt.config('coveralls.options');
        var lcov_path = glob.sync(gruntOptions.coverage_dir + "/**/lcov.info")[0];
        var input = fs.readFileSync(lcov_path).toString();

        coveralls.getBaseOptions(function(err, options){
            options.filepath = ".";
            coveralls.convertLcovToCoveralls(input, options, function(err, postData){
                if (err){
                    done();
                    throw err;
                }
                coveralls.sendToCoveralls(postData, function(err, response, body){
                    if (err){
                        done();
                        throw err;
                    }
                    if (response.statusCode >= 400){
                        done();
                        throw "Bad response: " + response.statusCode + " " + body;
                    }
                    done();
                });
            });
        });
    });
};

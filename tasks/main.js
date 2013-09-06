module.exports = function(grunt){
    var fs = require('fs');
    var glob = require('glob');
    var sendToCoveralls = require('coveralls/lib/sendToCoveralls');
    var convertLcovToCoveralls = require('coveralls/lib/convertLcovToCoveralls');

    grunt.task.registerTask('coveralls', 'Coveralls coverage with Karma', function(){
        var done = this.async();
        var options = grunt.config('coveralls.options');
        options.filepath = ".";
        options.service_name =  'travis-ci';
        options.sersvice_jobj_id = process.env.TRAVIS_JOB_ID;
        var lcov_path = glob.sync(options.coverage_dir + "/**/lcov.info")[0];
        var input = fs.readFileSync(lcov_path).toString();

        convertLcovToCoveralls(input, options, function(err, postData){
            if (err){
                done();
                throw err;
            }
            sendToCoveralls(postData, function(err, response, body){
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
};

var fs = require('fs');
var glob = require('glob');
var logger = require('log-driver')({level: 'debug'});

function main(grunt){

  grunt.task.registerTask('coveralls', 'Coveralls coverage with Karma', function(){
    var done = this.async();
    var gruntOptions = grunt.config('coveralls.options');
    process.env.NODE_COVERALLS_DEBUG = gruntOptions.debug ? 1 : 0;
    var input = getInput(gruntOptions.coverage_dir);
    callCoveralls(done, input, gruntOptions);
  });

};

function callCoveralls(done, input, gruntOptions){
  var coveralls = require('coveralls/index');
  coveralls.getBaseOptions(function(err, options){
    options.filepath = ".";
    coveralls.convertLcovToCoveralls(input, options, function(err, postData){
      handleError(done, err);
      if (!gruntOptions.dryRun) {
        coveralls.sendToCoveralls(postData, function(err, response, body){
          sendToCoverallsCallback(done, err, response, body);
        });
      } else {
        fs.writeFileSync(gruntOptions.coverage_dir + '/coveralls.json', JSON.stringify(postData));
        done();
      }
    });
  });
}

function handleError(done, err) {
  if (err){
    done();
    throw err;
  }
}

function sendToCoverallsCallback(done, err, response, body){
  handleError(done, err);
  if (response.statusCode >= 400){
    handleError(done, "Bad response:" + response.statusCode + " " + body);
  }
  done();
}

function getInput(basePath){
  var lcov_path = glob.sync(basePath + "/**/lcov.info")[0];
  if (!lcov_path){
    logger.error("lcov.info not found in `" + basePath + "`");
  }
  return fs.readFileSync(lcov_path).toString();
}

module.exports = main;

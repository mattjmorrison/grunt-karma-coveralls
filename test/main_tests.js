var grunt = require('grunt');

exports.main = {

    deprecatedOldCoverageDir: function(test){
        test.expect(1);
        grunt.util.spawn({
            cmd: 'grunt',
            args: ['coveralls', '--no-color']
        }, function(err, result){
            test.equal(result.stderr, "DEPRECATION: use coverageDir instead of coverage_dir");
            test.done();
        });
    },
    showErrorMessageWhenNoLCOVData: function(test){
        test.expect(1);
        grunt.util.spawn({
            cmd: 'grunt',
            args: ['coveralls', '--no-color']
        }, function(err, result){
            test.ok(result.stdout.indexOf('lcov.info not found') > 0);
            test.done();
        });
    }

};

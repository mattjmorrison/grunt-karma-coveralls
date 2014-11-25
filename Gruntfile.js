module.exports = function(grunt) {
    grunt.loadTasks('tasks');
    grunt.initConfig({
        coveralls: {
            options: {
                coverage_dir: 'dummy/test/'
            }
        }
    });
};

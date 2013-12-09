var should = require('should');
var sinon = require('sinon');
var request = require('request');
var grunt = require('grunt');
var sut = require('../tasks/main');
var assert = require('assert');

describe("grunt-karma-coveralls", function(){

  beforeEach(function(){
    sut(grunt);
  });

  it("shows error message when lcov data does not exist", function(done){
    grunt.config('coveralls', {options: {coverage_dir: './dummy/asdf'}});
    grunt.task.run('coveralls');
    grunt.task.start();
    done();
  });

});

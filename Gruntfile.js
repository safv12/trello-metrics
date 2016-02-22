'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');


  grunt.initConfig({
    express: {
      dev: { options: { script: 'server/server.js' }},
      prod: { options: { script: 'server/server.js' }}
    },
    open: { dev: { path: 'http://localhost:9001' }},
    watch: {
      options: { livereload: true },
      express: {
        files: ['server/**/*.js'],
        tasks: ['express:dev', 'wait'],
        options: { livereload: true, spawn: false }
      }
    },
    jshint: {
      options: { jshintrc: '.jshintrc' },
      all: ['Gruntfile.js', 'server/**/*.js']
    },
    mochaTest: { files: ['server/**/*.spec.js'] }
  });


  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');
    var done = this.async();
    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('serve', [ 'jshint', 'express:dev', 'open:dev', 'watch']);
  grunt.registerTask('test', ['mochaTest']);
};

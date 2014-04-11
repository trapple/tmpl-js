module.exports = function (grunt) {
  require('load-grunt-config')(grunt);

  grunt.registerTask("default", ["connect", "watch"]);
  grunt.registerTask("develop", ["jshint", "jst", "concat", "simplemocha", "jsbeautifier", "copy"]);
};

module.exports = function (grunt) {
  require('load-grunt-config')(grunt);

  grunt.registerTask("default", ["connect", "watch"]);
  grunt.registerTask("develop", ["jshint", "jst", "concat", "karma", "jsbeautifier", "copy", "simplemocha:e2e"]);
};

module.exports = {
  dev: {
    files: ["src/**/*.js", "src/tmpl/*.html", "spec/**/*.js", "Gruntfile.js", "package.json", "grunt/*"],
    tasks: ["develop"]
  },
  options: {
    livereload: true
  }
};

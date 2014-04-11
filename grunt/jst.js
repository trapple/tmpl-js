module.exports = {
  options: {
    processName: function (filename) {
      return filename.match(/tmpl\/(.+)\.html$/)[1];
    },
  },
  dist: {
    files: {
      "assets/jst/template.js": ["src/tmpl/template.html"]
    }
  }
};

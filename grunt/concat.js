module.exports = {
  "my-app": {
    src: [
      "assets/js/intro.js",
      "src/js/app.js",
      "assets/js/outro.js",
      "assets/jst/template.js"
    ],
    dest: "dest/myapp.js",
    nonull: true,
  },
  options: {
    stripBanners: true,
    banner: '/*\n * <%= package.name %>\n * Version: <%= package.version %>\n * LastModified: <%= grunt.template.today("yyyy/mm/dd HH:MM") %>\n */\n'
  }
};

module.exports = {
    develop: {
        files: [{
            expand: true,
            cwd: "dest/",
            src: "myapp.js",
            dest: "app/js/"
        }]
    }
};

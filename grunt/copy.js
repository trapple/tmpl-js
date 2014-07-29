module.exports = {
    develop: {
        files: [{
            expand: true,
            cwd: "dist/",
            src: "myapp.js",
            dest: "app/js/"
        }]
    }
};

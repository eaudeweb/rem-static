module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "dist/main.css": "src/less/main.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: 'src/js/main.js',
                tasks: ['browserify'],
                options: {
                    interrupt: true,
                },
            },

        },
    });
    grunt.registerTask('default', ['less', 'watch']);
};

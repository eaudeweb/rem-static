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
				concat: {
					options: {
						separator: ';',
					},
					dist: {
						src: 'src/js/*.js',
						dest: 'dist/main.js',
					},
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
                files: 'src/js/*.js',
                tasks: ['concat'],
            },

        },
    });
    grunt.registerTask('default', ['less', 'concat', 'watch']);
};

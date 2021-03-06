module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2,
										sourceMap: true
                },
                files: {
                    "css/main.css": "src/less/main.less" // destination file and source file
                }
            }
        },
				concat: {
					basic: {
						src: 'src/js/**',
						dest: 'js/main.js',
					},
				},
				// copy: {
				// 	main: {
				// 		files: [
				// 			// includes files within path
				// 			{expand: true,flatten: true, src: ['src/js/**.js'], dest: 'js'},
				// 		],
				// 	},
				// },
        watch: {
            styles: {
                files: ['src/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: 'src/js/*',
                tasks: ['concat'],
            },

        },
    });
    grunt.registerTask('default', ['less', 'concat', 'watch']);
};

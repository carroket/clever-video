module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		browserSync: {
			dev: {
				bsFiles: {
					src: 'build/demo/**.*'
				},
				options: {
					watchTask: true,
					server: 'build/demo',
					index: 'video.html'
				}
			}
		},

		clean: {
			build: {
				src: "build"
			}
		},

		copy: {
			demo: {
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['demo/**/*.html', 'demo/**/*.css', 'demo/**/*.js'],
						dest: 'build/'
					},
					{
						expand: true,
						cwd: 'source/',
						src: ['clever-video.js'],
						dest: 'build/demo/_assets/scripts/'
					}
				],
				options: {
					noProcess: ['**/*.css', '**/*.js'],
					process: function(content, srcpath) {
						grunt.log.writeln('Modifying path to clever-video.js in build copy of ' + srcpath + '.');
						return content.replace('../clever-video.js', './_assets/scripts/clever-video.js');
					}
				}
			},
			library: {

				expand: true,
				cwd: 'source/',
				src: ['clever-video.js'],
				dest: 'build/'
			}
		},

		uglify: {
			build: {
				files: {
					'build/clever-video.min.js': ['source/clever-video.js']
				}
			}
		},

		watch: {
			demo: {
				files: 'source/demo/**/*.*',
				tasks: ['copy:demo']
			},
			library: {
				files: 'source/*.js',
				tasks: ['copy:library', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['clean', 'copy', 'uglify']);

	grunt.registerTask('default', ['build']);
};
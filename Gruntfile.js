module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['clean', 'copy', 'uglify']);

	grunt.registerTask('default', ['build']);
};
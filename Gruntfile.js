module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: {
				src: "build"
			}
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'source/',
						src: ['demo/**/*.html', 'demo/**/*.css', 'demo/**/*.js', 'clever-video.js'],
						dest: 'build/'
					}
				]
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
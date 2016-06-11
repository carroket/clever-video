module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		open: {
			demo: {
				path: 'http://localhost:<%= serve.options.port %>/video.html'
			}
		},

		serve: {
			options: {
				port: 9000,
				serve: {
					path: 'build/client/demo'
				}
			}
		},

		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('default', ['demo']);

	grunt.registerTask('demo', ['open:demo', 'serve']);
};
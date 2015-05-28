module.exports = function(grunt) {



	grunt.initConfig({

		uglify: {
			js: {
				options: {
					banner: "/* Created by Art-Sites Studio art-sites.org */"
				},
				files: {
					'assets/jquery.mult.min.js': ['assets/jquery.mult.js']
				}
			}
		}

	});


	/*---------------------- Load components --------------------------*/

	grunt.loadNpmTasks("grunt-contrib-uglify");


	grunt.registerTask('default', ["uglify"]);



}
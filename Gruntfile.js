module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				files: [{
					src: [
						'lib/js/wysihtml5-0.3.1.js',
						'src/bootstrap-wysihtml5.js',
					],
					dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
				}]
			}
		},
		uglify: {
			options: {
				banner: '/* Name: <%= pkg.name %> <%= pkg.version %>\n' +
					' * Date: <%= grunt.template.today("yyyy-mm-dd") %> \n' + 
					'*/\n'
			},
			build: {
				files: [{
					src: 'dist/<%= pkg.name %>-<%= pkg.version %>.js',
					dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.min.js',
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

};
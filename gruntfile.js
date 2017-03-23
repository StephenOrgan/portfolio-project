module.exports = function(grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 675,
                        quality: 90
                        }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/',
                    dest: 'img/'
                }]
            }
        },
    });
grunt.loadNpmTasks('grunt-responsive-images');
grunt.registerTask('default', ['responsive_images']);
};
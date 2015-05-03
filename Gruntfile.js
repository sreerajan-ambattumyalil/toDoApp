module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    copy :{ 
      main : 
      {
        files: [
        //Copy external javascript files
        {src: 'bower_components/angular/angular.js', dest: 'build/app/bower_components/angular/angular.js'},
        {src: 'bower_components/jquery/dist/jquery.js', dest: 'build/app/bower_components/jquery/dist/jquery.js'},
        {src: 'bower_components/requirejs/require.js', dest: 'build/app/bower_components/requirejs/require.js'},
        {src: 'bower_components/bootstrap/dist/js/bootstrap.js', dest: 'build/app/bower_components/bootstrap/dist/js/bootstrap.js'},
        {src: 'bower_components/bootstrap/dist/css/bootstrap.css', dest: 'build/app/bower_components/bootstrap/dist/css/bootstrap.css'},
        {src: 'bower_components/lazy.js/lazy.js', dest: 'build/app/bower_components/lazy.js/lazy.js'},
        //Copy images
        {expand: true, cwd:'images/', src: ['**/*'], dest: 'build/app/images/'},
        //Copy source files
        {src: 'index.js', dest: 'build/app/index.js'},
        {src: 'index.html', dest: 'build/app/index.html'},
        {src: 'index.css', dest: 'build/app/index.css'},
        {src: 'package.json', dest: 'build/app/package.json'},
        {src: 'store/items.json', dest: 'build/app/store/items.json'},
        {expand: true, cwd:'js/', src: ['**/*'], dest: 'build/app/js/'},
        ] 
      },
      deploy : {
        files: [
        {expand: true, cwd:'build/', src: ['**/*'], dest: '/c/Users/sreeraja/AppData/Roaming/npm/node_modules/electron-prebuilt/dist/resources/'}
        ]
      }
    }
  });
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.registerTask('default', ['copy']);
}

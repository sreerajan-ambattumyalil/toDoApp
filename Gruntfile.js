module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-electron-installer');
  // Project configuration.
  grunt.initConfig({
    'create-windows-installer' : {
      appDirectory: '/home/bandido/Experiments/electron/toDo',
      outputDirectory: '/home/bandido/Experiments/electron/toDo/installer',
      authors: 'Sreerajan Ambattumyalil',
      exe: 'toDoApp.exe'
    }
  });

  grunt.registerTask('default', ['create-windows-installer']);
}

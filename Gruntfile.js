var pkg = require('./package.json');

module.exports = function(grunt) {
    
    var defaultTasks = [
        require('./grunt_tasks/clean.js')(pkg),
        require('./grunt_tasks/shell.js')(pkg),
        require('./grunt_tasks/uglify.js')(pkg),
        require('./grunt_tasks/copy.js')(pkg),
        require('./grunt_tasks/watch.js')
    ];
    var config = {};
    defaultTasks.forEach(function(task) { 
        config[task.taskName] = task.task;
        grunt.loadNpmTasks(task.npmTaskName);
    });
	grunt.initConfig(config);
    
	grunt.registerTask('default', ['clean:build', 'shell:tscClient', 'shell:webpack', 'uglify', 'copy:public', 'shell:tscServer', 'shell:browse']);	
    grunt.registerTask('deploy', ['clean:build', 'ts', 'uglify', 'clean:deploy', 'copy:deploy', 'shell:deploy']);
    grunt.registerTask('dev', ['default', 'watch']);    
}
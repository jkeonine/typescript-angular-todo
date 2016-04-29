module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    
    var defaultTasks = [
        require('./grunt_tasks/clean.js')(pkg),
        require('./grunt_tasks/shell.js')(pkg),
        require('./grunt_tasks/uglify.js')(pkg),
        require('./grunt_tasks/copy.js')(pkg)
    ];
    var config = {};
    defaultTasks.forEach(function(task) {
        setTask(config, task, grunt); 
    });
	grunt.initConfig(config);
    
    var runTasks = getRunTasks(config);
	grunt.registerTask('default', runTasks);	
    
    var copy = require('./grunt_tasks/copy.js')(pkg);
    setTask(config, copy, grunt);
    grunt.registerTask('deploy', ['clean:build', 'ts', 'uglify', 'clean:deploy', 'copy:deploy', 'shell:deploy']);
    
    var watch = require('./grunt_tasks/watch.js');
    setTask(config, watch, grunt);
    grunt.registerTask('dev', ['default', watch.taskName]);    
}

function getRunTasks(config) {
    var runTasks = Object.keys(config);
    var i = runTasks.indexOf('clean');
    runTasks[i] = 'clean:build';
    
    i = runTasks.indexOf('shell');
    runTasks[i] = 'shell:tsc';
    
    i = runTasks.indexOf('copy');
    runTasks[i] = 'copy:public';
    
    runTasks.push('shell:browse');
    
    return runTasks;
}

function setTask(config, task, grunt) {
    config[task.taskName] = task.task;
    grunt.loadNpmTasks(task.npmTaskName);
}
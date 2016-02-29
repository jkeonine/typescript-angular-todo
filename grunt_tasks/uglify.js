module.exports = function(pkg) {
    return {
        taskName: 'uglify',
        npmTaskName: 'grunt-contrib-uglify',
        task: {
            my_target: {
                files: {'js/todo.min.js': [pkg.tsOutput]}
            }
        }  
    };
}
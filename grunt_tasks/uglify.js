module.exports = {
    taskName: 'uglify',
    npmTaskName: 'grunt-contrib-uglify',
    task: {
        my_target: {
            files: {'js/todo.min.js': ['js/todo.js']}
        }
    }
}
module.exports = function(destFolder) {
    return {
        taskName: 'copy',
        npmTaskName: 'grunt-contrib-copy',
        task: {
            deploy: {
                files: [
                    {expand: true, src: ['Procfile'], dest: destFolder, filter: 'isFile'},
                    {expand: true, src: ['js/todo.min.js'], dest: destFolder, filter: 'isFile'},
                    {expand: true, src: ['index.html'], dest: destFolder, filter: 'isFile'},
                    {expand: true, src: ['bower.json'], dest: destFolder, filter: 'isFile'},
                    {expand: true, src: ['package.json'], dest: destFolder, filter: 'isFile'},
                    {expand: true, src: ['server.js'], dest: destFolder, filter: 'isFile'}
                ],
            }
        }
    }
};
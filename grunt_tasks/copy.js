module.exports = function(pkg) {
    return {
        taskName: 'copy',
        npmTaskName: 'grunt-contrib-copy',
        task: {
            deploy: {
                files: [
                    {expand: true, src: ['Procfile'], dest: pkg.deploymentFolder, filter: 'isFile'},
                    {expand: true, src: [pkg.uglifyOutput], dest: pkg.deploymentFolder, filter: 'isFile'},
                    {expand: true, src: ['index.html'], dest: pkg.deploymentFolder, filter: 'isFile'},
                    {expand: true, src: ['bower.json'], dest: pkg.deploymentFolder, filter: 'isFile'},
                    {expand: true, src: ['package.json'], dest: pkg.deploymentFolder, filter: 'isFile'},
                    {expand: true, src: ['server.js'], dest: pkg.deploymentFolder, filter: 'isFile'}
                ],
            }
        }
    }
};
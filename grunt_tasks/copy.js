var publicDest = './public';

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
                    {expand: true, src: ['js/server.js'], dest: pkg.deploymentFolder, filter: 'isFile'}
                ],
            },
            public: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/angular/angular.min.js'], dest: publicDest, filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/todo.min.js'], dest: publicDest, filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/todomvc-common/base.js'], dest: publicDest, filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/todomvc-common/base.css'], dest: publicDest, filter: 'isFile'},
                    {expand: true, flatten: true, src: ['node_modules/todomvc-app-css/index.css'], dest: publicDest, filter: 'isFile'}
                ]
            }
        }
    }
};
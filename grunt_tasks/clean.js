module.exports = function(pkg) {
    return {
        taskName: 'clean',
        npmTaskName: 'grunt-contrib-clean',
        task: {
            options: { force: true },
            build: ['js/**', 'public'],
            deploy: [pkg.deploymentFolder]
        }    
    };
};
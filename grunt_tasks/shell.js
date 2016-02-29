module.exports = function(pkg) {
    return {
        taskName: 'shell',
        npmTaskName: 'grunt-shell-spawn',
        task: {
            options: { stderr: false },
            browse: {
                command: 'start chrome --incognito http://localhost:500'
            },
            deploy: {
                command: [
                    'cd ' + pkg.deploymentFolder,
                    'npm install --production',
                    'node server'
                ].join('&&')
            }
        }  
    };
};
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
                    'git init',
                    'git add .',
                    'git commit -m "init"',
                    'heroku git:remote -a ' + pkg.herokuApp,
                    'git push heroku master -f'
                ].join('&&')
            },
            tscClient: {
                command: 'npm run tsc-client'
            },
            tscServer: {
                command: 'npm run tsc-server'
            }
        }  
    };
};
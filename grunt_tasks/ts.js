module.exports = function(pkg) {
    return {
        taskName: 'ts',
        npmTaskName: 'grunt-ts',
        task: {
            default: {
                //files: [{ src: ['_references.ts','src/**/*.ts'], dest: 'js/test.js' }]
                files: [{ src: ["src/todo/app.module.ts"], dest: pkg.tsOutput }]
            }			
        }    
    };
}
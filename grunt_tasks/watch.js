module.exports = {
    taskName: 'watch',
    npmTaskName: 'grunt-contrib-watch',
    task: {
      express: {
        files: ['server/**/*.ts', 'src/**/*.ts'],
        tasks: ['default'],
        options: {              //Server options
          spawn: false,         //Must have for reload
          livereload: true      //Enable LiveReload
        }
      }  
    }
}
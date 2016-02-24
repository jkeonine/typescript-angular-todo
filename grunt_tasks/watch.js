module.exports = {
    taskName: 'watch',
    npmTaskName: 'grunt-contrib-watch',
    task: {
      express: {
        files: ['src/**/*.ts'],
        tasks: ['default'],
        options: {              //Server options
          spawn: false,         //Must have for reload
          livereload: true      //Enable LiveReload
        }
      }  
    }
}
module.exports = {

    options: {
        livereload: true
    },
    ts: {
        files: ['<%= config.src %>/**/*.ts'],
        tasks: [
            'tslint',
            'ts',
            'clean:baseDirFile'
        ]
    },
    styles: {
        files: ['<%= config.src %>/**/*.scss'],
        tasks: [
            'sass',
            'postcss',
            'cssmin'
        ]
    },
    assets: {
        files: [
            '<%= config.src %>/<%= config.assets %>/**/*.*',
            '!<%= config.src %>/<%= config.assets %>/**/*.scss'
        ],
        tasks: [
            'copy:assets'
        ]
    },
    html: {
        files: [
            '<%= config.src %>/**/*.html'
        ],
        tasks: [
            'copy:html',
            'htmlmin'
        ]
    }

};

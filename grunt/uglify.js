module.exports = {

    bundle: {
        options: {
            sourceMap: true
        },
        files: {
            '<%= config.dist %>/vendor/bundle.js': '<%= config.dist %>/vendor/bundle.js'
        }
    }

};

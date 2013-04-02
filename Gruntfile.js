
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        cafemocha: {
            all: {
                src: '*/tests/*.spec.js'
              , options: {
                    ui: 'bdd'
                  , require: ['should']
                }
            }
          , 'sass-import': {
                src: 'sass-import/tests/*.spec.js'
              , options: {
                    ui: 'bdd'
                  , require: ['should']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cafe-mocha');

    grunt.registerTask('tests', ['cafemocha']);
};

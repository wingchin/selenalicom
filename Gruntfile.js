/*
* elsa
*
* Copyright (c) 2014 Lizzy Chin
*/
"use strict";

module.exports = function(grunt) {
  var _ = require('underscore');
  _.str = require('underscore.string');

  function pages(area) {
    var data = 'src/data/' + area + '.yml';
    var partial = 'src/templates/partials/' + area + '-post.hbs';

    return _.map(grunt.file.readYAML(data), function(n) {
      return {
        filename: _.str.slugify(n.title),
        data: n,
        content: grunt.file.read(partial)
      }
    })
  }

  // Project configuration
  grunt.initConfig({

    // Project metadata
    pkg:    grunt.file.readJSON('package.json'),
    site:   grunt.file.readYAML('config.yml'),


    // Compile and minify Less files
    less: {
      options: { compress: true },
      build: {
        src: '<%= site.src %>/assets/less/<%= pkg.name %>.less',
        dest: '<%= site.build %>/assets/css/<%= pkg.name %>.min.css'
      }
    },

    // Parse CSS and add vendor-prefixed CSS properties using the Can I Use database
    autoprefixer: {
      build: {
        src: '<%= site.build %>/assets/css/<%= pkg.name %>.min.css'
      }
    },

    // Concatenate Javascript files
    concat: {
      build: {
        src: [
          '<%= site.src %>/assets/js/bootstrap/*.js',
          '<%= site.src %>/assets/js/<%= pkg.name %>.js'
        ],
        dest: '<%= site.build %>/assets/js/<%= pkg.name %>.min.js'
      }
    },

    // Minify Javascript files with UglifyJS
    uglify: {
      build: {
        src: '<%= site.build %>/assets/js/<%= pkg.name %>.min.js',
        dest: '<%= site.build %>/assets/js/<%= pkg.name %>.min.js'
      }
    },

   // Run tasks whenever watched files change.
    watch: {
      less: {
        files: [
          '<%= site.src %>/assets/less/*.less',
          '<%= site.src %>/assets/less/custom/*.less',
        ],
        tasks: ['less', 'autoprefixer'],
        options: { spawn: false },
      },
      js: {
        files: ['<%= site.src %>/assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: { spawn: false },
      },
    },

    // Use Assemble to build HTML from templates and data
    assemble: {
      options: {
        flatten:    true,
        site:       '<%= site %>',
        assets:     '<%= site.build %>/assets',
        data:       '<%= site.data %>/*.{yml,json}',
        layoutdir:  '<%= site.layouts %>',
        partials:   '<%= site.partials %>/**/*.hbs',
        layout:     'base.hbs',
        helpers:    ['handlebars-helper-*']
      },

      // Build main pages
      site: {
        src: '<%= site.pages %>/*.hbs',
        dest: '<%= site.build %>'
      },
      filmography: {
        options: {
          pages: pages('filmography')
        },
        src: '!*',
        dest: '<%= site.build %>/filmography/'
      },
      beauty: {
        options: {
          pages: pages('beauty')
        },
        src: '!*',
        dest: '<%= site.build %>/beauty/'
      }
    },

     // Start a static web server
    connect: {
      build: {
        options: {
          port: 8000,
          keepalive: true
        }
      }
    },

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks when we type "grunt" into the terminal.
  grunt.registerTask('default', [ 'watch' ]);
}
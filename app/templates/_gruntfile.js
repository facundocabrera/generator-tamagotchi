// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

'use strict';

//
// Helper for connect. The idea behind it is to load a middle with a given
// directory.
//
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

<% if (enableReverseProxy) { %>
//
// Helper for reverse proxy
//
var proxyMiddleware = require('grunt-connect-proxy/lib/utils').proxyRequest;
<% } %>

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    tmp: '.tmp',
    dist: 'dist'<%= enableReverseProxy ? ',' : '' %>
    <% if (enableReverseProxy) { %>
    remotes: {
      proxies: [{
        context: '<%= reverseProxy.context %>',
        host: '<%= reverseProxy.host %>',
        port: <%= reverseProxy.port %>,
        https: <%= reverseProxy.https ? 'true' : 'false' %>
      }],
      appendProxies: false
    }<% } %>
  };

  grunt.initConfig({
    yeoman: yeomanConfig,

    ////
    // Watch
    ////
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['<%%= yeoman.app %>/*.html']
      },
      js: {
        files: ['<%%= yeoman.app %>/**/*.js', '!<%%= yeoman.app %>/vendor/**/*.js'],
        tasks: ['jshint']
      },
      less: {
        files: [
          '<%%= yeoman.app %>/assets/less/**/*.less',
          '<%%= yeoman.app %>/components/**/*.less'
        ],
        tasks: ['less']
      }
    },

    ////
    // Less
    ////
    less: {
      dist: {
        options: {
          yuicompress: false
        },
        files: {
          '<%%= yeoman.tmp %>/assets/css/main.css': '<%%= yeoman.app %>/assets/less/application.less'
        }
      }
    },
    ////
    // @depends less
    //
    // cssmin (optimice main.css one file + minification)
    ////
    cssmin: {
      dist: {
        options: {
          report: 'gzip'
        },
        files: {
          '<%%= yeoman.dist %>/css/main.css': '<%%= yeoman.tmp %>/assets/css/main.css'
        }
      }
    },

    ////
    // Clean
    ////
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%%= yeoman.tmp %>',
            '<%%= yeoman.dist %>/*',
            '!<%%= yeoman.dist %>/.git*'
          ]
        }]
      }
    },

    ////
    // JSHint
    ////
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%%= yeoman.app %>/**/*.js',
        '!<%%= yeoman.app %>/vendor/**/*',
        'test/spec/{,*/}*.js'
      ]
    },

    ////
    // Rjs build process
    ////
    requirejs: {
      dist: {
        // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        options: {
          // `name` and `out` is set by grunt-usemin
          baseUrl: yeomanConfig.app,
          optimize: 'none',
          // TODO: Figure out how to make sourcemaps work with grunt-usemin
          // https://github.com/yeoman/grunt-usemin/issues/30
          // generateSourceMaps: true,
          // required to support SourceMaps
          // http://requirejs.org/docs/errors.html#sourcemapcomments
          preserveLicenseComments: false,
          useStrict: true
          //uglify2: {} // https://github.com/mishoo/UglifyJS2
        }
      }
    },

    ////
    // Asset Revving
    // @see https://github.com/cbas/grunt-rev
    ////
    rev: {
      js: {
        files: {
          src: ['<%%= yeoman.dist %>/js/**/*.js']
        }
      },
      css: {
        files: {
          src: ['<%%= yeoman.dist %>/css/**/*.css']
        }
      },
      images: {
        files: {
          src: ['<%%= yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
        }
      }
    },

    ////
    // usemin plugin
    ////
    useminPrepare: {
      options: {
        dest: '<%%= yeoman.dist %>'
      },
      html: '<%%= yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        dirs: ['<%%= yeoman.dist %>']
      },
      html: ['<%%= yeoman.dist %>/*.html'],
      css: ['<%%= yeoman.dist %>/css/*.css']
    },

    ////
    // Images optimizations
    ////
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%%= yeoman.dist %>/images'
        }, {
          expand: true,
          cwd: '<%%= yeoman.tmp %>/assets/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%%= yeoman.dist %>/images'
        }, {
          expand: true,
          cwd: '<%%= yeoman.tmp %>/assets/images',
          src: '{,*/}*.svg',
          dest: '<%%= yeoman.dist %>/images'
        }]
      }
    },

    ////
    // HTML minification process.
    // https://github.com/yeoman/grunt-usemin/issues/44
    // @important This MUST BE executed at the end as part of the
    //            minification process. For more information read the copy
    //            and paste docblock.
    ////
    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          collapseWhitespace: false,
          collapseBooleanAttributes: false,
          removeAttributeQuotes: false,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: {
          '<%%= yeoman.dist %>/index.html': '<%%= yeoman.dist %>/index.html'
        }
      }
    },

    ////
    // Bower conector with Rjs configurations.
    //
    // @important This doesn't work at all. At the end all the modules
    //            configuration will be run by hand.
    ////
    bower: {
      options: {
        exclude: ['modernizr']
      },
      all: {
        rjsConfig: '<%%= yeoman.app %>/main.js'
      }
    },

    ////
    // Copy and Paste phase.
    //
    // @important This phase needs to be executed before usemin and htmlmin
    //            The order MUST BE:
    //              1. copy
    //              2. usemin (prepare the configurations and replace src)
    //              3. htmlmin (finally optimize the index.html file)
    ////
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.app %>',
          dest: '<%%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt,html}',
            'assets/images/{,*/}*.{webp,gif}',
            'assets/fonts/*'
          ]
        }]
      }
    },

    ////
    // Jasmine BDD show
    ////
    jasmine: {
      all: {
        options: {
          specs: 'test/spec/{,*/}*.js'
        }
      }
    },

    ////
    // grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    ////
    connect: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          // keepalive: true,

          // Livereload needs connect to insert a Javascript snippet
          // in the pages it serves. This requires using a custom connect
          // middleware
          middleware: function(connect, options) {
            return [
              <% if (enableReverseProxy) { %>proxyMiddleware,<% } %>
              mountFolder(connect, yeomanConfig.tmp),
              mountFolder(connect, yeomanConfig.app),
              // Load the middleware provided by the livereload plugin
              // that will take care of inserting the snippet
              // Serve the project folder
              connect.static(options.base)
            ];
          }
        }<% if (enableReverseProxy) { %>,
        proxies: yeomanConfig.remotes<% } %>
      }
    }
  });

  //
  // Build Task
  //
  // @important The task build styles needs to be almost at the end because the
  //            concat configuration loaded from the html file creates a
  //            temporal file main.css inside dist/
  //
  grunt.registerTask('build', [
    'clean',
    'build-static',
    'build-images',
    'build-js',
    'build-styles',
    'build-urls',
    'htmlmin'
  ]);

      // build static assets
      grunt.registerTask('build-static', [
        'copy'
      ]);

      // build js
      grunt.registerTask('build-js', [
        'jshint',        // js validation
        'useminPrepare', // prepare configuration for cssmin, concat, uglify and requirejs
        'requirejs',     // require bundling
        'concat',        // copy all the js files to dist
        'uglify',        // minify js files
        'rev:js'         // js version
      ]);

      // build styles
      grunt.registerTask('build-styles', [
        'less',   // less to css
        'cssmin', // css minification
        'rev:css' // css version
      ]);

      // build images
      grunt.registerTask('build-images', [
        'imagemin',
        'svgmin',
        'rev:images'
      ]);

      // update the urls to the new resources (optimiced ones)
      grunt.registerTask('build-urls', [
        'useminPrepare',
        'usemin'
      ]);

  // Local server with livereload by default
  grunt.registerTask('server', [
    <% if (enableReverseProxy) { %>'configureProxies:all.proxies',<% } %>
    'connect',
     // Starts monitoring the folders and keep Grunt alive
    'watch'
  ]);

};

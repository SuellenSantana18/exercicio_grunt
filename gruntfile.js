

module.exports = function(grunt) {
  grunt.initConfig({
    // suas tarefas aqui (ex: less, uglify, etc)
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'dist/styles/main.min.css': 'src/styles/main.less'
        }
      }
    },
      watch : {
        less: {
          files: ["src/styles/**/*.less"],
          tasks: ['less:development']
        },
        html: {
          files:['src/index.html'],
          tasks:['replace:dev']
        }
      },
      replace: {
        dev: {
          options: {
            patterns: [
              {
                match: 'ENDERECO_DO_CSS',
                replacement: './styles/main.css'
              },
                {
                match: 'ENDERECO_DO_JS',
                replacement: '../src/scripts/main.js'
              }
            ]
          },
          files: [
            {
              expand: true,
              flatten: true,
              src: ['src/index.html'],
              dest: 'dev/'
            }
          ]

        },
         dist: {
          options: {
            patterns: [
              {
                match: 'ENDERECO_DO_CSS',
                replacement: './styles/main.min.css'
              },
                 {
                match: 'ENDERECO_DO_JS',
                replacement: './scripts/main.min.js'
              }
            ]
          },
          files: [
            {
              expand: true,
              flatten: true,
              src: ['prebuild/index.html'],
              dest: 'dist/'
            }
          ]

        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true,
          },
          files: {
            'prebuild/index.html': 'src/index.html'
          }
        }
      },
      clean: ['prebuild'],
 uglify: {
  target: {
    files: {
      'dist/scripts/main.min.js': 'src/scripts/main.js'
    }
  }
}

  });

  
  // Exemplo de tarefa dummy só pra testar


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default',['watch']);
   grunt.registerTask('build',['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
};

//feramenta para automacao de tarefas complia sass e less
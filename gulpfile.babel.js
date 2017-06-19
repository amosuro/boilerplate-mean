import gulp from 'gulp';
import watch from 'gulp-watch';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import minify from 'gulp-minifier';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';

class GulpFile {
  constructor() {
    gulp.task("scripts", () => this.compileJavascript());
    gulp.task("styles", () => this.compileCss());
    gulp.task("watch", ['scripts', 'styles'], () => this.watchAssets());
    gulp.task("default", ['scripts', 'styles', 'watch']);
  }

  compileJavascript() {
    return browserify({entries: './app/app.module.js', debug: true})
      .transform("babelify", {presets: ["es2015"]})
      .bundle()
      .pipe(source('scripts.min.js'))
      .pipe(buffer())
      .pipe(minify({minify: true, minifyJS: true}))
      .pipe(concat('scripts.min.js'))
      .pipe(gulp.dest('./public/js'))
  }

  compileCss() {
    return gulp.src(['./app/assets/css/base.scss'])
      .pipe(sass({includePaths: [
        './node_modules/foundation-sites/scss',
        './node_modules/normalize.css'
      ]}).on('error', sass.logError))
      .pipe(concat('styles.css'))
      .pipe(minify({minify: true, minifyCSS: true}))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('./public/css'))
  }

  watchAssets() {
    gulp.watch(['./app/assets/js/*.js', './app/**/**/*.js'], ['scripts']);
    gulp.watch(['./app/assets/css/*.scss', './app/components/**/*.scss', './app/components/**/**/*.scss'], ['styles']);

    return
  };
}

new GulpFile();

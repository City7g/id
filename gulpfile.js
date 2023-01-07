import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import nodeSass from 'sass'
import pug from 'gulp-pug'
import webpack from 'webpack-stream'
import browsersync from 'browser-sync'

const sass = gulpSass(nodeSass)
browsersync.create()

const browserSync = () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    notify: false
  },
    function (err, bs) {
      bs.addMiddleware("*", function (req, res) {
        res.writeHead(302, {
          location: "404.html"
        });
        res.end("Redirecting!");
      });
    })

  gulp.watch('./dist', browserSync.reload)
}

const html = () => {
  return gulp
    .src('./src/pug/page/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const page = () => {
  return gulp
    .src('./src/pug/page/*.pug', { since: gulp.lastRun(page) })
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const style = () => {
  return gulp
    .src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const script = () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'main.js',
        },
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const image = () => {
  return gulp.src('./src/img/**/*').pipe(gulp.dest('./dist/img'))
}

const font = () => {
  return gulp.src('./src/font/**/*').pipe(gulp.dest('./dist/font'))
}

const support = () => {
  return gulp.src('./src/support/**/*').pipe(gulp.dest('./dist'))
}

export { html, style, script, image, font, support, browserSync }

export default () => {
  html()
  style()
  script()
  image()
  font()
  support()
  browserSync()
  gulp.watch(['./src/pug/layout/*.pug', './src/pug/components/*.pug'], html)
  gulp.watch(['./src/pug/page/*.pug'], page)
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./src/js/**/*.js', script)
  gulp.watch('./src/img/**/*', image)
  gulp.watch('./src/font/**/*', font)
  gulp.watch('./src/support/**/*', support)
}

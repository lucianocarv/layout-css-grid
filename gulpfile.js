const { src, dest, watch, parallel, symlink, series } = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const watcherCSS = watch(['src/styles/css/*.css'])
let watcherJS = watch(['src/js/*.js'])

watcherCSS.on(
  'change',
  (exports.default = parallel(function Css() {
    return src('src/styles/css/*.css')
      .pipe(uglifycss())
      .pipe(
        rename({
          extname: '.min.css',
        })
      )
      .pipe(dest('src/styles/css/min'))
  }))
)

watcherJS.on(
  'change',
  (exports.default = series(function JS() {
    return src('src/js/*.js')
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(dest('src/js/min'))
  }))
)

watcherJS = watch(['src/js/components/*.js'])

watcherJS.on(
  'change',
  (exports.default = series(function JS() {
    return src('src/js/components/*.js')
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(dest('src/js/min'))
  }))
)

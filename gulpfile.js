// https://stackoverflow.com/questions/56941110/not-able-to-convert-images-to-webp-using-imagemin-webp
// gulp webp

const gulp                   = require("gulp");
const imagemin               = require("gulp-imagemin");
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant       = require('imagemin-pngquant');
const extReplace             = require("gulp-ext-replace");
const webp                   = require("imagemin-webp");

// Simple task to convert png to webp
gulp.task("webp", function() {
  const stream = gulp
  .src("images/**/*.{jpg,png}")
  .pipe(imagemin([
    imageminJpegRecompress({
      loops: 4,
      min: 70,
      max: 80,
      quality: 'high' 
    }),
    imageminPngquant({
      quality: [0.7, 0.8]
    }),
    webp({ quality: 70 })
    ]))
  .pipe(extReplace(".webp"))
  .pipe(gulp.dest("webp"));
  return stream;
});
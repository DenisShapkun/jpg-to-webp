// https://stackoverflow.com/questions/56941110/not-able-to-convert-images-to-webp-using-imagemin-webp
// gulp webp

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const extReplace = require("gulp-ext-replace");
const webp = require("imagemin-webp");

// Simple task to convert png to webp
// gulp.task("webp", function () {
//   const stream = gulp
//     .src("images/**/*.{jpg,png}")
//     .pipe(imagemin([
//       imageminJpegRecompress({
//         loops: 4,
//         min: 80,
//         max: 90,
//         quality: 'high'
//       }),
//       imageminPngquant({
//         quality: [0.8, 0.9]
//       }),
//       webp({ quality: 90 })
//     ]))
//     .pipe(extReplace(".webp"))
//     .pipe(gulp.dest("webp"));
//   return stream;
// });

gulp.task("webp", function () {
  const stream = gulp
    .src("images/**/*.{jpg,png}")
    .pipe(
      imagemin({
        verbose: true,
        plugins: webp({ quality: 90 })
      })
    )
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("webp"));
  return stream;
});

// gulp.task("webp", function() {
//   const stream = gulp
//   .src("images/**/*.{jpg,png}")
//   .pipe(imagemin([
//     imageminJpegRecompress({
//       loops: 4,
//       min: 80,
//       max: 90,
//       quality: 'high' 
//     }),
//     imageminPngquant({
//       quality: [0.8, 0.9]
//     }),
//     webp({ quality: 90 })
//     ]))
//   .pipe(extReplace(".webp"))
//   .pipe(gulp.dest("webp"));
//   return stream;
// });
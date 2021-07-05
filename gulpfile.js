// https://stackoverflow.com/questions/56941110/not-able-to-convert-images-to-webp-using-imagemin-webp
// gulp images:webp

const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const extReplace = require("gulp-ext-replace");
const webp = require("imagemin-webp");

// Simple task to convert png to webp
gulp.task("images:webp", function() {
  const stream = gulp
    .src("./images/**/*")
    .pipe(
      imagemin({
        verbose: true,
        plugins: webp({ quality: 75 })
      })
    )
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("./webp"));
  return stream;
});
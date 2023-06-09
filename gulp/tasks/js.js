import webpack from "webpack-stream";
import babel from "gulp-babel";

export const js = () => {
  return app.gulp
    .src(app.path.src.js /* , { sourcemaps: app.isDev } */)
    /* .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>",
        })
      )
    ) */
    // .pipe(app.plugins.if(app.isBuild, babel()))
    .pipe(
      webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
          filename: "main.js",
        },
      })
    )
    // .pipe(babel())
    .pipe(app.gulp.dest(app.path.build.js /* , {sourcemaps: app.isDev} */))
    .pipe(app.plugins.browsersync.stream());
};

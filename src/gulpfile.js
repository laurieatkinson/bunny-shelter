/// <binding AfterBuild='copy-dependencies' />
var gulp = require('gulp');

var paths = {
    node_modules: "node_modules/",
    lib: "lib/"
};

gulp.task("copy", function () {
    var from_files = {
        //"angular": "@angular/**/*.js",
        //"core": "core-js/**/*.js",
        //"systemjs": "systemjs/**/*.js",
        //"es6-shim": "es6-shim/**/*.js",
        //"zone": "zone.js/**/*.js",
        //"reflect-metadata": "reflect-metadata/**/*.js",
        //"rxjs": "rxjs/**/*.js",
        //"angular2-in-memory-web-api": "angular2-in-memory-web-api/**/*.js",
        "bootstrap": "bootstrap/dist/js/*.js",
        "jquery": "jquery/jquery*.{js,map}"
    }

    for (var dir in from_files) {
        gulp.src(paths.node_modules + from_files[dir])
          .pipe(gulp.dest(paths.lib + dir));
    }

    gulp.src('node_modules/bootstrap/dist/css/*.{css,map}')
        .pipe(gulp.dest('content/css'));
    gulp.src('node_modules/bootstrap/dist/fonts/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest('content/fonts'));
});

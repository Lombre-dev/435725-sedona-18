"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
// var posthtml = require("posthtml");
var svgstore = require("gulp-svgstore");
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/**/icon-*.svg", gulp.series("make-icons", "refresh"));
  gulp.watch("source/*.html").on("change", gulp.series("make-htmls", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("optimize-imgs", function () {
  return gulp.src("source/img/**/*.{png,jpg,jpeg,svg}")
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("make-webps", function () {
  return gulp.src("source/img/**/*.{png,jpg,jpeg}")
    .pipe(webp({ quality: 95 }))
    .pipe(gulp.dest("build/img"))
});

gulp.task("make-icons", function () {
  return gulp.src([
    "source/img/**/icon-*.svg",
    "source/img/copyright/logo-htmlacademy.svg"
  ])
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("icons.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("make-htmls", function () {
  return gulp.src("source/*.html")
    // .pipe(posthtml([include()]))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src(
    [
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**/*.{png,jpg,jpeg,svg,webp}",
      "source/js/**/*.js",
      "source/*.ico"
    ],
    {
      base: "source"
    }
  )
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "make-webps",
  "optimize-imgs",
  "make-icons",
  "make-htmls"
));

gulp.task("start", gulp.series("build", "server"));

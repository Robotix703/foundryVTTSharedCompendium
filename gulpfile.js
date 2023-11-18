const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');

function cleanAbstractDonjon() {
	return del('abstractdonjon/build/**', {force:true});
}

function createZipAbstractDonjon() {
	return gulp.src(['abstractdonjon/*', '!abstractdonjon/build/*', '!abstractdonjon/build'])
		.pipe(zip('download.zip'))
		.pipe(gulp.dest('abstractdonjon/build'))
}

/* ----------------------------------------- */
/*  Export Tasks
/* ----------------------------------------- */

exports.abstractdonjon = gulp.series(
	cleanAbstractDonjon,
	createZipAbstractDonjon
);
const gulp = require('gulp');
const zip = require('gulp-zip');
const del = require('del');

// Abstract Donjon
function cleanAbstractDonjon() {
	return del('abstractdonjon/build/**', {force:true});
}
function createZipAbstractDonjon() {
	return gulp.src(['abstractdonjon/*', '!abstractdonjon/build/*', '!abstractdonjon/build'])
		.pipe(zip('download.zip'))
		.pipe(gulp.dest('abstractdonjon/build'))
}
exports.abstractdonjon = gulp.series(
	cleanAbstractDonjon,
	createZipAbstractDonjon
);

// Stargate Coalition
function cleanStargateCoalition() {
	return del('stargatecoalition/build/**', {force:true});
}
function createZipStargateCoalition() {
	return gulp.src(['stargatecoalition/*', '!stargatecoalition/build/*', '!stargatecoalition/build'])
		.pipe(zip('download.zip'))
		.pipe(gulp.dest('stargatecoalition/build'))
}
exports.stargatecoalition = gulp.series(
	cleanStargateCoalition,
	createZipStargateCoalition
);
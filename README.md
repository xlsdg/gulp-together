# gulp-together [![Build Status](https://travis-ci.org/xlsdg/gulp-together.svg?branch=master)](https://travis-ci.org/xlsdg/gulp-together)

> My majestic gulp plugin


## Install

```
$ npm install --save-dev gulp-together
```


## Usage

```js
const gulp = require('gulp');
const together = require('gulp-together');

gulp.task('default', () => {
	gulp.src('src/file.ext')
		.pipe(together())
		.pipe(gulp.dest('dist'))
);
```


## API

### together([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [xLsDg](https://github.com/xlsdg/gulp-together)

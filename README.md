# gulp-together

> Streaming concat package for gulp


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
		.pipe(together(['package-name']))
		.pipe(gulp.dest('dist'));
);
```


## API

### together(fileArray)

#### fileArray

Type: `array`<br>


## License

MIT © [xLsDg](https://github.com/xlsdg/gulp-together)

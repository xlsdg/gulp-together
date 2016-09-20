'use strict';

var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var PluginError = gutil.PluginError;
var File = gutil.File;

module.exports = function (fileArray, opts) {
    if (!fileArray) {
        throw new PluginError('gulp-together', 'Missing fileArray option for gulp-together');
    }

    if (!(fileArray instanceof Array)) {
        throw new PluginError('gulp-together', 'Error fileArray option for gulp-together');
    }

    opts = opts || {};

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new PluginError('gulp-together', 'Streaming not supported'));
            return;
        }

        try {
            var cwd = process.cwd();
            var contents = fileArray.map(function(file) {
                var modPath = cwd + '/node_modules/' + file;
                var modFile = modPath + '/' + require(modPath + '/package.json').main;
                return String(fs.readFileSync(modFile, 'utf8'));
            });

            file.contents = new Buffer(contents.join('') + file.contents.toString());
            this.push(file);
        } catch (err) {
            this.emit('error', new PluginError('gulp-together', err));
        }

        cb();
    });
};

// 
let _build, indexOf = [].indexOf || function(item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i
  }
  return -1
}

import path from 'path'
import through from 'through2'
import gulp from 'gulp'
import jsonEditor from 'gulp-json-editor'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import base64 from 'gulp-base64'
import autoprefixer from 'gulp-autoprefixer'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import _Watch from 'gulp-watch'
import gutil from 'gulp-util'
import sourcemaps from 'gulp-sourcemaps'
import _setting from './setting'
import Tools from './Tools'
const color = gutil.colors


function prefixStream(prefixText) {
    var stream = through();
    stream.write(prefixText);
    return stream;
}

function gulpAddRequireRuntime() {
    // 创建一个让每个文件通过的 stream 通道
    return through.obj(function(file, enc, cb) {
        var prefixText = ``;
        var rel = path.relative(path.dirname(file.path), path.join(file.base, 'libs/runtime.js'));
        rel = rel.replace(/\\/g, '/');
        if (rel === 'runtime.js') {
            prefixText = new Buffer(prefixText); // 预先分配
        } else {
            prefixText = `var regeneratorRuntime = require("${rel}");`;
            prefixText = new Buffer(prefixText); // 预先分配
        }


        if (file.isNull()) {
            // 返回空文件
            cb(null, file);
        }
        if (file.isBuffer()) {
            file.contents = Buffer.concat([prefixText, file.contents]);
        }
        if (file.isStream()) {
            file.contents = file.contents.pipe(prefixStream(prefixText));
        }

        cb(null, file);
    });

}


_build = {
  template: function(file, type = 'dev') {
    const buildSrc = _setting[type].path
    const repUrl = _setting[type].repUrl
    console.log(file)

    // repUrl = type === 'dev' ? _setting.devRepUrl : _setting.buildRepUrl
    gulp.src(file, {
        base: _setting.path
      })
      .pipe(rename((path) => {
        path.extname = _setting.template
      }))
      .pipe(replace('.html', '.wxml'))
      .pipe(gulp.dest(buildSrc))
  },
  css: function(file, type = 'dev') {
    let buildSrc, sfiles
    buildSrc = _setting[type].path
    let repUrl = _setting[type].repUrl

    console.log(file)

    gulp.src([file, _setting.appScss], {
        base: _setting.path
      })
      .pipe(sass())
      .on('error', gutil.log)
      // .pipe(base64({
      //   extensions: ['svg', 'png', /\.jpg#datauri$/i],
      //   maxImageSize: 10000 * 2024, // bytes
      //   debug: true
      // }))
      .pipe(rename((path) => {
        path.extname = '.wxss'
      }))
      .pipe(replace(_setting.dev.repUrl, repUrl))
      .pipe(autoprefixer({
        browsers: ['> 1%'],
        cascade: false
      }))
      .pipe(replace('img___src', _setting.build.ImgSrc))
      .pipe(gulp.dest(buildSrc))
  },
  js: function(file, type = 'dev') {
    let buildSrc
    buildSrc = _setting[type].path
    let repUrl = _setting[type].repUrl
    let repHttp = _setting[type].http

    if (type === 'dev') {
      gulp.src(file, {
          base: _setting.path,
        })
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', gutil.log)
        .pipe(replace('DEBUG', 'dev'))
        .pipe(gulpAddRequireRuntime())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildSrc))
    } else {
      gulp.src(file, {
          base: _setting.path
        })
        .pipe(babel())
        .on('error', gutil.log)
        .pipe(replace(_setting.dev.repUrl, repUrl))
        .pipe(gulp.dest(buildSrc))
    }
  },
  json: function(file, type = 'dev') {
    let buildSrc
    buildSrc = _setting[type].path

    let bool = type === 'dev' ? true : false

    gulp.src(file, {
        base: _setting.path
      })
      .pipe(jsonEditor(function(json) {
        if (json.debug) {
          json.debug = bool
        }
        return json
      }))
      .pipe(gulp.dest(buildSrc))
  },
  assets: function(file, type = 'dev') {
    let buildSrc
    buildSrc = _setting[type].path
    gulp.src(file, {
        base: _setting.path
      })
      .pipe(gulp.dest(buildSrc))
  },
  watch: function() {
    return _Watch(_setting.watchFiles, (file) => {

      let _event, _file_path, _type, err, watch_timer, _list = [],_this;
      _this = this
      try {
        _event = file.event;
        if (_event !== 'undefined') {
          _file_path = file.path.replace(/\\/g, '/')
          if (indexOf.call(_list, _file_path) < 0) {
            _list.push(_file_path);
            gutil.log('\'' + color.cyan(file.relative) + '\'', "was " + _event)
            _type = Tools.getType(_file_path);
            switch (_type) {
              case 'scss':
                _this.css(_file_path)
                break;
              case 'js':
                _this.js(_file_path)
                break;
              case 'json':
                _this.json(_file_path)
                break;
              case 'tpl':
                _this.template(_file_path)
                break;
              default:
                _this.assets(_file_path)
            }
          }
        }
        if (watch_timer) {
          clearTimeout(watch_timer)
        }
        return watch_timer = setTimeout(function() {
          return _list = [];
        }, 3000);
      } catch (_error) {
        err = _error
        return console.log(err)
      }
    })
  }
}

module.exports = _build
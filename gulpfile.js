const gulp = require('gulp');
const tiny = require('gulp-tinypng-nokey'); // 压缩图片
const spritesmith = require('gulp.spritesmith'); // 雪碧图
const config = require('./config/config');


// 工具-生成雪碧图-pc
gulp.task('sprite', () => gulp
    .src(config.pcSprite)
    .pipe(
      spritesmith({
        imgName: '../../src/images/sprite.png', // 保存合并后图片的地址
        cssName: '../../src/css/sprite.scss', // 保存合并后对于css样式的地址
        padding: 5, // 合并时两个图片的间距
        algorithm: 'left-right',
        cssTemplate(data) {
          const arr = [];
          data.sprites.forEach((data1) => {
            arr.push(
              `${data1.name}{`
                + `background-image: url('${data1.escaped_image}');`
                + `background-position: ${data1.px.offset_x} ${
                  data1.px.offset_y
                };`
                + `width:${data1.px.width};`
                + `height:${data1.px.height};`
                + '}\n',
            );
          });
          return arr.join('');
        },
      }),
    )
    .pipe(gulp.dest('./dist/images')));

/*
 * 工具-生成雪碧图-h5
 * 750为原型稿宽，750下1rem = 100px计算
 */
gulp.task('h5-sprite', () => {
  gulp
    .src(config.h5Sprite)
    .pipe(
      spritesmith({
        imgName: '../../src/images/sprite.png', // 保存合并后图片的地址
        cssName: '../../src/css/sprite.scss', // 保存合并后对于css样式的地址
        padding: 10, // 合并时两个图片的间距
        algorithm: 'top-down',
        cssTemplate(data) {
          const arr = [];
          let totalHeigth = 0;
          let maxWidth = 0;
          const time = Math.random().toString().substr(3, 8);
          data.sprites.forEach((data1) => {
            if (parseInt(data1.px.width) > maxWidth) {
              maxWidth = parseInt(data1.px.width);
            }
            totalHeigth += parseInt(data1.px.height) + 10;
          });
          totalHeigth -= 10;
          data.sprites.forEach((data1) => {
            arr.push(
              `.icon_${data1.name}{`
                + `background-size:${maxWidth / 100}rem ${totalHeigth
                  / 100}rem;`
                + `background-image: url('../images/${
                  data1.escaped_image
                }?${time}');`
                + `background-position: 0% ${(parseInt(data1.px.offset_y)
                  / (parseInt(data1.px.height) - totalHeigth))
                  * 100}%;`
                + `width:${(parseInt(data1.px.width) / 750) * 100}%;`
                + `height:${parseInt(data1.px.height) / 100}rem;`
                + '}\n',
            );
          });
          return arr.join('');
        },
      }),
    )
    .pipe(gulp.dest('./dist/images'));
});

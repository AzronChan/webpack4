# webpack4 脚手架

快速构建webpack脚手架

# 项目目录



# 使用

# 雪碧图构建

config/config.js 中设置要合成雪碧图的图片

src/image/icon_* || bg_*.png 命名的图片都会被构建雪碧图，然后生成对应的scss文件到src/css/; 

构建PC端雪碧图
```
gulp sprite 
```

构建H5端雪碧图
```
gulp h5-sprite
```


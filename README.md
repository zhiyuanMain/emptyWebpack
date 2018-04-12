# emptyWebpack
init empty webpack demo
最基本的webpac可配置

# sprintf
一个简单的方法
作用：将字符串中的%s批量替换
示例：sprintf('Hello %s! This is %s.', 'world', 'Jhon')
输出：Hello world! This is Jhon.

# 运行方法
# npm run dev
# npm run build 
Mac OS用户 package.json中scripts.build设置为"NODE_ENV=production && webpack  --progress --config ./webpack.prod.config.js"
Window用户 package.json中scripts.build设置为"set NODE_ENV=production && webpack  --progress --config ./webpack.prod.config.js"
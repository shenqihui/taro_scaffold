我的 Taro 小程序脚手架
---

# 文档参考
https://nervjs.github.io/taro

# 关于 sprite
由于 Taro 目前已知尚未支持 sprite ，如果需要的话，就可以直接使用 gulp 开启一个 sprite 任务。

yarn spwatch : 监控形式的 sprite 任务。

yarn spbuild : 打包形式的 sprite 任务。

## sprite 图片存放路径
放在 src/sprites 下面，里面的 `src/sprites/_sprites.scss` 为基础的模板。

## sprite 临时文件

- 位于 `src/.sprites` 文件夹。
- `sprites-base64.scss` 为 base64 的背景图存放信息。
- `sprites.scss` 为 sprites 输出的 scss 。
- `sprites.png` 为合并之后的 sprites 图，`sprites-base64.scss` 生成之后就没使用了。

# 项目 scripts

- yarn start , 这个会直接开启 sprite 和 taro 的开发任务
- yarn release , 打包的，会包含 sprite 以及 taro 的打包语法一起打包。
- `package.json` 中其他 scripts 指令，和 taro 或者其他相同。可以试一下。

# 如何使用

- clone
- 随便自己想怎么改怎么改动
- 如果有需求，欢迎提 issue ，我会考察之后进行增加

# tags

- v0.4.0:
  - taro 升级到 0.0.73 -> 1.0.0-beta.4 -> 1.0.0-beta.6
  - 增加组件的引用例子（组件名必须和使用时候的名字一致）
  - 增加 iview 第三方组件使用的例子
  - 分离首页的例子到单独每个页面
- v0.3.0: 加入 wxs 的说明，以及 js 和 jsx 中导入的不同情况例子。（尚未支持 iview）
- v0.2.0: 加入了 sprites
- v0.1.3: 改用 axios
- v0.1.2: 使用 dva 的 redux 模式进行处理
- v0.1.1/v0.1.0: Taro 初始化

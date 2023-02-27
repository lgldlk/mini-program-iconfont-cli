# mini-program-iconfont-cli

[原图标库地址](https://github.com/iconfont-cli/mini-program-iconfont-cli)作者 git 号已经好久没更新代码了，故改写之后发布至公司 npm 库

把 iconfont 图标批量转换成多个平台小程序的组件。不依赖字体，支持多色彩。

# 支持平台：

- 微信小程序
- 支付宝小程序
- 百度小程序
- 头条小程序（字节跳动）
- 快手小程序
- QQ 小程序
- ...

# 特性

1、纯组件
<br>
2、不依赖字体文件
<br>
3、支持 px 和 rpx 两种格式
<br>
4、原样渲染多色彩图标
<br>
5、图标颜色可定制

# Step 1

安装插件

```bash
# Yarn
yarn add mini-program-iconfont-cli --dev

# Npm
npm install mini-program-iconfont-cli --save-dev
```

# Step 2

生成配置文件

```bash
npx iconfont-init

# 可传入配置文件输出路径
# npx iconfont-init --output iconfont.json
```

此时项目根目录会生成一个`iconfont.json`的文件，内容如下：

```json
{
  "symbol_url": "请参考README.md，复制 http://iconfont.cn 官网提供的JS链接",
  "save_dir": "./iconfont",
  "use_rpx": false,
  "trim_icon_prefix": "icon",
  "default_icon_size": 18
}
```

### 配置参数说明：

#### symbol_url

请直接复制[iconfont](http://iconfont.cn)官网提供的项目链接。请务必看清是`.js`后缀而不是`.css`后缀。如果你现在还没有创建 iconfont 的仓库，那么可以填入这个链接去测试：`http://at.alicdn.com/t/font_1373348_kk9y3jk2omq.js`。

![](https://github.com/fwh1990/mini-program-iconfont-cli/blob/master/images/symbol-url.png?raw=true)

### font_url

请直接复制[iconfont](http://iconfont.cn)官网提供的项目链接。`.css`后缀。 **图标库图标多起来后，不支持多色**用 font 字体的方式引入图标，减小主包大小。

#### save_dir

根据 iconfont 图标生成的组件存放的位置。每次生成组件之前，该文件夹都会被清空。

#### use_rpx

使用微信提供的[尺寸单位 rpx](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)还是普通的像素单位`px`。默认值为 false，即使用`px`。

#### trim_icon_prefix

如果你的图标有通用的前缀，而你在使用的时候又不想重复去写，那么可以通过配置这个选项把前缀统一去掉。

#### default_icon_size

我们将为每个生成的图标组件加入默认的字体大小，当然，你也可以通过传入 props 的方式改变这个 size 值。

# Step 3

生成小程序标准组件

```bash
# 可传入配置文件路径
# npx iconfont-XXXXX --config iconfont.json

# 微信小程序
npx iconfont-wechat

# 支付宝小程序
npx iconfont-alipay

# 百度小程序
npx iconfont-baidu

# 头条小程序
npx iconfont-toutiao

# 快手小程序
npx iconfont-kuaishou

# QQ小程序
npx iconfont-qq
```

生成后查看您设置的保存目录中是否含有所有的图标

---

在生成代码之前，你可以顺便参考[snapshots 目录](https://github.com/iconfont-cli/mini-program-iconfont-cli/tree/master/snapshots)自动生成的快照文件。

# Step 4

#### 微信小程序 | QQ 小程序

在根目录的`app.json`文件中引入全局图标组件，避免每个 page 都引入（麻烦）。

```json5
// 绝对路径
{
  usingComponents: {
    iconfont: "/iconfont/iconfont",
  },
}
```

#### 支付宝小程序 | 百度小程序 | 头条小程序 ｜ 快手小程序

不支持全局引入，您需要在各自 page 的`.json`文件中引入。

```json5
// 绝对路径
{
  usingComponents: {
    iconfont: "/iconfont/iconfont",
  },
}
```

# 使用

在 page 中使用图标。

```jsx harmony
// 原色彩
<iconfont name="alipay" />

// 单色：红色
<iconfont name="alipay" color="red" />

// 多色：红色+橘色
<iconfont name="alipay" color="{{['red', 'orange']}}" size="300" />

// 不同格式的颜色写法
<iconfont name="alipay" color="{{['#333', 'rgb(50, 124, 39)']}}" />

// 与文字对齐
<view style="display: flex; alignItems: center;">
  <text>Hello</text>
  <iconfont name="alipay" />
</view>
```

# 更新图标

当您在 iconfont.cn 中的图标有变更时，只需更改配置`symbol_url`，然后再次执行`Step 3`即可生成最新的图标组件。

```bash
# 修改 symbol_url 配置后执行：

# 微信小程序
npx iconfont-wechat

# 支付宝小程序
npx iconfont-alipay

# 百度小程序
npx iconfont-baidu

# 头条小程序
npx iconfont-toutiao

# 快手小程序
npx iconfont-kuaishou

# QQ小程序
npx iconfont-qq
```

---

欢迎使用，并给我一些反馈和建议，让这个库做的更好。

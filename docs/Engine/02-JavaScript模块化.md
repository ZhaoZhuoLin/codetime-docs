# JavaScript模块化

:::tip 常见的模块化
**esm**:  是“EcmaScript module”的缩写。

**cjs**:  是“CommonJS module”的缩写。

**umd**:  是“Universal Module Definition”的缩写，它可以在script标签中执行、被 CommonJS 模块加载器加载、被 AMD 模块加载器加载。
:::

> 梳理JavaScript模块化的历史和现状

不同的逻辑代码放在单独的js文件，但是当项目更复杂的时候，html中可以引入很多个js文件，此时会出现命名冲突，污染作用于等一系列问题，此时**模块**的概念以及实现方法就出现了

## 传统JavaScript
JavaScript初创时期，本身是在浏览器的脚本语言，在浏览器中使用，需要使用script标签引入即可，依赖关系的解决，需要手动保证引入的顺序问题


``` JS
<script src="/appConfig.js"></script>
<script src="/packages-cdn/thirdParty/jquery.min.js"></script>
<script src="/packages-cdn/thirdParty/Cesium1.7.1/Cesium.js"></script>
```

## Node.js 模块方案-CommonJS

Node.js是浏览器之外的一个运行环境，其创建之初，为了弥补JavaScript确实模块的问题，带来了commonjs规范。
在Node.js中模块是强制的，外面的define在Nodejs中是自动添加的，不需要手动编写。

``` JS
define(function (require, exports, module) {
    //使用event 模块
    var ec = require("event");
});
```

``` JS
// 定义Util模块
const H = 888;
function add(a,b){
    return a + b;
}
module.exports = {
    H,add
}

// 加载模块
const util = require("./util")
console.log(util.add(1+1));
```

## 浏览器模块方案-AMD

> (Asynchronous Module Definition) 异步定义模块

在浏览器视角引入模块系统是，发现commonjs并不适合浏览器，在Node.js中引入一个模块是通过fs文件系统，属于同步操作，但在浏览器中，所有的文件都需要网络去进行加载，那肯定是异步的状态。
异步加载规范：AMD，（使用AMD需要加载，其中RequireJS是最广泛的AMD模块加载器）,很多JS库都引入AMD的引入方式。

``` JS
define(id?, dependencies?, cb);
// id：定义的模块名
// dependencies：定义模块中所有依赖的模块数组
// cb：是模块初始化要执行的函数或对象,必选
```

``` JS
define(['moment'],function () {
    moment.getTime() //调用模块
});
```

## UMD
> UMD 是 (Universal Module Definition) 通用模块定义 的缩写。UMD 是 AMD 和 CommonJS 的一个糅合。AMD 是浏览器优先，异步加载；CommonJS 是服务器优先，同步加载。

通用使用的逻辑判断：判断是否支持node的模块，支持就用node；再判断是否支持AMD，支持则使用AMD。

``` JS
(function (window, factory) {
  if (typeof exports === "object") {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    // AMD
    define(factory);
  } else {
    // 浏览器全局定义
    window.eventUtil = factory();
  }
})(this, function () {
  // do something
});
```

## ES6模块化

> ES6中，使用**export**关键字导出模块，使用**import**关键字引入模块

``` JS
// 导入指定模块
import { total,sum,count } from "./utils"

// 导入全部模块
import utils from "./utils"
```

``` JS
function total(){
    ...
}

function sum(){
    ...
}

function count(){
    ...
}
export default { total,sum,count }
```
缺点：原生浏览器还没有实现该标准，需要使用babel将es6代码转为es5
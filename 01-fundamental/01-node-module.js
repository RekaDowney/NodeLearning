/**
 * 在 Node 中，每一个 JS 文件都是一个模块。
 * Node 会将每个 JS 文件包装成 IIFE（立即执行函数：Immediately-Invoked Function Expression），因此
 * 每个 JS 文件中定义的变量默认在其他 JS 文件中都是不可见的。
 *
 * Node 封装成的 IIFE 有五个参数，具体形式如下：
 * 其中
 *   exports    可以将变量或者函数暴露成为模块的属性，exports 只能够通过 exports.attr = varOrFun 方式暴露属性。
 *              exports 是 module.exports 的引用，两者是完全一致的；
 *
 *   require    可以引入外部的其他模块（包括核心模块和文件模块，其中核心模块包括 Node 官方提供的模块以及可以通过 npm 安装
 *              的全局或者局部模块，而文件模块主要指项目中定义的模块）；
 *              require 在引入自定义模块时，必须以 .（当前目录） 或者 ..（上级目录） 或者绝对路径方式引入，其他方式在引入
 *              自定义模块时都将抛出异常。
 *
 *   module     代表当前模块，可以通过 module.exports = {} 赋值方式一次性暴露多个属性。
 *              exports 如果直接使用 exports = {} 方式则不会暴露任何属性，引用变量的赋值仅仅只是改变了该变量的内存地址
 *
 *   __filename 代表当前文件的绝对路径
 *   __dirname  代表当前文件的所在目录
 *
 * Node 提供 global 变量可以引用全局
 */
(function (exports, require, module, __filename, __dirname) {

})();

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    验证 IIFE   @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 验证 Node 是将每个 JS 文件封装成 IIFE，并且该 IIFE 拥有五个参数
// noinspection JSReferencingArgumentsOutsideOfFunction
console.log(arguments.callee.toString());
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    验证 IIFE   @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    require    @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
let Assert = require('..\\util\\assert').Assert;

/* require 引入的要求 */
// Error: Cannot find module 'L:\Code\WebStorm_Code\NodeLearning\01-fundamental../util/assert'
// require(__dirname + '../util/assert');

// Error: Cannot find module 'a'
// require('a');

require('L:/Code/WebStorm_Code/NodeLearning/util/assert.js').Assert.requireTrue(true);
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    require    @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    exports    @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 断言 exports 和 module.exports 完全一致
Assert.strictEqual(exports, module.exports);
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    exports    @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@   __filename  @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 断言 __filename
Assert.strictEqual('L:\\Code\\WebStorm_Code\\NodeLearning\\01-fundamental\\01-node-module.js', __filename);
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@   __filename  @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    __dirname  @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 断言 __dirname
Assert.strictEqual('L:\\Code\\WebStorm_Code\\NodeLearning\\01-fundamental', __dirname);
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    __dirname  @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    全局变量     @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 当前模块的全局变量
gblVar = 'gbl';
Assert.requireTrue(global.gblVar === 'gbl');
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    全局变量     @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    module     @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// 打印 module 变量
console.log(module);
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * @@@@@@    module     @@@@@@
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/*
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'L:\\Code\\WebStorm_Code\\NodeLearning\\01-fundamental\\01-node-module.js',
  loaded: false,
  children:
   [ Module {
       id: 'L:\\Code\\WebStorm_Code\\NodeLearning\\util\\assert.js',
       exports: [Object],
       parent: [Circular],
       filename: 'L:\\Code\\WebStorm_Code\\NodeLearning\\util\\assert.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'L:\\Code\\WebStorm_Code\\NodeLearning\\01-fundamental\\node_modules',
     'L:\\Code\\WebStorm_Code\\NodeLearning\\node_modules',
     'L:\\Code\\WebStorm_Code\\node_modules',
     'L:\\Code\\node_modules',
     'L:\\node_modules' ] }
*/

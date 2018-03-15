// Buffer 类是 Node 的一个全局变量，因此可以不使用 require('buffer').Buffer 方式获取
require('assert').deepEqual(Buffer, require('buffer').Buffer);




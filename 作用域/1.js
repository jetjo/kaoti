for (var i = 0; i < 10; i++) {
  // !此处开始进入块作用域
  // !每次执行都是创建新的块作用域
  setTimeout(() => {
    console.log(i);
  }, 1000);
  // !离开此处后销毁这个块作用域
  // !但是i是块作用域外面的量，不会随着每次循环而销毁重建
  // !所以所有settimeout callback都是引用的同一个i
}

// 改造上面代码，输出0-9
// let i;
// for (i = 0; i < 10; i++) { // !默认是var, 这样报错，i已经在前面使用var声明过
// let i = 0;
// for (; i < 10; i++) { // !Identifier 'i' has already been declared
let j = 0;
for (; j < 10; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000);
}

for (let j = 0; j < 10; j++) {
  // !j是块级作用域中声明的，所以
  // !每次循环都会新创建的块儿中使用上一个块儿中的j创建新的j
  setTimeout(() => {
    console.log(j);
  }, 1000);
}

for (var i = 0; i < 10; i++) {
  // !不要忘记定义j并使用
  ((j) => setTimeout(() => {
    console.log(j);
  }, 1000))(i);
}

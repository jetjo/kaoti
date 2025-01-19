var a = 10;
(function () {
  console.log(a);
  a = 5;
  // nodejs中, 没有全局变量a
  console.log(globalThis.a);
  var a = 20;
  console.log(a);
})();

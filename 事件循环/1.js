Promise.resolve().then(() => console.log('1'))

async function async1() {
  console.log('2');
  return '2'
}

async1();

new Promise((resolve) => {
  console.log('3');
  resolve();
}).then(() => {
  console.log('4');

})
console.log('end');


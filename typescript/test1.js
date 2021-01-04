/**
 * @params {number} aa 操作数
 */
function test(aa){
  if(typeof aa !== "number"){
    throw new Error('参数不正确')
  }
  return aa + 24;

}
// test('abc')
console.log(test(12));
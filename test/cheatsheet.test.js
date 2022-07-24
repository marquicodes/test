const t = require('tap')
const fs = require('fs').promises

// t.test('a test description', function synchronousTest (t) {
//   t.plan(1)
//   const myVar = 42
//   t.equal(myVar, 42, 'this number is 42')
// })

// t.test('same object structure', function testFunction (t) {
//   t.plan(1)
//   const sameStructure = { hello: 'world' }
//   t.same(sameStructure, { hello: 'world' }, 'the object is correct')
// })

// t.test('almost equals object structure', function testFunction (t) {
//   // t.plan(1)
// const almostLike = {
//   hello: 'world',
//   foo: 'bar'
// }
// t.match(almostLike, { hello: 'world' }, 'the object is similar')
// t.end()
// })

// t.test('almost equals object structure regex', function testFunction (t) {
// const almostLike = {
//   hello: 'world',
//   foo: 'bar'
// }
// t.match(almostLike, {
//   hello: 'world',
//   foo: /BAR/i
// }, 'the object is similar with regex')
// t.end()
// })

// t.test('sub test', function testFunction (t) {
//   t.plan(2)
//   const falsyValue = null
//   t.notOk(falsyValue, 'it is a falsy value')
//   t.test('boolean asserions', subTapTest => {
//     subTapTest.plan(1)
//     subTapTest.ok(true, 'true is ok')
//   })
// })

t.test('async test', async t => {
  const fileContent = await fs.readFile('./package.json', 'utf8')
  t.type(fileContent, 'string', 'the file content is a string')

  await t.test('check json', async subTest => {
    const json = JSON.parse(fileContent)
    subTest.match(json, { version: '1.0.0' })
  })
  t.pass('test completed')
})

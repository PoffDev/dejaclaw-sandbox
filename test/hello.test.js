const test = require('node:test');
const assert = require('node:assert');
const { hello } = require('../hello');

test('hello returns hi', () => {
  assert.strictEqual(hello(), 'hi');
});

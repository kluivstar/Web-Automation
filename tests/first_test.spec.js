// tests/first_test.spec.js
import { test, expect } from '@playwright/test';
import { hello } from '../tests/demo/hello.js';

test('log hello', () => {
  console.log(hello());
  expect(hello()).toBe('Hello');  // optional assertion
});

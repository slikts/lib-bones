import baz from './baz';

it('baz', () => {
  expect(baz()).resolves.toBe(1);
});

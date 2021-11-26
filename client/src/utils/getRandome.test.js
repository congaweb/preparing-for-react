// import { test, expect } from './tests.js';
import { getRandom, getRandomCount } from './getRandom.js';

test('getRandom(10) 실행 결과는 10보다 작다', () => {
  let targetCount = getRandom(10);
  // console.log(`getRandom(10) = ${targetCount}`);
  // expect(getRandom(10) > 10).toBe(false);
  expect(targetCount).toBeLessThan(10);
});

test('getRandomCount(min, max) 실행 결과는 5이상 7이하이다', () => {
  let min = 5;
  let max = 7;
  let minmaxValue = getRandomCount(min, max);
  // console.log(`getRandomCount(5,7) = ${minmaxValue}`);
  // expect(minmaxValue >= min).toBe(true);
  // expect(minmaxValue <= max).toBe(true);
  expect(minmaxValue).toBeGreaterThanOrEqual(min);
  expect(minmaxValue).toBeLessThanOrEqual(max);
});

import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("returns the correct average for an array of valid numbers", () => {
  expect(calculateAverage([2, 4, 6])).toBe(4);
});

test("returns the correct average for a single number", () => {
  expect(calculateAverage([5])).toBe(5);
});

test("handles negative numbers correctly", () => {
  expect(calculateAverage([-2, -4, -6])).toBe(-4);
});

test("handles decimal numbers correctly", () => {
  expect(calculateAverage([1.5, 2.5, 3])).toBe(2.3333333333333335);
});

test("handles mixed positive and negative numbers", () => {
  expect(calculateAverage([-10, 0, 10])).toBe(0);
});

test("returns null for an empty array", () => {
  expect(calculateAverage([])).toBeNull();
});

test("returns null for a string input", () => {
  expect(calculateAverage("123")).toBeNull();
});

test("returns null for null input", () => {
  expect(calculateAverage(null)).toBeNull();
});

test("returns null for undefined input", () => {
  expect(calculateAverage(undefined)).toBeNull();
});

test("returns null for a number input", () => {
  expect(calculateAverage(123)).toBeNull();
});

test("returns null for an object input", () => {
  expect(calculateAverage({ length: 3 })).toBeNull();
});

test("returns null if array contains a string", () => {
  expect(calculateAverage([1, 2, "3"])).toBeNull();
});

test("returns null if array contains null", () => {
  expect(calculateAverage([1, 2, null])).toBeNull();
});

test("returns null if array contains undefined", () => {
  expect(calculateAverage([1, 2, undefined])).toBeNull();
});

test("returns null if array contains a boolean", () => {
  expect(calculateAverage([1, 2, true])).toBeNull();
});

test("returns null if array contains an object", () => {
  expect(calculateAverage([1, 2, {}])).toBeNull();
});
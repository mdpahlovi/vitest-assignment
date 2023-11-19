import { divide } from "./divide";
import { it, expect } from "vitest";

it("should correctly divide two positive number", () => {
    // Arrange
    const a = 10;
    const b = 2;

    // Action
    const result = divide(a, b);

    // Assertion
    expect(result).toBe(5);
});

it("should handle division with negative number", () => {
    // Arrange
    const a = -10;
    const b = 2;

    // Action
    const result = divide(a, b);

    // Assertion
    expect(result).toBe(-5);
});

it("should throw error when try to divide by zero", () => {
    // Arrange
    const a = 5;
    const b = 0;

    // Action
    const result = divide(a, b);

    // Assertion
    expect(result).toThrow("Division by zero");
});

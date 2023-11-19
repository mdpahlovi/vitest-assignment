import { executeCallback } from "./executeCallback";
import { vi, it, expect } from "vitest";

it("should correctly call the provided callback function", () => {
    // Arrange
    const mockCallback = vi.fn();
    const taskText = "Some task";

    // Act
    executeCallback(mockCallback, taskText);

    // Assert
    expect(mockCallback).toHaveBeenCalled();
});

it("should execute callback function with the provided taskText argument", () => {
    // Arrange
    const mockCallback = vi.fn();
    const taskText = "Buy Groceries";

    // Act
    executeCallback(mockCallback, taskText);

    // Assert
    expect(mockCallback).toHaveBeenCalledWith(taskText);
});

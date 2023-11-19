import { fetchData } from "./fetchData";
import { it, expect } from "vitest";

it("should resolve with correct data when async operation is successful", async () => {
    // Arrange
    const data = { name: "John", age: 30 };

    // Action
    const result = await fetchData();

    // Assertion
    expect(result).toEqual(data);
});

it("should handle errors by rejecting the Promise", async () => {
    // Arrange
    const fetchDataWithError = () => {
        return new Promise((resolve, reject) => {
            reject(new Error("Failed to fetch data"));
        });
    };

    // Action
    const result = fetchDataWithError();

    // Assertion
    await expect(result).rejects.toThrow("Failed to fetch data");
});

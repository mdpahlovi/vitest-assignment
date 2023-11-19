export function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an async operation (e.g., fetching data from an API)
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 1000); // Simulate a 1-second delay
    });
}

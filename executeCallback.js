function executeCallback(callback, taskText) {
    callback(taskText);
}

function myCallback(taskText) {
    console.log(`Task: ${taskText}`);
}

// Call executeCallback with a callback function and a task text
executeCallback(myCallback, "Buy groceries");

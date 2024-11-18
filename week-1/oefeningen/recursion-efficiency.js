const todoList = [
    {
        task: "Complete Project",
        subtasks: [
            {
                task: "Write Code",
                subtasks: [
                    { task: "Implement Feature A" },
                    { task: "Test Feature A" },
                    { task: "Refactor Code" },
                ],
            },
            {
                task: "Document Project",
                subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
            },
        ],
    },
    {
        task: "Prepare Presentation",
        subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery", subtasks: [{ task: "Publish slides" }] }],
    },
];

function showTodos(list) {
    for (const task of list) {
        console.log(task.task);

        if (task.subtasks && task.subtasks.length) {
            showTodos(task.subtasks);
        }
    }
}

showTodos(todoList);

function checkAge(age) {
    return age > 18 ? true : confirm("Did your parents allow you?");
}

function checkAge(age) {
    return age > 18 || confirm("Did your parents allow you?");
}

// Opgelet: if (age > 18 === true)
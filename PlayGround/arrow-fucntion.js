//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    const lefttask = this.tasks.filter((task) => task.completed === false);
    for (let i = 0, l = lefttask.length; i < l; i++) {
      console.log(lefttask[i].text);
    }
    return lefttask.forEach((task) =>console.log(task.text));
  },
};

console.log(tasks.getTasksToDo());

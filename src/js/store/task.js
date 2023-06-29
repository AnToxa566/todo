import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

class Task {
  tasks = [
    {
      id: v4(),
      title:
        "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
      completed: false,
    },
    {
      id: v4(),
      title:
        "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
      completed: false,
    },
    {
      id: v4(),
      title:
        "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
      completed: true,
    },
    {
      id: v4(),
      title:
        "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
      completed: false,
    },
    {
      id: v4(),
      title:
        "Lorem ipsum dolor sit amet, consectetur adip dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
      completed: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title, completed = false) {
    this.tasks.push({
      id: v4(),
      title,
      completed,
    });
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  completeTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    task.completed = !task.completed;
  }

  get count() {
    return this.tasks.length;
  }

  get completedCount() {
    return this.tasks.filter((task) => task.completed).length;
  }
}

export default new Task();

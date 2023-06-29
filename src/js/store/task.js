import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

class Task {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(title, completed = false) {
    this.tasks.unshift({
      id: v4(),
      title,
      completed,
    });

    this.saveTasks();
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  completeTask(id) {
    const task = this.tasks.find((task) => task.id === id);
    task.completed = !task.completed;

    this.saveTasks();
  }

  fetchTasks() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  get count() {
    return this.tasks.length;
  }

  get completedCount() {
    return this.tasks.filter((task) => task.completed).length;
  }
}

export default new Task();

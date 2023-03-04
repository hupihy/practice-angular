import {Injectable} from "@angular/core";

export interface Task {
  taskText: string
  isDone: boolean
  selection: string
}

export interface Section {
  name: string
  description: string
}

@Injectable({providedIn: 'root'})
export class TodoAppService {

  allSection: Section[] = [
    {
      name: "New day",
      description: "Create your Day"
    },
    {
      name: "day",
      description: "your Day"
    },
    {
      name: "New ",
      description: "Create  Day"
    }
  ];
  allTasks: Task[] = [
    {
      taskText: 'давай я в тебя верю',
      isDone: false,
      selection: 'New day',
    },
    {
      taskText: 'а может и нет)',
      isDone: false,
      selection: 'New day',
    }
  ];

  sectionNow: Section = this.allSection[0]
  visibleTask: Task[] = []

  updateTask() {
    localStorage.setItem('allTask', JSON.stringify(this.allTasks))
    this.visibleTask = this.allTasks.filter(task => task.selection === this.sectionNow.name)
  }

  createNewTask(newTaskInput: string): void {
    if (newTaskInput.trim() && !this.allTasks.find(item => item.taskText === newTaskInput)) {
      const newTask: Task = {
        taskText: newTaskInput,
        isDone: false,
        selection: this.sectionNow.name
      }
      this.allTasks.push(newTask)
      this.updateTask()
    }
  }

  deleteTask(task: Task): void {
    this.allTasks.splice(this.allTasks.findIndex(index => index.taskText == task.taskText), 1)
    this.updateTask()
  }

  createNewSection(name: string, description: string) {
    const NewSection: Section = {
      name: name,
      description: description
    }
    this.allSection.push(NewSection)
  }

  selectSection(select: Section) {
    this.sectionNow = select
    this.visibleTask = this.allTasks.filter(task => task.selection === this.sectionNow.name)

  }
}

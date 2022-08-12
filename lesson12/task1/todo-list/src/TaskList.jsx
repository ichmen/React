import React from "react";
import Task from "./Task";
import CreateTask from "./CreateTask";
import { fetchTasks, postTask, updateTask, deleteTask } from "./Gateway";

class TaskList extends React.Component {
  state = { tasks: [] };

  componentDidMount() {
    this.tasksListUpdate();
  }

  tasksListUpdate = () => {
    fetchTasks().then((data) => this.setState({ tasks: data }));
  };
  onCreateTask = (text) => {
    const newTask = {
      text: text,
      done: false,
    };
    postTask(newTask).then(() => this.tasksListUpdate());
  };

  handleCheckboxChange = (id) => {
    const taskToUpdate = this.state.tasks.find((task) => task.id === id);
    const modifiedTask = { ...taskToUpdate, done: !taskToUpdate.done };
    console.log(modifiedTask);
    updateTask(modifiedTask).then(() => this.tasksListUpdate());
  };

  handleDelete = (id) => {
    deleteTask(id).then(() => this.tasksListUpdate());
  };

  render() {
    const filteredTasks = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done);
    return (
      <>
        <CreateTask onCreateTask={this.onCreateTask} />
        <ul className="list">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onCheckBoxChange={this.handleCheckboxChange}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}
export default TaskList;

import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({task, taskFormUpdate,onUpdate}) {
  const { createTask} = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskDescChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      //editTaskById(task.id, title, taskDesc)

    } else {
      //Create(title, taskDesc);
      createTask(title,taskDesc);

    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="taskUpdateForm">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form action="#">
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              className="task-input"
              value={title || ""}
              onChange={handleTitleChange}
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              className="task-label"
              value={taskDesc || ""}
              onChange={handleTaskDescChange}
              rows={5}
            />
            <button className="taskUpdateBtn" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskForm">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form action="#">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              value={title || ""}
              onChange={handleTitleChange}
            />
            <label className="task-label">Task Giriniz !</label>
            <textarea
              className="task-label"
              value={taskDesc || ""}
              onChange={handleTaskDescChange}
              rows={5}
            />
            <button className="taskBtn" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default TaskCreate;

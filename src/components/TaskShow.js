import "../Task.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClicked = () => {
    onDelete(task.id);
  };

  const handleEditClicked = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="taskBox">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="taskBox-text">
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <button className="taskSil" onClick={handleDeleteClicked}>
            Sil
          </button>
          <button className="taskGuncelle" onClick={handleEditClicked}>
            Güncelle
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskShow;

import React from 'react';
import { Link } from 'react-router-dom';

const TaskRow = ({ task, onToggle, onDelete }) => {
  const { id, title, assignee, priority, hours, done } = task;

  return (
    <tr>
      <td>
        <Link
          to={`/tasks/${id}`}
          className={done ? 'task-done' : ''}
          style={done ? { textDecoration: 'line-through' } : {}}
        >
          {title}
        </Link>
      </td>
      <td>{assignee}</td>
      <td>{priority}</td>
      <td>{hours}</td>
      <td>{done ? 'Đã xong' : 'Đang làm'}</td>
      <td>
        <button type="button" onClick={() => onToggle(id)}>
          {done ? 'Làm lại' : 'Hoàn thành'}
        </button>
        <button type="button" onClick={() => onDelete(id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;

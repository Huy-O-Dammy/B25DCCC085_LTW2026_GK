import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIORITIES } from '../data';

const AddTask = ({ tasks, onAdd }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Trung bình');
  const [hours, setHours] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Kiểm tra ô trống
    if (
      !title.trim() ||
      !assignee.trim() ||
      !priority.trim() ||
      hours.toString().trim() === ''
    ) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    // Kiểm tra số giờ phải là số nguyên từ 1 đến 40
    const parsedHours = Number(hours);
    if (!Number.isInteger(parsedHours) || parsedHours < 1 || parsedHours > 40) {
      setErrorMessage('Số giờ phải từ 1 đến 40');
      return;
    }

    // Tạo mã mới bằng mã lớn nhất hiện có cộng 1
    const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      title: title.trim(),
      assignee: assignee.trim(),
      priority: priority,
      hours: parsedHours,
      done: false
    };

    onAdd(newTask);
    navigate('/tasks', { replace: true });
  };

  return (
    <div>
      <h2>Thêm mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-title">Tên công việc</label>
          <input
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-assignee">Người làm</label>
          <input
            id="task-assignee"
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-priority">Mức ưu tiên</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="task-hours">Số giờ ước tính</label>
          <input
            id="task-hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <button type="submit">Thêm</button>

        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default AddTask;

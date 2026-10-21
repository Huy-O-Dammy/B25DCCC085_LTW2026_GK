import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, onToggle, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Công việc</th>
          <th>Người làm</th>
          <th>Ưu tiên</th>
          <th>Số giờ</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 ? (
          <tr>
            <td colSpan="6" style={{ textAlign: 'center' }}>
              Không có dữ liệu
            </td>
          </tr>
        ) : (
          tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;

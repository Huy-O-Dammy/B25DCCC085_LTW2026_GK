import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkTimer from '../components/WorkTimer';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskId = Number(id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div>
        <div className="status-msg">Không tìm thấy công việc</div>
        <button type="button" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết công việc</h2>
      <div className="detail-item">
        <strong>Tên công việc: </strong>{task.title}
      </div>
      <div className="detail-item">
        <strong>Người làm: </strong>{task.assignee}
      </div>
      <div className="detail-item">
        <strong>Mức ưu tiên: </strong>{task.priority}
      </div>
      <div className="detail-item">
        <strong>Số giờ: </strong>{task.hours}
      </div>
      <div className="detail-item">
        <strong>Trạng thái: </strong>{task.done ? 'Đã xong' : 'Đang làm'}
      </div>

      <WorkTimer />

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;

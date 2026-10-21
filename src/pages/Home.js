import React from 'react';

const Home = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce(
    (count, task) => (task.done ? count + 1 : count),
    0
  );
  const remainingHours = tasks.reduce(
    (total, task) => (!task.done ? total + task.hours : total),
    0
  );

  return (
    <div>
      <h1>Công việc nhóm</h1>
      <div className="detail-item">
        <strong>Tổng số công việc: </strong>{totalTasks}
      </div>
      <div className="detail-item">
        <strong>Số công việc đã xong: </strong>{completedTasks}
      </div>
      <div className="detail-item">
        <strong>Tổng số giờ còn lại: </strong>{remainingHours}
      </div>
    </div>
  );
};

export default Home;

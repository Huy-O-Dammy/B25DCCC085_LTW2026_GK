import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskTable from '../components/TaskTable';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('Tất cả');

  const handleQueryShift = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    const matchesPriority =
      selectedPriority === 'Tất cả' || task.priority === selectedPriority;
    return matchesSearch && matchesPriority;
  });

  return (
    <div>
      <FilterBar
        searchTerm={searchTerm}
        onSearchChange={handleQueryShift}
        selectedPriority={selectedPriority}
        onPriorityChange={handlePriorityChange}
        count={filteredTasks.length}
      />
      <TaskTable
        tasks={filteredTasks}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TaskList;

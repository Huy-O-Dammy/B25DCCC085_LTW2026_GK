import React from 'react';
import { PRIORITIES } from '../data';

const FilterBar = ({
  searchTerm,
  onSearchChange,
  selectedPriority,
  onPriorityChange,
  count
}) => {
  return (
    <div className="filter-container">
      <div className="filter-bar">
        <div className="filter-item">
          <label htmlFor="search-input">Tìm kiếm</label>
          <input
            id="search-input"
            type="text"
            placeholder="Tìm theo tên công việc..."
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>

        <div className="filter-item">
          <label htmlFor="priority-select">Mức ưu tiên</label>
          <select
            id="priority-select"
            value={selectedPriority}
            onChange={onPriorityChange}
          >
            <option value="Tất cả">Tất cả</option>
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="task-count">
        Tìm thấy {count} công việc
      </div>
    </div>
  );
};

export default FilterBar;

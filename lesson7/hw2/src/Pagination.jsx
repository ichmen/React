import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  return (
    <div class="pagination">
      <button class="btn">←</button>
      <span class="pagination__page">1</span>
      <button class="btn">→</button>
    </div>
  );
};

export default Pagination;

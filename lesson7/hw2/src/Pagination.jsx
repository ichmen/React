import React from "react";

// const Pagination = ({
//   currentPage,
//   goPrev,
//   goNext,
//   totalItems,
//   itemsPerPage,
// }) => {
//   const isPrevPageAvailable = currentPage > 1;
//   const lastPage = Math.ceil(totalItems / itemsPerPage);

//   const isNextPageAvailable = currentPage < lastPage;

//   return (
//     <div className="pagination">
//       <button disabled={!isPrevPageAvailable} className="btn" onClick={goPrev}>
//         {isPrevPageAvailable ? "←" : ""}
//       </button>
//       <span className="pagination__page">{currentPage}</span>
//       <button disabled={isNextPageAvailable} onClick={goNext} className="btn">
//         {isNextPageAvailable ? "→" : ""}
//       </button>
//     </div>
//   );
// };
const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = currentPage * itemsPerPage < totalItems;
  return (
    <div className="pagination">
      <button disabled={!isPrevPageAvailable} className="btn" onClick={goPrev}>
        {isPrevPageAvailable ? "←" : ""}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button disabled={isNextPageAvailable} onClick={goNext} className="btn">
        {isNextPageAvailable ? "→" : ""}
      </button>
    </div>
  );
};

export default Pagination;

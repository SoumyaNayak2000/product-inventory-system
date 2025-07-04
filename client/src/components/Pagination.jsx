import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div style={{ marginTop: 10 }}>
      {pages.map((p) => (
        <button
          key={p}
          style={{ margin: 3, fontWeight: page === p ? "bold" : "normal" }}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

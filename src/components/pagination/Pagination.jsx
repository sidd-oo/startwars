import React from 'react'
import "./Pagination.css"

const Pagination = ({ currentPage, setCurrentPage }) => {

  const handlePagination = (e) => {
    setCurrentPage(parseInt(e.target.innerText))
  }

  console.log(currentPage)

  return (
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#" className={currentPage === 1 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>1</a>
      <a href="#" className={currentPage === 2 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>2</a>
      <a href="#" className={currentPage === 3 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>3</a>
      <a href="#" className={currentPage === 4 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>4</a>
      <a href="#" className={currentPage === 5 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>5</a>
      <a href="#" className={currentPage === 6 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>6</a>
      <a href="#" className={currentPage === 7 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>7</a>
      <a href="#" className={currentPage === 8 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>8</a>
      <a href="#" className={currentPage === 9 ? "active" : ""} onClick={(e) => { handlePagination(e) }}>9</a>
      <a href="#">&raquo;</a>
    </div>)
}

export default Pagination
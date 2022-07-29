import React from 'react'
import "./Pagination.css"

const Pagination = ({currentPage, setCurrentPage}) => {
  return (<div className="pagination">
    <button disabled = {(currentPage === 1)} onClick={(e)=>{setCurrentPage(parseInt(e.target.innerText))}}>{currentPage - 1}</button>

    <button onClick={(e)=>{setCurrentPage(parseInt(e.target.innerText))}}>{currentPage}</button>

    <button disabled = {(currentPage === 10)}onClick={(e)=>{setCurrentPage(parseInt(e.target.innerText))}}>{currentPage + 1}</button>
  </div>)
}

export default Pagination
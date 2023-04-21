import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = Math.ceil(totalPosts / postPerPage)

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={(n) => paginate(n.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={pageNumbers}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName="paginate-item"
      pageLinkClassName=""
      className="paginate"
      nextClassName={'paginate-arrow'}
      previousClassName={'paginate-arrow'}
      breakClassName="paginate-item"
      activeClassName={'active'}
    />
  )
}

export default Pagination

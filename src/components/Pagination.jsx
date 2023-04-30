import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = Math.ceil(totalPosts / postPerPage)

  const handleNextPageButtonClick = async (n) => {
    await paginate(n.selected);
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handleNextPageButtonClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={pageNumbers}
      previousLabel="<"
      renderOnZeroPageCount={null}
      pageClassName="paginate-item"
      className={`paginate ${pageNumbers > 1 ? '' : 'invisible'} `}
      nextClassName={'paginate-arrow'}
      previousClassName={'paginate-arrow'}
      breakClassName="paginate-item"
      activeClassName={'active'}
    />
  )
}

export default Pagination

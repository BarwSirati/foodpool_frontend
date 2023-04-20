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
        pageCount={pageNumbers}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="bg-headcard px-5 py-3 rounded-md"
        pageLinkClassName=""
        className="flex gap-3 justify-center items-center mt-10 text-white"
        nextClassName="bg-headcard px-5 py-3 rounded-md"
        previousClassName="bg-headcard px-5 py-3 rounded-md"
        breakClassName="bg-headcard px-5 py-3 rounded-md"
        activeClassName="bg-blue-700"
        />
    )
}

export default Pagination

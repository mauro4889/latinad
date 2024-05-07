import React from 'react'

export const Pagination = ({ productPerPage, totalProduct, currentPage, setCurrentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i)
    }

    const onPreviusPage = () =>{
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <div>
            <ul className="pagination mb-2">
                <li className="page-item">
                    <a className={`page-link ${ currentPage == 1 ? 'disabled' : ''}`} href="#" onClick={onPreviusPage}>&laquo;</a>
                </li>
                {pageNumbers.map(noPage =>
                    <li className={`page-item ${noPage === currentPage ? 'active' : ''}`} key={noPage}>
                        <a className="page-link" href="#" onClick={() => onSpecificPage(noPage)}>{noPage}</a>
                    </li>
                )

                }
                <li className="page-item">
                    <a className={`page-link ${ currentPage >= pageNumbers.length ? 'disabled' : ''}`} href="#" onClick={onNextPage}>&raquo;</a>
                </li>
            </ul>
        </div>
    )
}

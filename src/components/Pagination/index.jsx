


const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {

    const generateNoOfPages = () => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;
    }
    
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            
             className="pagination-btn">Prev</button>
            {
                generateNoOfPages().map((pageNo) => (
                <button
                 onClick={() => onPageChange(pageNo)}
                 key={pageNo} className={`pagination-btn ${currentPage === pageNo ? 'active' : ''}`}>
                    {pageNo}</button>
            ))
            }
            <button onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}

             className="pagination-btn">Next</button>

        </div>
    )
}

export default Pagination
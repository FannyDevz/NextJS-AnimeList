import React, {useState, useEffect, useRef} from 'react';

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollToTop = () => {
        window.scrollTo({behavior: 'smooth', top: 0});
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1);
        scrollToTop()
    };

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollToTop()
    };

    return (
        <div className="flex justify-center gap-1 items-center text-color-primary py-5 px-4">
            <button
                className="bg-color-accent p-2 rounded text-color-dark hover:bg-color-success transition-all"
                disabled={page === 1}
                onClick={handlePrevPage}
            >
                Prev
            </button>
            <input
                className="bg-color-accent p-2 rounded text-color-dark appearance-none w-20 text-center"
                placeholder="Go to Page"
                value={page}
                onChange={(e) => {
                    const pageNumber = parseInt(e.target.value);
                    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= lastPage) {
                        setPage(pageNumber);
                    }
                }}
                min="1"
                max={lastPage}

            />
            <span className="bg-color-accent p-2 rounded text-color-dark">
               of {lastPage}
            </span>

            <button
                className="bg-color-accent p-2 rounded text-color-dark hover:bg-color-success transition-all"
                onClick={handleNextPage}
                disabled={page === lastPage}
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;

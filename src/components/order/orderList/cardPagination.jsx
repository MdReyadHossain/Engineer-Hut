import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CardPagination = () => {
    return (
        <React.Fragment>
            <div className='mt-4 text-end mr-1'>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    {/* left arrow "<" */}
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-sm px-2 py-2 text-gray-400 ring-1 ring-inset focus:z-20 focus:outline-offset-0 hover:bg-indigo-600 hover:text-white"
                    >
                        <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {/* page numbers start */}
                    <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        1
                    </a>
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        2
                    </a>
                    {/* page numbers end */}

                    {/* right arrow ">" */}
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-sm px-2 py-2 text-gray-400 ring-1 ring-inset focus:z-20 focus:outline-offset-0 hover:bg-indigo-600 hover:text-white"
                    >
                        <IoIosArrowForward className="h-5 w-5" aria-hidden="true" />
                    </a>
                </nav>
            </div>            
        </React.Fragment>
    );
};

export default CardPagination;
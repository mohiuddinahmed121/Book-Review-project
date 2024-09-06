import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <div className="bg-gray-200 rounded-lg h-[100px] flex justify-center items-center">
        <h1 className="font-bold text-2xl">Books</h1>
      </div>
      <div className="text-center my-3">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-500 text-white m-1"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* TAB---------- */}
      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-50 dark:text-gray-800">
          <Link
            to={``}
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  dark:border-gray-600 dark:text-gray-600  ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishlistbooks`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600  dark:text-gray-600  ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;

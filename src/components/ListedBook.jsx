import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredBookWishList } from "./localstorage";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

const ListedBook = () => {
  const books = useLoaderData();
  console.log(books);
  ///const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayBooks, setDisplayBook] = useState([]);

  useEffect(() => {
    const bookWishListIds = getStoredBookWishList();
    if (books.length > 0) {
      const bookWishList = [];
      for (const id of bookWishListIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          bookWishList.push(book);
        }
      }
      //setAppliedJobs(jobsApplied);
      setDisplayBook(bookWishList);
    }
  }, [books]);

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
      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-50 dark:text-gray-800">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600"
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
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900"
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
          </a>
        </div>
      </div>
      <div className="mt-7">
        {displayBooks.map((book) => (
          <>
            <div className="flex justify-start items-center w-[1169px] h-[277px] rounded-lg border-2 border-gray-300 mb-5">
              <div className="flex justify-center items-center w-[230px] h-[229px] bg-gray-100 rounded-lg mr-6 ml-6">
                <img className="w-[129px] h-[172px]" src={book.image} alt="" />
              </div>
              <div>
                <h1 className="font-bold text-2xl mb-2">{book.bookName}</h1>
                <p className="mb-3">By: {book.author}</p>
                <div className="flex gap-10">
                  <div className="flex gap-5 mb-4">
                    <p className="font-bold">Tag</p>
                    {book.tags.map((tag, idx) => (
                      <span key={idx}>
                        <p className="text-green-400 bg-gray-100 p-2 rounded-3xl">
                          #{tag}
                        </p>
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="flex items-center">
                      <IoLocationOutline />
                      Year of Publishing: {book.yearOfPublishing}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 mb-2">
                  <p className="flex items-center">
                    <MdOutlinePeopleAlt />
                    Publishing: {book.publisher}
                  </p>
                  <p className="flex items-center">
                    <MdOutlineContactPage />
                    Page: {book.totalPages}
                  </p>
                </div>
                <hr />
                <div className="flex gap-6 mt-3">
                  <p className="text-sky-400 bg-gray-100 p-2 rounded-3xl">
                    Category: {book.category}
                  </p>
                  <p className="text-amber-400 bg-gray-100 p-2 rounded-3xl">
                    Rating: {book.rating}
                  </p>
                  <NavLink
                    to={`/viewdetails/${book.bookId}`}
                    className="btn bg-green-500 text-white rounded-full"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ListedBook;

import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredBookReadList } from "./localstorage";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBooks = () => {
  const books = useLoaderData();

  const [displayBooks, setDisplayBook] = useState([]);

  useEffect(() => {
    const bookReadListIds = getStoredBookReadList();
    if (books.length > 0) {
      const bookReadList = [];
      for (const id of bookReadListIds) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          bookReadList.push(book);
        }
      }

      setDisplayBook(bookReadList);
    }
  }, [books]);

  return (
    <div>
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

export default ReadBooks;

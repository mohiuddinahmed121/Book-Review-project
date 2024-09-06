import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);

  return (
    <div className="flex items-center justify-between">
      <div className="w-[573px] h-[711px] bg-gray-200 flex justify-center items-center rounded-lg">
        <img className="w-[425px] h-[564px]" src={book.image} alt="" />
      </div>
      <div className="ml-2">
        <h1 className="font-bold text-5xl mb-3">{book.bookName}</h1>
        <p className="text-xl mb-4">By: {book.author}</p>
        <hr />
        <p className="mb-3 mt-3">{book.category}</p>
        <hr />
        <p className="mb-4 mt-4">
          <span className="font-bold">Review: </span>
          {book.review}
        </p>
        <div className="flex gap-5 mb-4">
          <p className="font-bold">Tag</p>
          {book.tags.map((tag, idx) => (
            <span key={idx}>
              <p className="text-green-400 bg-gray-100 p-1 rounded-lg">{tag}</p>
            </span>
          ))}
        </div>
        <hr />
        <div className="mb-4">
          <p className="mt-6">
            Number of Pages:{" "}
            <span className="font-bold ml-16">{book.totalPages}</span>
          </p>
          <p className="mt-2">
            Publisher: <span className="font-bold ml-32">{book.publisher}</span>
          </p>
          <p className="mt-2">
            Year of Publishing:{" "}
            <span className="font-bold ml-16">{book.yearOfPublishing}</span>
          </p>
          <p className="mt-2">
            Rating: <span className="font-bold ml-36">{book.rating}</span>
          </p>
        </div>
        <div className="flex gap-4">
          <a className="btn border-gray-500 bg-white text-black">Read</a>
          <a className="btn bg-cyan-500 text-white">Wishlist</a>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

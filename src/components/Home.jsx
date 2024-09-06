import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);

  return (
    <div>
      <div className="h-[554px] hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../images/books-8405721_1280.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-28">
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn bg-green-500 text-white mt-10">
              View The List
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-4xl">Books</h1>
        <div className="grid grid-cols-3 my-6">
          {booksData.map((bookData) => (
            <Link className="" to={`/viewdetails/${bookData.bookId}`}>
              <div className="card bg-base-100 w-96 shadow-xl mt-5 transition border-2 p-2 hover:scale-105 border-opacity-30 hover:border-gray-300">
                <figure>
                  <img
                    className="w-[326px] h-[230px] mt-3 rounded"
                    src={bookData.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex gap-3">
                    {bookData.tags.map((tag, idx) => (
                      <span key={idx}>
                        <p className="text-green-400 bg-gray-100 p-1 rounded-lg">
                          {tag}
                        </p>
                      </span>
                    ))}
                  </div>
                  <h1 className="card-title font-bold">{bookData.bookName}</h1>
                  <p>By: {bookData.author}</p>
                  <hr />
                  <div className="card-actions justify-between">
                    <p>{bookData.category}</p>
                    <p className="flex items-center gap-1">
                      {bookData.rating}
                      <CiStar />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

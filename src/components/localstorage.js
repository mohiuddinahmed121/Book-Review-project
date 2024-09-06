import { json } from "react-router-dom";

const getStoredBookWishList = () => {
  const storedBookWishList = localStorage.getItem("book-wishList");
  if (storedBookWishList) {
    return JSON.parse(storedBookWishList);
  }
  return [];
};

const saveBookWishList = (id) => {
  const storedBookWishList = getStoredBookWishList();
  const exists = storedBookWishList.find((bookId) => bookId === id);
  if (!exists) {
    storedBookWishList.push(id);
    localStorage.setItem("book-wishList", JSON.stringify(storedBookWishList));
  }
};

export { getStoredBookWishList, saveBookWishList };

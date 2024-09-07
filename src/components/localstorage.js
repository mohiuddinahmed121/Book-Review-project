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

// -------------getStoredBookReadList-----------------------

const getStoredBookReadList = () => {
  const storedBookReadList = localStorage.getItem("book-readList");
  if (storedBookReadList) {
    return JSON.parse(storedBookReadList);
  }
  return [];
};

const saveBookReadList = (id) => {
  const storedBookReadList = getStoredBookReadList();
  const isExists = storedBookReadList.find((bookId) => bookId === id);
  if (!isExists) {
    storedBookReadList.push(id);
    localStorage.setItem("book-readList", JSON.stringify(storedBookReadList));
  }
};

export {
  getStoredBookWishList,
  saveBookWishList,
  getStoredBookReadList,
  saveBookReadList,
};

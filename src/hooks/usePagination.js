export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.

    // DESCRIPTION
    The pagination hook runs every time the current page is updated. It will check a couple of conditions. Depending on the current page number, it returns an array containing dots, sibling pages of the current page, first and last pages, respectively.
    
  */
  const totalPages = Math.ceil(totalCount / pageSize);
  const pagesArray = Array.from({ length: totalPages }, (v, i) => i + 1);

  let displayPages = [...pagesArray];
  const firstPage = pagesArray[0];
  const lastPage = pagesArray[pagesArray.length - 1];
  const currentPageIndex = currentPage - 1;
  const previousPage = pagesArray[currentPageIndex - 1];
  const nextPage = pagesArray[currentPageIndex + 1];
  const nextTwoSibling = 3;

  if (totalPages > 3) {
    if (currentPage === lastPage) {
      return (displayPages = [
        firstPage,
        DOTS,
        ...pagesArray.slice(-nextTwoSibling),
      ]);
    }

    if (previousPage === firstPage) {
      return (displayPages = [
        firstPage,
        currentPage,
        nextPage,
        DOTS,
        lastPage,
      ]);
    }

    if (nextPage === lastPage) {
      return (displayPages = [
        firstPage,
        DOTS,
        previousPage,
        currentPage,
        lastPage,
      ]);
    }

    if (currentPage > 2) {
      return (displayPages = [
        firstPage,
        DOTS,
        previousPage,
        currentPage,
        nextPage,
        DOTS,
        lastPage,
      ]);
    }

    if (currentPage === 1) {
      return (displayPages = [
        ...pagesArray.slice(currentPageIndex, nextTwoSibling),
        DOTS,
        lastPage,
      ]);
    }
  }

  return displayPages;
}

export default usePagination;

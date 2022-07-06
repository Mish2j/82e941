import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(PAGE_SIZES[0]);
  const currentPaginationData = blogs.posts.slice(
    currentPage * blogsPerPage - blogsPerPage,
    currentPage * blogsPerPage
  );

  const lastPage = Math.ceil(blogs.posts.length / blogsPerPage);

  useEffect(() => {
    if (currentPage <= lastPage) return;
    setCurrentPage(lastPage);
  }, [currentPage, lastPage, blogsPerPage]);

  const updateRowsPerPage = (pageSizeNum) => {
    setBlogsPerPage(+pageSizeNum);
  };

  const updatePage = (currentPageNum) => {
    setCurrentPage(currentPageNum);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={blogsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

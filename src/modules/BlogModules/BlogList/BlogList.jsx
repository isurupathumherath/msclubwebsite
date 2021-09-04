import React, { useEffect, useState } from 'react';
import blogApi from '../../../API/blogAPI';
import BlogCard from '../../../component/BlogCard/BlogCard';
import './BlogListStyle.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    await blogApi
      .blog()
      .getAllblogs()
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="blogListPolygonDiv">
      <div className="past-event-container">
        <h1 className="event-header">Blogs</h1>
        <div className="container-fluid">
          <div className="row">
            {posts.map((post) => (
              <div className="col" key={post}>
                <BlogCard
                  image={post.thumbnail}
                  title={post.title}
                  datetime={post.pubDate}
                  link={post.link}
                  tags={post.categories}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

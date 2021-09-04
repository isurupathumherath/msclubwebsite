import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import blogApi from '../../../API/blogAPI';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogCard from '../../../component/BlogCard/BlogCard';

const responsive = {
  0: {
    items: 1.3,
  },
  370: {
    items: 1.2,
  },
  411: {
    items: 1.3,
  },
  414: {
    items: 1.3,
  },
  600: {
    items: 2,
  },
  768: {
    items: 2.25,
  },
  1000: {
    items: 3,
  },
  1200: {
    items: 3,
  },
  1400: {
    items: 3.5,
  },
  1700: {
    items: 4.5,
  },
};

const BlogsComponent = () => {
  const [blogs, setblogs] = useState(null);

  useEffect(() => {
    blogApi
      .blog()
      .getAllblogs()
      .then((res) => {
        setblogs(res.data.items);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="past-event-container pt-5">
      {blogs && blogs.length > 0 ? (
        <div>
          <h2 className="text-left upcomming-title">
            <strong>Blogs</strong>
          </h2>
          <div className="container-fluid">
            <OwlCarousel className="owl-theme" dots={false} loop margin={70} responsive={responsive} autoPlay={1000}>
              {blogs.map((blog) => (
                <div key={blog}>
                  <BlogCard
                    image={blog.thumbnail}
                    title={blog.title}
                    datetime={blog.pubDate}
                    link={blog.link}
                    tags={blog.categories}
                  />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BlogsComponent;

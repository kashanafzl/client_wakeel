import React from 'react';
import './Blog.css';

// Sample images (use different ones if needed)
import blogImg from '../../Asserts/Img/law.svg';

const blogData = [
  {
    id: 1,
    title: 'Single Member Company',
    author: 'Barrister Naveed Khan',
    image: blogImg,
    description:
      'A Single Member Company (SMC) is a private limited company with only one member or director, offering the benefit of limited liability. It allows sole proprietors to gain corporate status, ensuring better legal recognition and financial protection...',
    link: '/',
  },
  {
    id: 2,
    title: 'Single Member Company',
    author: 'Barrister Naveed Khan',
    image: blogImg,
    description:
      'A Single Member Company (SMC) is a private limited company with only one member or director, offering the benefit of limited liability. It allows sole proprietors to gain corporate status, ensuring better legal recognition and financial protection...',
    link: '/',
  },
  {
    id: 3,
    title: 'Single Member Company',
    author: 'Barrister Naveed Khan',
    image: blogImg,
    description:
      'A Single Member Company (SMC) is a private limited company with only one member or director, offering the benefit of limited liability. It allows sole proprietors to gain corporate status, ensuring better legal recognition and financial protection...',
    link: '/',
  },
  {
    id: 4,
    title: 'Single Member Company',
    author: 'Barrister Naveed Khan',
    image: blogImg,
    description:
      'A Single Member Company (SMC) is a private limited company with only one member or director, offering the benefit of limited liability. It allows sole proprietors to gain corporate status, ensuring better legal recognition and financial protection...',
    link: '/',
  },
];

export default function Blog() {
  return (
    <div className="blog-container">
      {blogData.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt="blog" />
          <h2>{blog.title}</h2>
          <h6>{blog.author}</h6>
          <p>{blog.description}</p>
          <a href={blog.link}>Read More</a>
        </div>
      ))}
    </div>
  );
}

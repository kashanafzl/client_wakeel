import React from 'react';
import './Blog.css';
import blogImg from '../../Asserts/Img/law.svg';

const blogData = [
  {
    id: 1,
    title: 'Single Member Company',
    author: 'Barrister Naveed Khan',
    image: blogImg,
    description:
      'An SMC is a private limited company with only one member/director, offering corporate status and legal protection for sole proprietors...',
    link: '/',
  },
  {
    id: 2,
    title: 'Legal Rights in Workplace',
    author: 'Adv. Sara Imran',
    image: blogImg,
    description:
      'Workplace rights include fair wages, protection against discrimination, and a safe environment for all employees...',
    link: '/',
  },
  {
    id: 3,
    title: 'Understanding Family Law',
    author: 'Barrister Ahsan Malik',
    image: blogImg,
    description:
      'Family law governs family relationships including divorce, child custody, and inheritance. Here’s what you need to know...',
    link: '/',
  },
  {
    id: 4,
    title: 'Cyber Law in Pakistan',
    author: 'Adv. Komal Shahid',
    image: blogImg,
    description:
      'Cyber law covers crimes like hacking, online harassment, and data theft. Let’s explore the legal framework and consequences...',
    link: '/',
  },
];

export default function Blog() {
  return (
    <>
    <div className="blog-container">
      <h1 className="blog-heading">📚 Legal Insights & Articles</h1>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image-wrapper">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <h6>{blog.author}</h6>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more-btn">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>



    </>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './Seelawyer.css';

import man1 from '../../../../Asserts/Img/man1.svg';
import man2 from '../../../../Asserts/Img/man2.svg';
import man3 from '../../../../Asserts/Img/man3.svg';

const categories = [
  'Divorce',
  'Criminal',
  'Civil',
  'Family',
  'Corporate',
  'Property',
];

const lawyers = [
  {
    id: 0,
    name: ' Saad Khan',
    category: 'Divorce',
    experience: '5 Years',
    education: 'LLB, Harvard University',
    rating: '⭐⭐⭐⭐',
    location: 'Karachi',
    image: man1,
    age: 32
  },
  {
    id: 1,
    name: 'Adv. Usman Raza',
    category: 'Criminal',
    experience: '8 Years',
    education: 'LLM, Oxford University',
    rating: '⭐⭐⭐⭐⭐',
    location: 'Lahore',
    image: man2,
    age: 38
  },
  {
    id: 2,
    name: 'Adv. Sara Ali',
    category: 'Family',
    experience: '4 Years',
    education: 'LLB, Punjab University',
    rating: '⭐⭐⭐',
    location: 'Islamabad',
    image: man3,
    age: 29
  },
  {
    id: 3,
    name: 'Adv. Bilal Sheikh',
    category: 'Civil',
    experience: '6 Years',
    education: 'LLB, Karachi University',
    rating: '⭐⭐⭐⭐',
    location: 'Quetta',
    image: man1,
    age: 35
  },
];

export default function Seelawyer() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredLawyers =
    selectedCategory === 'All'
      ? lawyers
      : lawyers.filter((lawyer) => lawyer.category === selectedCategory);

  const viewthelawyer = (id) => {
    navigate(`/lawyerprofile/${id}`);
  };

  return (
    <div className="client-container">
      <h2 className="title">Find Your Lawyer</h2>

      <div className="category-list">
        <button
          className={selectedCategory === 'All' ? 'active' : ''}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="lawyer-grid">
        {filteredLawyers.map((lawyer) => (
          <div className="lawyer-card" key={lawyer.id}>
            <img src={lawyer.image} alt={lawyer.name} />
            <h3>{lawyer.name}</h3>
            <p><strong>{lawyer.category}</strong> Lawyer</p>
            <p>{lawyer.experience} Experience</p>
            <p>{lawyer.education}</p>
            <p>{lawyer.location}</p>
            <p className="rating">{lawyer.rating}</p>
            <button onClick={() => viewthelawyer(lawyer.id)} className="view-btn">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

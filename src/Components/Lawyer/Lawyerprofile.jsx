import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./LawyerProfile.css";

import man1 from "../../Asserts/Img/man1.svg";
import man2 from "../../Asserts/Img/man2.svg";
import man3 from "../../Asserts/Img/man3.svg";

const lawyers = [
  {
    id: 0,
    name: "Saad",
    category: "Divorce",
    age: 32,
    experience: "5 Years",
    education: "LLB, Harvard University",
    rating: "⭐⭐⭐⭐",
    location: "Karachi",
    address: "Suite #45, High Court Chambers, Karachi",
    image: man1,
    phone: "+923001234567",
    email: "Saad.khan@lawfirm.com",
    caseTimings: "Mon-Fri, 10:00 AM - 4:00 PM",
    description:
      "Advocate Saad Khan specializes in family and divorce law. She has successfully handled over 200 cases and is known for her empathetic approach and deep legal understanding.",
  },
  {
    id: 1,
    name: "Adv. Usman Raza",
    category: "Criminal",
    age: 38,
    experience: "8 Years",
    education: "LLM, Oxford University",
    rating: "⭐⭐⭐⭐⭐",
    location: "Lahore",
    address: "Chamber #10, Lahore High Court, Lahore",
    image: man2,
    phone: "+923123456789",
    email: "usman.raza@lawfirm.com",
    caseTimings: "Mon-Sat, 9:00 AM - 5:00 PM",
    description:
      "Advocate Usman Raza is a prominent criminal lawyer known for his aggressive defense strategy and excellent court presence. Over 300 cases won in the last 5 years.",
  },
  {
    id: 2,
    name: "Adv. Sara Ali",
    category: "Family",
    age: 29,
    experience: "4 Years",
    education: "LLB, Punjab University",
    rating: "⭐⭐⭐",
    location: "Islamabad",
    address: "Office 2-B, Blue Area, Islamabad",
    image: man3,
    phone: "+923334445556",
    email: "sara.ali@lawfirm.com",
    caseTimings: "Tue-Sat, 11:00 AM - 4:00 PM",
    description:
      "Advocate Sara Ali focuses on child custody and family settlements. She has a modern legal approach and is appreciated for clear client communication.",
  },
];

export default function LawyerProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const lawyer = lawyers.find((lawyer) => lawyer.id === parseInt(id));

  if (!lawyer) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Lawyer not found</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="lawyer-profile-container">
      <div className="lawyer-profile-card">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="lawyer-profile-img"
        />
        <div className="lawyer-profile-details">
          <h2>{lawyer.name}</h2>
          <p>
            <strong>Category:</strong> {lawyer.category}
          </p>
          <p>
            <strong>Age:</strong> {lawyer.age} years
          </p>
          <p>
            <strong>Experience:</strong> {lawyer.experience}
          </p>
          <p>
            <strong>Education:</strong> {lawyer.education}
          </p>
          <p>
            <strong>Location:</strong> {lawyer.location}
          </p>
          <p>
            <strong>Address:</strong> {lawyer.address}
          </p>
          <p>
            <strong>Case Timings:</strong> {lawyer.caseTimings}
          </p>
          <p>
            <strong>Rating:</strong> {lawyer.rating}
          </p>
          <p>
            <strong>Email:</strong> {lawyer.email}
          </p>
          <p>
            <strong>Phone:</strong> {lawyer.phone}
          </p>
          <p>
            <strong>Description:</strong> {lawyer.description}
          </p>

          <div className="lawyer-actions">
            <a href={`mailto:${lawyer.email}`} className="contact-btn">
              📧 Contact Us
            </a>
            <a
              href={`https://wa.me/${lawyer.phone.replace("+", "")}`}
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} style={{ marginRight: "6px" }} />
              Chat on WhatsApp
            </a>
          </div>

          <Link to="/dashboard">
            <button className="apply-case-btn">Apply the Case</button>
          </Link>

          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

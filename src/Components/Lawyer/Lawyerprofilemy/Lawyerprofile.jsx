import React, { useState, useEffect } from 'react';
import './Lawyerprofile.css';
import defaultPic from '../../../Asserts/Img/man1.svg';

export default function Lawyerprofilemy() {
  const storedProfile = JSON.parse(localStorage.getItem('lawyerProfile')) || {};

  const [profile, setProfile] = useState({
    name: storedProfile.name || 'John Doe',
    email: storedProfile.email || 'john.doe@lawfirm.com',
    phone: storedProfile.phone || '0300-1234567',
    specialization: storedProfile.specialization || 'Criminal Law',
    experience: storedProfile.experience || '5 Years',
    location: storedProfile.location || 'Karachi, Pakistan',
    bio: storedProfile.bio || 'Dedicated legal professional with over 5 years of courtroom and corporate experience.',
    profileImage: storedProfile.profileImage || defaultPic,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('lawyerProfile', JSON.stringify(profile));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="unique-profile-wrapper">
      <div className="unique-profile-card">
        <div className="profile-side">
          <div className="image-wrapper">
            <img src={profile.profileImage} alt="Lawyer" className="side-profile-pic" />
            {isEditing && (
              <>
                <label className="edit-pic-btn">
                  📷 Change Photo
                  <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                </label>
              </>
            )}
          </div>
          <h2 className="lawyer-name">{profile.name}</h2>
          <p className="lawyer-specialty">{profile.specialization}</p>
          <p className="lawyer-location">📍 {profile.location}</p>
        </div>

        <div className="profile-main">
          <div className="header-with-edit">
            <h3 className="section-heading">Profile Information</h3>
            <button onClick={() => setIsEditing((prev) => !prev)} className="edit-toggle-btn">
              {isEditing ? 'Cancel' : '✏️ Edit'}
            </button>
          </div>

          {[
            { label: 'Full Name', name: 'name' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone', name: 'phone' },
            { label: 'Specialization', name: 'specialization' },
            { label: 'Experience', name: 'experience' },
            { label: 'Location', name: 'location' },
          ].map(({ label, name, type = 'text' }) => (
            <div className="input-group" key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={profile[name]}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          ))}

          <div className="input-group full-width">
            <label>About</label>
            <textarea
              name="bio"
              rows="4"
              value={profile.bio}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          {isEditing && (
            <button className="update-btn" onClick={handleSave}>
              💾 Save Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}



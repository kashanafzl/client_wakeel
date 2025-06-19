import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Myprofile.css';

export default function Myprofile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleSaveChanges = () => {
    // Perform save logic here (API call, etc.)
    console.log('Saving profile changes...');
  };

  return (
    <div className="new-profile-container">
      <div className="profile-card">
        <div className="avatar-section">
          <div className="avatar-box">
            {selectedImage ? (
              <img src={selectedImage} alt="avatar" className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">Upload</div>
            )}
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              onChange={handleImageUpload}
              className="avatar-input"
            />
          </div>
          {selectedImage && (
            <button onClick={handleRemoveImage} className="remove-avatar-btn">
              Remove
            </button>
          )}
          <h3 className="username">John Doe</h3>
          <p className="user-role">Businessman</p>
        </div>
      </div>

      <div className="form-card">
        <h2>Edit Profile</h2>

        <div className="field-row">
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>
        </div>

        <div className="field-row">
          <div className="form-field">
            <label>Phone</label>
            <input type="text" placeholder="+92 300 1234567" />
          </div>
          <div className="form-field">
            <label>Address</label>
            <input type="text" placeholder="Street, City" />
          </div>
        </div>

        <div className="field-row">
          <div className="form-field">
            <label>Password</label>
            <div className="password-wrap">
              <input type={showPassword ? "text" : "password"} placeholder="********" />
              <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <span
              className="forgot-link"
              onClick={() => navigate('/Lawyerforgotpasswords')}
            >
              Forgot Password?
            </span>
          </div>
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import '../assets/css/Form.css';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    emergencyContact: {
      name: '',
      relationship: '',
      contactPhone: '',
      contactAddress: '',
    },
    dropdownValue: '', // Initialize dropdown value
    photo: null, // Store uploaded photo
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      emergencyContact: {
        ...formData.emergencyContact,
        [name]: value,
      },
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process or submit the form data here
    console.log(formData);
  };

  return (
    <>
      <Navigation />
      <Social/>
      <div className='body1'>
        <main className='main1'>
          <div>
            <h1 className='formel'>Elderly Care Form</h1>
            <p id="description">Please provide the following information:</p>
          </div>
          <form onSubmit={handleSubmit} className='formjs'>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="photo" id="photo-label" className="form-label">
              Upload Photo
            </label>
            <div id="photo-input">
              <label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </label>
              
            </div>
            <br/>
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="gender" className="form-label">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-input"
            />

            <div>
              <h3 id="description">Emergency Contact</h3>
              <label htmlFor="emergencyContactName" className="form-label">Name</label>
              <input
                type="text"
                id="emergencyContactName"
                name="name"
                value={formData.emergencyContact.name}
                onChange={handleEmergencyContactChange}
                required
                className="form-input"
              />

              <label htmlFor="relationship" className="form-label">Relationship</label>
              <input
                type="text"
                id="relationship"
                name="relationship"
                value={formData.emergencyContact.relationship}
                onChange={handleEmergencyContactChange}
                required
                className="form-input"
              />

              <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.emergencyContact.contactPhone}
                onChange={handleEmergencyContactChange}
                required
                className="form-input"
              />

              <label htmlFor="contactAddress" className="form-label">Contact Address</label>
              <input
                type="text"
                id="contactAddress"
                name="contactAddress"
                value={formData.emergencyContact.contactAddress}
                onChange={handleEmergencyContactChange}
                required
                className="form-input"
              />
            </div>

            <label htmlFor="dropdownValue" className="form-label">Choose Service</label>
            <select
              id="dropdownValue"
              name="dropdownValue"
              value={formData.dropdownValue}
              onChange={handleInputChange}
              className="form-input"
            >
              <option value="option1">Eco-Haven</option>
              <option value="option2">Diet</option>
              <option value="option3">Sanitation</option>
              <option value="option4">Mobilizing</option>
            </select>

            <input
              type="submit"
              value="Submit"
              className="button-29"
            />
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Form;

import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

function StudentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    sex: '',
    emailId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/students/`, formData);
      console.log('Student created:', response.data);
      // Optionally, you can redirect to another page or update the UI here.
    } catch (error) {
      console.error('Error creating student:', error);
      // Handle errors or display an error message to the user.
    }
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" onChange={handleChange} value={formData.age} />
        </div>
        <div>
          <label>Sex:</label>
          <input type="text" name="sex" onChange={handleChange} value={formData.sex} />
        </div>
        <div>
          <label>Email ID:</label>
          <input type="email" name="emailId" onChange={handleChange} value={formData.emailId} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;

import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.29.218:8080/api'; 

function GetStudentByEmailForm() {
    const [email, setEmail] = useState('');
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleFetchStudent = async (e) => {
      e.preventDefault();
      setError(null); // Clear any previous error
  
      try {
        const response = await axios.get(`${API_BASE_URL}/students/email/${email}`);
        setStudent(response.data);
      } catch (error) {
        setError('Student not found'); // Handle the error message as needed
        setStudent(null);
      }
    };
  
    return (
      <div>
        <h2>Get Student by Email</h2>
        <form onSubmit={handleFetchStudent}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Search</button>
        </form>
  
        {student && (
          <div>
            <h3>Student Details</h3>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>Age: {student.age}</p>
            <p>Sex: {student.sex}</p>
            {/* Add more student details here */}
          </div>
        )}
  
        {error && <p>{error}</p>}
      </div>
    );
  }
  
  export default GetStudentByEmailForm ;
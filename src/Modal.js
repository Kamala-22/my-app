import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, toggleModal }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signed up successfully!');
    toggleModal();
  };

  const handleSignin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Signed in successfully!');
    } else {
      alert('Invalid email or password.');
    }
    toggleModal();
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={toggleModal}>&times;</span>
          {isSignup ? (
            <>
              <h2>Sign Up</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Already have an account? <span onClick={() => setIsSignup(false)}>Sign In</span>
              </p>
            </>
          ) : (
            <>
              <h2>Sign In</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleSignin}>Sign In</button>
              <p>
                Don't have an account? <span onClick={() => setIsSignup(true)}>Sign Up</span>
              </p>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;

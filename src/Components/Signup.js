import React from 'react';

function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
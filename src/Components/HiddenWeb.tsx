import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HiddenWeb() {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');

  const check = () => {
    if (pass === 'admin123') {
      navigate('/admin');
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div className="glass-card">
      <h2>Restricted Access</h2>
      <p>Verification Required</p>
      <input 
        type="password" 
        placeholder="Enter Hidden Password" 
        onChange={e => setPass(e.target.value)} 
        style={{ padding: '10px', width: '80%', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }} 
      />
      <button onClick={check} className="btn-primary">Verify</button>
    </div>
  );
}

export default HiddenWeb;

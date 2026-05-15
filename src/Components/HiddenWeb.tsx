import { useState } from 'react';
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
    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow text-center">
          <div className="card-body p-4">
            <div className="fs-1 mb-3">🔒</div>
            <h2 className="card-title text-success">Restricted Access</h2>
            <p className="text-muted mb-4">Verification Required</p>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Hidden Password"
              onChange={e => setPass(e.target.value)}
            />
            <button onClick={check} className="btn btn-success w-100">Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiddenWeb;

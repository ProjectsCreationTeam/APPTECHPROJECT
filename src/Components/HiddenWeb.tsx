

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HiddenWeb() {

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginAdmin = () => {

    if(password === "admin123"){

      navigate("/admin");

    }else{

      alert("Wrong Password");
    }
  };

  return (
    <div className="hidden-page">

      <div className="hidden-box">

        <h1>Hidden Website</h1>

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={loginAdmin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default HiddenWeb;

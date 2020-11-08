import React from "react";
import './navigation.style.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav">
        <a href="#" className="narutoLogo"></a>
        {/* <a href="#" className="helpText">Reset</a> */}
        <Link to="/" className="helpText">Reset</Link>
    </div>
    
  );
}

export default Navigation;
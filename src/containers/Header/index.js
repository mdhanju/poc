import React from 'react';
// import { Container } from 'reactstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
      return (
        <div >
         <div style={{ padding: 10}}>
           <Link to="/">Home</Link>
         </div>
         <div style={{ padding: 10}}>
           <Link to="/search">Search</Link>
         </div>
        </div>
      )
    }
}

export default Header;

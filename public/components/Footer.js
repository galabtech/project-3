import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
             
                
                        &copy; {new Date().getFullYear()}{" "}
          
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;

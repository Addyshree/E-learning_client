import React from 'react'
import "./footer.css"
// import {AiFillFacebook} from "react-icons/ai"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your E-learning Platform. All rights reserves. <br />
          <a href="github link">Aditi Kumari</a>
        </p>

        <div className="social-links">
           <a href="">
                      <AiFillFacebook />
                    </a>
                    <a href="">
                      <AiFillTwitterSquare />
                    </a>
                    <a href="">
                      <AiFillInstagram />
                    </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

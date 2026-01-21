import React from "react";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 rounded p-10">
        <ul className="grid grid-flow-col gap-4">
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/aboutUs"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <a>Press kit</a>
          </li>
        </ul>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/ahmad-marjuk" target="_blank">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/swapnachari-marjuk" target="_blank">
              <FaSquareGithub size={22} />
            </a>
            <a href="https://www.facebook.com/ahmad.marjuk.dev" target="_blank">
              <FaSquareFacebook size={22} />
            </a>
          </div>
        </nav>
        <aside>
          <p>Developed By Ahmad M.</p>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Developer.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

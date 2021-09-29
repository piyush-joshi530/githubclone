import React from "react";
import logo from "../Image/githublogo.jfif";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* <hr style={{ height: "2px", marginLeft: "30px", marginRight: "30px" }} /> */}
      <div className="footer">
        <div className="div1">
          <ul>
            <li>2021 GitHub,Inc</li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Security</a>
            </li>
            <li>
              <a href="/">Status</a>
            </li>
            <li>
              <a href="/">Docs</a>
            </li>
          </ul>
        </div>
        <div className="div2">
          <ul>
            <li>
              <img
                style={{ width: "25px", height: "25px" }}
                src={logo}
                alt="nothing"
              />
            </li>
          </ul>
        </div>
        <div className="div3">
          <ul>
            <li>
              <a href="/">Conatact GitHub</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Api</a>
            </li>
            <li>
              <a href="/">Training</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

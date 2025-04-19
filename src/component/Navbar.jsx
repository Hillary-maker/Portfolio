import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";
import { useState } from "react";
function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <>
      <nav>
        <div className="container">
          <p style={{ color: isActive ? "#0f1724" : "#ffffff" }} className="p">
            Logo
          </p>
          <ul className="Linkwrapper">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
          </ul>
          <div className="box">
            <li className="li">
              <a href="#">
                <FaGithub size={30} />
              </a>{" "}
            </li>
            <li className="li">
              <a href="#">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="li">
              <a href="#">
                <FaFigma size={30} />
              </a>
            </li>
          </div>

          {!isActive && (
            <RxHamburgerMenu
              onClick={handleClick}
              size={30}
              className="hamburger icon"
            />
          )}
          {isActive && (
            <HiX onClick={handleClick} size={30} className="cancel icon" />
          )}
        </div>
      </nav>
      <DropDown isActive={isActive} />
    </>
  );
}

export default Navbar;

function DropDown({ isActive }) {
  return (
    <div style={{ marginLeft: !isActive ? "-100%" : "0" }} className="dropdown">
      <ul className="dropLinks">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
      </ul>
      <div className="drop-box">
        <li className="li">
          <a href="#">
            <FaGithub size={30} color="#0f1724" />
          </a>{" "}
        </li>
        <li className="li">
          <a href="#">
            <FaLinkedin size={30} color="#0f1724" />
          </a>
        </li>
        <li className="li">
          <a href="#">
            <FaFigma size={30} color="#0f1724" />
          </a>
        </li>
      </div>
    </div>
  );
}

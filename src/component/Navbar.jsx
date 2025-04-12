import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <p className="p">Logo</p>
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
      </div>
    </nav>
  );
}

export default Navbar;

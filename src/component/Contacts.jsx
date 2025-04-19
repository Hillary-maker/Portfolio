import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
function Contacts() {
  return (
    <section className="section10">
      <div className="boxes1">
        <div className="boxes2">
          <div className="boxes3">
            <p className="paras">Call me</p>
            <p className="paras">123-456-789</p>
          </div>
          <div className="boxes4">
            <p className="paras1">Email:</p>
            <p className="paras1">charles@outlook.com</p>
          </div>
          <div className="boxes5">
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
      </div>
    </section>
  );
}

export default Contacts;

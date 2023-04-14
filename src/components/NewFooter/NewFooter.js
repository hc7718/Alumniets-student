import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Button } from "@mui/material";
import "./NewFooter.css";
const NewFooter = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="socialIcon">
          <a className="a" href="">
            <i className="icons">
              <FaFacebookSquare />
            </i>
          </a>
          <a className="a" href="">
            <i className="icons">
              <FaLinkedin />
            </i>
          </a>
          <a className="a" href="">
            <i className="icons">
              <FaInstagram />
            </i>
          </a>
          <a className="a" href="">
            <i className="icons">
              <FaTwitterSquare />
            </i>
          </a>
        </div>
        <div className="footerNav">
          <ul className="unOrder">
            <li>
              <Button
                style={
                  {
                    //   color: "bisque",
                  }
                }
                variant="text"
              >
                News
              </Button>
            </li>
            <li>
              <Button
                style={
                  {
                    //   color: "bisque",
                  }
                }
                variant="text"
              >
                Alumni
              </Button>
            </li>
            <li>
              <Button
                style={
                  {
                    //   color: "bisque",
                  }
                }
                variant="text"
              >
                News
              </Button>
            </li>
            <li>
              <Button
                style={
                  {
                    //   color: "bisque",
                  }
                }
                variant="text"
              >
                News
              </Button>
            </li>
          </ul>
        </div>
        {/* <div className="footerBottom">
          <p>
            Copyright &copy;2023; Designed by{" "}
            <span className="designer">Harsh</span>{" "}
          </p>
        </div> */}
      </div>
    </footer>
  );
};
export default NewFooter;

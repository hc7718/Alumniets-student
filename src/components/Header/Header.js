import { Button } from "@mui/material";
import nietLogo from "../../images/nietLogo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleImg = () => {
    navigate("/dashboard");
  };
  const handleNews = () => {
    navigate("/news");
  };
  const handleAlumni = () => {
    navigate("/alumni");
  };
  return (
    <div className="header-div">
      <nav>
        <div className="navbar-image-p">
          <img
            onClick={handleImg}
            className="content-items"
            src={nietLogo}
            alt="NIET LOGO"
          ></img>
          <p onClick={handleImg} className="logo">
            {" "}
            Alumniets
          </p>

          <ul>
            <li>
              <Button
                onClick={handleNews}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                News
              </Button>
            </li>
            <li>
              <Button
                onClick={handleAlumni}
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Alumni
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;

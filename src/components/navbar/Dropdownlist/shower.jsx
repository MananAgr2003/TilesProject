import { useState } from "react";
import "./style.css";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

function Shower(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="navbar-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        right: "00px",
        height: "50px",
        top: "6.5px",
        marginLeft:"10px"
      }}
    >
      <span
        className="navbar-item-label"
        style={{
          fontSize: "23px",
          fontFamily: "unna",
        }}
      >
        Shower <ArrowDropDown style={{ position: "relative", top: "6px" }} />
      </span>
      {isHovered && (
        <div
          className="navbar-menu"
          style={{
            position: "absolute",
            zIndex: "9999",
            backgroundColor: "white",
            color: "black",
            padding: "15px",
            top: "40px",
          }}
        >
            <div
              className="navbar-menu-item"
              key="1"
              style={{
                marginBottom: "15px",
                fontFamily: "unna",
                cursor: "pointer",
              }}
            >
              Option 1
            </div>
          <div
            className="navbar-menu-item"
            key="2"
            style={{
              marginBottom: "15px",
              fontFamily: "unna",
              cursor: "pointer",
            }}
          >
            Option 2
          </div>
          <div
            className="navbar-menu-item"
            key="3"
            style={{
              marginBottom: "15px",
              fontFamily: "unna",
              cursor: "pointer",
            }}
          >
            Option 3
          </div>
          <div
            className="navbar-menu-item"
            key="4"
            style={{
              marginBottom: "0px",
              fontFamily: "unna",
              cursor: "pointer",
            }}
          >
            Option 4
          </div>
        </div>
      )}
    </div>
  );
}
export default Shower;

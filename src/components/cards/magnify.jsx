import React,  {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import { useTheme } from '@material-ui/core/styles';




function ImageMagnifier(props) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        height: "700px",
        width: "500px"
      }}
    >
      <img
        src={props.imageSrc}
        style={{ height: "100%", width: "100%" }}
        onMouseEnter={(e) => {
          // update image size and turn-on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          // prevent magnifier blocks the mousemove event of img
          pointerEvents: "none",
          // set size of magnifier
          height: "400px",
          width: "400px",
          borderRadius:"50%",
          // move element center to cursor pos
          top: `${y - 300 / 1.5}px`,
          left: `${x + 10 / 1.5}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${props.imageSrc}')`,
          backgroundRepeat: "no-repeat",

          //calculate zoomed image size
          backgroundSize: `${imgWidth *2}px ${
            imgHeight * 2
          }px`,

          //calculate position of zoomed image.
          backgroundPositionX: `${-x * 2 + 100 / 2}px`,
          backgroundPositionY: `${-y * 2 + 100 / 1.5}px`,
          zIndex:"9999"
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier;
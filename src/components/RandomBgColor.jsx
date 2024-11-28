import React from "react";
import { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";

const RandomBgColor = ({ starNo }) => {
  //   const [colorType, setColorType] = useState();
  const [color, setColor] = useState("white");

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    setColor(color);
  };

  const generateHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  const btnStyle = {
    border: "1px solid black",
    padding: "10px 20px",
    borderRadius: "5px",
    marginLeft: "15px",
    cursor: "pointer",
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className='container'>
      <div className='btn-contain'>
        <button style={btnStyle} onClick={() => generateRgbColor()}>
          RGB Color
        </button>
        <button style={btnStyle} onClick={() => generateHexColor()}>
          HEX Color
        </button>
        <h2
          style={{
            backgroundColor: color,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          {color}
        </h2>
      </div>
      <div className='star-cont'>
        {[...Array(starNo)].map((_, index) => (
          <IoMdStarOutline
            key={index + 1}
            className={`star ${index + 1 <= (hover || rating) ? "active" : ""}`}
            size={30}
            onMouseOver={() => setHover(index + 1)}
            onClick={() => setRating(index + 1)}
            onMouseOut={() => setHover(0)}
          />
        ))}
        <br />
        <span style={{ marginTop: "10px", color: "black", fontSize: "20px" }}>
          Your rating : {rating}
        </span>
      </div>
    </div>
  );
};

export default RandomBgColor;

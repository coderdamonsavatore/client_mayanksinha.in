import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img:
        "assets/isroc1.png",
    },
    {
      id: "2",
   
      img:
        "assets/isroc2.png",
    },
    {
      id: "3",
      img:
        "assets/vcard.png",
    },
    {
      id: "4",
      img:
        "assets/mc1.jpg",
    },
    {
      id: "5",
      img:
        "assets/mc2.jpg",
    },
    {
      id: "6",
      img:
        "assets/mc3.jpg",
    },
    {
      id: "7",
      img:
        "assets/mc4.jpg",
    },
    {
      id: "8",
      img:
        "assets/mc5.jpg",
    },
    {
      id: "9",
      img:
        "assets/mc6.jpg",
    },
    {
      id: "10",
      img:
        "assets/mc7.jpg",
    },
    {
      id: "11",
      img:
        "assets/mc8.jpg",
    },
    {
      id: "12",
      img:
        "assets/mc9.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
       <h1>Certifications</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
             
             <img src ={d.img} className="certificate"></img>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

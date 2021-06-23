import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  hobbiesPortfolio,
  strengthPortfolio,
  professionalPortfolio,
  personalPortfolio,
  languagesPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "hobbies",
      title: "Hobbies",
    },
    {
      id: "strengths",
      title: "Strengths",
    },
    {
      id: "professional",
      title: "Professional",
    },
    {
      id: "personal",
      title: "Personal",
    },
    {
      id: "language",
      title: "Languages",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "hobbies":
        setData(hobbiesPortfolio);
        break;
      case "strengths":
        setData(strengthPortfolio);
        break;
      case "professional":
        setData(professionalPortfolio);
        break;
      case "personal":
        setData(personalPortfolio);
        break;
      case "language":
        setData(languagesPortfolio);
        break;
      default:
        setData(hobbiesPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

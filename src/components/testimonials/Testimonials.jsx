import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Love Vaishnav",
      title: "Co-Founder & CTO",
      img:
        "assets/lv.png",
      icon: "assets/right-arrow.png",
      desc:
        "An enthusiast who loves to explore about space and related stuff.",
    },
    {
      id: 2,
      name: "Harshvardhan Pratap Singh",
      title: "Co-Founder & CEO",
      img:
        "assets/hvps.png",
      icon: "assets/right-arrow.png",
      desc:
        "A good friend who has abundant knowledge of physics and also has skills to showcase.",
      featured: true,
    },
    {
      id: 3,
      name: "Samar Pratap Singh",
      title: "Business Consultant",
      img:
        "assets/sps.png",
      icon: "assets/right-arrow.png",
      desc:
        "Has some really good knowledge of Public speaking , Debate and Group discussion.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./App.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { Copyright } from "@material-ui/icons";
import Copyrightt from "./components/copyright/Copyrightt";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
       <Copyrightt></Copyrightt>
     </div>
     
    </div>
  );
}

export default App;
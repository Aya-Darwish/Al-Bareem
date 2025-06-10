import './App.css';
import Header from "./Header";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs.js";
import Program from "./Program.js";
export default function App(){
  return(
    <div>
      <Header />
      <Welcome />
      <AboutUs />
      <Program />
    </div>
  );
}
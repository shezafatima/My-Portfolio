
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

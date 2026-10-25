import Navbar from "./components/navigation/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import WhyCeejay from "./components/sections/WhyCeejay";
import About from "./components/sections/About";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyCeejay />
        <About />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
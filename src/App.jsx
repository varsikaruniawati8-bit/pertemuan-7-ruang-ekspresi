import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PillarGrid from "./components/PillarGrid";
import ScheduleSection from "./components/ScheduleSection";
import ProgramCards from "./components/ProgramCards";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">

      {/* HOME */}
      <section id="home">
        <Navbar />
        <HeroSection />
      </section>

      {/* ABOUT */}
      <section id="about">
        <PillarGrid />
      </section>

      {/* PROGRAM */}
      <section id="program">
        <ScheduleSection />
        <ProgramCards />
      </section>

      {/* PROJECT */}
      <section id="project">
        <ProjectShowcase />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}


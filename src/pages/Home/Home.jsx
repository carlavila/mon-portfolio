import React, { useRef, useEffect, useState } from "react";
import Navigation from "../../components/Navbar/Navigation";
import Presentation from "../../components/Presentation/Presentation";
import Propos from "../../components/Propos/Propos";
import Knowledges from "../../components/Knowledges/Knowledges";
import Projects from "../../components/Projects/Project";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "../Home/home.css";

function Home() {
  const presentationRef = useRef(null);
  const proposRef = useRef(null);
  const knowledgesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const sections = [
        { ref: presentationRef, id: "presentation" },
        { ref: proposRef, id: "propos" },
        { ref: knowledgesRef, id: "knowledges" },
        { ref: projectsRef, id: "projects" },
        { ref: contactRef, id: "contact" }
      ];

      sections.forEach(({ ref, id }) => {
        if (isHalfInView(ref.current, scrollPosition)) {
          setActiveSection(id);
        }
      });
    };

    const isHalfInView = (ref, scrollPosition) => {
      if (!ref) return false;

      const rect = ref.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Check if half of the element is visible
      const isVisible = (elementTop <= window.innerHeight / 2 && elementBottom >= window.innerHeight / 2);

      return isVisible;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (sectionId) => {
    const sectionRef = {
      presentation: presentationRef,
      propos: proposRef,
      knowledges: knowledgesRef,
      projects: projectsRef,
      contact: contactRef
    }[sectionId];

    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="Home">
      <Navigation scrollTo={scrollTo} activeIcon={activeSection} />
      <div id="presentation" ref={presentationRef}>
        <Presentation />
      </div>
      <div id="propos" ref={proposRef}>
        <Propos />
      </div>
      <div id="knowledges" ref={knowledgesRef}>
        <Knowledges />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      </div>
      <Footer />
   
    </>
  );
}

export default Home;

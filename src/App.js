import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Card } from 'primereact/card';
import Sidebar from "./components/Sidebar";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Experiences from "./pages/Experiences";
import Formations from "./pages/Formations";
import Projects from "./pages/Projects";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="container mb-5 ">
        {/* Navbar and Sidebar in the same row */}
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 mt-dynamic rp-md-0">
            <Sidebar />
            <div className="hidden-md w-100">
              <ContactForm />
            </div>
          </div>
          {/* Navbar */}
          <div className="col-lg-9 col-md-8 rp-md-0">
            <div className="glass-card bg-white mt-dynamic" id="res-nav">
              <Nav />
            </div>

            {/* Content area */}
            <div className="glass-card mt-4 content bg-white rm-md-0">
              <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/Formations" element={<Formations />} />
                <Route path="/Experiences" element={<Experiences />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Certifications" element={<Certifications />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <section className="section">
      <Card title="Mohamed LACHGAR">
        <p className="m-0" style={{ textAlign: 'justify' }}>
          Ingénieur d'État en Informatique diplômé de l'ENSIAS en 2009 et titulaire d'un doctorat en informatique obtenu à l'Université Cadi Ayyad en 2017, est également professeur en informatique à l'École Nationale des Sciences Appliquées de l'Université Chouaib Doukkali, El Jadida, Maroc. Ses domaines de recherche englobent le développement d'outils d'automatisation dans les logiciels embarqués, la modélisation et la conception de logiciels, la conception de métamodèles, la transformation de modèles, les méthodes de vérification et de validation de modèles, ainsi que l'application du machine learning et du deep learning dans plusieurs domaines.
        </p>
        <p className="m-0" style={{ textAlign: 'justify' }}>
          En tant que concepteur et formateur spécialisé dans les technologies JAVA, il met en avant les outils et solutions Open Source pour le développement de projets Internet et mobile. Il dispense des cours sur la plate-forme Java Enterprise Edition (JEE), la programmation mobile, la programmation web, la programmation multiplateforme, l'architecture des applications d'entreprises (JEE), UML et les bases de données.
        </p>
      </Card>
    </section>
  );
}

export default App;

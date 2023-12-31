import React from "react";
import { Card } from "primereact/card";
import { FaCalendarAlt, FaMapMarkerAlt, FaBook } from "react-icons/fa";

const ExperienceCard = ({
  logo,
  title,
  position,
  duration,
  location,
  courses,
  index,
}) => {
  const cardStyle = {
    backgroundColor: "#fff4fb" , // Alternating background colors
    
  };

  const footerTemplate = (
    <div>
      <div className="p-d-flex p-flex-column text-muted">
        <small className="p-mb-2">
          <FaCalendarAlt className="p-mr-1" /> {duration}
        </small>
        {location && (
          <small>
            <FaMapMarkerAlt className="p-mr-1" /> {location}
          </small>
        )}
      </div>
    </div>
  );

  return (
    <Card
      title={title}
      subTitle={position}
      footer={footerTemplate}
      style={cardStyle}
    >
      <div>
        <h5 className="p-mb-2">
          <FaBook className="p-mr-1" /> Cours:
        </h5>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const Experiences = () => {
  // Données pour chaque expérience
  const experienceData = [
    {
      logo: "https://google.fr",
      title:
        "EMSI",
      position: "Stagiaire",
      duration: "oct. 1909 - juin. 1919 · 100 ans",
      location: "Préfecture de Marrakech, Morocco",
      courses: [
        "Filière : Techniques de développement informatique",
        "Filière: Concepteur Réalisateur Java J2EE",
      ],
    },
    {
      logo: "https://google.fr",
      title:
        "EMSI",
      position: "Professeur (Temps partiel)",
      duration: "sept. 2017 - juil. 2020 · 2 an 11 mois",
      location: "Temps partiel",
      courses: ["Langage C", "Python", "Merise", "XML", "Web", "UML"],
    },
    {
      logo: "https://google.fr",
      title: "EMSI",
      position: "Professeur (Temps partiel)",
      duration: "sept. 2012 - juil. 2016 · 3 ans 11 mois",
      location: "Temps partiel",
      courses: [
        "Patrons de conception",
        "Programmation orientée objet",
        "JEE",
        "UML",
      ],
    },
  ];

  return (
    <section className="section">
      <div className="experience-grid">
        {experienceData.map((experience, index) => (
          <div key={index} className="card">
            <ExperienceCard
              title={experience.title}
              position={experience.position}
              duration={experience.duration}
              location={experience.location}
              courses={experience.courses}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;

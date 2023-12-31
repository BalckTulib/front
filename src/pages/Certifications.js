import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Android from "../assets/Android.jpg";
import Data from "../assets/Data.png";
import download from "../assets/download.png";


function CertificationCard(props) {
  const { logo, title, issuer, date, id } = props;
  return (
    <Card className="shadow bg-light mb-4 animated bounceIn">
      <Card.Img className="certification-image" variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{issuer}</span>
          <br />
          <span>Date de délivrance: {date}</span>
          <br />
          <span>Identifiant: {id}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Certifications() {
  const certifications = [
    {
      logo: Android,
      title: "Android App Developpement",
      issuer: "VANDERBILT UNIVERSITY",
      date: "may. 2023",
      id: "000000000000000",
    },
    {
      logo: Data,
      title: "Data Collection and Processing with Python",
      issuer: "UNIVERSITY OF MICHIGAN",
      date: "MAY. 2022",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "Sun Certified Java Programmer",
      issuer: "Oracle",
      date: "juil. 1956",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "Spring Framework",
      issuer: "LearnQuest",
      date: "mai. 2023",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "Spring - Ecosystem and Core",
      issuer: "LearnQuest",
      date: "avr. 2023",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "React Basics",
      issuer: "Meta",
      date: "mars 2023",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "Advanced React",
      issuer: "Meta",
      date: "avr. 2023",
      id: "000000000000000",
    },
    {
      logo: download,
      title: "Spring Data Repositories",
      issuer: "LearnQuest",
      date: "mai. 2023",
      id: "000000000000000",
    },
  
  ];
  const PAGE_SIZE = 3;
  const [activePage, setActivePage] = React.useState(1);

  const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

  const handleClick = (event) => {
    setActivePage(Number(event.target.text));
  };

  const pages = [];

  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={handleClick}
      >
        {number}
      </Pagination.Item>
    );
  }

  const startIndex = (activePage - 1) * PAGE_SIZE;
  const endIndex = activePage * PAGE_SIZE;
  const currentCertifications = certifications.slice(startIndex, endIndex);

  return (
    <Row className="justify-content-center my-3">
        
      {currentCertifications.map((certification, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={4}>
          <CertificationCard {...certification} />
        </Col>
      ))}
      <Row className="my-3">
        <Col>
          <Pagination className="justify-content-center">{pages}</Pagination>
        </Col>
      </Row>
    </Row>
  );
}

export default Certifications;

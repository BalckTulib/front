import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Master",
            etablissement: "Emsi",
            annees: "2019 - 2024",
        },
        {
            diplome: "Walo - El jdida",
            etablissement: "Faculte Bouch3ib doukkali",
            annees: "2018 - 2019",
        },
        {
            diplome: "BAC - Science Physique et Chimie",
            etablissement: "Lycée Azzaytouna, El jadida",
            annees: "2017 - 2018",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;

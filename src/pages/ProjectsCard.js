import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    
    {
        name: "looooooooooooooooooooooooooooooooooooooooooooooooo",
        school: "Ecole Maroccaine",
        link: "https://google.fr"
    },
    {
        name: "hada projet akhor lima3endi mandir bih",
        school: "Ecole Maroccaine",
        link: "https://google.fr"
    },
    {
        name: "hada projet tani",
        school: "Ecole Maroccaine",
        link: "https://www.google.fr"
    }
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card">
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.school && (
                            <Card.Subtitle className="project-school">{project.school}</Card.Subtitle>
                        )}
                        {project.competition && (
                            <Card.Text className="project-competition">{project.competition}</Card.Text>
                        )}
                        <Card.Link href={project.link} className="project-link">
                            Voir le projet
                        </Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>

    );
};

export default ProjectCard;

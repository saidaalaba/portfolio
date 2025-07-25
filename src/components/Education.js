import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Master en Ingénierie Informatique & Analyse des Données",
      period: "Depuis septembre 2024",
      institution: "Faculté des sciences Al Jadida",
      location: "Morocco",
      status: "En cours",
      statusColor: "warning",
      description: "Formation avancée en ingénierie informatique avec spécialisation en analyse des données, machine learning et intelligence artificielle.",
      icon: FaGraduationCap
    },
    {
      degree: "Licence en Système d'Information et Transformation Digitale",
      period: "Septembre 2023 - Juin 2024",
      institution: "Faculté des sciences et techniques Settat",
      location: "Morocco",
      status: "Obtenu",
      statusColor: "success",
      description: "Formation complète en systèmes d'information, transformation digitale et développement d'applications.",
      icon: FaUniversity
    },
    {
      degree: "DEUST en Mathématiques Informatique Physique",
      period: "Septembre 2021 - Juin 2023",
      institution: "Faculté des sciences et techniques Settat",
      location: "Morocco",
      status: "Obtenu",
      statusColor: "success",
      description: "Diplôme d'études universitaires scientifiques et techniques avec focus sur les mathématiques appliquées à l'informatique.",
      icon: FaUniversity
    },
    {
      degree: "Baccalauréat Sciences Physiques",
      period: "Septembre 2020 - Juin 2021",
      institution: "Lycée ELmassira ELkhadra",
      location: "Massa",
      status: "Obtenu",
      statusColor: "success",
      description: "Baccalauréat scientifique avec spécialisation en sciences physiques.",
      icon: FaGraduationCap
    },
  ];

  return (
    <section id="education" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Diplômes et Formations
        </h2>

        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline" data-aos="fade-up">
              {educationData.map((edu, index) => (
                <div key={index} className="timeline-item" data-aos="fade-left" data-aos-delay={index * 100}>
                  <Card className="custom-card">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="d-flex align-items-center">
                          <div className="card-icon me-3" style={{ width: "50px", height: "50px" }}>
                            <edu.icon />
                          </div>
                          <div>
                            <h5 className="card-title text-primary mb-1">{edu.degree}</h5>
                            <h6 className="text-muted mb-0">{edu.institution}</h6>
                          </div>
                        </div>
                        <Badge bg={edu.statusColor} className="fs-6">
                          {edu.status}
                        </Badge>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6">
                          <div className="d-flex align-items-center text-muted mb-2">
                            <FaCalendarAlt className="me-2" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center text-muted mb-2">
                            <FaMapMarkerAlt className="me-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
        </Row>

       
      </Container>
    </section>
  );
};

export default Education;
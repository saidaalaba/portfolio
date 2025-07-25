import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaTasks, FaTools } from "react-icons/fa";

const Experience = () => {
  const technologies = [
    { name: "Laravel", color: "danger", icon: "🔴" },
    { name: "React.js", color: "info", icon: "⚛️" },
    { name: "JavaScript", color: "warning", icon: "🟨" },
    { name: "PHP", color: "primary", icon: "🐘" },
    { name: "MySQL", color: "success", icon: "🗄️" },
    { name: "HTML/CSS", color: "secondary", icon: "🎨" }
  ];

  const achievements = [
    "Développement complet d'une plateforme e-learning",
    "Intégration frontend-backend avec API REST",
    "Gestion des utilisateurs et authentification",
    "Interface responsive et moderne",
    "Gestion du contenu pédagogique dynamique"
  ];

  return (
    <section id="experience" className="section-padding bg-light">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Expérience Professionnelle
        </h2>

        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="custom-card shadow-lg" data-aos="fade-up">
              <Card.Body className="p-4">
                {/* En-tête de l'expérience */}
                <div className="d-flex align-items-center mb-4">
                  <div className="card-icon me-4" style={{ width: "60px", height: "60px" }}>
                    <FaBriefcase />
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="mb-1 text-primary">Stage Full Stack Developer</h3>
                    <h5 className="text-muted mb-2">Ecotaqa Services</h5>
                    <div className="d-flex flex-wrap gap-3">
                      <div className="d-flex align-items-center text-muted">
                        <FaCalendarAlt className="me-2" />
                        <span>Avril 2024 - Juin 2024 (3 mois)</span>
                      </div>
                      <div className="d-flex align-items-center text-muted">
                        <FaMapMarkerAlt className="me-2" />
                        <span>Ait Melloul, Morocco</span>
                      </div>
                    </div>
                  </div>
                  <Badge bg="success" className="fs-6">Stage Validé</Badge>
                </div>

                {/* Mission principale */}
                <div className="mb-4">
                  <h5 className="text-primary mb-3">
                    <FaTasks className="me-2" />
                    Mission Principale
                  </h5>
                  <div className="bg-light p-3 rounded">
                    <p className="mb-0 lead">
                      <strong>Conception et réalisation d'un site web de cours en ligne</strong> utilisant 
                      Laravel pour le backend et React.js pour le frontend. Développement d'une plateforme 
                      complète permettant la gestion des cours, des utilisateurs et du contenu pédagogique.
                    </p>
                  </div>
                </div>

                {/* Réalisations */}
                <div className="mb-4">
                  <h5 className="text-primary mb-3">
                    <FaCode className="me-2" />
                    Réalisations Clés
                  </h5>
                  <Row>
                    {achievements.map((achievement, index) => (
                      <Col md={6} key={index} className="mb-2">
                        <div className="d-flex align-items-center">
                          <span className="text-success me-2">-</span>
                          <span>{achievement}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Technologies utilisées */}
                <div className="mb-4">
                  <h5 className="text-primary mb-3">
                    <FaTools className="me-2" />
                    Technologies Utilisées
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg={tech.color} 
                        className="p-2 fs-6 d-flex align-items-center"
                      >
                        <span className="me-2">{tech.icon}</span>
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Compétences développées */}
                <div className="bg-primary text-white p-3 rounded">
                  <h6 className="mb-2">Compétences Développées</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• Développement Full Stack</li>
                        <li>• Architecture MVC</li>
                        <li>• Intégration API REST</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li>• Gestion de projet</li>
                        <li>• Travail en équipe</li>
                        <li>• Méthodologies Agiles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Section recherche de stage */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <Card className="custom-card border-primary">
              <Card.Body>
                <h4 className="text-primary mb-3">À la recherche d'un stage d'été</h4>
                <p className="lead mb-3">
                  Fort de cette première expérience professionnelle réussie, je recherche activement 
                  un <strong>stage d'été</strong> pour continuer à développer mes compétences techniques 
                  et contribuer à des projets innovants.
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  <Badge bg="outline-primary" className="p-2">Développement Web</Badge>
                  <Badge bg="outline-primary" className="p-2">Analyse de Données</Badge>
                  <Badge bg="outline-primary" className="p-2">Intelligence Artificielle</Badge>
                  <Badge bg="outline-primary" className="p-2">Full Stack</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
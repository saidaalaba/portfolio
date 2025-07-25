import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaMapMarkerAlt, FaBirthdayCake, FaEnvelope, FaLanguage, FaStar } from "react-icons/fa";

const About = () => {
  const personalInfo = [
    { icon: FaUser, label: "Nom", value: "Saida Alaba" },
    { icon: FaBirthdayCake, label: "Date de naissance", value: "21/11/2003" },
    { icon: FaMapMarkerAlt, label: "Localisation", value: "Agadir, Maroc" },
    { icon: FaEnvelope, label: "Email", value: "saidaalaba@gmail.com" },
  ];

  const languages = [
    { 
      name: "Amazighe standard marocain", 
      level: "Langue maternelle",
      progress: 100,
      color: "success"
    },
    { 
      name: "Français", 
      level: "B2 - Utilisateur indépendant (niveau avancé intermédiaire)",
      progress: 85,
      color: "info"
    },
    { 
      name: "Anglais", 
      level: "B2 - Bonne compréhension et expression écrite/orale",
      progress: 80,
      color: "warning"
    },
  ];

  const qualities = [
    { name: "Curieuse", icon: "" },
    { name: "Capacité d'adaptation", icon: "" },
    { name: "Esprit d'équipe", icon: "" }
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          À Propos de Moi
        </h2>

        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <Card className="custom-card mb-4">
              <Card.Body className="text-center">
                <h4 className="mb-3 text-primary">Profil Professionnel</h4>
                <p className="lead">
                  Actuellement étudiante en <strong>Master 1 Ingénierie Informatique et Analyse des Données</strong>, 
                  je suis à la recherche d'un stage d'été qui me permettra de mettre en application mes compétences 
                  techniques à travers des projets concrets.
                </p>
                <p>
                  Passionnée par l'exploitation intelligente des données et dotée de solides connaissances en 
                  développement logiciel, je souhaite intégrer une équipe dynamique afin de contribuer activement 
                  à des projets innovants tout en renforçant mon expérience professionnelle.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={4} data-aos="fade-right">
            <Card className="custom-card mb-4">
              <Card.Body>
                <h4 className="mb-4 text-primary">
                  <FaUser className="me-2" />
                  Informations Personnelles
                </h4>
                {personalInfo.map((info, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div className="card-icon me-3" style={{ width: "40px", height: "40px", fontSize: "1rem" }}>
                      <info.icon />
                    </div>
                    <div>
                      <strong>{info.label}:</strong> 
                      <span className="ms-2">{info.value}</span>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} data-aos="fade-up">
            <Card className="custom-card mb-4">
              <Card.Body>
                <h4 className="mb-4 text-primary">
                  <FaLanguage className="me-2" />
                  Langues
                </h4>
                {languages.map((lang, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong>{lang.name}</strong>
                      <span className={`badge bg-${lang.color}`}>{lang.progress}%</span>
                    </div>
                    <div className="progress mb-2" style={{ height: "8px" }}>
                      <div 
                        className={`progress-bar bg-${lang.color}`}
                        style={{ width: `${lang.progress}%` }}
                      ></div>
                    </div>
                    <small className="text-muted">{lang.level}</small>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} data-aos="fade-left">
            <Card className="custom-card">
              <Card.Body>
                <h4 className="mb-4 text-primary">
                  <FaStar className="me-2" />
                  Qualités Personnelles
                </h4>
                {qualities.map((quality, index) => (
                  <div key={index} className="d-flex align-items-center mb-3 p-3 bg-light rounded">
                    <span className="me-3" style={{ fontSize: "1.5rem" }}>{quality.icon}</span>
                    <span className="fw-bold">{quality.name}</span>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
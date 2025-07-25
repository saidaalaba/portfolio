import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="hero-content">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight-name">Saida Alaba</span>

            </h1>
            <h2 className="hero-subtitle">
              Étudiante en Master Ingénierie Informatique & Analyse des Données
            </h2>
            <p className="hero-description">
              Passionnée par l'exploitation intelligente des données et dotée de solides 
              connaissances en développement logiciel, je recherche un stage d'été pour 
              mettre en application mes compétences techniques à travers des projets concrets.
            </p>
            <div className="hero-buttons">
              <Button variant="light" size="lg" className="me-3 btn-custom" href="#contact">
                <FaEnvelope className="me-2" />
                Me Contacter
              </Button>
              <Button variant="outline-light" size="lg" href="/cv-saida-alaba.pdf" download>
                <FaDownload className="me-2" />
                Télécharger CV
              </Button>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <div className="hero-image">
              <img
                src="/ma photo.jpg"
                alt="Saida Alaba"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaHeart, FaLinkedin, FaGithub, FaTwitter, FaEnvelope,
  FaMapMarkerAlt, FaGraduationCap, FaCode 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "À propos", href: "#about" },
    { name: "Formation", href: "#education" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:saidaalaba@gmail.com",
      title: "Email",
      color: "#ea4335"
    },
    {
      icon: FaLinkedin,
      href: "#",
      title: "LinkedIn",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      href: "#",
      title: "GitHub",
      color: "#333"
    },
    {
      icon: FaTwitter,
      href: "#",
      title: "Twitter",
      color: "#1da1f2"
    }
  ];

  const skills = [
    "React.js", "Node.js", "Java", "Python", "Spring Boot", "Laravel"
  ];

  return (
    <footer className="footer">
      <Container>
        {/* Section principale du footer */}
        <Row className="py-5">
          {/* Colonne profil */}
          <Col lg={4} md={6} className="mb-4">
            <div className="mb-4">
              <h4 className="mb-3">
                <FaGraduationCap className="me-2" />
                Saida Alaba
              </h4>
              <p className="mb-3">
                Étudiante passionnée en <strong>Master Ingénierie Informatique & Analyse des Données</strong>. 
                Spécialisée en développement full-stack et analyse de données.
              </p>
              <div className="d-flex align-items-center mb-2">
                <FaMapMarkerAlt className="me-2 text-warning" />
                <span>Agadir, Maroc</span>
              </div>
              <div className="d-flex align-items-center">
                <FaCode className="me-2 text-info" />
                <span>Disponible pour stage d'été</span>
              </div>
            </div>
          </Col>

          {/* Colonne liens rapides */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="mb-3">Navigation</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href} 
                    className="text-light text-decoration-none"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => e.target.style.color = "#3498db"}
                    onMouseLeave={(e) => e.target.style.color = "white"}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Colonne compétences */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3">Compétences Clés</h5>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="badge bg-secondary p-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <small className="text-muted">
                Et bien d'autres technologies...
              </small>
            </div>
          </Col>

          {/* Colonne contact et réseaux sociaux */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3">Restons en Contact</h5>
            <p className="mb-3">
              Suivez-moi sur les réseaux sociaux ou contactez-moi directement !
            </p>
            <div className="social-links mb-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.title}
                  className="me-3"
                  style={{ 
                    color: "white",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = social.color;
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            <div className="bg-primary p-3 rounded">
              <small>
                <strong>💼 Recherche active :</strong><br />
                Stage d'été en développement web ou data science
              </small>
            </div>
          </Col>
        </Row>

        {/* Ligne de séparation */}
        <hr className="my-4" style={{ borderColor: "#34495e" }} />

        {/* Section copyright */}
        <Row className="py-3">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} <strong>Saida Alaba</strong>. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Fait avec <FaHeart className="text-danger mx-1" /> et React.js
            </p>
          </Col>
        </Row>

        {/* Section informations supplémentaires */}
        <Row className="pt-3 border-top" style={{ borderColor: "#34495e !important" }}>
          <Col className="text-center">
            <small className="text-muted">
              Portfolio développé avec React.js, Bootstrap et beaucoup de passion ✨<br />
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { 
  FaShieldAlt, FaCode, FaDatabase, FaHospital, FaChartBar, 
  FaHome, FaUsers, FaLock, FaCogs, FaGraduationCap 
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Système de Gestion des Utilisateurs – Sécurité des Microservices",
      description: "Conception d'un système sécurisé avec authentification JWT (access/refresh tokens), gestion des rôles (USER, ADMIN), autorisation par endpoint et suivi des actions via logs.",
      icon: FaShieldAlt,
      technologies: ["Spring Boot", "Spring Security", "JWT", "Microservices", "Java"],
      color: "danger",
      category: "Sécurité",
      features: [
        "Authentification JWT avec refresh tokens",
        "Gestion des rôles et permissions",
        "Autorisation par endpoint",
        "Système de logs et audit",
        "Architecture microservices"
      ]
    },
    {
      title: "Application de Gestion des Professeurs et Étudiants – MERN Stack",
      description: "Application web full-stack pour la gestion des enseignants et étudiants. Fonctionnalités : import Excel, génération de cartes professionnelles avec QR code, inscription aux modules, authentification par rôle, espace personnel, gestion des logs.",
      icon: FaGraduationCap,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "QR Code"],
      color: "success",
      category: "Éducation",
      features: [
        "Import de données Excel",
        "Génération de cartes avec QR code",
        "Inscription aux modules",
        "Authentification multi-rôles",
        "Espaces personnels",
        "Système de logs"
      ]
    },
    {
      title: "Gestion de Projet – Location de Logements Étudiants",
      description: "Projet de gestion locative étudiante, avec modélisation fonctionnelle, planification, et conception UX/UI de l'application.",
      icon: FaHome,
      technologies: ["UML", "MERISE", "UX/UI Design", "Gestion de projet"],
      color: "info",
      category: "Gestion",
      features: [
        "Modélisation fonctionnelle",
        "Planification de projet",
        "Conception UX/UI",
        "Gestion locative",
        "Interface étudiante"
      ]
    },
    {
      title: "Système de Gestion d'un CHU – Java JEE & Design Patterns",
      description: "Développement d'un système de gestion hospitalière modulaire avec Java JEE, intégrant plusieurs patrons de conception (Singleton, Fabrique, Adaptateur, Observateur). Architecture MVC, base de données relationnelle, gestion des bâtiments, services, personnels et patients.",
      icon: FaHospital,
      technologies: ["Java JEE", "Design Patterns", "MVC", "Base de données", "MySQL"],
      color: "warning",
      category: "Santé",
      features: [
        "Patterns de conception avancés",
        "Architecture MVC",
        "Gestion multi-entités",
        "Base de données relationnelle",
        "Interface modulaire"
      ]
    },
    {
      title: "Analyse des Accidents Routiers aux USA – Big Data",
      description: "Projet d'analyse de données à grande échelle (dataset US-Accidents) avec Spark et Hive sur HDFS. Nettoyage, traitement batch/streaming, extraction d'insights et visualisation via Tableau/QlikView.",
      icon: FaChartBar,
      technologies: ["Apache Spark", "Hive", "HDFS", "Tableau", "QlikView", "Big Data"],
      color: "primary",
      category: "Data Science",
      features: [
        "Traitement Big Data",
        "Analyse batch et streaming",
        "Nettoyage de données",
        "Extraction d'insights",
        "Visualisations avancées"
      ]
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Projets Académiques
        </h2>

        <Row className="mb-4">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <p className="lead text-muted">
              Découvrez mes projets académiques qui démontrent ma maîtrise des technologies modernes 
              et ma capacité à résoudre des problèmes complexes dans différents domaines.
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={6} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="custom-card h-100">
                <Card.Body className="d-flex flex-column">
                  {/* En-tête du projet */}
                  <div className="d-flex align-items-center mb-3">
                    <div className={`card-icon me-3 bg-${project.color}`} style={{ width: "50px", height: "50px" }}>
                      <project.icon />
                    </div>
                    <div className="flex-grow-1">
                      <Badge bg={project.color} className="mb-2">{project.category}</Badge>
                      <h5 className="card-title mb-0">{project.title}</h5>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="card-text mb-3">{project.description}</p>

                  {/* Fonctionnalités clés */}
                  <div className="mb-3">
                    <h6 className="text-muted mb-2">🎯 Fonctionnalités clés :</h6>
                    <div className="row">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="col-12 mb-1">
                          <small className="d-flex align-items-center">
                            <span className="text-success me-2">•</span>
                            {feature}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <h6 className="text-muted mb-2">🛠️ Technologies :</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          bg={project.color} 
                          className="mb-1" 
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
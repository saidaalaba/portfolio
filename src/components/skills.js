import { Container, Row, Col } from "react-bootstrap"
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaServer,
  FaJava,
  FaJs,
  FaPython,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaChartBar, // ✅ Pour Power BI
} from "react-icons/fa"
import { SiSpringboot, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si"

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: FaCode,
      skills: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "Python", icon: FaPython, color: "#3776ab" },
        { name: "PHP", icon: FaPhp, color: "#777bb4" },
        { name: "C", icon: FaCode, color: "#00599c" },
        { name: "PL/SQL", icon: FaDatabase, color: "#336791" },
      ],
    },
    {
      title: "Développement Web",
      icon: FaLaptopCode,
      skills: [
        { name: "React.js", icon: FaReact, color: "#61dafb" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: FaServer, color: "#000000" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
        { name: "Laravel", icon: FaPhp, color: "#ff2d20" },
        { name: "HTML5/CSS3", icon: FaCode, color: "#e34f26" },
      ],
    },
    {
      title: "Bases de Données",
      icon: FaDatabase,
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479a1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      ],
    },
    {
      title: "Outils & Environnements",
      icon: FaTools,
      skills: [
        { name: "VS Code", icon: FaCode, color: "#007acc" },
        { name: "IntelliJ IDEA", icon: FaCode, color: "#000000" },
        { name: "Git & GitHub", icon: FaGitAlt, color: "#f05032" },
        { name: "Power BI", icon: FaChartBar, color: "#f2c811" }, // ✅ CORRIGÉ
        { name: "Postman", icon: FaTools, color: "#ff6c37" },
        { name: "Android Studio", icon: FaCode, color: "#3ddc84" },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-light">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Compétences Techniques
        </h2>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
            <div className="d-flex align-items-center mb-4">
              <div className="card-icon me-3">
                <category.icon />
              </div>
              <h4 className="mb-0">{category.title}</h4>
            </div>

            <Row>
              {category.skills.map((skill, skillIndex) => (
                <Col lg={2} md={3} sm={4} xs={6} key={skillIndex} className="mb-3">
                  <div className="skill-item text-center">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <h6 className="mb-0">{skill.name}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        <Row className="mt-5">
          <Col lg={12} data-aos="fade-up">
            <div className="custom-card">
              <div className="card-body text-center">
                <h4 className="mb-3">Modélisation et Architecture</h4>
                <div className="d-flex justify-content-center flex-wrap">
                  <span className="badge bg-primary me-2 mb-2 p-2">UML</span>
                  <span className="badge bg-primary me-2 mb-2 p-2">MERISE</span>
                  <span className="badge bg-primary me-2 mb-2 p-2">Architecture MVC</span>
                  <span className="badge bg-primary me-2 mb-2 p-2">Design Patterns</span>
                  <span className="badge bg-primary me-2 mb-2 p-2">Microservices</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills

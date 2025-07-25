import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { 
  FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaTwitter, FaPhone, FaUser, FaPaperPlane 
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi d'email (remplacer par EmailJS ou autre service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setAlertType("success");
      setShowAlert(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setAlertType("danger");
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "saidaalaba@gmail.com",
      link: "mailto:saidaalaba@gmail.com",
      color: "primary"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Localisation",
      value: "Agadir, Maroc",
      link: "#",
      color: "success"
    },
    {
      icon: FaUser,
      title: "Statut",
      value: "Disponible pour stage",
      link: "#",
      color: "warning"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "#",
      color: "#0077b5"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "#",
      color: "#333"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "#",
      color: "#1da1f2"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <Container>
        <h2 className="section-title" data-aos="fade-up">
          Contactez-moi
        </h2>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <p className="lead text-muted">
              Vous avez un projet intéressant ou une opportunité de stage ? 
              N'hésitez pas à me contacter ! Je serais ravie de discuter avec vous.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Informations de contact */}
          <Col lg={4} className="mb-4">
            <div data-aos="fade-right">
              <h4 className="mb-4">📞 Informations de Contact</h4>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="custom-card mb-3">
                  <Card.Body className="text-center">
                    <div className={`card-icon bg-${info.color} mb-3`}>
                      <info.icon />
                    </div>
                    <h6 className="mb-2">{info.title}</h6>
                    <p className="text-muted mb-0">
                      {info.link.startsWith('mailto:') ? (
                        <a href={info.link} className="text-decoration-none">
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </Card.Body>
                </Card>
              ))}

              {/* Réseaux sociaux */}
              <Card className="custom-card">
                <Card.Body className="text-center">
                  <h6 className="mb-3">🌐 Réseaux Sociaux</h6>
                  <div className="d-flex justify-content-center gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="btn btn-outline-primary btn-sm rounded-circle"
                        style={{ 
                          width: "45px", 
                          height: "45px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                        title={social.name}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Formulaire de contact */}
          <Col lg={8}>
            <div data-aos="fade-left">
              {showAlert && (
                <Alert 
                  variant={alertType} 
                  className="mb-4"
                  dismissible 
                  onClose={() => setShowAlert(false)}
                >
                  {alertType === "success" ? (
                    <>
                      <strong>✅ Message envoyé !</strong> Merci pour votre message. 
                      Je vous répondrai dans les plus brefs délais.
                    </>
                  ) : (
                    <>
                      <strong>❌ Erreur !</strong> Une erreur s'est produite lors de l'envoi. 
                      Veuillez réessayer.
                    </>
                  )}
                </Alert>
              )}

              <Card className="custom-card">
                <Card.Body className="p-4">
                  <h4 className="mb-4">💌 Envoyez-moi un message</h4>
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <FaUser className="me-2" />
                            Nom complet *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Votre nom complet"
                            disabled={isSubmitting}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>
                            <FaEnvelope className="me-2" />
                            Email *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre.email@exemple.com"
                            disabled={isSubmitting}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Sujet *</Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="stage">Opportunité de stage</option>
                        <option value="projet">Collaboration sur un projet</option>
                        <option value="emploi">Offre d'emploi</option>
                        <option value="freelance">Mission freelance</option>
                        <option value="autre">Autre</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre projet, vos besoins ou votre proposition..."
                        disabled={isSubmitting}
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="btn-custom px-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Envoyer le Message
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Section disponibilité */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <Card className="custom-card bg-primary text-white">
              <Card.Body className="text-center">
                <h4 className="mb-3">🎯 Disponibilité</h4>
                <p className="lead mb-3">
                  Actuellement en recherche active d'un <strong>stage d'été</strong> 
                  dans le domaine du développement web ou de l'analyse de données.
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  <span className="badge bg-light text-primary p-2">Disponible immédiatement</span>
                  <span className="badge bg-light text-primary p-2">Stage 2-6 mois</span>
                  <span className="badge bg-light text-primary p-2">Télétravail possible</span>
                  <span className="badge bg-light text-primary p-2">Mobilité Maroc</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
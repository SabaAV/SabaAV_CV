import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  const scrollToSection = (SectionName) => {
    // Находим нужный элемент по ID
    const section = document.querySelector(SectionName);
    // Применяем плавный скролл
    section.scrollIntoView({
      behavior: "smooth", // Плавная анимация
      block: "start", // Скроллит к началу секции
    });
  };

  return (
    <Navbar expand="lg" variant="light" sticky="top" className="custom-navbar">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="custom-nav">
            <Nav.Link onClick={() => scrollToSection("header")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection(".AboutDiv")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(".AwardsDiv")}>
              Awards
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(".ЕxperiencesDiv")}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(".ContactsDiv")}>
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

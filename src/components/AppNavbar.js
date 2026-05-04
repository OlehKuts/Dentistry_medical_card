import { fullNameCutter } from "../utils/utils";
import "./AppNavbar.scope.scss";

import { NavLink } from "react-router";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  FileEarmarkRuledFill,
  GearFill,
  LayoutTextWindow,
  CardChecklist,
  MotherboardFill,
  FileMedicalFill,
  PersonFillAdd,
  PersonVcardFill,
  FileEarmarkPersonFill,
} from "react-bootstrap-icons";

export const AppNavbar = ({ currentPatientName = "Карта" }) => {
  return (
    <>
      <div className="bootstrap-scope">
        <Navbar
          data-bs-theme="dark"
          variant="dark"
          className="bg-success text-white appNavbar mb-3"
          sticky="top"
        >
          <Container>
            <Navbar.Brand className="mb-1">
              <FileMedicalFill
                color="wheat"
                size={20}
                className="align-top"
                style={{ marginRight: "5px" }}
              />
              <span className="brandText">Dentistry medical cards</span>
            </Navbar.Brand>
            <Nav className="me-auto" style={{ margin: "0 10rem 0 4rem" }}>
              <Nav.Link as={NavLink} to="/">
                <PersonFillAdd className="navbarIcons" size={20} />
                Новий пацієнт
              </Nav.Link>
              <Nav.Link as={NavLink} to="/patientList">
                <LayoutTextWindow className="navbarIcons" size={20} />
                Список пацієнтів
              </Nav.Link>
              <Nav.Link as={NavLink} to="/patientCard">
                <FileEarmarkPersonFill className="navbarIcons" size={20} />
                {fullNameCutter(currentPatientName)}
              </Nav.Link>
              <Nav.Link as={NavLink} to="/settings">
                <GearFill size={20} className="navbarIcons" />
                Налаштування
              </Nav.Link>
              <Nav.Link as={NavLink} to="/stats">
                <MotherboardFill size={20} className="navbarIcons" />
                Статистика
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

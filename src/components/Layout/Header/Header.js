import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'gatsby';
import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

import {ButtonPrimary} from '#root/components/shared/Button';
import classes from '#root/data/classes';
import {mediaBreakpointUp} from '#root/helpers/responsive';

const Logo = styled.img`
  width: 150px;

  ${mediaBreakpointUp('lg')} {
    width: 150px;
  }
`;

const HeaderWrap = styled.header`
  .navbar-light {
    .dropdown-item {
      &:active {
        background-color: #f8f9fa;
      }
    }
    .dropdown-item,
    .nav-link {
      color: ${props => props.theme.nero};
      font-weight: 500;
      text-transform: none;

      &:hover {
        color: ${props => props.theme.barleyCorn};
      }
    }
  }

  .btn {
    font-size: 0.8em;
    font-weight: 700;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <Navbar collapseOnSelect className="py-0" expand="lg" bg="light" variant="light">
          <Container>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="tel:7817906462">
                  <FontAwesomeIcon className="mr-1" icon={faPhoneAlt} size="xs" />
                  781-790-6462
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            {/* <Logo src="/img/dark_logo_transparent_background.png" /> */}
            <Logo src="/img/logo.png" />
          </Link>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ml-auto">
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
              <NavDropdown id="main-nav-class-dropdown" title="Education & Training">
                <Link className="dropdown-item" to="/get-firearms-license-massachusetts">
                  Massachusetts Firearms License
                </Link>
                {classes.map(item => (
                  <Link key={item.slug} className="dropdown-item" to={`/${item.slug}`}>
                    {item.title}
                  </Link>
                ))}
              </NavDropdown>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/gallery">
                Photos
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <ButtonPrimary
                center
                vCenter
                as="a"
                className="btn-lg ml-lg-4"
                href="https://app.acuityscheduling.com/schedule.php?owner=19638832"
              >
                Sign Up For A Class
              </ButtonPrimary>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrap>
  );
};

export default Header;

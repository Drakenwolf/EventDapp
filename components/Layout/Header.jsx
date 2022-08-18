import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 10%;
  height: 5rem;
  background-color: #202020;
`;

const LogoContainer = styled.div`
  font-size: 1.5rem;
  color: white;
  font-family: "Fira", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94fdfd;
`;

const StyledLink = styled.a`
  text-decoration: none !important;
  color: #94fdfd !important;
`;

const StyledLinkNav = styled(StyledLink)`
  font-size: 1rem;
`;

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Link href="/">
          <StyledLink>NextEvents</StyledLink>
        </Link>
      </LogoContainer>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <StyledLinkNav>Browse All Events</StyledLinkNav>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;

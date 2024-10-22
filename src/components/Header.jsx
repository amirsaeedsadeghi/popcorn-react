import styled from "styled-components";
import Search from "./Search";
import BrandLogo from "./BrandLogo";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--primary-color);
  border-radius: 1rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem 3rem;
`;

function Header() {
  return (
    <StyledHeader>
      <BrandLogo />
      <Search />
    </StyledHeader>
  );
}

export default Header;

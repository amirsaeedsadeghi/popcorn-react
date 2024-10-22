import styled from "styled-components";

const StyledBrandLogo = styled.h1`
  flex: 1 1 auto;
  @media screen and (max-width: 548px) {
    text-align: center;
  }
`;
function BrandLogo() {
  return <StyledBrandLogo>🍿 Popcorn</StyledBrandLogo>;
}

export default BrandLogo;

import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
  gap: 2rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <h1>Page Not Found 🤔</h1>
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

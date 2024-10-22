import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSearch = styled.div`
  flex: 1 1 auto;
`;
const Input = styled.input`
  padding: 0.75rem 1rem;
  border: transparent;
  border-radius: var(--radius-light);
  color: var(--text-color);
  background: var(--primary-light-color);
  transition: var(--transition);
  outline: transparent;
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: var(--text-color);
  }

  &:focus {
    box-shadow: var(--shadow-light);
    transform: translateY(-2px);
  }
`;

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParam = searchParams.get("title") || "";

  function handleChange(e) {
    if (searchParams.get("page")) searchParams.set("page", 1);
    searchParams.set("title", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <StyledSearch>
      <form action="#">
        <Input
          placeholder="Search movies ..."
          onChange={handleChange}
          value={currentParam}
        />
      </form>
    </StyledSearch>
  );
}

export default Search;

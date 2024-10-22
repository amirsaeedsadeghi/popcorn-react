import PropTypes from "prop-types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

Pagination.propTypes = {
  count: PropTypes.number,
};

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.825rem;
    margin-left: 0.6rem;

    & span {
      font-weight: 400;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--primary-light-color)" : "var(--grey-light-color)"};
  color: ${(props) => (props.active ? "var(--grey-dark-color)" : "inherit")};
  border: none;
  border-radius: var(--radius);
  font-weight: 500;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.6rem;
    width: 1.6rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--primary-light-color);
    color: var(--grey-dark-color);
  }
  @media screen and (max-width: 480px) {
    font-weight: 450;
    font-size: 0.825rem;
    & svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

function Pagination({ count }) {
  const pageRange = 20;
  const [searchParams, setSearchParams] = useSearchParams();
  const lastPage = Math.ceil(count / pageRange);
  const currentPage = Number(searchParams.get("page")) || 1;

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function handleNext() {
    const next = currentPage === lastPage ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  if (count <= pageRange) return null;
  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * pageRange + 1}</span> to{" "}
        <span>
          {currentPage === lastPage ? count : pageRange * currentPage}
        </span>{" "}
        of <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={handleNext}
          disabled={currentPage === lastPage}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
